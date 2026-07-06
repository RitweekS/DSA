"""
Problem: Remove All Occurrences of a Substring
Difficulty: Medium
Source: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

Description:
Given two strings s and part, repeatedly remove the leftmost occurrence of part from s
until it no longer occurs, then return the resulting string.
Build the result on a stack: push characters from s one at a time, and whenever the top
of the stack ends with part, pop those characters off instead of scanning the whole
string again.

Time Complexity: O(n * m) — n pushes, each possibly comparing up to m characters (part length)
Space Complexity: O(n) for the stack
"""
def removeOccurrences( s: str, part: str) -> str:
        stack = []
        plen = len(part)
        for c in s:
            stack.append(c)
            if len(stack) >= plen and "".join(stack[-plen:]) == part:
                del stack[-plen:]
        return "".join(stack)

s = "axxxxyyyyb"
part = "xy"

print(removeOccurrences(s,part))