"""
Problem: Palindromic Substrings
Difficulty: Medium
Source: https://leetcode.com/problems/palindromic-substrings/

Description:
Given a string s, return the number of palindromic substrings in it. A substring is
counted once for every distinct start/end position, even if the same substring
occurs multiple times.
Brute force checks every substring for the palindrome property using two pointers.

Time Complexity: O(n^3) — O(n^2) substrings, each checked in O(n)
Space Complexity: O(n) for the substring slices
"""

def check_P(sub_str):
    i = 0
    j = len(sub_str) - 1
    
    while(i<=j):
        if sub_str[i]==sub_str[j]:
            i += 1
            j -= 1
        else:
            return False
    
    return True

def countSubstrings(s: str) -> int:
    str_len = len(s)
    count = len(s)
    sub_str_count = 2
    for i in range(2,str_len+1):
        start = 0
        while(start+i<=str_len):
            slice_txt = s[start:start+i]
            
            print("slice_txt",slice_txt)
            if check_P(slice_txt):
                count += 1
            
            start += 1
    
    start = 0
    while(sub_str_count<=str_len):
        sub_str = s[start:sub_str_count]
        if check_P(sub_str):
            count += 1
    
    return count
            
        

s = "aaa"
print(countSubstrings(s))