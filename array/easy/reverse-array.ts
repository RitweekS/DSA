/**
 * Problem: Reverse an Array
 * Difficulty: Easy
 *
 * Description:
 * Given an array of integers, reverse the array in-place and return it.
 * Use a two-pointer approach where the start and end pointers move toward each other, swapping elements.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function reverse_array(nums: number[]):number[]{
    let start = 0;
    let end = nums.length-1;
    while(start<end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
    return nums
}

let nums = [1,2,3,4,5,6,7]
console.log(reverse_array(nums))