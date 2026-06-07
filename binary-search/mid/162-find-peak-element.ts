/**
 * Problem: Find Peak Element
 * Difficulty: Medium
 *
 * Description:
 * A peak element is one that is strictly greater than its neighbors. Given an integer array, find the index of any peak element.
 * Uses binary search: if the middle element is on an ascending slope, the peak is to the right; otherwise it's to the left.
 * This is LeetCode 162.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function findPeakElement(nums: number[]): number {
    let n = nums.length
    if(n === 1) return 0;
    if(nums[0]>nums[1]) return 0;
    if(nums[n-1]>nums[n-2]) return n-1;
    let start = 1;
    let end = n-2;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid
        }

        if(nums[mid]>nums[mid-1]){
            start = mid + 1;
        }else if(nums[mid]>nums[mid+1]){
            end = mid - 1
        }else{
            start = mid+1;
        }
    }
    return -1
};
const nums = [1,2,3,4]
console.log(findPeakElement(nums))