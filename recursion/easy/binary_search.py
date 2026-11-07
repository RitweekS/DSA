def search(nums:list[int],target:int,start:int,end:int):
    if start>end:
        return False
    
    mid = (start+end)//2
    if nums[mid] == target:
        return True
    
    if nums[mid]>target:
        end = mid - 1
    else:
        start = mid + 1
        
    return search(nums,target,start,end)

nums = [10,20,30,40,50]
target = 50
start = 0
end = len(nums)-1
print(search(nums,target,start,end))