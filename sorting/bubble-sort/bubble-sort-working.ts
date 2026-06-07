/**
 * Algorithm: Bubble Sort
 * Difficulty: Easy
 *
 * Description:
 * Repeatedly compares adjacent elements and swaps them if they are in the wrong order.
 * Each pass bubbles the largest unsorted element to its correct position.
 * Includes an early-exit optimization: if no swap occurs in a pass, the array is already sorted.
 *
 * Time Complexity: O(n²) average/worst, O(n) best (already sorted)
 * Space Complexity: O(1)
 */
function bubbleSort(nums:number[]){
    for(let i=0; i<nums.length-1; i++){
        let isSwapped = false;
        for(let j=1;j<nums.length-i;j++){
            if(nums[j-1]>nums[j]){
                let temp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return nums;
}

console.log(bubbleSort([1,2,3,4,5]));