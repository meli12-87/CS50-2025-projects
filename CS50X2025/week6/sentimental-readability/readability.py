from cs50 import get_string
import re


def main():
    input = get_string("Enter your text: ")

    grade = Calculate_grade(input)

    if grade >= 16:
        print("Grade 16+\n")
    elif grade < 1:
        print("Before Grade 1\n")
    else:
        print(f"Grade: {grade}\n")


def Calculate_grade(input):

    nb_letters = count_letters(input)
    nb_words = count_words(input)
    nb_sentences = count_sentences(input)

    L = (nb_letters * 100) / float(nb_words)

    S = (nb_sentences * 100) / float(nb_words)

    index = 0.0588 * L - 0.296 * S - 15.8

    return round(index)


def count_letters(text):
    return len(re.findall(r"[a-zA-Z]", text))


def count_words(text):
    return len(text.split())


def count_sentences(text):
    return len(re.split(r"[.!?]", text)) - 1


if __name__ == "__main__":
    main()
