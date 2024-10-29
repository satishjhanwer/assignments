# Question 2

In the Kingdom of Mathland, King Numerus had a treasure chest filled with `𝑁` gold coins. He summoned the kingdom's brightest knights and tasked them with a challenge: divide the coins into at least two positive parts, $[𝑎1, 𝑎2, …, 𝑎𝑇]$, such that: $𝑎1 + 𝑎2 + … + 𝑎𝑇 = 𝑁$

But there was a catch! The product of their shares, $𝑎1 x 𝑎2 x … x 𝑎𝑇$ , needed to be maximized. The knights quickly set to work, knowing that the one who found the best way to divide the treasure would earn the king’s favour and a grand reward. How would they achieve this?

BruteFore or Recursion shouldn't be used. You should only solve this problem using DP.

**Constraints:**

- 2 <= `N` < 60
- `T` >= 2

**Input Format:**

- Single Integer `N`.

**Output:**
Print the maximum possible value for $𝑎1 x 𝑎2 x … x 𝑎𝑇$

**Sample Input 1:**

```bash
8
```

**Sample Output 1:**

```bash
18
```

**Explanation 1:**

The ways to split 8 are $(1,7), (2,6), (3,5), (4,4), (2,3,3), (2,2,4), (2,2,4), (2,2,2,2)$ and so on.. Among them the maximum value will be obtained for `(2,3,3)` which is `2 x 3 x 3 = 18`

**Sample Input 2:**

```bash
5
```

**Sample Output 2:**

```bash
6
```

**Explanation 2:**

The ways to split 5 are $(1,4), (2,3), (1,2,2), (1,1,1,1,1)$ and so on.. Among them the maximum value will be obtained for `(2,3)` which is `2 x 3 = 6`
