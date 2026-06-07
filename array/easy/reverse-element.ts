/**
 * Problem: Reverse String
 * Difficulty: Easy
 *
 * Description:
 * Given an array of characters, reverse the array in-place.
 * Write a function that reverses the input array of characters without allocating extra space.
 * This is LeetCode 344.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var reverseString = function(s:string[]) {
    let k = s.length - 1;
    let i = 0;
    while(i<=k){
        let temp = s[i];
        s[i] = s[k];
        s[k] = temp;
        k--;
        i++;
    }

    return s;
};

console.log(reverseString(["h","e","l","l","o"]))