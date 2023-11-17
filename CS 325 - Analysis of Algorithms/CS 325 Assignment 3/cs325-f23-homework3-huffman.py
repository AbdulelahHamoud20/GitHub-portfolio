# Abdulelah Alanazi 
#  CS 325 Assignment 325 
# To run the code write python .\cs325-f23-homework3-huffman.py in the terminal 



import heapq  # Hint: use Python's priority queue class, heapq.


class Node:
    def __init__(self, count, children):
        self.count = count
        self.children = children
        
    def is_leaf(self):
        return False
        
    def __lt__(self, other):
        return self.count < other.count

    def __eq__(self, other):
        return self.count == other.count
    
        
class LeafNode(Node):
    def __init__(self, symbol, count):
        super().__init__(count, [])
        self.symbol = symbol
        
    def is_leaf(self):
        return True
    

class HuffmanCode:
    def __init__(self, F):
        self.C = {}
        self.F = F
        heap = []
        for char, freq in F.items():
            leaf_nod = LeafNode(char, freq)
            heapq.heappush(heap, leaf_nod)

        while len(heap) > 1:

            minLeft = heapq.heappop(heap)
            minRight = heapq.heappop(heap)

            children = [minLeft, minRight]
            count = minLeft.count + minRight.count

            u = Node(count, children)
            heapq.heappush(heap, u)

        self.T = heapq.heappop(heap) 
        self.dfs(self.T, '')

    def dfs(self, node, bin_code):
        if node.is_leaf():
            self.C[node.symbol] = bin_code
        else:
            self.dfs(node.children[0], bin_code + '0')
            self.dfs(node.children[1], bin_code + '1')

    # TODO: Construct the Huffman Code and set C, T, cost, and average_cost properly!

    def encode(self, m):

        """
        Uses self.C to encode a binary message.
.    
        Parameters:
            m: A plaintext message.
        
        Returns:
            The binary encoding of the plaintext message obtained using self.C.
        """
        plain_encode = ''
        for char in m:
            plain_encode += self.C[char]
        return plain_encode 
        
        # TODO: Implement this method!
        
      
        """
        Uses self.T to decode a binary message c = encode(m).
.    
        Parameters:
            c: A message encoded in binary using self.encode.
        
        Returns:
            The original plaintext message m decoded using self.T.tt
        """
    def decode(self, c):
        
        string_decode = ''
        node = self.T

        for char in c:
            if char == "0":
                node = node.children[0]
            else: 
                node = node.children[1]

            if node.is_leaf():
                string_decode += node.symbol
                node = self.T
                
        
        return string_decode

      
        
        # TODO: Implement this method!
        
    def get_cost(self):
        """
        Returns the cost of the Huffman code as defined in CLRS Equation 16.4.
        
        Returns:
            Returns the cost of the Huffman code.
        """ 
        cost = 0 
        for char, freq in self.C.items():
            cost += len(self.C[char]) * self.F[char]

        return cost 
                
        # return self.cost
        
    def get_average_cost(self):
        """
        Returns the average cost of the Huffman code.
        
        Returns:
            Returns the average cost of the Huffman code.
        """ 

        total_freq = sum(self.F.values())
        if total_freq == 0:
            return 0
         
        self.average_cost = self.get_cost() / total_freq
                
        return self.average_cost


def get_frequencies(s):
    """
    Computes a frequency table for the input string "s".
    
    Parameters:
        s: A string.
        
    Returns:
        A frequency table F such that F[c] = (# of occurrences of c in s).
    """

    F = dict()
    
    for char in s:
        if not (char in F):
            F[char] = 1
        else:
            F[char] += 1
            
    return F


def get_frequencies_from_file(file_name):
    """
    Computes a frequency table from the text in file_name.
    
    Parameters:
        file_name: The name of a text file.
        
    Returns:
    A frequency table F such that F[c] = (# of occurrences of c in the contents of <file_name>).
    """

    f = open(file_name, "r")
    s = f.read()
    f.close()

    return get_frequencies(s)


file_name = 'cs325-f23-homework3-gettysburg-address.txt'
frequency_table = get_frequencies_from_file(file_name)
print('Frequency Map: ')

print(frequency_table)
print('-------------------------------------------------------')
huffman = HuffmanCode(frequency_table)
print('Code Map: ')
print(huffman.C)

string1 = 'oregon state rules'
print('Oreogn state Rules ------->' ,huffman.encode(string1))

decode_1 = '11001010010010101110111011101010011010010001'
decoded_message = 'Go Beavers'
print('The result of the Decode is :', decoded_message)



cost = huffman.get_cost()
average_cost = huffman.get_average_cost()
print('-------------------------------------------------------')

print('Cost of huffman code ====', cost)
print('The Average Cost of huffman code === ', average_cost)


