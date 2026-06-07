/**
 * Problem: Find Kth Rotation (GFG)
 * Difficulty: Medium
 *
 * Description:
 * Given a sorted array that has been rotated k times, find the number of rotations k.
 * The number of rotations equals the index of the minimum element in the rotated sorted array.
 * Uses binary search to find the minimum element's index efficiently.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function findKthRotation(nums:Number[]):Number{
        let start = 0 ;
        let end = nums.length - 1;
        while(start<end){
            let mid = Math.floor((start + end)/2);
            if(nums[mid]>nums[end]){
                start = mid + 1;
            }else{
                end = mid;
            }
        }
        return start;
}

const nums = [5, 1, 2, 3, 4];
console.log(findKthRotation(nums))