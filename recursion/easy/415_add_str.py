
def add_strings_using_loop(num1: str, num2: str) -> str:
    carry = 0

    n1_len = len(num1)
    n2_len = len(num2)

    max_len = max(n1_len, n2_len)
    ans = ""

    i = n1_len - 1
    j = n2_len - 1

    for _ in range(max_len):
        f1 = ord(num1[i]) - ord("0") if i >= 0 else 0
        f2 = ord(num2[j]) - ord("0") if j >= 0 else 0

        total = f1 + f2 + carry

        digit = total % 10
        carry = total // 10

        ans = str(digit) + ans

        i -= 1
        j -= 1

    if carry:
        ans = str(carry) + ans

    return ans

def add_strings_using_recursion(num1: str, num2: str,ans:str="",index:int=1,carry:int=0)->str:
    i = len(num1) - index
    j = len(num2) - index
    max_len = max(len(num1), len(num2))
    if index == max_len+1:
        if carry:
            ans = str(carry) + ans
            return ans
        else:
            return ans

    int_num1 = ord(num1[i]) - ord('0') if i >= 0 else 0
    int_num2 = ord(num2[j]) - ord('0') if j >= 0 else 0
    total = int_num1 + int_num2 + carry
    carry =  total // 10
    digit = total % 10
    ans = str(digit) + ans
    return add_strings_using_recursion(num1,num2,ans,index+1,carry)

    

num1 = "11"
num2 = "123"

# print(add_strings_using_loop(num1, num2))
print(add_strings_using_recursion(num1, num2))