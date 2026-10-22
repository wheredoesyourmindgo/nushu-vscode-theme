package dev.nushu;

import java.util.*;
import java.util.stream.Collectors;

/** Javadoc: a palette record. */
public record Palette(String name, Map<String, String> colors) {
    public static final int MAX = 256;

    @Override
    public String toString() {
        return "%s (%d colors)".formatted(name, colors.size());
    }

    public static void main(String[] args) throws Exception {
        var p = new Palette("nushu", Map.of("gold", "#9a6700", "ink", "#24292f"));
        List<String> hexes = p.colors().values().stream()
            .filter(h -> h.startsWith("#"))
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.toList());
        String text = """
            Text block with %s
            """.formatted(hexes);
        Object o = p;
        if (o instanceof Palette(String n, var c) && !c.isEmpty()) {
            System.out.println(n + text + (char) 65 + 3.5f + 10L + true);
        }
    }
}
