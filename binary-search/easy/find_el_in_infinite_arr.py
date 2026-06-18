"""
Problem: Search in an Infinite Sorted Array (Exponential Search)
Difficulty: Easy
Source: https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

Description:
Given a sorted array of unknown (potentially infinite) size, find the index of a target element.
Since we don't know the size, we can't directly apply binary search. Instead, exponential search
first finds a range [i//2, i] where the target could exist by doubling i until nums[i] >= target,
then runs standard binary search within that bounded range.

Time Complexity: O(log n) — doubling phase + binary search both take O(log n)
Space Complexity: O(1)
"""
from typing import List



def exp_search(nums:List[int],size:int,target:int):
    if(nums[0]==target):
        return 0

    i = 1
    
    while(i<size and nums[i]<=target):
        i = i*2
    
    return search(nums=nums,target=target,start=i//2,end=min(i,size-1))

def search(nums:List[int],target:int,start:int,end:int)->int:
    while(start<=end):
       mid = start + (end-start)//2
       if nums[mid] == target:
           return mid
       
       if nums[mid]>target:
           end = mid - 1
       else:
           start = mid + 1
        
    return -1



nums = [2, 5, 7, 9]
k = 3

print(exp_search(nums=nums,size=len(nums),target=k))