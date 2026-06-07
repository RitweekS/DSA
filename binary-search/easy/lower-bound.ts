/**
 * Problem: Lower Bound
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted array and a value x, find the index of the first element that is greater than or equal to x (the lower bound).
 * Uses binary search: if the middle element is >= x, narrow the search to the left half; otherwise move right.
 * This is a fundamental binary search variant used in many other problems.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function lowerBound(nums: number[], x: number): number {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] >= x) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}


console.log(lowerBound([2, 4, 6, 8, 10, 12, 14],5))