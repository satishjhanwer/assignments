def generate_binary_numbers(number):
    # Generate Binary Number from 1 to N - O (log (n)) 
    generated_binary_number = [bin(i)[2:] for i in range(1, number + 1)]
    return " ".join(generated_binary_number)

def main():
    binary_converted_output = []
    total = int(input())
    
    # Getting all the ending number till where we have convert the binary number and appending it to result list O(n)
    for _ in range(total):
        ending_number = int(input())
        binary_converted_output.append(generate_binary_numbers(ending_number))

    # Output each list in a new line O(n)
    for output in binary_converted_output:
        print(output)
main()
