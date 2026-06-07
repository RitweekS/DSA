/**
 * Problem: Single Number
 * Difficulty: Easy
 *
 * Description:
 * Given a non-empty array of integers where every element appears twice except for one, find that single element.
 * Use XOR bitwise operation — XORing a number with itself yields 0, and XORing with 0 yields the number itself.
 * This is LeetCode 136.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function singleNumber(nums: number[]): number {
    let singleNum = nums[0] ;
    for(let i = 1; i<nums.length; i++){
        singleNum = singleNum^nums[i];
    }
    return singleNum;
};

console.log(singleNumber([4,1,2,1,2]))