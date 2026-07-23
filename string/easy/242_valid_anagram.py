"""
Problem: Valid Anagram
Difficulty: Easy
Source: https://leetcode.com/problems/valid-anagram/

Description:
Given two strings s and t, return true if t is an anagram of s (uses the same
characters with the same frequencies).
Build a frequency map from s, then walk t decrementing counts — if any character in t
is missing from the map or its count goes negative, the strings aren't anagrams.

Time Complexity: O(n) — one pass to build the map, one pass to consume it
Space Complexity: O(1) — bounded by the character set size
"""
def isAnagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    
    freq = {}
    
    for ch in s:
        freq[ch] = freq.get(ch,0) + 1
        
    for ch in t:
        if ch not in freq:
            False
        
        freq[ch] -= 1
        
        if freq[ch] < 0:
            return False

    return True

s = "anagrsam"
t = "nagraam"

print(isAnagram(s,t))