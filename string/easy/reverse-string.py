"""
Problem: Reverse String
Difficulty: Easy
Source: https://leetcode.com/problems/reverse-string/

Description:
Given a string s, reverse it in place.
Use two pointers starting at both ends of the string and swap characters, moving the
pointers toward the middle until they meet.

Time Complexity: O(n) — each character is visited once
Space Complexity: O(n) for the list conversion of s
"""

def reverse(s: str) -> str:
    s = list(s)
    i = 0
    j = len(s) - 1
    while i < j:
        temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i += 1
        j -= 1
    return ''.join(s)

# Example usage:
result = reverse("hello")
print(result) 