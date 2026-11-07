def recursion(n):
    if n == 1:
        print(n)
        return
    
    print(n)
    return recursion(n-1)

recursion(3)


def print_array_elem(arr:list[int],index:int=0):
    if index == len(arr):
        return
    
    print(arr[index])
    index += 1
    
    return print_array_elem(arr,index)
    

arr:list[int] = [10,20,30,40,50]
print_array_elem(arr)