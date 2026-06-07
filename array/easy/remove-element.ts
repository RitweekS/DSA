/**
 * Problem: Remove Element
 * Difficulty: Easy
 *
 * Description:
 * Given an integer array and a value, remove all occurrences of that value in-place.
 * The relative order of the remaining elements may be changed.
 * Return the count of elements that are not equal to the given value.
 * This is LeetCode 27.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
// solution 1
function removeElement1(arr: number[],val: number): number[] {
    let k = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val){
            continue;
        }
        if(arr[i]!=val && k<i){
            let temp = arr[k];
            arr[k] = arr[i];
            arr[i] = temp;
            k++;
        }else if(arr[i]!=val){
            k++;
        }
    }
  return arr;
}

// solution 2
function removeElement2(arr: number[],val: number): number[] {
    let k = arr.length-1;
    let i = 0;
   while(i<=k){
    if(arr[i]===val && arr[k]===val){
        k--;
    }else if(arr[i]===val && arr[k]!==val){
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
        k--;
    }
    if(arr[i]!==val){
        i++;
    }
   }
   console.log("value of i and k",i,k)
  return arr;
}


console.log(removeElement2([0,1,2,2,3,0,4,2],2));