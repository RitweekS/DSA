"""
Problem: Find the Index of the First Occurrence in a String
Difficulty: Easy
Source: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

Description:
Given two strings haystack and needle, return the index of the first occurrence
of needle in haystack, or -1 if needle is not part of haystack. Slide over
haystack, and whenever the current character matches needle's first character,
compare the equal-length substring against needle directly.

Time Complexity: O(n*m) — n = len(haystack), m = len(needle), worst case substring compare at each position
Space Complexity: O(m) — substring slice created per match attempt
"""
def strStr(haystack: str, needle: str) -> int:

    for i,ch in enumerate(haystack):
        if ch == needle[0]:
            sub_str = haystack[i:len(needle)+i]
            if sub_str == needle:
                return i
            
    return -1
        
        
haystack = "leetcode"
needle = "code"
print(strStr(haystack=haystack,needle=needle))