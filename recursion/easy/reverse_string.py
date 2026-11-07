def reverse(s:list[str],start:int,end:int):

    if start >= end:
        return s

    temp = s[start]
    s[start] = s[end]
    s[end] = temp
    start += 1
    end -= 1
    return reverse(s,start,end)


print(reverse(["a","b","c"],0,2))    

    