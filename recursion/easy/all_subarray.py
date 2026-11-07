# Input: arr[] = [1, 2, 3]
# Output: [[1], [1, 2], [1, 2, 3], [2], [2, 3], [3]]


def get_subarray(nums: list[int]) -> list[list[int]]:
    
    
    sub_array = []

    for i in range(len(nums)):
        for j in range(i + 1, len(nums) + 1):
            sub_arr = nums[i:j]
            sub_array.append(sub_arr)

    return sub_array

def get_subarray_rec(nums: list[int]) -> list[list[int]]:
    result = []

    def helper(start: int, end: int):
        if start == len(nums):
            return

        if end > len(nums):
            helper(start + 1, start + 2)
            return

        result.append(nums[start:end])

        helper(start, end + 1)

    helper(0, 1)

    return result

nums = [1, 2, 3]
print(get_subarray_rec(nums))