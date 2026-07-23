"""
Problem: Painter's Partition Problem
Difficulty: Hard
Source: https://www.geeksforgeeks.org/painters-partition-problem/

Description:
Given an array of board lengths and k painters, split the boards into k contiguous
partitions such that each painter paints one partition, and the maximum total length
painted by any single painter is minimized.
Binary search on the answer: search the range [max(nums), sum(nums)] for the smallest
maximum partition length for which a valid split among k painters is feasible.

Time Complexity: O(n * log(sum - max)) — binary search * linear feasibility check per iteration
Space Complexity: O(1)
"""
from typing import List
def is_possible(nums:List[int],k:int,limit:int)->bool:
    painter = 1
    partition_len = 0
    
    for elm in nums:
        if partition_len+elm<=limit:
            partition_len += elm
        else:
            painter += 1
            partition_len = elm
            if painter>k:
                return False
    return True

def painter_partition(nums:List[int],k:int)->int:
    low = max(nums)
    high = sum(nums)
    ans = -1
    
    while(low<=high):
        mid = low + (high-low)//2
        if is_possible(nums,k,mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    
    return ans

nums = [10, 20, 30, 40]
k = 2

print(painter_partition(nums=nums,k=k))