/**
 * Problem: Search in Rotated Sorted Array
 * Difficulty: Medium
 *
 * Description:
 * Given a sorted array that has been rotated at an unknown pivot, search for a target value and return its index or -1.
 * Determines which half of the array is sorted at each step, then decides which half to search based on the target's range.
 * This is LeetCode 33.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function search(nums: number[],target:number): number {
   let left = 0;
   let right = nums.length-1;
   let mid = Math.floor((left+right)/2)
   while(left<=right){
        if(nums[mid]===target){
            return mid
        }

        if(nums[left]<=nums[mid]){
            if(nums[left]<= target && target<nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid]<=target && target<nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        mid = Math.floor((left+right)/2)
   }
   return -1
}
let nums = [6,7,1,2,3,4,5]
let target = 4;
console.log(search(nums,target))