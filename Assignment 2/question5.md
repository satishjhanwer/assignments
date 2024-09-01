# Question 5

From the given inputs, your task is to create a B Tree and perform insertion, deletion operations. At last, traverse the resultant B Tree (Pre Order Traversal) and print the result.

*Input Format:*

- First line contains an integer `T`: represents the degree of the B Tree `(T>2)`
- Second line contains an `Array A`: represents the elements to be inserted into the B Tree from `left` to `right` (A can contain `zero` or more elements).
- Third Line contains an `Array B`: represents the element to be deleted from the B Tree from `left` to `right` (After the completion of insertion of `Array A`) (`B` can contain `zero` or more elements)

*Output Format:* Print the `Pre-order traversal` of the B Tree and `None` if there are no elements in the tree.

*Sample Input:*

```bash
3
[1, 4, 8, 9, 2, 6, 3, 5, 10, 7]
[2, 1]
```

*Sample Output:*

```bash
3 4 5 6 7 8 9 10
```
