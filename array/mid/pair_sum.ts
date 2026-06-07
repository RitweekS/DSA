/**
 * Problem: Two Sum (Pair with Given Sum)
 * Difficulty: Medium
 *
 * Description:
 * Given an integer array and a target sum, find the indices of the two numbers that add up to the target.
 * This brute-force approach uses two pointers iterating through all pairs until the target sum is found.
 * This is similar to LeetCode 1.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function PairSum(nums: number[],target:number): number[]{
    let i = 0;
    let j = i+1;
    let ans : number[] = []
    while(i<nums.length){
        let sum = nums[i] + nums[j];
        if(sum === target){
            ans.push(i)
            ans.push(j)
            break
        }
        if(j === nums.length-1){
            i++;
            j=i+1;
        }else{
            j++;
        }
    }
    return ans
}

let nums = [3,3]
let target = 6

console.log(PairSum(nums,target))