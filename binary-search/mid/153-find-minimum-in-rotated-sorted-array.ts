/**
 * Problem: Find Minimum in Rotated Sorted Array
 * Difficulty: Medium
 *
 * Description:
 * Given a sorted array rotated at an unknown pivot, find the minimum element in O(log n) time.
 * Uses binary search: if the middle element is greater than the rightmost element, the minimum is in the right half; otherwise it's in the left half.
 * This is LeetCode 153.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function findMinimum(nums: number[]): number {
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];
}

const nums = [5, 1, 2, 3, 4];
console.log(findMinimum(nums)); // 1