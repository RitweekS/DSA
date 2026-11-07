def find_key(word:str,target:str,index:int=0):
    if index == len(word):
        return False
    
    if word[index]==target:
        return True
        
    index+=1
    return find_key(word,target,index)

print(find_key("arr","r",0))