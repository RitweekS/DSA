/**
 * Problem: Majority Element
 * Difficulty: Medium
 *
 * Description:
 * Given an array of size n, find the majority element that appears more than n/2 times.
 * This solution uses a hash map to count occurrences of each element and returns the one with the highest count.
 * This is LeetCode 169.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
const majorityElement = (nums:number[]) =>{
    const lookup_table: Record<string, number> = {}
    nums.forEach((value)=>{
        if (lookup_table[value]){
            lookup_table[value] +=1
        }else{
            lookup_table[value] = 1
        }
    })
    let max_element = -1;
    let maxValue = -1;
    for (const [key,value] of Object.entries(lookup_table)){
        if (maxValue<value){
            maxValue = value
            max_element = Number(key)
        }
    }
    return max_element;
}

let nums = [3,2,3]
console.log(majorityElement(nums));