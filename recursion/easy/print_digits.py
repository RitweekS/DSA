def print_digits(num:int):
    if num==0:
        return
    
    print_digits(num // 10)
    print(num % 10)
    
    

print_digits(6470)