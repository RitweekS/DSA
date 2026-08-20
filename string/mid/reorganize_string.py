"""
Problem: Reorganize String
Difficulty: Medium
Source: https://leetcode.com/problems/reorganize-string/

Description:
Given a string s, rearrange its characters so no two adjacent characters are
the same, or return "" if impossible. Impossible when the max-frequency
character's count exceeds (n+1)//2. Otherwise place the most frequent
character at every other even index first, then fill remaining characters
into the leftover even and odd slots.

Time Complexity: O(n) — bounded work over string length and fixed alphabet
Space Complexity: O(n) — output array plus frequency counter
"""
from collections import Counter
def reorganize_string(s:str)-> str:
    n = len(s)
    freq = Counter(s)
    
    # char with max freq
    max_char = max(freq,key=freq.get)
    
    # not possible case
    if (n+1)//2 < freq[max_char]:
        return ""
    
    ans = [""] * n
    index = 0
    
    while freq[max_char] > 0:
        ans[index] = max_char
        freq[max_char] -= 1
        index += 2
    
    
    for ch in freq:
        while freq[ch]>0:
            if index>=n:
                index = 1
                
            ans[index] = ch
            freq[ch] -= 1
            index += 2
    
    
    return "".join(ans)

s = "aaab"
print(reorganize_string(s))


    