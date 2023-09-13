const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const np = require("./nushu-palette");
const replace = require("replace-in-file");
const { flagHex } = require("./util");
const chroma = require("chroma-js");

/*
Should produce 21 occurrences in both the light and dark Nüshu themes. Uses slightly transparent standard borders, 90%.
editorOverviewRuler.border (?), tab.unfocusedActiveBorder, and tab.activeBorder should match editor background.
*/

const lightGray3Borders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${lightColors.scale.gray[2]}`,
  "gi"
);
const lightWhiteBorders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${lightColors.scale.white}`, // editorOverviewRuler.border, tab.unfocusedActiveBorder, tab.activeBorder
  "gi"
);

const darkGray7Borders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${darkColors.scale.gray[6]}`,
  "gi"
);
const darkGray10Borders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${darkColors.scale.gray[9]}`, //editorOverviewRuler.border, tab.unfocusedActiveBorder, tab.activeBorder
  "gi"
);
const darkBlackBorders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${darkColors.scale.black}`,
  "gi"
);

const convertedLightBordersOptions = {
  files: "./themes/nushu-light.json",
  from: [lightGray3Borders, lightWhiteBorders],
  to: [flagHex(chroma(np.light.border).alpha(0.9).hex()), flagHex(np.light.white)],
};

const convertedDarkBordersOptions = {
  files: "./themes/nushu-dark.json",
  from: [darkGray7Borders, darkBlackBorders, darkGray10Borders],
  to: [flagHex(chroma(np.dark.border).alpha(0.9).hex()), flagHex(np.dark.border), flagHex(np.dark.gray[9])]
};

// swap light theme custom border color
async function setLightBorders() {
  const convertedBordersResults = await replace(convertedLightBordersOptions);
  console.log("Converted replacement results:", convertedBordersResults);
}

// swap dark theme custom border color
async function setDarkBorders() {
  const convertedBordersResults = await replace(convertedDarkBordersOptions);
  console.log("Converted replacement results:", convertedBordersResults);
}

module.exports = {
  setDarkBorders,
  setLightBorders,
};
