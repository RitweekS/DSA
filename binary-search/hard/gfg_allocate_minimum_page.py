class Solution:
    def is_possible(arr,k,limit):
        student = 1
        pages = 0

        for book in arr:
            if pages+book <=limit:
                pages += book
            else:
                student += 1
                pages = book
                if student>k:
                    return False

        return True  

    def findPages(self, arr, k):
        # code here

        def findPage(arr,k):
            n_books = len(arr)
            if n_books<k:
                return -1

            low = max(arr)
            high = sum(arr)
            ans = -1
            while low<=high:
                mid = low + (high-low)//2
                if is_possible(arr,k,mid):
                    ans = mid
                    high = mid - 1
                else:
                    low = mid+1
                    
        return ans
