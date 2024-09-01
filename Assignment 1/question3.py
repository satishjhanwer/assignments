from bisect import bisect_left, insort

def count_lower_popularity(arr):
    n = len(arr)
    result = [0] * n
    sorted_list = []

    for i in range(n - 1, -1, -1):
        # Using BS finding no of elements less than arr[i]
        pos = bisect_left(sorted_list, arr[i])
        result[i] = pos
        
        # Insert arr[i] into the sorted list while maintaining order
        insort(sorted_list, arr[i])

    return result

def main():
    arr_len = int(input())

    while True:
        try:
            arr = list(map(int, input().split()))
            if arr_len != len(arr):
                raise ValueError(arr_len)
            break
        except ValueError as e:
            print(f"Provided array's length is more than the defined length: {e}. Please input again")

    result = count_lower_popularity(arr)
    print(" ".join(map(str, result)))
    
main()
