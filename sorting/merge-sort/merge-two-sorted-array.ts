/**
 * Problem: Merge Two Sorted Arrays
 * Difficulty: Easy
 *
 * Description:
 * Given two sorted arrays, merge them into a single sorted array.
 * Uses two pointers to compare elements from each array and build the result in order.
 * This is a core building block used in the merge step of Merge Sort.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */

function mergeArray(nums1:number[],nums2:number[]){
    let m = nums1.length
    let n = nums2.length
    let sortedArrayLength = m+n;
    let p1=0;
    let p2=0;
    let copyOfNums1 = nums1.slice(0)
    for(let i=0;i<sortedArrayLength;i++){
        if(copyOfNums1[p1]>nums2[p2] || p1>=m){
            nums1[i] = nums2[p2];
            p2++;
        }else{
            nums1[i] = copyOfNums1[p1];
            p1++;
        }
    }
    return nums1
}

let nums1 = [1,3,5,7]
let nums2 = [2,4,8,9]

console.log(mergeArray(nums1,nums2))