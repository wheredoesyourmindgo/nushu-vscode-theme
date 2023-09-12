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
    border: adjLightGray2Lightness("-9"), 
    secondary: adjLightGray2Lightness("-2"),
    tertiary: adjLightGray2Lightness("-4"),
    quaternary: adjLightGray2Lightness("-6"), 
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
      // tenth shade of gray isn't used, at least, not in Nushu/adjusted form in favor of using Earthsong background
      // chroma(darkColors.scale.gray[9]).set("lch.h", darkHue).hex(),
      DARK_BG,
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
