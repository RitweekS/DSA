/**
 * Problem: Find Nth Root of M
 * Difficulty: Medium
 *
 * Description:
 * Given two integers n and m, find the nth root of m (i.e., a number x such that x^n = m), or return -1 if no integer root exists.
 * Uses binary search over the range [0, m], computing mid^n at each step to narrow the search.
 * This is a GFG binary search problem.
 *
 * Time Complexity: O(log m)
 * Space Complexity: O(1)
 */
function search(n:number,m:number){
        let start = 0;
        let end = m;
        let ans = -1;
        while(start<=end){
            let mid = Math.floor((start + end)/2);
            let exValue = Math.pow(mid,n)
            if(exValue=== m){
                ans = mid;
                break;
            }

            if(exValue>m){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        return ans;
}

let n = 4, m = 16;

console.log(search(3,27));