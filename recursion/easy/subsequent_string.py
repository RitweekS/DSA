def subsequent(s:str,output:str,i:int):
    if i >= len(s):
        print(output)
        return

    """exclude"""
    subsequent(s,output,i=i+1)
    output = output + s[i]
    subsequent(s,output,i=i+1)
    
s = "abc"
subsequent(s,"",0)
