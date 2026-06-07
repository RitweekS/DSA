/**
 * Problem: Binary Search
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted integer array and a target, return the index of the target or -1 if not found.
 * Classic binary search repeatedly halves the search space by comparing the target to the middle element.
 * This is LeetCode 704.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));