def check_palindrome(word:str,start:int,end:int) -> bool:
    if start >= end:
        return True
    
    if word[start] != word[end]:
        return False

    start += 1
    end -= 1

    return check_palindrome(word,start,end)

word = "abb"
start = 0
end = len(word)-1

print(check_palindrome(word,start,end))