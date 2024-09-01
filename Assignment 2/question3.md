# Question 3

Given a Binary Tree, you need to print the rightmost node of each Level, starting from top to Bottom.

Allowed Time Complexity is *O(n log(n))*.

*Input Format:*

- You are given the array representation of a binary tree starting with `index 1`. For every node `i`, its children are stored at index `2i` and `2i+1`.
- If the value for any node is `0`, it represents the absence of that node.

*Output Format:* Print all rightmost elements in a single line separated by a whitespace. The elements should be ordered from top to bottom.

*Sample Input 1:*

```bash
[2, 3, 1, 4, 0, 5]
```

*Sample Output 1:*

```bash
2 1 5
```

*Sample Input 2:*

```bash
[5, 2, 0, 4, 3, 0, 0, 0, 0, 1]
```

*Sample Output 2:*

```bash
5 2 3 1
```
