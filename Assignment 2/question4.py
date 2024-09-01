def is_prime(num):
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
    return True


def dfs(node, parent, tree, prime, count, path, all_paths):
    path.append(node)
    path_count = 0
    if prime[node]:
        count += 1

    # Check if the current path is special and has more than 1 node
    if count == 1 and len(path) > 1:
        path_count += 1
        all_paths.append(list(path))

    for neighbor in tree[node]:
        if neighbor != parent:
            path_count += dfs(neighbor, node, tree, prime, count, path, all_paths)

    path.pop()
    return path_count


def count_and_print_special_paths(n, edges):
    tree = [[] for _ in range(n + 1)]
    prime = [False] * (n + 1)

    # Build the tree
    for edge in edges:
        x, y = edge
        tree[x].append(y)
        tree[y].append(x)

    # Mark prime nodes
    for i in range(1, n + 1):
        prime[i] = is_prime(i)

    total_paths = 0
    all_paths = []

    # Calculate all special paths
    for i in range(1, n + 1):
        total_paths += dfs(i, -1, tree, prime, 0, [], all_paths)

    # Since we count each path twice, divide by 2
    total_paths //= 2

    # Print all special paths
    return total_paths


def main():
    n = int(input().strip())
    edges = eval(input().strip())
    result = count_and_print_special_paths(n, edges)
    print(result)


main()
