# Question 1

You are given a binary tree where nodes are labelled with integers. The levels of the tree are
defined as follows:

- The root node is at Level 0.
- Its direct children are at Level 1.
- Each subsequent level corresponds to the children of nodes from the previous level. Let Set X denote the whole numbers divisible by 2 and Set Y denote the whole numbers not divisible by 2.

You need to determine if the tree satisfies the following conditions:

- Condition for nodes at Levels belonging to set X:
  - All nodes at levels (e.g., Level 0, Level 2, Level 4, etc.) must not be divisible by 2.
- Condition for nodes at Levels belonging to set Y:
  - All nodes at levels (e.g., Level 1, Level 3, Level 5, etc.) must be divisible by 2.

Allowed Time Complexity is *O(n log(n))*.

*Input Format:*

- The first line contains an integer `n`, the number of nodes in the tree.
- The next line contains a list of `n-1` edges represented as `[x,y]`, indicating an edge between nodes `x` and `y`.

*Output Format:*

- Print True if the tree satisfies both conditions.
- Print False if the tree does not satisfy one or both conditions.

*Important:* The first element in the list of edges represents the root node. For instance in *Sample Input 1*, 11 is the root node.

*Sample Input 1:*

```bash
5
[[11, 4], [4, 7], [11, 2], [2, 9]]
```

*Sample Output 1:*

```bash
True
```

*Sample Input 2:*

```bash
5
[[2, 11], [11, 4], [2, 7], [7, 8]]
```

*Sample Output 2:*

```bash
False
```
