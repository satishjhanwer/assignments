# Question 3

In a kingdom of villages arranged in a grid, some were marked with `X` and had no well, while others marked with `Y` had a well. The villagers wanted to know how far they were from the nearest well.

One day, a traveler arrived to help. His task was to find the minimum distance from each village, whether `X` or `Y`, to the closest well.

- **Note 1:** The distance between any two adjacent villages is 1.
- **Note 2:** The distance is calculated using only vertical and horizontal movements (`up`, `down`, `left`, or `right`). Diagonal movements are not allowed.

**Input Format:**

- The first line of the input contains two integers, `m` and `n`, representing the size of the grid, with m rows and n columns.
- The second line contains a 2D array that indicates the availability of wells in each village. Each element of this array is either `X` (indicating no well) or `Y` (indicating the presence of a well).

**Constraints:**

- 1 <= `m`, `n` <= 1000
- 1 <= `m * n` <= 1000
- There is at least one `Y` in the grid.

**Output Format:**
Print a 2D array of the same shape as the input. In this array, each element should represent the minimum distance from that village to the nearest well.

**Sample Input 1:**

```bash
3 3
[[Y, Y, Y], [Y, X, Y], [Y, Y, Y]]
```

**Sample Output 1:**

```bash
[[0, 0, 0], [0, 1, 0], [0, 0, 0]]
```

**Explanation:**
For all villages with a well (marked as `Y`), the minimum distance to the well is 0.
For the village without a well (marked as `X`), the minimum distance to the nearest well is 1, as it is adjacent to several villages that have wells.

**Sample Input 2:**

```bash
3 3
[[Y, Y, Y], [Y, X, Y], [X, X, X]]
```

**Sample Output 2:**

```bash
[[0, 0, 0], [0, 1, 0], [1, 2, 1]]
```

**Explanation:**
For all villages with a well (marked as `Y`), the minimum distance to the well is 0.
For the village without a well in the second row (marked as `X`), the minimum distance to the nearest well is 1, as it is adjacent to the `Y` villages (in upward direction, left direction and even right direction)
For the corner villages without a well in the third row (marked as `X`), the minimum distance to the nearest well is 1, as it is adjacent to the `Y` villages in upward direction
For the centre villages without a well in the third row (marked as `X`), it do not have a direct adjacent well. The minimum distance to the nearest well is 2, as they can reach a well by moving in three feasible ways:

- Up and then left.
- Up and then right.
- Up and then up.
