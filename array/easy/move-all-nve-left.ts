/**
 * Problem: Move All Negative Numbers to Left
 * Difficulty: Easy
 *
 * Description:
 * Given an integer array, move all negative numbers to the left side and all non-negative numbers to the right side.
 * Use a two-pointer approach: one pointer starts from the left and one from the right, swapping elements when needed.
 * The relative order of elements does not need to be preserved.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function moveLeft(nums:number[]):number[]{
    let i = 0;
    let j = nums.length - 1;

    while(i<j){
        if(nums[i]>=0){
            if(nums[j]>=0){
                j--
            }else{
                let temp = nums[j]
                nums[j] = nums[i]
                nums[i] = temp;
                i++;
                j--;
            }
        }else{
            i++;
        }
    }
    return nums
}
let nums = [-1, 2, 0, -4, 3, 0, 5, 0]
console.log(moveLeft(nums))