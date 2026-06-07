/**
 * Problem: Alternate (Extreme) Print of Array
 * Difficulty: Easy
 *
 * Description:
 * Given an array of integers like [1,2,3,4,5,6], print them in the pattern: first element, last element, second element, second-last element, and so on.
 * For example, [1,2,3,4,5,6] would output [1,6,2,5,3,4].
 * Use a two-pointer technique starting from both ends and moving inward.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
// You have given an array of integers [1,2,3,4,5,6], and you need to print the as 1,6,2,5,3,4. The first and last elements are printed first, then the second and second last elements, and so on until all elements are printed.

function extreme_print(nums: number[]):number[]{
    let start = 0;
    let end = nums.length-1;
    let ans: number[] = [];
    while(start<=end){
        if (start===end){
            ans.push(nums[start])
        }else{
            ans.push(nums[start])
            ans.push(nums[end])
        }
        start++;
        end--;
    }
    return ans;
}

let nums = [1,2,3,4,5,6,7]
console.log(extreme_print(nums))