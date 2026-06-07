/**
 * Problem: Union of Two Sorted Arrays
 * Difficulty: Medium
 *
 * Description:
 * Given two sorted arrays, return their union as a sorted array containing each distinct element once.
 * Uses a two-pointer technique to merge the arrays while skipping duplicates.
 * This is a GFG problem on union of sorted arrays.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(m + n)
 */
function union_of_two_array(nums1:number[],nums2:number[]){
    let union: number[] = []
    let n1 = nums1.length
    let n2 = nums2.length
    let i = 0;
    let j = 0;

    while(i<n1 && j<n2){
        if(nums1[i]<=nums2[j]){
            if(union.at(-1)!== nums1[i]){
                union.push(nums1[i])
            }
            i++
        }else{
            if(union.at(-1)!== nums2[j]){
                union.push(nums2[j])
            }
            j++
        }
    }

    if(i===n1 && j<n2){
        while(j<n2){
            if(union.at(-1)!== nums2[j]){
                union.push(nums2[j])
            }
            j++
        }
    }else{
        if(union.at(-1)!== nums1[i]){
            union.push(nums1[i])
        }
        i++
    }

   return union

}
let nums1 = [1,2,3,4]
let nums2 = [3,4,5,6]
console.log(union_of_two_array(nums1,nums2))