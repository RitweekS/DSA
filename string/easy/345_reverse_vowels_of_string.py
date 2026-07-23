"""
Problem: Reverse Vowels of a String
Difficulty: Easy
Source: https://leetcode.com/problems/reverse-vowels-of-a-string/

Description:
Given a string s, reverse only the vowels (both cases) in it and return the result.
Use two pointers from both ends: advance the left pointer past consonants and the right
pointer past consonants, and when both point at vowels, swap them and move both inward.

Time Complexity: O(n) — each pointer traverses the string once
Space Complexity: O(n) for the mutable list conversion of s
"""
def reverseVowels(s: str) -> str:
    vowels = "aeiouAEIOU"
    s_list = list(s)
    i = 0
    j = len(s_list) - 1
    
    while(i<j):
        if (s_list[i] in vowels) and (s_list[j] in vowels):
            print(s_list[i],s_list[j])
            temp = s_list[i]
            s_list[i] = s_list[j]
            s_list[j] = temp
            i += 1
            j -= 1
        elif s_list[i] not in vowels:
            i+=1
        else:
            j -= 1
    
    return "".join(s_list)
            

s = "IceCreAm"
print(reverseVowels(s=s))