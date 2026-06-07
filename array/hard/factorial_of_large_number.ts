/**
 * Problem: Factorial of Large Number
 * Difficulty: Hard
 *
 * Description:
 * Compute the factorial of a large number (e.g., 50!) which overflows standard integer types.
 * The result is stored digit-by-digit in an array, and multiplication is performed manually with carry propagation.
 * This is a GFG problem on large number arithmetic.
 *
 * Time Complexity: O(n * d) where d is the number of digits in the result
 * Space Complexity: O(d)
 */
function factorial(num:number):number[]{
   let ans: number[] = [1]

    for(let i=2;i<=num;i++){
          let carry = 0;
        for(let j=0;j<ans.length;j++){
            let x = i*ans[j]+carry;
            ans[j] = Math.floor(x%10);
            carry = Math.floor(x/10)
        }
        while(carry){
        ans.push(Math.floor(carry%10))
        carry = Math.floor(carry/10);
    }
    }

    return ans.reverse()
}

console.log(factorial(50))