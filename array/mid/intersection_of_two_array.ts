/**
 * Problem: Intersection of Two Arrays II
 * Difficulty: Medium
 *
 * Description:
 * Given two sorted integer arrays, return their intersection where each element appears as many times as it shows in both arrays.
 * Uses a two-pointer approach on sorted arrays to find common elements efficiently.
 * This is similar to LeetCode 350.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(min(m, n))
 */
function intersection_of_2_array(nums1:number[],nums2:number[]){
    let intersection: number[] = []
    let n1 = nums1.length
    let n2 = nums2.length
    let i = 0;
    let j = 0;

    while(i<n1 && j<n2){
        if(nums1[i]===nums2[j]){
            if(intersection.at(-1)!== nums1[i]){
                intersection.push(nums1[i])
            }
            i++
            j++
        }else{
            if(nums1[i]<nums2[j]){
                i++
            }else{
                j++
            }
        }
    }

   return intersection

}
let nums1 = [4,9,5]
let nums2 = [9,4,9,8,4]
console.log(intersection_of_2_array(nums1,nums2))