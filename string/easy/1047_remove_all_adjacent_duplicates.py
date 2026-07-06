# def remove_duplicates(s: str) -> str:
#     i = 0
#     new_str = list(s)
#     while i<len(new_str)-1:
#         if new_str[i] == new_str[i+1]:
#             new_str.pop(i+1)
#             new_str.pop(i)
#             i = i-1
#         else:
#             i += 1
    
#     return "".join(new_str)

# better approach

"""
Problem: Remove All Adjacent Duplicates In String
Difficulty: Easy
Source: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

Description:
Given a string s, repeatedly remove pairs of adjacent, identical characters until none
remain, then return the resulting string.
Use a stack: push each character, and whenever it matches the top of the stack, pop the
top instead of pushing — this collapses adjacent duplicate pairs as they're found.

Time Complexity: O(n) — each character is pushed and popped at most once
Space Complexity: O(n) for the stack
"""

def remove_duplicates(s: str) -> str:
    stack = []    
    for ch in s:
        if stack and stack[-1] == ch:
            stack.pop()
        else:
            stack.append(ch)
    
    return "".join(stack)


s = "azxxzy"

print(remove_duplicates(s))