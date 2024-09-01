# Question 2

In a contest, competitors were given a magical linked list of integers arranged in order (starting index is considered to be 1):

`A1 -> A2 -> A3 …… -> An`

Their task was to swap elements according to these rules:

- For every even index `i` (where i = 1, 2, ..., n/2), swap the node at position `i` with the node at position `n-i+1`.
- Print the final sequence of the linked list, separated by spaces.
  
Allowed Space Complexity is *O(1)*.

*Input Format:* The first line of the input contains the number of elements in the linked list. And the elements of the linked list are provided in the next line.

*Output Format:* Print all the elements of the linked list in a single line, where each element is separated by a space.

*Sample Input:*

```bash
4
1 2 3 4
```

*Sample Output:*

```bash
1 3 2 4
```
