# Question 4

In the Kingdom of Numeria, there exists a grand tree with `n` enchanted nodes, each uniquely labeled from `1 to n`. The nodes are connected by magical undirected edges that form a tree structure. The wise Sage of Numeria has issued a challenge: find all the paths between nodes that are special in a unique way.

A path between two nodes `x` and `y` is deemed special if it contains exactly one prime number among the node labels along the path. Your task is to count how many such special paths exist in the tree.

*Details:*

- A path from `x` to `y` is a sequence of nodes starting at `x` and ending at `y`, where each consecutive pair of nodes is connected by an edge.
- Each path should be counted only once, regardless of the direction i.e. `(x,y)` and `(y,x)` are the same and considered only once.

*Input Format:*

- The first line contains an integer `n`, the number of nodes in the tree.
- IThe next line contains a list of `n-1` edges represented as `[x,y]`, indicating an edge between nodes `x` and `y`.

*Output Format:* Print the number of Paths.

*Sample Input:*

```bash
5
[[3, 2], [3, 5], [5, 1], [5, 4]]
```

*Sample Output:*

```bash
3
```

*Explanation:*

- 1st path - 5 to 1
- 2nd path - 5 to 4
- 3rd path - 1 to 4
