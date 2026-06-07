/**
 * Problem: Check if Array Is Sorted and Rotated
 * Difficulty: Medium
 *
 * Description:
 * Given an array nums, return true if the array was originally sorted in non-decreasing order and then rotated some number of positions.
 * The algorithm finds the rotation pivot and verifies that both halves are sorted and the last element is not greater than the first.
 * This is LeetCode 1752.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function check(nums: number[]): boolean {
    const n = nums.length;
    let pivot = -1;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            pivot = i;
            break;
        }
    }

    if (pivot === -1) return true;

    for (let i = pivot + 1; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }

    return nums[n - 1] <= nums[0];
}

console.log(check([1,2,3]));