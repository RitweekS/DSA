"""
Problem: Allocate Minimum Number of Pages
Difficulty: Hard
Source: https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1

Description:
Given an array of books where arr[i] is the number of pages in the i-th book, and k students,
allocate books to students such that each student gets a contiguous set of books and the maximum
pages assigned to any student is minimized.
Binary search on the answer: search the range [max(arr), sum(arr)] for the smallest maximum
that allows a valid allocation to k students. A greedy check verifies if a given maximum is feasible.

Time Complexity: O(n * log(sum - max)) — binary search * linear feasibility check per iteration
Space Complexity: O(1)
"""
def findPages(arr, k):
        if len(arr)<k:
            # as number of student is more then book
            return -1
        
        # books to each students
        no_book_each_student = len(arr)//k
        