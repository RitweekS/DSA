/**
 * Problem: Find the Element Occurring Odd Number of Times
 * Difficulty: Medium
 * Source: https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-a-sorted-array/
 *
 * Description:
 * Given a sorted array where every element appears exactly twice except one element that appears
 * an odd number of times, find that element using binary search.
 * Key insight: in a "clean" array, pairs start at even indices (0-1, 2-3, …). Once the single
 * element is passed, the pairing is disrupted. At each mid:
 *   - If nums[mid] differs from both neighbours, it is the answer.
 *   - Otherwise, use parity of mid to determine which half is disrupted and narrow the search.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function findFirstOccurrence(nums:number[]):number{
    let left = 0;
    let right = nums.length - 1
    while(left<=right){
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid]!==nums[mid-1] && nums[mid]!== nums[mid+1]){
            return nums[mid];
        }
        if(mid%2===0){
            if(nums[mid]===nums[mid+1]){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }else{
            if(nums[mid]===nums[mid+1]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }

    return -1
}

let nums = [1,1,2,2,3,3,4,4,3]
console.log(findFirstOccurrence(nums))