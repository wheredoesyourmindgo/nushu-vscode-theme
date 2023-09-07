const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

module.exports = {
  classic: {
    black: "#1B1F00",
    white: "#f8f6f1",
    gray: ["#F3F0E8", "#EFEBE0", "#E7E1D0", "#444e00", "#2f3600", "#252a00"],
  },
  /*
    Originally tried https://hihayk.github.io/scale/#9/0/50/80/-51/67/20/14/f3f0e8/243/240/232/white, though, the dark version has issues, noted below. Instead, the defaults will be used for shades of gray other than the lightest shade, which is used for the panel backgrounds.
  */
  light: {
    white: "#f8f6f1", // pen paper coffee background
    black: lightColors.scale.black, // same as 'light default' theme
    gray: [
      "#f3f0e8", // custom darker shade of pen paper coffee (derived manually)
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
    black: "#2f2b27", // custom brighter shade of earthsong background
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
      "#27241F", // custom slightly darker earthsong background (used https://hihayk.github.io/scale/#10/0/50/50/-51/67/20/14/292521/41/37/33/black, the color left adjacent of the original earthsong color)
      // "#292521", // earthsong background (doesn't feel dark enough)
    ],
  },
  temp: {
    white: "TMP_WHITE",
    black: "TMP_BLACK",
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
