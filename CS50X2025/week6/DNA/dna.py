import csv
import sys


def main():

    # Check for command-line usage
    if len(sys.argv) != 3:
        print("Usage: python dna.py data.csv sequence.txt")
        return

    # Read database file into a variable
    with open(sys.argv[1]) as file:
        reader = csv.DictReader(file)
        database = list(reader)
        str_sequences = reader.fieldnames[1:]  # move inside `with` so reader still exists

    # Read DNA sequence file into a variable
    with open(sys.argv[2]) as file:
        dna_sequence = file.read()

    # Find longest match of each STR in DNA sequence
    str_counts = {STR: longest_match(dna_sequence, STR) for STR in str_sequences}

    # Check database for matching profiles
    for person in database:
        if all(int(person[STR]) == str_counts[STR] for STR in str_sequences):
            print(person["name"])
            return

    print("No match")
    return


def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    for i in range(sequence_length):
        count = 0

        while True:
            start = i + count * subsequence_length
            end = start + subsequence_length

            if sequence[start:end] == subsequence:
                count += 1
            else:
                break

        longest_run = max(longest_run, count)

    return longest_run


main()
