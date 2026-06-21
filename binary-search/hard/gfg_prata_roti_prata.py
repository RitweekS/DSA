
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