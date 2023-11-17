# Abdulelah Alanazi 
# CS 325 Assignment 2 




import sys
import timeit

# Usage when run from the command line: python max_subarray_homework2.py <filename>.
# Example usage:                        python max_subarray_homework2.py num_array_500.txt


def max_subarray_simplification_delegation(A):
    """
    Computes the value of a maximum subarray of the input array by "simplification and delegation."
    
    Parameters:
        A: A list (array) of n >= 1 integers.
    
    Returns:
        The sum of the elements in a maximum subarray of A.
    """

    # TODO: Implement this function!

    def find_max_crossing_subarray(A, low, mid, high):
        left_sum = float('-inf')
        sum = 0
        for i in range(mid, low - 1, -1):
            sum += A[i]  
        
            if sum > left_sum:
                left_sum = sum

        right_sum = float('-inf')
        sum = 0
        for j in range(mid + 1, high + 1):
            sum += A[j]
            if sum > right_sum:
                right_sum = sum

        return left_sum + right_sum

    def find_max_subarray(A, low, high):
        if high == low:
            return A[low]

        mid = (low + high) // 2

        left_sum = find_max_subarray(A, low, mid)
        right_sum = find_max_subarray(A, mid + 1, high)
        cross_sum = find_max_crossing_subarray(A, low, mid, high)

        return max(left_sum, right_sum, cross_sum)

    max_sum = find_max_subarray(A, 0, len(A) - 1)
    return max_sum












        


    




def time_alg(alg, A):
    """
    Runs an algorithm for the maximum subarray problem on a test array and times how long it takes.
    
    Parameters:
        alg: An algorithm for the maximum subarray problem.
        A: A list (array) of n >= 1 integers.
    
    Returns:
        A pair consisting of the value of alg(A) and the time needed to execute alg(A) in seconds.
    """



    start_time = timeit.default_timer() # The start time in seconds.
    max_subarray_val = alg(A)
    end_time   = timeit.default_timer() # The end time in seconds.
    return max_subarray_val, end_time - start_time

file_name = sys.argv[1]

f = open(file_name, "r")
A = [int(num) for num in f.readline().strip().split(" ")]
f.close()

for alg in [max_subarray_simplification_delegation]:
    print(file_name, time_alg(alg, A))