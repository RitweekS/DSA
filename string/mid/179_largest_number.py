"""
Problem: Largest Number
Difficulty: Medium
Source: https://leetcode.com/problems/largest-number/

Description:
Given a list of non-negative integers, arrange them so they form the largest
possible number and return it as a string. Convert numbers to strings, then
sort with a custom comparator that orders a before b when a+b > b+a. Join the
sorted strings, and handle the all-zeros edge case ("0").

Time Complexity: O(n log n) — sorting with a comparator over n strings
Space Complexity: O(n) — storing string versions of the numbers
"""
from typing import List
from functools import cmp_to_key

def largestNumber(nums: List[int]) -> str:
    # solution-1
    
    # nums = list(map(str, nums))
    # n = len(nums)
    # for i in range(n):
    #     for j in range(n - i - 1):
    #         if nums[j] + nums[j + 1] < nums[j + 1] + nums[j]:
    #             nums[j], nums[j + 1] = nums[j + 1], nums[j]
    # answer = "".join(nums)
    # return "0" if answer[0] == "0" else answer
    
    # solution-2
    nums = list(map(str, nums))

    def compare(a: str, b: str):
        if a + b > b + a:
            return -1
        elif a + b < b + a:
            return 1
        else:
            return 0

        # Sort using custom comparator
    nums.sort(key=cmp_to_key(compare))

        # Join all strings
    answer = "".join(nums)

        # Handle case like [0,0]
    return "0" if answer[0] == "0" else answer


            
nums = [3,30,34,5,9]
print(largestNumber(nums=nums))
    