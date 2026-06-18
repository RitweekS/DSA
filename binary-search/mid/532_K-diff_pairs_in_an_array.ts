// solution 1 - using two pointer
function k_diff_pair_s1(nums: number[], k: number): number {
  let unique_el = nums.sort((a,b)=>a-b)
  let pair = [];
  let i = 0;
  let j = 1;

  while (j <  unique_el.length) {
    let diff = unique_el[j]-unique_el[i]
    if (diff === k) {
      pair.push([unique_el[i], unique_el[j]]);
      i++;
      j++;
    }

    if (diff > k) {
      i++;
    } else {
      j++;
    }
    if(i==j){
        j++;
    }
  }
  console.log(pair)
  return pair.length;
}

// solution 2 - using binary search 
function k_diff_pair_s2(nums:number[],k:number):number{
  const binary_search = (nums:number[],target:number,start:number):number=>{
    let left = start;
    let right = nums.length-1;

    while(left<=right){
      let mid = left + Math.floor((right - left)/2)
      
      if(nums[mid]===target){
        return mid;
      }

      if(nums[mid]>target){
        right = mid - 1;
      }else{
        left = mid + 1;
      }
    }
    return -1;
  }

  let sorted_arr = nums.sort((a,b)=>a-b);
  let pair = new Set()
  for(let i=0;i<sorted_arr.length-1;i++){
    let start = i+1;
    let target = sorted_arr[i] + k
    let found = binary_search(sorted_arr,target,start)
    if(found>=0){
      pair.add(`${sorted_arr[i]},${sorted_arr[found]}`);   
    }
  }
  console.log(pair)
  return Array.from(pair).length
}

let nums = [1,1,1,1,1,1];
let k = 0;

console.log((k_diff_pair_s2(nums,k)))