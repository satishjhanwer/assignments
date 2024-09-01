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

## Below are the some of the edge cases for this Question

I am assuming main method will take 3 inputs, `t` degree of the tree, `A` elements to insert, `B` elements to delete

```python
    print("case 1")
    main(3, [], [])
    print("case 2")
    main(3, [10], [10])
    print("case 3")
    main(3, [10, 20, 5, 6, 12, 30, 40], [10, 20])
    print("case 4")
    main(2, [10, 20, 5, 6, 12, 30, 40], [20, 10])
    print("case 5")
    main(2, [10, 10, 10, 10], [])
    print("case 6")
    main(2, [10, 20, 30, 40, 50, 60, 70, 80], [30])
    print("case 7")
    main(3, [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7])
    print("case 8")
    main(3, [10, 20, 30, 40, 50, 60, 70], [10, 30])
```
