def last_Occurence(word:str,ch:str,index):
    if word[index] == ch:
        return index

    if index == 0 and index != ch:
        return -1
    
    index -= 1
    return last_Occurence(word,ch,index) 


print(last_Occurence("abcd","a",3))