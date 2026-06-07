/**
 * Problem: Search Insert Position
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted array of distinct integers and a target, return the index of the target if found; otherwise return the index where it would be inserted in order.
 * Uses binary search and tracks the candidate insert position at each step.
 * This is LeetCode 35.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    let ans = 0;
    while (start <= end) {
        let mid = Math.floor(start + (end-start)/2);
        if(nums[mid]===target){
            ans = mid;
            break;
        }
        if(nums[mid]>target){
            ans = mid;
            end = mid -1;
        }else {
            start = mid+1
            ans = mid + 1;
        }
    }
    return ans
};
console.log(searchInsert([1,3,5,6],7))