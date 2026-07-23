"""
Problem: Longest Common Prefix
Difficulty: Easy
Source: https://leetcode.com/problems/longest-common-prefix/

Description:
Given an array of strings, find the longest common prefix shared by all of them; return
an empty string if there is none.
Walk the first string character by character, and for each position check that every
other word has the same character at that index — stop and return as soon as a mismatch
or an out-of-bounds index is found.

Time Complexity: O(n * m) — n strings, each compared up to m (shortest string) characters
Space Complexity: O(1) — excluding the output string
"""
from typing import List
def longestCommonPrefix(strs: List[str]) -> str:
    common = ""
    
    for i,ch in enumerate(strs[0]):
        for word in strs:
            if i>=len(word) or word[i]!=ch:
                return common
        common += ch
    return common

strs = ["dog","racecar","car"]
print(longestCommonPrefix(strs))