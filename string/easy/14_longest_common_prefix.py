from typing import List
def longestCommonPrefix(strs: List[str]) -> str:
    common = ""
    
    for i,ch in enumerate(strs[0]):
        for word in strs:
            if i>=len(word) or word[i]!=ch:
                return common
        common += ch
    return common

strs = ["dog","racecar","car"]
print(longestCommonPrefix(strs))