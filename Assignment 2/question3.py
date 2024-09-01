def print_rightmost_nodes(tree):
    if not tree or len(tree) <= 1:
        return

    queue = [(1, 1)]
    rightmost_nodes = []
    rightmost_node = None

    while queue:
        index, level = queue.pop(0)

        if index < len(tree) and tree[index] != 0:
            rightmost_node = tree[index]

        left_index = 2 * index
        right_index = 2 * index + 1

        if left_index < len(tree) and tree[left_index] != 0:
            queue.append((left_index, level + 1))
        if right_index < len(tree) and tree[right_index] != 0:
            queue.append((right_index, level + 1))

        if not queue or queue[0][1] != level:
            rightmost_nodes.append(rightmost_node)
            rightmost_node = None

    return rightmost_nodes


def main():
    tree = eval(input().strip())

    rightmost_nodes = print_rightmost_nodes(tree)

    print(" ".join(map(str, rightmost_nodes)))


main()
