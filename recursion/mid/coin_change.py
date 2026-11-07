import sys

INT_MAX = float('inf')


def coin_change(nums: list[int], target: int) -> int:
    if target == 0:
        return 0

    if target < 0:
        return INT_MAX

    mini = INT_MAX

    for el in nums:
        ans = coin_change(nums, target - el)

        if ans != INT_MAX:
            mini = min(mini, ans + 1)

    return mini


nums = [2]
target = 3

result = coin_change(nums, target)
print(-1 if result == INT_MAX else result)
