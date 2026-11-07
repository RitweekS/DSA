def find_max(nums:list[int],max_value:int,index:int=0):
    if index == len(nums):
        return max_value
    
    if nums[index]>max_value:
        max_value = nums[index]
        
    index+=1
    return find_max(nums,max_value,index)

arr:list[int] = [10,20,30,40,50]
print(find_max(arr,arr[0],index=0))