def reverseOnlyLetters(s: str) -> str:
    i = 0
    j = len(s) - 1
    
    reverse = list(s)
    
    while(i<j):
        if s[i].isalpha() and s[j].isalpha():
            temp = reverse[i]
            reverse[i] = reverse[j]
            reverse[j] = temp
            i += 1
            j -= 1
        elif not s[i].isalpha():
            i += 1
        else:
            j -= 1
            
    return "".join(reverse)


s = "Test1ng-Leet=code-Q!"
print(reverseOnlyLetters(s))