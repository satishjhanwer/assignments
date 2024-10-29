# Question 3

Starting with an empty heap, you have to perform the Insertion, Deletion and Replace operations on the fibonacci heap and print the number of root nodes in the resultant structure.

**Input Format:** Here the first line contains the total number of operations `N`. Here, Operations can be of 3 types

- `I 10   - Insert 10`
- `D      - Delete Min`
- `R 10 1 - Replace the value of 10 with 1.`

So the next N lines will be one of the above three types.

**Constraints:**

- Number of Child for any `Node <= 4`
- Maximum Number of min heaps in a `Fibonacci Heap <= 50`

**Note:** The maximum number of children for any node will not exceed 4.

**Output:** Print the number of root nodes in a fibonacci heap, after performing all the operations in the same order as input.

**Sample Input 1:**

```bash
11
I 10
I 20
I 30
I 40
I 50
I 60
D
I 70
R 40 35
R 35 15
D
```

**Sample Output 1:**

```bash
2
```

**Sample Input 2:**

```bash
10
I 2
D
I 5
I 2
D
I 2
D
I 2
D
D
```

**Sample Output 2:**

```bash
None
```
