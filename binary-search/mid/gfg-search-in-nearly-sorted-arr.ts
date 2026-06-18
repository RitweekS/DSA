/**
 * Problem: Search in a Nearly Sorted Array
 * Difficulty: Medium
 * Source: https://www.geeksforgeeks.org/problems/search-in-an-almost-sorted-array/1
 *
 * Description:
 * Given a nearly sorted array where each element may be displaced at most one position from its
 * sorted position, find the index of a target value.
 * At each mid, check mid itself and its two neighbours (mid-1, mid+1). If none match, the target
 * cannot be in the range [mid-1, mid+1], so safely jump left to mid-2 or right to mid+2.
 * This preserves O(log n) time despite checking three positions per iteration.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function search(nums:number[],target:number):number{
    let left = 0;
    let right = nums.length - 1;

    while(left<=right){
        let mid = left + Math.floor((right - left)/2)
        if(nums[mid]===target){
            return mid
        }

        if(mid>left && nums[mid - 1]===target){
            return mid - 1
        }

        if(mid<right && nums[mid + 1]===target){
            return mid + 1
        }

        if(target>nums[mid]){
            left = mid + 2
        }else{
            right = mid - 2
        }
    }

    return -1;
}

let nums:number[] = [10, 3, 40, 20, 50, 80, 70];
console.log(search(nums,10))