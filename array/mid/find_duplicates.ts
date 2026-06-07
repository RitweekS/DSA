/**
 * Problem: Find Common Elements (Duplicates in Two Arrays)
 * Difficulty: Medium
 *
 * Description:
 * Given two sorted arrays, find the common elements (intersection) using a two-pointer technique.
 * Both pointers advance based on which array has the smaller current element, collecting matches.
 * This is similar to LeetCode 349 / 350.
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(min(m, n))
 */
function duplicates(n1:number[],n2:number[]):number[]{
    let p1 = 0;
    let p2 = 0;
    let duplicates_el: number[] = []
    while(p1!==n1.length || p2!==n2.length){
        if(n1[p1]===n2[p2]){
            duplicates_el.push(n1[p1])
            p1++
            p2++
        }else if(n1[p1]>n2[p2]){
            p2++
        }else{
            p1++
        }
    }
    return duplicates_el
}

let n1 = [1,3,4,2,2]
let n2 = [3,1,3,4,2]
console.log(duplicates(n1,n2))