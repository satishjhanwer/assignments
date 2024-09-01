# Overall cost is still O(n log(n))
def remove_minimum_distinct_elements(arr_len, arr):
    # Empty Array then do early return
    if arr_len == 0:
        return 0

    freq = {}

    # Count frequencies - O(n)
    for num in arr:
        # increase frequency
        freq[num] = freq.get(num, 0) + 1

    # Sort frequencies in descending order - O(n log(n))
    freq_values = sorted(freq.values(), reverse=True)

    total_removed = 0
    current_size = arr_len

    # Iterate and remove - O(n)
    for count in freq_values:
        total_removed += 1
        current_size -= count

        if current_size <= arr_len // 2:
            return total_removed

    return total_removed


def main():
    arr_len = int(input())

    while True:
        try:
            arr = list(map(int, input().split()))
            if arr_len != len(arr):
                raise ValueError(arr_len)
            break
        except ValueError as e:
            print(
                f"Provided array's length is more than the defined length: {e}. Please input again"
            )

    print(remove_minimum_distinct_elements(arr_len, arr))


main()
