/**
 * Problem: Move Zeroes
 * Difficulty: Easy
 *
 * Description:
 * Given an integer array, move all 0s to the end while maintaining the relative order of non-zero elements.
 * The operation must be done in-place without making a copy of the array.
 * This is LeetCode 283.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function moveZeroes(nums: number[]): number[] {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
       if(nums[i]===0 && k===undefined){
            k=i;
       }else if(k!==undefined && nums[i]!==0){
            let temp = nums[k];
            nums[k] = nums[i];
            nums[i] = temp;
            k++;
       }
    }
    return nums;
};

console.log(moveZeroes([0]))