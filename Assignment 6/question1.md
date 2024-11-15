# Question 1

Given a weighted directed graph and two nodes `Source (A)` and `Sink (B)`, you have to determine the min cut solution to divide the graph into two parts where `A` belongs to one part and `B` belongs to the other part. Return the value of min-cut value.

**Note:**

- The graph can contain self loops.
- The vertices are numbered from 1 to N-1.

**Input Format:**

The first line contains the number of vertices `N` and two nodes `A` & `B`. The next `N` lines contain the rows for the adjacency matrix, where each value in the adjacency matrix represents weight `W`.

**Constraints:**

- 1<= `N` <= 50,
- 0<= `A`, `B` <= `N-1`,
- 1<= `W` <= 100

**Output Format:**

Return the min-cut value.

**Sample Input 1:**

```bash
2 0 1
0 10
0 0
```

**Sample Output 1:**

```bash
10
```

**Explanation:**
For min cut solution the edge 0->1 is to be removed whose weight is 10.

**Sample Input 2:**

```bash
8 0 7
0 15 0 0 10 0 0 0
0 0 6 0 3 0 0 0
0 0 0 4 0 0 6 0
0 0 0 0 0 3 0 10
0 0 0 0 0 12 0 0
0 0 0 0 0 0 6 0
0 0 0 1 0 0 0 5
0 0 0 0 0 0 0 0
```

**Sample Output 2:**

```bash
10
```

**Explanation:**
The edges between 2->3 (wt. 4), 6->3 (wt. 1) and 6->7 (wt. 5) are cut to obtain a min cut solution and the value is 10.
