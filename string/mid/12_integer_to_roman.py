"""
Problem: Integer to Roman
Difficulty: Medium
Source: https://leetcode.com/problems/integer-to-roman/

Description:
Given an integer, convert it to a roman numeral. Use a greedy approach: keep a
list of value-symbol pairs in descending order (including subtractive forms
like CM, CD, XC), and for each pair repeatedly subtract the value from num and
append the symbol while num is still large enough.

Time Complexity: O(1) — bounded by fixed-size value/symbol list (13 entries)
Space Complexity: O(1) — output length bounded by input range (num <= 3999)
"""
def intToRoman(num: int) -> str:
    romanStr = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    value = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    ans = ""
    for i in range(len(romanStr)):
        while(num>=value[i]):
            ans += romanStr[i]
            num -= value[i]
    
    return ans
num = 3749
print(intToRoman(num=num))