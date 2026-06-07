/**
 * Problem: Max Consecutive Ones
 * Difficulty: Easy
 *
 * Description:
 * Given a binary array, find the maximum number of consecutive 1s in the array.
 * Iterate through the array, tracking the current streak of 1s and updating the maximum whenever the streak ends or ends the array.
 * This is LeetCode 485.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findMaxConsecutiveOnes(nums: number[]): number {
    let maxConsecutiveOnes = 0;
    let currentConsecutiveOnes = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i]===1){
            currentConsecutiveOnes++;
        }else if(nums[i]===0){
            currentConsecutiveOnes=0;
        }
        if(currentConsecutiveOnes>maxConsecutiveOnes){
            maxConsecutiveOnes = currentConsecutiveOnes;
        }
    }
    return maxConsecutiveOnes;
};

console.log(findMaxConsecutiveOnes([0,0,0,0,0]))