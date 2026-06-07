/**
 * Problem: Missing Number
 * Difficulty: Easy
 *
 * Description:
 * Given an array containing n distinct numbers in the range [0, n], return the only number in the range that is missing.
 * The approach uses the Gauss formula: the expected sum of 0 to n is n*(n+1)/2, then subtract the actual array sum to find the missing number.
 * This is LeetCode 268.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function missingNumber(nums: number[]): number {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let currentSum = 0;
  for (let i = 0; i < n; i++) {
        currentSum += nums[i];
  }

  return totalSum - currentSum;
}

console.log(missingNumber([3, 0, 1]));