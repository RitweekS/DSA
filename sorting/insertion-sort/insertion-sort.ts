/**
 * Algorithm: Insertion Sort
 * Difficulty: Easy
 *
 * Description:
 * Builds the sorted array one element at a time by picking each element and inserting it
 * into its correct position among the already-sorted elements to its left.
 * Efficient for small or nearly-sorted arrays.
 *
 * Time Complexity: O(n²) average/worst, O(n) best (already sorted)
 * Space Complexity: O(1)
 */
function insertionSort(nums: number[]):number[]{
    for(let i=1;i<nums.length;i++){
        let curr = nums[i];
        let prev = i-1;
        while(curr<nums[prev]&&prev>=0){
            nums[prev+1] = nums[prev];
            prev--;
        }
        nums[prev+1] = curr;
    }
    return nums
}

console.log(insertionSort([3,4,5,7,1,2]))