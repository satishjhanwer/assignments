# Question 5

In a digital city with a network of connected nodes, you’re given a directed graph with `V nodes` and `E edges`. From a specific starting `node S`, you need to find out how many unique paths exists to reach each node, including the starting node itself. Finally you need to return the sum of all such unique paths. Since the number of paths can be large, return the count `modulo 10^9+7`. Your task is to determine this count efficiently
  
Allowed Time Complexity is *O(V+E)*.

*Input Format:* The first line of input will contain three integers `V`, `E`, and `S`, separated by a single space, From the second line onwards, the next `E` lines will denote the directed edge of the graphs. Every edge is defined by two single space-separated integers `A` and `B`, which signifies a directed edge from vertex `A` to vertex `B`.

*Constraints:*  `1 <= S, V <= 10^5,  0 <= E <= 2*10^5` Where `S` represents the value of a given source node, `V` represents the number of vertices and `E` represents the number of edges.

*Output Format:* For each input, print a single line containing a single integer denoting the total number of paths `modulo 10^9+7`.

*Sample Input:*

```bash
3

1
2
4
```

*Sample Output:*

```bash
1
1 10
1 10 11 100
```
