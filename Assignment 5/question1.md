# Question 1

In a distant galaxy, a group of explorers discovered a cluster of planets scattered across the cosmos, each represented by a point `(x, y, z)` in 3D space. These planets were rich in resources, but they needed to be connected to facilitate trade and communication.

The explorers faced a challenge: they had to create the shortest network of interstellar routes to link all the planets. The distance between any two planets was determined by the formula $∣𝑥1−𝑥2∣ + ∣𝑦1−𝑦2∣ + ∣𝑧1−𝑧2∣$.

With a limited number of energy resources, they sought to find the minimum sum of all route lengths needed to connect every planet. How could they ensure that all planets were joined together in the most efficient way?

**Constraints:**

- 1 <= `n` < 1000
- `x`, `y`, `z` can be any integer (positive or negative)

**Input Format:**

- The first line contains an integer 𝑛 (the number of planets).
- The next `𝑛` lines each contain three space-separated integers representing the coordinates `𝑥`, `𝑦`, `𝑧` of each planet.

**Output:**
Print a single integer representing the minimum sum of all route lengths needed to connect all the planets.

**Sample Input 1:**

```bash
4
1 1 3
3 3 3
4 4 4
5 5 4
```

**Sample Output 1:**

```bash
9
```

**Explanation 1:**

Point 1 is connected to point 2 via a line of length 4. Similarly point 2 is connected to point 3 and point 3 is connected to point 4 via lines of length 3 and 2 respectively. This is the minimum possible length to join all points.

**Sample Input 2:**

```bash
5
0 0 0
1 1 0
0 1 1
1 0 1
1 1 1
```

**Sample Output 2:**

```bash
5
```

**Explanation 2:**

Point 5 is connected to point 2, point 3 and point 4 via a line of length 1 each. Finally, point 1 is connected to point 2 via lines of length 2.

**Sample Input 3:**

```bash
2
0 0 0
1 -1 0
```

**Sample Output 3:**

```bash
2
```

**Explanation 3:**

Point 1 is connected to point 2.
