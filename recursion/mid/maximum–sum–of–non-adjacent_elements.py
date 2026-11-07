def max_sum(nums, index=0):

    if index >= len(nums):
        return 0

    # Include current element
    include = nums[index] + max_sum(nums, index + 2)

    # Exclude current element
    exclude = max_sum(nums, index + 1)

    return max(include, exclude)


nums = [2, 1, 4, 9]

print(max_sum(nums))