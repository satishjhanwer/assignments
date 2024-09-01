# Question 2

Given the lecture timings for a day, you have to determine the minimum number of lectures you should miss so that the timing for any two remaining lectures doesn't clash with each other. Do not use any inbuilt sorting algorithm. Instead, use Merge sort if required.

Allowed Time Complexity is *O(n log(n))*.

*Input Format:* The first line of the input contains the number of lectures in a day, represented as `n`. And the next n input lines denote the starting and ending of the lecture.

*Constraints:*  `1 < n <= 10^5`

*Output Format:* Print the minimum number of lectures the student should skip.

*Sample Input:*

```bash
3

1 10
2 5
7 10
```

*Sample Output:*

```bash
1
```

*Explanation:* Here the student should skip lecture [1, 10] to make other lectures non-overlapping. Otherwise he has to skip lectures [2, 5] and [7, 10] but it will not be minimum.
