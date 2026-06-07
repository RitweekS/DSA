/**
 * Problem: Sqrt(x)
 * Difficulty: Easy
 *
 * Description:
 * Given a non-negative integer, compute and return the square root, truncated to the integer part.
 * First uses binary search to find the integer part of the square root, then refines with a floating-point binary search for precision.
 * This is LeetCode 69.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function sqrt(num: number): number {
   let left = 0;
   let right = num;
   let mid = Math.floor((left+right)/2)
   let sq = 0
   while(left<right){
        if((mid*mid)===num){
           return mid
        }
        if((mid*mid)>num){
           right = mid - 1;
        }else{
            left = mid+1
            sq=mid
        }
        mid = Math.floor((left+right)/2)
   }

    let low = sq;
    let high = sq + 1;

    while (high - low > 0.000001) {
        const mid = (low + high) / 2;

        if (mid * mid < num) {
            low = mid;
        } else {
            high = mid;
        }
    }
   return low
}

console.log(sqrt(3))