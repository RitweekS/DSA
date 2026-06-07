/**
 * Problem: Sort Array of 0s and 1s
 * Difficulty: Medium
 *
 * Description:
 * Given an array containing only 0s and 1s, sort it so all 0s appear before all 1s.
 * Uses a two-pointer technique where the left pointer scans for 1s and the right pointer scans for 0s, swapping them.
 * This is a GFG variant of the segregation problem.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function sort_0_1(nums:number[]):number[]{
    let i = 0;
    let j = nums.length-1;
    while(i<j){
        if(nums[i]==0){
            i++;
        }else{
            if(nums[j]==1){
                j--;
            }else{
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
                i++;
                j--;
            }
        }
    }
    return nums
}

let nums = [0];
console.log(sort_0_1(nums))