/**
 * Problem: Find All Numbers Disappeared in an Array
 * Difficulty: Easy
 *
 * Description:
 * Given an array of n integers where each integer is in the range [1, n], find all integers that do not appear.
 * Use a sign-marking technique: for each value seen, negate the element at its corresponding index to mark it as visited.
 * After marking, indices still holding positive values correspond to missing numbers.
 * This is similar to LeetCode 448.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function missingElm(nums:number[]): number[]{
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            continue
        }else{
            nums[nums[i]-1] = -1*nums[i]
        }
    }
    let ans = []
    for(let i=0;i<nums.length;i++){
       if(nums[i]<0){
            continue
       }else{
            ans.push(i+1);
       }
    }
    return ans
}

let nums = [1, 3, 3, 3, 5]
console.log(missingElm(nums))