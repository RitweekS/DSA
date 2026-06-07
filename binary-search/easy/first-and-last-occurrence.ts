/**
 * Problem: Find First and Last Position of Element in Sorted Array
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted integer array and a target, return the starting and ending position of the target value.
 * Uses two separate binary searches — one to find the first occurrence and another to find the last occurrence.
 * This is LeetCode 34.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
// function lowerBound(nums: number[], x: number): number {
//   let start = 0;
//   let end = nums.length;

//   while (start < end) {
//     const mid = Math.floor((start + end) / 2);
//     if (nums[mid] >= x) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return start;
// }

// function upperBound(nums: number[], x: number): number {
//   let start = 0;
//   let end = nums.length;

//   while (start < end) {
//     const mid = Math.floor((start + end) / 2);
//     if (nums[mid] > x) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }

//   return start;
// }
function searchFirstOccurrence(nums: number[],target:number):number{
    let start = 0;
    let end = nums.length - 1;
    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)
        if(nums[mid]===target){
            console.log(nums[mid],mid)
            if(mid>=0 && nums[mid-1]===target){
                end = mid - 1;
            }else{
                return mid
            }
        }else if(nums[mid]>target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
function searchLastOccurrence(nums: number[],target:number):number{
    let start = 0;
    let end = nums.length - 1;
    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)
        if(nums[mid]===target){
            if(mid<nums.length && nums[mid+1]===target){
                start = mid + 1;
            }else{
                return mid
            }
        }else if(nums[mid]>target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
function searchRange(nums:number[],target:number):number[]{
    let firstOccurrence = searchFirstOccurrence(nums,target);
    let lastOccurrence = searchLastOccurrence(nums,target);
    return [firstOccurrence,lastOccurrence]
}

const nums = [2 ,6, 8, 10]
const target = 10
console.log(searchRange(nums,target))