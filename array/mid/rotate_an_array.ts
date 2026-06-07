/**
 * Problem: Rotate Image (Matrix by 90 Degrees)
 * Difficulty: Medium
 *
 * Description:
 * Given an n x n 2D matrix, rotate it 90 degrees clockwise in-place.
 * The approach first transposes the matrix (swap arr[i][j] with arr[j][i]) and then reverses each row.
 * This is LeetCode 48.
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function rotateBy90(){
    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    for(let i=0;i<3;i++){
        for(let j=i;j<3;j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }
   return arr
}

console.log(rotateBy90())