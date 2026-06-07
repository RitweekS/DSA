/**
 * Problem: Spiral Matrix
 * Difficulty: Hard
 *
 * Description:
 * Given an m x n matrix, return all elements of the matrix in spiral order (left to right, top to bottom, right to left, bottom to top).
 * Uses four boundary pointers (top, bottom, left, right) that shrink inward as each layer of the spiral is printed.
 * This is LeetCode 54.
 *
 * Time Complexity: O(m * n)
 * Space Complexity: O(1)
 */
function spiral(){
    let arr = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12]
    ]

    let top = 0;
    let bottom = arr.length - 1;
    let left = 0;
    let right = arr[0].length - 1;

    while(top <= bottom && left <= right){
        // left → right
        for(let i = left; i <= right; i++){
            console.log(arr[top][i])
        }
        top++

        // top → bottom
        for(let i = top; i <= bottom; i++){
            console.log(arr[i][right])
        }
        right--

        // right → left
        if(top <= bottom){
            for(let i = right; i >= left; i--){
                console.log(arr[bottom][i])
            }
            bottom--
        }

        // bottom → top
        if(left <= right){
            for(let i = bottom; i >= top; i--){
                console.log(arr[i][left])
            }
            left++
        }
    }
}

spiral()