from collections import deque, defaultdict


def check_if_tree_is_valid(n, edges):
    if n == 1:
        return True

    # Build the adjacency list
    adj_list = defaultdict(list)
    for u, v in edges:
        adj_list[u].append(v)
        adj_list[v].append(u)

    # Start BFS from the root node
    root = edges[0][0]
    queue = deque([(root, 0)])
    visited = {root}

    while queue:
        node, level = queue.popleft()
        # Check the condition for the current level
        if (level % 2 == 0 and node % 2 == 0) or (level % 2 != 0 and node % 2 != 0):
            return False

        for neighbor in adj_list[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, level + 1))

    return True


def main():
    n = int(input().strip())

    if n <= 0:
        print(False)
        return

    edges = eval(input().strip())
    result = check_if_tree_is_valid(n, edges)
    print(result)


main()
