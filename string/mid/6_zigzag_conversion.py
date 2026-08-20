"""
Problem: Zigzag Conversion
Difficulty: Medium
Source: https://leetcode.com/problems/zigzag-conversion/

Description:
Given a string s, write it in a zigzag pattern across numRows rows, then read
it row by row and return the result. Track a current row and a direction flag,
appending each character to its row's buffer and flipping direction whenever
the top or bottom row is hit, then concatenate all row buffers.

Time Complexity: O(n) — single pass over the string
Space Complexity: O(n) — row buffers hold every character of s
"""
from typing import List

def convert(s: str, numRows: int) -> str:
    if numRows == 1 or numRows >= len(s):
        return s

    rows = [""] * numRows

    current_row = 0
    going_down = False

    for ch in s:
        rows[current_row] += ch

        if current_row == 0 or current_row == numRows - 1:
            going_down = not going_down

        if going_down:
            current_row += 1
        else:
            current_row -= 1

    return "".join(rows)

s = "PAYPALISHIRING"
numRows = 3
print(convert(s=s, numRows=numRows))