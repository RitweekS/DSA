/**
 * Problem: Divide Two Numbers Using Binary Search
 * Difficulty: Easy
 * Source: https://www.geeksforgeeks.org/dsa/divide-two-number-using-binary-search-without-using-any-and-operator/
 *
 * Description:
 * Given a dividend and a divisor, compute the quotient without using the division (/) operator.
 * First, binary search over integers [0, dividend] finds the largest integer whose product with
 * the divisor does not exceed the dividend (the floor of the quotient).
 * Then a second binary search narrows the floating-point range [ans, ans+1] until the precision
 * reaches ~1e-6, returning the exact decimal quotient.
 *
 * Time Complexity: O(log n + log(1/ε)) — two binary searches, second bounded by precision
 * Space Complexity: O(1)
 */
function division(dividend:number,divisor:number):number{
    let left = 0;
    let right = dividend;
    let ans = 0
    while(left<=right){
        let mid = Math.floor(left+(right-left)/2)

        if(mid*divisor===dividend){
            return mid
        }

        if(mid*divisor>dividend){
            right = mid - 1;
        }else{
            left = mid+1
            ans = mid

        }
    }

    let low = ans;
    let high = ans + 1;

    while (high - low > 0.000001) {
        const mid = (low + high) / 2;

        if (mid*divisor<dividend) {
            low = mid;
        } else {
            high = mid;
        }
    }

   return low
}

let dividend = 11, divisor = 2
console.log(division(dividend,divisor))