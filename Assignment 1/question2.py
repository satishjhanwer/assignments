class Node:
    def __init__(self, value = 0, next = None):
        self.value = value
        self.next = next

def list_to_print(head):
    while head:
        print(head.value, end=" ")
        head = head.next
    print()

def swap_nodes(head, length):
    if length <= 1:
        return head
    
    # Iterate through the first half of the list
    for i in range(1, (length // 2) + 1):
        if i % 2 == 0:
            node_a = head
            for _ in range(i - 1):
                node_a = node_a.next
            
            node_b = head
            for _ in range(length - i):
                node_b = node_b.next
            
            # Swap values of node_a and node_b
            node_a.value, node_b.value = node_b.value, node_a.value
    
    return head

def main():
    n = int(input())
    elements = list(map(int, input().split()))
    
    # Create the linked list
    if not elements:
        return
    
    head = Node(elements[0])
    current = head
    for i in range(1, n):
        current.next = Node(elements[i])
        current = current.next
    
    # Perform the swap operations
    head = swap_nodes(head, n)
    
    # Print the final linked list
    list_to_print(head)

main()


def swap_elements(n, arr):
    for i in range(1, n//2 + 1):
        if i % 2 == 0:
            # Swap elements at index i and n-i+1 (1-based index)
            arr[i-1], arr[n-i] = arr[n-i], arr[i-1]
    return arr

def main():
    n = int(input())
    arr = list(map(int, input().split()))
    result = swap_elements(n, arr)
    print(" ".join(map(str, result)))

main()