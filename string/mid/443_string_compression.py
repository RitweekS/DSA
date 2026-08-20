"""
Problem: String Compression
Difficulty: Medium
Source: https://leetcode.com/problems/string-compression/

Description:
Given an array of characters, compress it in place: consecutive repeating
characters are replaced by the character followed by the count of repetitions
(count omitted if 1). Walk the array with a write index, tracking the previous
character and its run count, flushing char + digits of count whenever the run
breaks, then return the new length.

Time Complexity: O(n) — single pass over the characters
Space Complexity: O(1) — compression done in place on the input array
"""
from typing import List

def compress(chars: List[str]) -> int:

    index = 0
    prev = chars[0]
    count = 1

    for i in range(1, len(chars)):

        if chars[i] == prev:
            count += 1

        else:

            chars[index] = prev
            index += 1

            if count > 1:
                for digit in str(count):
                    chars[index] = digit
                    index += 1

            prev = chars[i]
            count = 1

    chars[index] = prev
    index += 1

    if count > 1:
        for digit in str(count):
            chars[index] = digit
            index += 1

    return index

s = ["a","a","b","b","c","c","c"]
print(compress(s))