# Question 3

In an examination hall, a group of n students are sitting in a queue (indexed from 0 to n-1) and they are provided with question papers that have an integer number printed on it. Array A provides the integer values printed on the question paper for each student, for instance, `A[i]` is the integer number for student i.

After exam completion, the invigilator has to collect the answer sheets, so he instructed every student to handover their answer sheets to the last(n-1) student. However in all cases it is not possible to directly handover answer sheet to last student. They may have to share it with other students first, who will eventually pass the answer sheet to the last student. For instance, x's answer sheet may be passed from x to y student for t = 1st time. For t = 2nd time it may be passed from y to z student and for t = 3rd time it will be eventually passed to the last student.

There are certain rules that a student needs to follow before passing answer sheet to other student.

- Every time the answer sheet should move forward i.e it should move from student i to student j, where j>i.
- If the answer sheet has to be passed for t = 1,3,5,7,9.. time i.e. t%2 == 1: A student i can handover the answer sheet to student j only when A[i]<=A[j] and A[j] is the smallest value that satisfies this condition.
- If the answer sheet has to be passed for t = 2,4,6,8,10.. time i.e. t%2 ==0: A student i can handover the answer sheet to student j, where A[i]>=A[j] and A[j] is the largest value that satisfies this condition.

In case where a student has multiple other students to handover his/ her answer sheet, student with lowest index should be selected. You have to determine the total number of sheets submitted to the last student. Your solution should run in ``O(n log (n))` by using Red-Black trees to find next closet elements (smaller or larger). Any inbuilt function shouldn't be used for red black trees.

*Input Format:* First line contains the integer N, representing the number of students. And the next line contains the array A.

*Output Format:* Print the number of submitted sheets.

*Constraints:* `1 <= N < 20000` and `0 <= A[i]< 100000`

*Sample Input:*

```bash
5
34 67 43 78 89
```

*Sample Output:*

```bash
2
```
