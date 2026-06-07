/**
 * Problem: Sort Colors (Dutch National Flag)
 * Difficulty: Medium
 *
 * Description:
 * Given an array with only 0s, 1s, and 2s, sort it in-place so all 0s come first, then 1s, then 2s.
 * Uses the Dutch National Flag algorithm with three pointers: low, mid, and high.
 * This is LeetCode 75.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function sort(nums:number[]){
    let i = 0;
    let j = 0;
    let k= nums.length - 1
    while(j<=k){
        if(nums[j]==0){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp;
            i++;
            j++;
        }else if(nums[j]==1){
            j++
        }else{
            let temp = nums[k]
            nums[k] = nums[j]
            nums[j] = temp;
            k--;
        }
    }
    return nums
}

console.log(sort([2,0,2,1,1,0]))