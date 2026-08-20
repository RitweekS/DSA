"""
Problem: String to Integer (atoi)
Difficulty: Medium
Source: https://leetcode.com/problems/string-to-integer-atoi/

Description:
Implement atoi: skip leading whitespace, read an optional sign, then consume
digits building the number, stopping at the first non-digit character. Clamp
the final result to the 32-bit signed integer range [INT_MIN, INT_MAX].

Time Complexity: O(n) — single pass over the string
Space Complexity: O(1) — only a few scalar variables tracked
"""
def myAtoi(s: str) -> int:
    INT_MIN = -2**31
    INT_MAX = 2**31 - 1
    
    num = 0
    i = 0
    sign = 1
    
    if len(s)==0:
        return 0
    
    while(i < len(s) and s[i] == ' '):
        i += 1
    
    if i<len(s) and (s[i]=="-" or s[i]=="+"):
        if s[i]=="-":
            sign = -1
        else:
            sign = 1
        
        i += 1
    
    while i<len(s) and s[i].isdigit():
        
        digit = ord(s[i]) - ord('0')
        num = num*10 + digit
        i += 1
    
    num = num*sign
    
    if num < INT_MIN:
        return INT_MIN

    if num > INT_MAX:
        return INT_MAX

    
    return num

s = ""
print(myAtoi(s))