/**
 * Algorithm: Selection Sort
 * Difficulty: Easy
 *
 * Description:
 * Divides the array into a sorted and unsorted region. On each pass, finds the minimum
 * element in the unsorted region and swaps it into its correct position.
 * Unlike bubble sort, it makes at most O(n) swaps regardless of input.
 *
 * Time Complexity: O(n²) always
 * Space Complexity: O(1)
 */
function selectionSort(nums: number[]) {
  let n = nums.length;
  for (let i = 0;i<n; i++) {
    let min = i;
    for (let j=i+1; j<n; j++) {
        if(nums[min]>nums[j]){
            min = j;
        }
    }
    let temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums
}
console.log(selectionSort([7,1,1,1,1,1,2]))