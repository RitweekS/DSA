def is_sorted(nums:list[int],index:int=0):
    if index == len(nums)-1:
        return True
    
    if index<len(nums)-1 and nums[index]>nums[index+1]:
        return False
    
    index += 1
    return is_sorted(nums,index)
nums = [2,6,7,9,12,11]
print(is_sorted(nums))