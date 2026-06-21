from typing import List

def is_possible(trees:List[int],target:int,mid:int):
    sum_of_tree = 0
    for tree_ln in trees:
        cut = tree_ln - mid
        if cut<0:
            sum_of_tree +=0
        else:
            sum_of_tree += cut
    
    if sum_of_tree>=target:
        return True
    else:
        return False
    
    
def cutter_height(trees:List[int],target:int):
    n : int = len(trees)
    trees.sort()
    low = 0
    high = max(trees)
    ans = 0
    while(low<=high):
        mid = low + (high-low)//2
        if is_possible(trees=trees,target=target,mid=mid):
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    
    return ans

trees = [20,15,10,17]
target = 7

print(cutter_height(trees,target))