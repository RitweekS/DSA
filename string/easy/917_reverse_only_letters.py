"""
Problem: Reverse Only Letters
Difficulty: Easy
Source: https://leetcode.com/problems/reverse-only-letters/

Description:
Given a string s, reverse only the letters in it while leaving all non-letter characters
(digits, symbols, etc.) in their original positions, then return the result.
Use two pointers from both ends: skip past non-letter characters on either side, and when
both point at letters, swap them and move both pointers inward.

Time Complexity: O(n) — each pointer traverses the string once
Space Complexity: O(n) for the mutable list copy of s
"""
def reverseOnlyLetters(s: str) -> str:
    i = 0
    j = len(s) - 1
    
    reverse = list(s)
    
    while(i<j):
        if s[i].isalpha() and s[j].isalpha():
            temp = reverse[i]
            reverse[i] = reverse[j]
            reverse[j] = temp
            i += 1
            j -= 1
        elif not s[i].isalpha():
            i += 1
        else:
            j -= 1
            
    return "".join(reverse)


s = "Test1ng-Leet=code-Q!"
print(reverseOnlyLetters(s))