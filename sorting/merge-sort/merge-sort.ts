/**
 * Algorithm: Merge Sort
 * Difficulty: Medium
 *
 * Description:
 * A divide-and-conquer algorithm that recursively splits the array into halves,
 * sorts each half, and merges them back together in order.
 * Guaranteed O(n log n) performance in all cases, making it more reliable than bubble/insertion/selection sort.
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
function merge(left:number[],right:number[]):number[]{
    let res = []
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }
    return [...res,...left.slice(i),...right.slice(j)]
}

function mergeSort(nums:number[]):number[]{
    if(nums.length<=1) return nums
    let mid = Math.floor(nums.length/2)
    const left = mergeSort(nums.slice(0,mid))
    const right = mergeSort(nums.slice(mid))
    return merge(left,right)
}

const nums = [23,13,41,2,3,45,12,100]
console.log(mergeSort(nums));