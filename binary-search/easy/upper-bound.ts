/**
 * Problem: Upper Bound
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted array and a value x, find the index of the first element that is strictly greater than x (the upper bound).
 * Uses binary search: if the middle element is > x, narrow the search to the left half; otherwise move right.
 * This is a fundamental binary search variant complementary to lower bound.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function upperBound(nums: number[], x: number): number {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] > x) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
}

const nums = [2, 2, 6, 8, 10, 10, 10]
const target = 10
console.log(upperBound(nums,target))