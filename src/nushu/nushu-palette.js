const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

module.exports = {
  classic: {
    black: "#1b1f00",
    white: "#f8f6f1",
    gray: ["#f3f0e8", "#efebe0", "#e7e1d0", "#444e00", "#2f3600", "#252a00"],
  },
  light: {
    white: "#f8f6f1", // hsl(43deg 33% 96%) lch(97% 3 89deg) pen paper coffee background [Used w/ Editor Bg]
    black: lightColors.scale.black, // same as 'light default' theme
    border: "#d6d4cf", // lch(85% 3 89deg), -9% lightness to gray 1 (#f0eee8) [Used w/ borders]
    secondary: "#eae8e2", // lch(92% 3 89deg), -2% lightness to gray 1 (#f0eee8) 
    tertiary: "#e4e2dd", // lch(90% 3 89deg), -4% lightness to gray 1 (#f0eee8)
    quaternary: "#dfddd7", // lch(88% 3 89deg), -6% lightness to gray 1 (#f0eee8)
    // "gray": [
    //   "#f6f8fa", // 11
    //   "#eaeef2", // 6
    //   "#d0d7de", // 17
    //   "#afb8c1", // 11
    //   "#8c959f", // 8
    //   "#6e7781", // 6
    //   "#57606a", // 4
    //   "#424a53", // 0
    //   "#32383f", // 0
    //   "#24292f" // 2
    // ], // 65 occurrences
    gray: [
      "#f0eee8", // lch(94% 3 89deg), -3% lightness to white, custom darker shade of pen paper coffee [Used w/ quick input panels such as command palette and find]
      lightColors.scale.gray[1],
      lightColors.scale.gray[2],
      lightColors.scale.gray[3],
      lightColors.scale.gray[4],
      lightColors.scale.gray[5],
      lightColors.scale.gray[6],
      lightColors.scale.gray[7],
      lightColors.scale.gray[8],
      lightColors.scale.gray[9],
    ],
  },
  /*
    https://hihayk.github.io/scale/#0/9/50/80/-51/67/20/14/292521/41/37/33/white didn't yield gradient that scaled well, borders were too bright for dark theme. Instead, the defaults will be used for shades of gray other than the darkest shade, which is used for the editor background.
  */
  dark: {
    white: darkColors.scale.white, // same as 'dark default' theme
    black: "#2e2925", // lch(17% 4 69deg) +3% lightness to gray 10, custom brighter shade of earthsong background, [Used w/ quick input panels such as command palette and find]
    border: "#423d38", // lch(26% 4 69deg), +9% lightness to black (#2e2925) [Used w/ borders]
    secondary: "#322d29", // lch(19% 4 69deg), +2% lightness to black (#2e2925) 
    tertiary: "#36322d", // lch(21% 4 69deg), +4% lightness to black (#2e2925)
    quaternary: "#3b3631", // lch(23% 4 69deg), +6% lightness to black (#f0eee8)
    // "gray": [
    //   "#f0f6fc", // 1
    //   "#c9d1d9", // 1
    //   "#b1bac4", // 1
    //   "#8b949e", // 12
    //   "#6e7681", // 18
    //   "#484f58", // 3
    //   "#30363d", // 20
    //   "#21262d", // 3
    //   "#161b22", // 10
    //   "#0d1117" // 11
    // ], // 79 occurrences
    gray: [
      darkColors.scale.gray[0],
      darkColors.scale.gray[1],
      darkColors.scale.gray[2],
      darkColors.scale.gray[3],
      darkColors.scale.gray[4],
      darkColors.scale.gray[5],
      darkColors.scale.gray[6],
      darkColors.scale.gray[7],
      darkColors.scale.gray[8],
      "#27231e", // lch(14% 4 69deg) custom slightly darker earthsong background [Used w/ Editor Bg]
      // "#292521", hsl(30deg 11% 15%) lch(15% 4 69deg) earthsong background doesn't feel dark enough for editor bg
    ],
  },
  temp: {
    white: "TMP_WHITE",
    black: "TMP_BLACK",
    foreground: "TMP_FOREGROUND",
    gray: [
      "TMP_GRAY_0",
      "TMP_GRAY_1",
      "TMP_GRAY_2",
      "TMP_GRAY_3",
      "TMP_GRAY_4",
      "TMP_GRAY_5",
      "TMP_GRAY_6",
      "TMP_GRAY_7",
      "TMP_GRAY_8",
      "TMP_GRAY_9",
    ],
    yellow: [
      "TMP_YELLOW_0",
      "TMP_YELLOW_1",
      "TMP_YELLOW_2",
      "TMP_YELLOW_3",
      "TMP_YELLOW_4",
      "TMP_YELLOW_5",
      "TMP_YELLOW_6",
      "TMP_YELLOW_7",
      "TMP_YELLOW_8",
      "TMP_YELLOW_9",
    ],
    pink: [
      "TMP_PINK_0",
      "TMP_PINK_1",
      "TMP_PINK_2",
      "TMP_PINK_3",
      "TMP_PINK_4",
      "TMP_PINK_5",
      "TMP_PINK_6",
      "TMP_PINK_7",
      "TMP_PINK_8",
      "TMP_PINK_9",
    ],
    green: [
      "TMP_GREEN_0",
      "TMP_GREEN_1",
      "TMP_GREEN_2",
      "TMP_GREEN_3",
      "TMP_GREEN_4",
      "TMP_GREEN_5",
      "TMP_GREEN_6",
      "TMP_GREEN_7",
      "TMP_GREEN_8",
      "TMP_GREEN_9",
    ],
    coral: [
      "TMP_CORAL_0",
      "TMP_CORAL_1",
      "TMP_CORAL_2",
      "TMP_CORAL_3",
      "TMP_CORAL_4",
      "TMP_CORAL_5",
      "TMP_CORAL_6",
      "TMP_CORAL_7",
      "TMP_CORAL_8",
      "TMP_CORAL_9",
    ],
    orange: [
      "TMP_ORANGE_0",
      "TMP_ORANGE_1",
      "TMP_ORANGE_2",
      "TMP_ORANGE_3",
      "TMP_ORANGE_4",
      "TMP_ORANGE_5",
      "TMP_ORANGE_6",
      "TMP_ORANGE_7",
      "TMP_ORANGE_8",
      "TMP_ORANGE_9",
    ],
    purple: [
      "TMP_PURPLE_0",
      "TMP_PURPLE_1",
      "TMP_PURPLE_2",
      "TMP_PURPLE_3",
      "TMP_PURPLE_4",
      "TMP_PURPLE_5",
      "TMP_PURPLE_6",
      "TMP_PURPLE_7",
      "TMP_PURPLE_8",
      "TMP_PURPLE_9",
    ],
    red: [
      "TMP_RED_0",
      "TMP_RED_1",
      "TMP_RED_2",
      "TMP_RED_3",
      "TMP_RED_4",
      "TMP_RED_5",
      "TMP_RED_6",
      "TMP_RED_7",
      "TMP_RED_8",
      "TMP_RED_9",
    ],
  },
};
