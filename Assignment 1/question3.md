# Question 3

In the Library, each book has a unique `ID` and a recorded popularity score. The librarian, `Ms. Lila` now needs to find out how many books with a higher ID have a lower popularity score for each book with ID `i`. The popularity score is represented using an `Array A`, where `A[i]` represents the popularity of a book with ID `i`. And the number of books with a higher ID having a lower popularity score is represented using `Array X`, where `X[i]` corresponds to a book with ID `i`.
  
Allowed Time Complexity is *O(n log(n))*.

*Input Format:* First line contains the number of books. And the next line contains `n` space separated integers representing popularity of the books.

*Output Format:* Print the `Array X` with space separated elements.

*Sample Input:*

```bash
5
5 4 3 2 1
```

*Sample Output:*

```bash
4 3 2 1 0
```

*Sample Input:*

```bash
5
2 5 3 1 4
```

*Sample Output:*

```bash
1 3 1 0 0
```
