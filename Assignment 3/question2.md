# Question 2

Given a list of N 3D points, your task is to determine the K closes points to the origin. Each points is represented as [x,y,z] and the distance from origin is calculated as per euclidean distance.

*Input Format:* The first line contains the number of 3D points: N. The next line contains the integer K and the last line contains the list of 3D points.

*Output Format:* Print the K closest points to the origin in the increasing order of their distance.

*Constraints:* Solve this question using Heaps and no inbuilt function is allowed for the same.

*Sample Input:*

```bash
3

2

[[-6, -9, -4], [6, -2, 0], [-5, -4, 2]]
```

*Sample Output:*

```bash
[[6, -2, 0], [-5, -4, 2]]
```
