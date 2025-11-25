#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string name = get_string("Enter Your Name, Please: ");

    printf("Hello, %s\n", name);
}
