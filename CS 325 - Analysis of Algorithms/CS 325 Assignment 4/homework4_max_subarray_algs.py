import sys
import timeit

# Usage when run from the command line: python max_subarray_algs.py <filename>.
# Example usage:                        python max_subarray_algs.py num_array_10000.txt

file_name = sys.argv[1]

f = open(file_name, "r")
A = [int(num) for num in f.readline().strip().split(" ")]
f.close()

def max_subarray_recursion_inversion(A):
    """
    Computes the value of a maximum subarray of the input array by "recursion inversion" (i.e., dynamic programming).
    
    Parameters:
        A: A list (array) of n >= 1 integers.
    
    Returns:
        The sum of the elements in a maximum subarray of A.
    """

    # TODO: Implement this function!
    n = len(A)
    max_sum = float('-inf')
    current_sum = 0

    for i in range(n):
        current_sum = max(A[i], current_sum +A[i])
        max_sum = max(max_sum, current_sum)

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

for alg in [max_subarray_recursion_inversion]:
    print(file_name, time_alg(alg, A))