/**
 * Problem: Single Element in a Sorted Array
 * Difficulty: Medium
 *
 * Description:
 * Given a sorted array where every element appears exactly twice except for one element which appears once, find that single element.
 * Uses binary search exploiting the parity of indices: before the single element, pairs start at even indices; after it, pairs start at odd indices.
 * This is LeetCode 540.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function singleNonDuplicate(nums: number[]): number {
    let start = 0;
    let end = nums.length - 1;
    while(start<=end){
        let mid = Math.floor((start + end)/2);
        const isEven = mid % 2 === 0;
        if(isEven){
            if(nums[mid] === nums[mid+1]){
                start = mid + 2;
            }else if(nums[mid] === nums[mid - 1]){
                end = mid - 2;
            }else{
                return nums[mid];
            }
        }else{
            if(nums[mid] === nums[mid-1]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
    }
    return -1
};
let nums = [1,1,2,2,3,3,4,4,8,8]
console.log(singleNonDuplicate(nums))