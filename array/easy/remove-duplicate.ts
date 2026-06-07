/**
 * Problem: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted integer array, remove duplicates in-place so each element appears only once.
 * Return the number of unique elements k, with the first k elements holding the result.
 * This is LeetCode 26.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function removeDuplicate(nums: number[]): number[]|number {
    if (nums.length === 0) return [];

    let temp = nums[0];
    let k = 0;

    for (let i = 0; i <= nums.length; i++) {
        if (temp !== nums[i]) {
            nums[k] = temp;
            temp = nums[i];
            k++;
        }
    }

    // nums.push(temp);
    nums[k] = temp;
    return k;
}


console.log("unique elements",removeDuplicate([1,1,2]));