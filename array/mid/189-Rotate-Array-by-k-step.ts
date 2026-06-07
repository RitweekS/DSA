/**
 * Problem: Rotate Array
 * Difficulty: Medium
 *
 * Description:
 * Given an integer array, rotate the array to the right by k steps, where k is non-negative.
 * The solution uses a three-step reversal approach: reverse the entire array, then reverse the first k elements, then reverse the rest.
 * This is LeetCode 189.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    if (n <= 1) return;

    k = k % n;

    reverse(nums, 0, n - 1);

    reverse(nums, 0, k - 1);

    reverse(nums, k, n - 1);
}

const reverse = (nums: number[], start: number, end: number): void => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};