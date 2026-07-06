"""
Problem: Aggressive Cows
Difficulty: Hard
Source: https://www.geeksforgeeks.org/problems/aggressive-cows/1

Description:
Given an array of stall positions and k cows, place all cows in stalls such that the
minimum distance between any two cows is as large as possible.
Binary search on the answer: search the range [0, max(stalls) - min(stalls)] for the
largest minimum distance for which it is still possible to place all k cows greedily.

Time Complexity: O(n * log(max - min)) — binary search * linear feasibility check per iteration
Space Complexity: O(1)
"""
from typing import List

def is_possible(nums:List[int],k:int,mid:int):
    c = 1
    pos = nums[0]
    
    for i in range(1,len(nums)):
        if nums[i]-pos >= mid:
            c += 1
            pos = nums[i]
            
        if c==k:
            return True
    
    return False

def min_diff(nums:List[int],k:int)->int:
    low = 0
    high = nums[len(nums)-1] - nums[0]
    ans = -1
    while(low<=high):
        mid = low + (high-low)//2
        if is_possible(nums=nums,k=k,mid=mid):
            ans = mid
            low = mid+1
        else:
            high = mid - 1
            
    return ans

stall =[1, 2, 4, 8, 9]
k = 3

print(min_diff(nums=stall,k=k))