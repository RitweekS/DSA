"""
DSA Practice → Google Sheets Sync
----------------------------------
Setup:
  1. pip install google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
  2. Go to https://console.cloud.google.com/
  3. Create a project → Enable "Google Sheets API"
  4. Go to APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID
  5. Application type: Desktop App → Download JSON → rename to credentials.json
  6. Place credentials.json in the same folder as this script
  7. Set SHEET_ID below (from your Google Sheet URL)
  8. Run: python sync_to_sheets.py
"""

import re
from pathlib import Path
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

# ─── CONFIG ──────────────────────────────────────────────────────────────────
SHEET_ID = "1Csgbl1cnesPA55jHpmYHRVDr-PnlEsskLl8RnrIDUgk"   # from the URL: /d/<THIS_PART>/edit
SHEET_TAB = "Sheet1"                      # change if your tab has a different name
REPO_ROOT = Path(__file__).parent
SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
CREDS_FILE = REPO_ROOT / "credentials.json"
TOKEN_FILE = REPO_ROOT / "token.json"
GITHUB_REPO = "https://github.com/RitweekS/DSA"
GITHUB_BRANCH = "main"

# Columns: S.NO | CONCEPTS | DIFFICULTY | QUESTIONS | LINK | SOLUTION
HEADER = ["S.NO", "CONCEPTS", "DIFFICULTY", "QUESTIONS", "LINK", "SOLUTION"]
# ─────────────────────────────────────────────────────────────────────────────


def get_sheets_service():
    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(str(CREDS_FILE), SCOPES)
            creds = flow.run_local_server(port=0)
        with open(TOKEN_FILE, "w") as f:
            f.write(creds.to_json())
    return build("sheets", "v4", credentials=creds)


def parse_ts_file(filepath: Path) -> dict | None:
    content = filepath.read_text(encoding="utf-8")

    problem_match = re.search(r"\*\s*(?:Problem|Algorithm):\s*(.+)", content)
    difficulty_match = re.search(r"\*\s*Difficulty:\s*(.+)", content)
    leetcode_match = re.search(r"LeetCode\s+(\d+)", content)
    gfg_match = re.search(r"(?i)this is a GFG problem", content)

    if not problem_match:
        return None

    problem_name = problem_match.group(1).strip()

    raw_difficulty = difficulty_match.group(1).strip() if difficulty_match else "Unknown"
    difficulty_map = {"easy": "Easy", "medium": "Mid", "hard": "Hard"}
    difficulty = difficulty_map.get(raw_difficulty.lower(), raw_difficulty)

    # Build link
    link = ""
    if leetcode_match:
        slug = re.sub(r"[^a-z0-9]+", "-", problem_name.lower()).strip("-")
        link = f"https://leetcode.com/problems/{slug}/"
    elif gfg_match or "gfg" in filepath.name.lower():
        slug = re.sub(r"[^a-z0-9]+", "-", problem_name.lower()).strip("-")
        link = f"https://www.geeksforgeeks.org/problems/{slug}/"

    # Concept: top-level folder, with sorting subfolder flattened
    relative_path = filepath.relative_to(REPO_ROOT)
    parts = relative_path.parts
    concept = parts[0].replace("-", " ").title()  # e.g. "Binary Search", "Array", "Sorting"

    github_url = f"{GITHUB_REPO}/blob/{GITHUB_BRANCH}/{relative_path.as_posix()}"

    return {
        "concept": concept,
        "difficulty": difficulty,
        "question": problem_name,
        "link": link,
        "github_url": github_url,
    }


def scan_repo() -> list[dict]:
    problems = []
    for ts_file in sorted(REPO_ROOT.rglob("*.ts")):
        result = parse_ts_file(ts_file)
        if result:
            problems.append(result)
    return problems


def get_existing_questions(service) -> set[str]:
    """Return set of question names already in the sheet (column D, lowercase)."""
    result = (
        service.spreadsheets()
        .values()
        .get(spreadsheetId=SHEET_ID, range=f"{SHEET_TAB}!D:D")
        .execute()
    )
    rows = result.get("values", [])
    return {row[0].strip().lower() for row in rows if row}


def ensure_header(service, existing_rows: list):
    if not existing_rows or existing_rows[0] != HEADER:
        service.spreadsheets().values().update(
            spreadsheetId=SHEET_ID,
            range=f"{SHEET_TAB}!A1",
            valueInputOption="RAW",
            body={"values": [HEADER]},
        ).execute()
        print("Header row written.")


def get_next_sno(service) -> int:
    result = (
        service.spreadsheets()
        .values()
        .get(spreadsheetId=SHEET_ID, range=f"{SHEET_TAB}!A:A")
        .execute()
    )
    rows = result.get("values", [])
    numeric = [r[0] for r in rows if r and r[0].isdigit()]
    return len(numeric) + 1


def sync(problems: list[dict], service):
    # Read full sheet to check existing questions and their solution cells
    result = (
        service.spreadsheets()
        .values()
        .get(spreadsheetId=SHEET_ID, range=f"{SHEET_TAB}!A:F")
        .execute()
    )
    all_rows = result.get("values", [])
    ensure_header(service, all_rows)

    # Build a map: question name (lowercase) → sheet row index (1-based)
    question_to_row = {}
    for i, row in enumerate(all_rows):
        if len(row) >= 4 and row[3].strip():
            question_to_row[row[3].strip().lower()] = i + 1  # 1-based row number

    # Build a map of questions with an empty SOLUTION column (column F)
    missing_solution = {}
    for i, row in enumerate(all_rows):
        if len(row) >= 4 and row[3].strip():
            solution_val = row[5].strip() if len(row) >= 6 else ""
            if not solution_val:
                missing_solution[row[3].strip().lower()] = i + 1

    # Build lookup: question name → github_url
    problem_map = {p["question"].lower(): p for p in problems}

    new_rows = []
    updated = 0
    sno = get_next_sno(service)

    # Update SOLUTION for existing rows that are missing it
    for q_lower, sheet_row in missing_solution.items():
        if q_lower in problem_map:
            cell = f"{SHEET_TAB}!F{sheet_row}"
            service.spreadsheets().values().update(
                spreadsheetId=SHEET_ID,
                range=cell,
                valueInputOption="USER_ENTERED",
                body={"values": [[problem_map[q_lower]["github_url"]]]},
            ).execute()
            updated += 1

    # Append new problems not yet in the sheet
    existing = set(question_to_row.keys())
    for p in problems:
        if p["question"].lower() in existing:
            continue
        new_rows.append([sno, p["concept"], p["difficulty"], p["question"], p["link"], p["github_url"]])
        sno += 1

    if new_rows:
        service.spreadsheets().values().append(
            spreadsheetId=SHEET_ID,
            range=f"{SHEET_TAB}!A:F",
            valueInputOption="USER_ENTERED",
            insertDataOption="INSERT_ROWS",
            body={"values": new_rows},
        ).execute()

    print(f"Added {len(new_rows)} new problem(s). Updated {updated} solution link(s).")
    if not new_rows and not updated:
        print("Sheet is already up to date.")


def main():
    if SHEET_ID == "YOUR_GOOGLE_SHEET_ID_HERE":
        print("ERROR: Set your SHEET_ID in the script before running.")
        return

    if not CREDS_FILE.exists():
        print("ERROR: credentials.json not found. See setup instructions at the top of this file.")
        return

    print("Scanning repo for problems...")
    problems = scan_repo()
    print(f"Found {len(problems)} problems in repo.")

    print("Connecting to Google Sheets...")
    service = get_sheets_service()

    sync(problems, service)


if __name__ == "__main__":
    main()
