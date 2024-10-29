# Question 2

You are given a network of n cities connected by Indian railways. The connections between cities are represented as an array of trains, where each element `trains[i] = [A, B, C]` indicates that there is a train from `city A` to `city B` with a `travel cost of C`. The connections are bidirectional.

Your task is to find the lowest-cost route from a specified starting city to a destination city, subject to the constraint of making at most `m` stops along the way. If such a route does not exist, you should return `-1`.

**Input Format:** First line contains an integer `n` which denotes the number of cities (starting `from 0 to n-1`). Second line contains an array of trains which contains `[fromCity, toCity, cost]`, Third line contains the starting city. Fourth line contains the destination city. Fifth line contains the maximum number of stops `m`. (starting and ending nodes are not included).

**Constraints:**

- 1 <= `n <= 100`
- 0 <= `trains.length <= (n \* (n - 1) / 2)`

**Note:** Your algorithm must run in **O(n+e.m)** time complexity, where n is number of cities, `e` is number of trains and `m` is number of stops

**Output:** Output a single integer, which denotes the least price path from start to end.

**Sample Input 1:**

```bash
7

[[1, 2, 20], [1, 3, 10], [1, 6, 30], [2, 5, 40], [3, 4, 50], [4, 5, 60], [5, 6, 70], [0, 1, 22]]

0

6

12
```

**Sample Output 1:**

```bash
52
```

**Sample Input 2:**

```bash
5

[[0, 4, 39], [1, 4, 19], [2, 3, 49], [3, 4, 23]]

0

2

2
```

**Sample Output 2:**

```bash
111
```

**Sample Input 3:**

```bash
5

[[0, 4, 39], [1, 4, 19], [2, 3, 49], [3, 4, 23]]

0

2

1
```

**Sample Output 3:**

```bash
-1
```
