"""
Problem: Minimum Time Difference
Difficulty: Medium
Source: https://leetcode.com/problems/minimum-time-difference/

Description:
Given a list of 24-hour clock time points, find the minimum minutes difference between
any two time points. Convert each time to minutes since midnight, sort, take the minimum
gap between consecutive times, and also check the wrap-around gap between the last and
first time (crossing midnight).

Time Complexity: O(n log n) — dominated by sorting the time points
Space Complexity: O(n) for the minutes list
"""

from typing import List
def findMinDifference(timePoints: List[str]) -> int:
    minutes = []
    for t in timePoints:
        h,m = map(int,t.split(":"))
        minutes.append(h*60+m)
    
    minutes.sort()
    ans = float("inf")

    for i in range(1, len(minutes)):
        ans = min(ans, minutes[i] - minutes[i - 1])
    
    ans = min(ans, minutes[0] + 1440 - minutes[-1])
    
    return ans

print(findMinDifference(["23:59","00:01"]))

