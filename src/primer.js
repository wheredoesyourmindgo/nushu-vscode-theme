const { colors } = require("@primer/primitives");
const nushuColors = require('./nushu-palette.json')

function getColors(style) {
  // Patch colors with Nushu variants.
  colors.black = nushuColors.black
  colors.white = nushuColors.white
  colors.nushuGray = nushuColors.gray

  if (style === "dark") {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors = {};
    Object.entries(colors).forEach(([name, val]) => {
      if (name === "black") {
        darkColors.white = val;
      } else if (name === "white") {
        darkColors.black = val;
      } else {
        darkColors[name] = [...val].reverse();
      }
    });
    return darkColors;
  } else {
    return colors;
  }
}

module.exports = {
  getColors,
};
