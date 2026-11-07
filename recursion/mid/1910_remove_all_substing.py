def removeOccurrences(s: str, part: str, start: int) -> str:

    # Base case
    if start >= len(s) or len(part) == 0:
        return s

    if s[start:start + len(part)] == part:
        s = s[:start] + s[start + len(part):]
        start = max(0, start - len(part) + 1)
        return removeOccurrences(s, part, start)

    return removeOccurrences(s, part, start + 1)


s = "axxxxyyyyb"
part = "xy"

print(removeOccurrences(s, part, 0))