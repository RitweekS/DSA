/**
 * Problem: K-diff Pairs in an Array
 * Difficulty: Medium
 *
 * Description:
 * Given an integer array and an integer k, find all unique pairs (a, b) such that the absolute difference |a - b| equals k.
 * The brute-force implementation checks all pairs; the two-pointer variant is left as a stub.
 * This is similar to LeetCode 532.
 *
 * Time Complexity: O(n^2) for brute force
 * Space Complexity: O(n)
 */
function kDiffPair_BrutForce(arr:number[],k:number):number[][]|undefined{
    let ans: number[][]|undefined=[];
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            let diff = arr[i] - arr[j];
            if(Math.abs(diff)==k){
                ans.push([arr[i],arr[j]]);
            }
        }
    }
    return ans.length>0?ans:undefined;
}

function kDiffPair_twoPointer(arr:number[],k:number):number[][]|undefined{

    return undefined
}

function findUniquePair(arr : number[][]|undefined){
    if(arr===undefined) return
    return Array.from(new Set(arr.map((i)=>JSON.stringify(i)))).map((i)=>JSON.parse(i));
}

let test : number[] = [3,1,4,1,5]


console.log(findUniquePair(kDiffPair_BrutForce(test,2)))