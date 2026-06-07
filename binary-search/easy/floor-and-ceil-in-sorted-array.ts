/**
 * Problem: Floor and Ceil in Sorted Array
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted array and a target, find the floor (largest element <= target) and ceiling (smallest element >= target).
 * Uses binary search, updating floor when the mid element is less than or equal to the target, and ceiling when greater.
 * This is a GFG problem on binary search applications.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function floorAndCeil(nums:number[],target:number):number[]{
   let start = 0;
   let end = nums.length - 1;
    let floor = -1;
    let ceil = -1
    while(start<=end){
        let mid = Math.floor(start + (end-start)/2);
        if(nums[mid]===target){
            floor = nums[mid];
            ceil = nums[mid];
            break;
        }
        if(nums[mid]>target){
            ceil = nums[mid];
            end = mid - 1;
        }else{
            floor = nums[mid];
            start = mid + 1;
        }
    }
    return [floor,ceil]
}

const nums = [2, 4, 6, 8, 10, 12, 14]
const target = 1
console.log(floorAndCeil(nums, target))