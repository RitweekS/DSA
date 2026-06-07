/**
 * Problem: Best Time to Buy and Sell Stock (Optimized)
 * Difficulty: Medium
 *
 * Description:
 * Given an array of stock prices, determine the maximum profit achievable from a single buy-sell transaction.
 * This optimized solution tracks the minimum buy price seen so far and updates the maximum profit in a single pass.
 * This is LeetCode 121.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function bestTimeToBuyAndSell(prices: number[]) {
  let max_diff = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
        if(max_diff<(prices[i]-buy)){
            max_diff = (prices[i]-buy);
        }
        if(prices[i]>buy){
            buy = prices[i];
        }
  }
  return max_diff;
}

console.log(bestTimeToBuyAndSell([2, 4, 1]));