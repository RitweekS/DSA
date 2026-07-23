"""
Problem: Isomorphic Strings
Difficulty: Easy
Source: https://leetcode.com/problems/isomorphic-strings/

Description:
Given two strings s and t, determine if they are isomorphic — every character in s can
be replaced to get t, with all occurrences of a character mapped to the same character,
and no two characters mapping to the same character (a one-to-one mapping both ways).
Maintain two hash maps, one for s->t and one for t->s, and check consistency of both
mappings while walking the strings in parallel.

Time Complexity: O(n) — single pass over the strings
Space Complexity: O(1) — bounded by the character set size
"""
def isIsomorphic(s: str, t: str) -> bool:
    mapST = {}
    mapTS = {}

    for c1, c2 in zip(s, t):
        if mapST.get(c1) != c2:
            if c1 in mapST:
                return False

        if mapTS.get(c2) != c1:
            if c2 in mapTS:
                return False

        mapST[c1] = c2
        mapTS[c2] = c1

    return True
s = "badc"
t = "baba"

print(isIsomorphic(s,t))