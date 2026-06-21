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