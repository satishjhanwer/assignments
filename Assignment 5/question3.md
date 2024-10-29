# Question 3

In the vibrant city of Jodhpur, known for its stunning blue buildings and rich culture, there was a beautiful rectangular garden laid out in a grid of `𝑛 × 𝑚` plots. Each plot was either ready for sowing seeds for vibrant flowers (marked by 1) or blocked by thorny bushes (marked by 0).

As the sole caretaker of this garden, you aimed to maximize the number of flower plots you could plant seeds in. However, there were strict rules to follow:

- **Horizontal Adjacency:** If you occupy a plot at position `(𝑟,𝑐)`, you cannot occupy the plots at `(𝑟,𝑐−1)` or `(𝑟,𝑐+1)`.
- **Diagonal Adjacency:** If you occupy a plot at position `(𝑟,𝑐)`, you cannot occupy the plots at `(𝑟-1,𝑐−1)` or `(𝑟-1,𝑐+1)`.

Your challenge is clear: find the best way to sow seeds in the available flower plots while respecting these rules. How many plots could you nurture to ensure a breathtaking bloom while maintaining the garden's beauty and order?

![violating scenarios](Untitled%20drawing.png)

At last, Figure shows an example of a `4x4` grid, where a few cases violating the above conditions are shown. However, there can be other violating scenarios as well.

BruteFore or Recursion shouldn't be used. You should only solve this problem using DP.

**Constraints:**

- 1 <= n, m <= 8

**Input Format:**

You are given two integers `n` and `m`. The next `n` lines contain a binary string of size `m`, where `0` represents a block that is blocked and `1` represents a block that is ready for sowing seeds.

**Output:**

Print `X`, the maximum number of plots that can be used to sow seeds.

**Sample Input 1:**

```bash
5 2
10
00
01
00
10
```

**Sample Output 1:**

```bash
3
```

**Explanation 1:**

If we occupy all the 3 available blocks, none of the conditions are violated.

**Sample Input 2:**

```bash
3 3
010
100
010
```

**Sample Output 2:**

```bash
2
```

**Explanation 2:**

In the above case, if we occupy the available plots in the first row and then in the last row all the conditions are satisfied. But as we include, available plot in the 2nd row, the second condition will be violated.
