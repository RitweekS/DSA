/**
 * Problem: Add Two Numbers Represented as Arrays
 * Difficulty: Medium
 *
 * Description:
 * Given two non-negative integers represented as arrays of digits, return their sum as an array of digits.
 * The solution iterates from the least significant digit, handling carry at each step, similar to LeetCode 66 (Plus One) generalized.
 * This is similar to LeetCode 2 (Add Two Numbers) but with array representation.
 *
 * Time Complexity: O(max(m, n))
 * Space Complexity: O(max(m, n))
 */
function add(n1:number[],n2:number[]):number[]{
    let i = n1.length - 1;
    let j = n2.length - 1;
    let loop_limit  = i>j?i:j;
    let carry = 0
    let ans = []
    for(let k=0;k<=loop_limit;k++){
        let d1 = i >= 0 ? n1[i] : 0;
        let d2 = j >= 0 ? n2[j] : 0;
        let sum = d1 + d2 + carry
        carry = Math.floor(sum/10);
        let num = Math.floor(sum%10);
        ans.push(num)
        i--;
        j--;
    }
    if (carry){
        ans.push(carry)
    }
    return ans.reverse()
}
let n1 = [8,5,9,2,4,1,8,3,9,3,8,7,8,6,8,9,4,1]
let n2 = [1,7,6,1,5,8,7,6,9,6,3,1,3,1,7,5,9,2,8]

console.log(add(n1,n2))