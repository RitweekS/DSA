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