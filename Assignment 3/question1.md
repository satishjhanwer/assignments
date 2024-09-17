# Question 1

Imagine a magical carriage that needs to travel through an enchanted forest to reach a distant castle. The journey is measured in fairy miles, and there are special wells along the way where the carriage can collect fairy dust to keep going. Each well is described by a list with two numbers: where the well is located (in fairy miles) and how much fairy dust it has. The carriage starts with a certain amount of fairy dust and uses one unit of dust for each mile traveled. There is no limit to the quantity of fairy dust that the magical carriage can collect at any instant. Your task is to figure out the minimum number of times the carriage needs to stop at these wells to reach the castle. If it’s not possible to reach the castle, return -1.

Note that the carriage can still stop at a well even if it just reaches there by exhausting all the fairy dust. Also the carriage will be considered to have reached its destination if it arrives there with 0 dust remaining.

*Input Format:* The first line contains  the distance to the destination in fairy miles. The next line contains the initial fairy dust. And the last line contains the list of wells, where each entry represents its location and the magical dust it can provide. The wells are arranged in sorted order as per their location. The number of wells can be between 0 to 500 (inclusive).

*Output Format:* Print the minimum number of stops to reach the destination and -1 if it’s not possible.

*Constraints:* Solve this question using Heaps and no inbuilt function for the same is allowed.

*Sample Input:*

```bash
34

5

[[5,10], [10, 6], [12, 100]]
```

*Sample Output:*

```bash
2
```

*Explanation:* First stop at `[5,10]` and next stop at `[12, 100]`
