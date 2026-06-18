/**
 * Problem: Find K Closest Elements
 * Difficulty: Medium
 * Source: https://leetcode.com/problems/find-k-closest-elements/
 *
 * Description:
 * Given a sorted integer array and a target value `a`, return the `k` closest elements to `a`.
 * Use a two-pointer window of size k: start with the full array and shrink from either end —
 * if the left element is farther from `a` than the right, advance left; otherwise retreat right.
 * Stop once the window is exactly k elements wide.
 *
 * Time Complexity: O(n - k) — at most n-k pointer moves to shrink the window
 * Space Complexity: O(1) excluding output
 */
function closestKValues(nums:number[],k:number,a:number): number[] {
    let left=0;
    let right = nums.length-1;

    while(right-left>=k){
        if((a-nums[left])>(nums[right]-a)){
            left++
        }else{
            right--;
        }
    }
    let ans = []

    for(let i = left;i<=right;i++){
        ans.push(nums[i])
    }
    return ans
}


function solution2(nums:number[],k:number,a:number): number[] {
    let left=0;
    let right = nums.length-1;

    while(right-left>=k){
        if((a-nums[left])>(nums[right]-a)){
            left++
        }else{
            right--;
        }
    }
    let ans = []

    for(let i = left;i<=right;i++){
        ans.push(nums[i])
    }
    return ans
}

let nums = [1,2,3,4,5]
let k = 4;
let a = 3;

console.log(closestKValues(nums,k,a))