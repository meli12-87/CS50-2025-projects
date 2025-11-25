#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

typedef uint8_t BYTE;

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./recover card.raw\n");
        return 1;
    }

    FILE *inptr = fopen(argv[1], "r");
    if (inptr == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    BYTE buffer[512];
    FILE *outptr = NULL;
    char filename[8];
    int file_count = 0;

    while (fread(buffer, 1, 512, inptr) == 512)
    {

        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff &&
            (buffer[3] & 0xf0) == 0xe0)
        {

            if (outptr != NULL)
            {
                fclose(outptr);
            }

            sprintf(filename, "%03i.jpg", file_count);
            outptr = fopen(filename, "w");
            file_count++;
        }

        if (outptr != NULL)
        {
            fwrite(buffer, 1, 512, outptr);
        }
    }

    if (outptr != NULL)
    {
        fclose(outptr);
    }
    fclose(inptr);
    return 0;
}
