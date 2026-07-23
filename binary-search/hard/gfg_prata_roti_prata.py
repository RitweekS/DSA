"""
Problem: Roti Prata (Prata / Chapati Cooking Problem)
Difficulty: Hard
Source: https://www.interviewbit.com/problems/roti-prata/

Description:
Given the ranks of p cooks, where the i-th cook takes rank[i] minutes to cook the first
prata, 2*rank[i] for the second, 3*rank[i] for the third, and so on, find the minimum
time needed to cook at least target pratas in total using all cooks working in parallel.
Binary search on the answer: for a candidate time mid, each cook greedily cooks as many
pratas as fit within mid minutes; check whether the combined count across all cooks
reaches target.

Time Complexity: O(n * sqrt(time)) — for each candidate time, each cook's prata count is
found by incrementing j until its cumulative cook time exceeds mid
Space Complexity: O(1)
"""

def is_possible(nums,target,mid):
    prata_count = 0
    for rank in nums:
        j = 1
        timeTaken = 0
        
        while(True):
            if(timeTaken + j*rank <=mid):
                prata_count += 1
                timeTaken += j*rank
                j += 1 
            else:
                break
            
        if prata_count >= target:
            return True
    
    return False
    
    
def min_time(nums,target):
    low = 0
    high = max(nums) * target*(target+1)//2
    ans = 0
    while(low<=high):
        mid = low + (high-low)//2
        if is_possible(nums,target,mid):
            ans = mid
            high = mid - 1
        else:
            low = mid + 1
    
    return ans
nums = [1,2,3,4]
target = 10
print(min_time(nums,target))