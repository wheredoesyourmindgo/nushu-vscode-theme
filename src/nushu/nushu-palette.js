const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const chroma = require("chroma-js");

const LIGHT_BG = "#f8f6f1"; // hsl(43deg 33% 96%) lch(97% 3 89deg) pen paper coffee background [Used w/ Editor Bg]
const DARK_BG = "#25211d"; // lch(14% 4 69deg) custom slightly darker earthsong background [Used w/ Editor Bg], cause earthsong background (#292521) doesn't feel dark enough for editor bg

const lightHue = chroma(LIGHT_BG).get("lch.h");
const darkHue = chroma(DARK_BG).get("lch.h");
// console.log("lh", lightHue);
// console.log("dh", darkHue);

module.exports = {
  classic: {
    black: "#1b1f00",
    white: "#f8f6f1",
    gray: ["#f3f0e8", "#efebe0", "#e7e1d0", "#444e00", "#2f3600", "#252a00"],
  },
  light: {
    foreground: chroma(lightColors.fg.default).set("lch.h", lightHue).hex(),
    white: LIGHT_BG,
    black: chroma(lightColors.scale.black).set("lch.h", lightHue).hex(), // set hue since primer light black isn't #000000
    border: adjLightGray2Lightness("-9"), // "#d6d4cf" lch(85% 3 89deg), -9% lightness to gray 1 (#f0eee8) [Used w/ borders]
    secondary: adjLightGray2Lightness("-2"), // "#eae8e2" lch(92% 3 89deg), -2% lightness to gray 1 (#f0eee8)
    tertiary: adjLightGray2Lightness("-4"), // "#e4e2dd" lch(90% 3 89deg), -4% lightness to gray 1 (#f0eee8)
    quaternary: adjLightGray2Lightness("-6"), // "#dfddd7" lch(88% 3 89deg), -6% lightness to gray 1 (#f0eee8)
    gray: [
      chroma(lightColors.scale.gray[0]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[1]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[2]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[3]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[4]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[5]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[6]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[7]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[8]).set("lch.h", lightHue).hex(),
      chroma(lightColors.scale.gray[9]).set("lch.h", lightHue).hex(),
    ],
  },
  /*
    https://hihayk.github.io/scale/#0/9/50/80/-51/67/20/14/292521/41/37/33/white didn't yield gradient that scaled well, borders were too bright for dark theme. Instead, the defaults will be used for shades of gray other than the darkest shade, which is used for the editor background.
  */
  dark: {
    foreground: chroma(darkColors.fg.default).set("lch.h", darkHue).hex(),
    white: darkColors.scale.white, // same as 'dark default' white in dark theme #ffffff (hue adjust not necessary)
    black: adjDarkGray10Lightness("+0"), // custom brighter shade of earthsong background (+3)
    border: adjDarkGray10Lightness("+9"), // 9 + 3
    secondary: adjDarkGray10Lightness("+2"), // 2 + 3
    tertiary: adjDarkGray10Lightness("+4"), // 4 + 3
    quaternary: adjDarkGray10Lightness("+6"), // 6 + 3
    gray: [
      chroma(darkColors.scale.gray[0]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[1]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[2]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[3]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[4]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[5]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[6]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[7]).set("lch.h", darkHue).hex(),
      chroma(darkColors.scale.gray[8]).set("lch.h", darkHue).hex(),
      // chroma(darkColors.scale.gray[9]).set("lch.h", darkHue).hex(),
      DARK_BG,
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

// this one needs gray hue adjust
function adjLightGray2Lightness(diff) {
  return chroma(chroma(lightColors.scale.gray[1]).set("lch.h", lightHue))
    .set("lch.l", diff)
    .hex();
}

// this one DOES NOT need gray hue adjust, and we add 3, which will be the baseline for Dark Black which should be brighter than DARK_BG
function adjDarkGray10Lightness(diff) {
  return chroma(DARK_BG).set("lch.l", "+3").set("lch.l", diff).hex();
}
