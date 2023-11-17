# Name: Abdulelah Alanazi 
# Class: CS 325
#Assignment 1 

import sys
import timeit

# Usage when run from the command line: python max_subarray_homework1.py <filename>.
# Example usage:                        python max_subarray_homework1.py num_array_500.txt


def max_subarray_enumeration(A):
    """
    Computes the value of a maximum subarray of the input array by "enumeration."
    
    Parameters:
        A: A list (array) of n >= 1 integers.
    
    Returns:
        The sum of the elements in a maximum subarray of A.
    """

    # TODO: Implement this function!

    max_sum = float('-inf')
    start_index = 0
    end_index = 0 
    n = len(A)

    for i in range(n):
        for j in range(i, n):
            current_sum = 0 
            for k in range(i,j+1 ):
                current_sum += A[k]

            
            if current_sum > max_sum:
                max_sum = current_sum
                start_index = i 
                end_index = j 

    return A[start_index:end_index + 1 ], max_sum


  
    
def max_subarray_iteration(A):
    """
    Computes the value of a maximum subarray of the input array by "iteration."
    
    Parameters:
        A: A list (array) of n >= 1 integers.
    
    Returns:
        The sum of the elements in a maximum subarray of A.
    """

    # TODO: Implement this function!

    max_sum = float('-inf')
    start_index = 0
    end_index = 0 

    for i in range(len(A)):
        current_sum = 0 

        for j in range(i,len(A)):
            current_sum += A[j]
            if current_sum > max_sum:
                max_sum = current_sum
                start_index = i 
                end_index = j 
     
    return A[start_index:end_index +1]

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

for alg in [max_subarray_enumeration, max_subarray_iteration]:
    print(time_alg(alg, A))