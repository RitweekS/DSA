/**
 * Problem: Merge Sorted Array
 * Difficulty: Easy
 *
 * Description:
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * nums1 has a length of m+n where the last n elements are set to 0 as placeholders for nums2.
 * This is LeetCode 88.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(m)
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): number[]{
    let nums1copy = nums1.slice(0,m);
    let p1 = 0;
    let p2 = 0;
    for(let i=0;i<m+n;i++){
        if((nums1copy[p1]>nums2[p2]) || (p1>=m)){
            nums1[i] = nums2[p2];
            p2++;
        }else{
            nums1[i] = nums1copy[p1];
            p1++;
        }
    }
    return nums1
};

let nums1 = [1,2,3,0,0];
let m = 3;
let nums2 = [2,5];
let n = 2;
console.log(merge(nums1,m,nums2,n))