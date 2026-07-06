"""
Problem: Valid Palindrome II
Difficulty: Easy
Source: https://leetcode.com/problems/valid-palindrome-ii/

Description:
Given a string s, return true if it can be made a palindrome by removing at most one
character.
Use two pointers from both ends: while characters match, move inward. On the first
mismatch, try skipping either the left or the right character (one removal) and check
if the remaining substring is a palindrome.

Time Complexity: O(n) — each pointer walk over the string is linear
Space Complexity: O(n) for the list conversion of s
"""
def validPalindrome(s: str) -> bool:
    s = list(s)
    is_palindrome = True
    i = 0
    j = len(s) - 1
    remove_count = 0 
    while i<=j:
        if s[i] == s[j]:
            i += 1
            j -= 1
        elif s[i+1] == s[j] and remove_count==0:
            i += 1
            remove_count  += 1
        elif s[j-1] == s[i] and remove_count==0:
            j -= 1
            remove_count  += 1
        else:
            is_palindrome = False
            break
                
    return is_palindrome

s = "ebcbbececabbacecbbcbe"
print(validPalindrome(s))