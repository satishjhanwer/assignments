def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i][1] < right_half[j][1]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1


def minimum_lectures_to_skip(lectures):
    merge_sort(lectures)

    non_overlapping_count = 1
    last_end_time = lectures[0][1]

    for i in range(1, len(lectures)):
        if lectures[i][0] >= last_end_time:
            non_overlapping_count += 1
            last_end_time = lectures[i][1]

    return len(lectures) - non_overlapping_count


def main():
    n = int(input().strip())
    lectures = []

    for _ in range(n):
        start, end = map(int, input().strip().split())
        lectures.append((start, end))

    print(minimum_lectures_to_skip(lectures))


main()
