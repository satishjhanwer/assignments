# Question 2

In a bustling town called Riverton, there are `N` shops numbered from `1` to `N`. The town is connected by `M` water pipes, where each pipe is represented in the format `[FROM, TO, CAPACITY]`. Your task is to determine the maximum flow of water from shop `1` to shop `N` in Riverton.

**Input Format:**

- The first line of the input contains a single integer `T`, representing the number of test cases.
- Then, the first line of each test case contains two space-separated integers, `N` and `M`, representing the numbers of shops and number of water pipes, respectively.
- The next line `M` lines contain three space-separated integers representing a connection through a Pipe in the format `FROM`, `TO`, `CAPACITY`.

**Constraints:**

- 1 <= `T` <= 10
- 1 <= `N` <= 500
- 1 <= `M` <= (N\*(N-1))/2
- 1 <= `Pipes[0]` `From` <= N
- 1 <= `Pipes[1]` `To` <= N
- 1 <= `Pipes[2]` `Capacity` <= 500

**Output Format:**

- For each test case, print the maximum flow of water from shop 1 to shop N.
- Print the output of each test case in a separate line.

**Sample Input 1:**

```bash
2
4 3
1 2 2
1 3 4
3 4 3
3 2
1 2 1
2 3 1
```

**Sample Output 1:**

```bash
3
1
```

**Explanation:**

In the first test case, the flow from Shop 1 to Shop 3 is 4L and the flow from Shop 3 to Shop 4 is 3L. Since the max flow from Shop 1 to Shop 4 is restricted by the pipe between Shop 3 and Shop 4, the answer is 3L.

In the second test case, 1L water can flow from both pipes. Hence the answer is 1

**Sample Input 2:**

```bash
2
3 2
1 2 2
1 3 3
4 4
1 2 2
1 3 2
1 3 4
3 4 3
```

**Sample Output 2:**

```bash
3
3
```

**Explanation:**

In the first test case, there is only one path to reach from Shop 1 to Shop 3 and the flow for that pipe is 3L. Hence the answer is 3L.

In the second test case, the flow Shop 1 to Shop 4 is restricted by the pipe between Shop 3 and Shop 4, hence the answer is 3L.
