/**
 * Problem: Rotate Array by 1
 * Difficulty: Easy
 *
 * Description:
 * Rotate an array of n elements to the right by 1 step.
 * The last element wraps around and becomes the first element, with all other elements shifting one position to the right.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
// Rotate an array of n elements to the right by 1 steps.
function rotate(nums: number[], k: number): number[] {
    if(nums.length<=1) return nums;
    let temp = nums[nums.length - 1];
    let exTemp = nums[0];

    for(let i=1;i<nums.length;i++){
        let inTemp = nums[i];
        nums[i] = exTemp;
        exTemp = inTemp;
    }
    nums[0] = temp;
    return nums;
};