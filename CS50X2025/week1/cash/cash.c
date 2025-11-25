#include <cs50.h>
#include <stdio.h>

int main()
{
    int cents;
    do
    {
        cents = get_int("Change Owed: ");
    }
    while (cents < 0);

    int coins = 0;

    coins += cents / 25;
    cents %= 25;

    coins += cents / 10;
    cents %= 10;

    coins += cents / 5;
    cents %= 5;

    coins += cents / 1;
    cents %= 1;

    printf("%i\n", coins);
}
