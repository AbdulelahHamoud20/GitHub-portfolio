# Name: Abdulelah Alanazi 
# Class: CS 325
#Assignment 1 

import sys

# Usage when run from the command line: python factoring_homework1.py <filename>.
# Example usage:                        python factoring_homework1.py 15
# Example output:                       (3, 5)

def factor(n):
    """
    Factors a product n of two prime factors p and q into its constituent factors.
    
    Parameters:
        n: An integer that is the product of two prime factors p and q.
    
    Returns:
        The pair (p, q) where p <= q.
    """

    # TODO: Implement this function!

    divisor = 2
    factors = []
    while divisor <= n:
        if n %divisor == 0:
            factors.append(divisor)
            n //= divisor
        else: 
            divisor += 1 
    return factors

    
n = int(sys.argv[1])
print(factor(n))