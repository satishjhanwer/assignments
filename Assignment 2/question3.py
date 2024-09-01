def print_rightmost_nodes(tree):
    if not tree:
        return []

    arr_len = len(tree)
    rightmost_nodes = []
    level_start = 1

    while level_start <= arr_len:
        level_end = min(level_start * 2 - 1, arr_len)
        rightmost = 0

        for i in range(level_start - 1, level_end):
            if tree[i] != 0:
                rightmost = tree[i]

        if rightmost != 0:
            rightmost_nodes.append(rightmost)

        level_start = level_start * 2

    return rightmost_nodes


def main():
    tree = eval(input().strip())
    rightmost_nodes = print_rightmost_nodes(tree)
    print(" ".join(map(str, rightmost_nodes)))


main()
