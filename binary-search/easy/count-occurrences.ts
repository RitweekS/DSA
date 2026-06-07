/**
 * Problem: Count Occurrences in Sorted Array
 * Difficulty: Easy
 *
 * Description:
 * Given a sorted integer array and a target, count the total number of times the target appears.
 * Uses two binary searches to find the first and last occurrence of the target, then computes the count from their positions.
 * This is a GFG problem on binary search.
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function searchFirstOccurrence(nums: number[],target:number):number{
    let start = 0;
    let end = nums.length - 1;
    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)
        if(nums[mid]===target){
            if(mid>=0 && nums[mid-1]===target){
                end = mid - 1;
            }else{
                return mid
            }
        }else if(nums[mid]>target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
function searchLastOccurrence(nums: number[],target:number):number{
    let start = 0;
    let end = nums.length - 1;
    while(start<=end){
        let mid = Math.floor(start + (end - start)/2)
        if(nums[mid]===target){
            if(mid<nums.length && nums[mid+1]===target){
                start = mid + 1;
            }else{
                return mid
            }
        }else if(nums[mid]>target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
function countOccurrence(nums:number[],target:number):number{
    let firstOccurrence = searchFirstOccurrence(nums,target);
    let lastOccurrence = searchLastOccurrence(nums,target);
    if(firstOccurrence===-1 && lastOccurrence===-1){
        return 0
    }else{
        return (lastOccurrence-firstOccurrence)+1
    }
}
const nums = [2 ,6, 8, 10,10]
const target = 11
console.log(countOccurrence(nums,target))