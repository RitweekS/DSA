"""
Problem: Group Anagrams
Difficulty: Medium
Source: https://leetcode.com/problems/group-anagrams/

Description:
Given an array of strings, group the anagrams together. Use a hash map keyed
by each word's character-count signature (a sorted tuple of Counter items) —
words with identical signatures are anagrams of each other and land in the
same bucket. Return the buckets as a list of lists.

Time Complexity: O(n*k) — n words, k = avg word length, for counting and building keys
Space Complexity: O(n*k) — hash map storing all words grouped by signature
"""
from collections import Counter

def groupAnagrams(strs):
    groups = {}

    for w in strs:
        counter = Counter(w)
        key = tuple(sorted(counter.items()))
        if key not in groups:
            groups[key] = []

        groups[key].append(w)

    return list(groups.values())
    
    
strs = [""]
print(groupAnagrams(strs))