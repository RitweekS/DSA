"""
Problem: Longest Palindromic Substring
Difficulty: Medium
Source: https://leetcode.com/problems/longest-palindromic-substring/

Description:
Given a string s, return the longest palindromic substring in s. Use expand
around center: for every index, expand outward once treating it as an odd-length
center and once treating it and its neighbor as an even-length center, keeping
track of the longest palindrome seen.

Time Complexity: O(n^2) — n centers, each expansion up to O(n)
Space Complexity: O(1) — only pointers and the current best substring tracked
"""
def longestPalindrome(s: str) -> str:
    def is_palindrome(s:str,left:int,right:int)->str:
        while left>=0 and right<len(s) and s[left] == s[right]:
           left -= 1
           right += 1
        
        return s[left+1:right]
        
    ans = ""
    
    for i in range(len(s)):
        odd = is_palindrome(s,i,i)
        
        if len(ans)<len(odd):
            ans = odd
        
        even = is_palindrome(s,i,i+1)
        if len(ans)<len(even):
            ans = even
        
    return ans
                    
s = "babad"       
print(longestPalindrome(s))