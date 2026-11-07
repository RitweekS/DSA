def rob(nums: list[int],index:int=0) -> int:
    if(index >= len(nums)):
        return 0

    robAmt1 = nums[index] + rob(nums,index+2)
    robAmt2 = 0 + rob(nums,index+1)
   
    return max(robAmt1,robAmt2)

nums = [2,7,9,3,1]

print(rob(nums))