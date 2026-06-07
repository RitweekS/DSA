/**
 * Problem: Search in Rotated Sorted Array II
 * Difficulty: Hard
 *
 * Description:
 * Given a sorted array that may contain duplicates and has been rotated at an unknown pivot, determine if a target value exists.
 * The presence of duplicates means that when nums[low] == nums[mid] == nums[high], we cannot determine which side is sorted, requiring linear shrinkage.
 * This is LeetCode 81.
 *
 * Time Complexity: O(log n) average, O(n) worst case
 * Space Complexity: O(1)
 */
function search(nums: number[], target: number): boolean {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            return true
        }
        if(nums[low]===nums[mid] && nums[mid] === nums[high]){
            high--;
            low++;
        }else if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return false;
};

console.log(search([1,0,1,1,1],0))