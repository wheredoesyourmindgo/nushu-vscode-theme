#include <stdio.h>
#include <stdlib.h>
#include "palette.h"

#define MAX_COLORS 16
#define HEX(r, g, b) (((r) << 16) | ((g) << 8) | (b))

typedef struct {
    const char *name;
    unsigned int rgb;
} color_t;

static const color_t palette[MAX_COLORS] = {
    { "gold", HEX(0x9a, 0x67, 0x00) },
    { "ink",  0x24292f },
};

int main(int argc, char **argv) {
    size_t n = sizeof palette / sizeof *palette;
    for (size_t i = 0; i < n && palette[i].name != NULL; ++i) {
        printf("%-6s #%06x\n", palette[i].name, palette[i].rgb);
    }
    char *buf = malloc(64);
    if (!buf) return EXIT_FAILURE;
    free(buf);
    return argc > 1 ? atoi(argv[1]) : 0; /* block comment */
}
