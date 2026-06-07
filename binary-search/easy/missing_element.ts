/**
 * Problem: Missing Element in Sorted Array
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted array of consecutive integers with exactly one missing element, find the missing number using binary search.
 * Checks if the middle element equals its expected value (mid+1); if not, the missing element is at that position.
 * This is a GFG binary search variant.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function missing(nums:number[]):number{
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left +right)/2)
    while(left<=right){
        if(nums[mid]!==mid+1){
            return mid+1
        }
        if(nums[mid]===mid+1){
            left = mid+1;
        }else{
            right = mid - 1;
        }

        mid = Math.floor((left +right)/2)
    }
    return -1
}

let nums = [1,2,3,4,6]
console.log(missing(nums));