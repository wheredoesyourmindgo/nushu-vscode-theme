const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const np = require("./nushu-palette");
const replace = require("replace-in-file");

const lightGray3Borders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${lightColors.scale.gray[2]}`,
  "gi"
);

const darkGray7Borders = new RegExp(
  `(?<=border":\\s"|borderTop":\\s")${darkColors.scale.gray[6]}`,
  "gi"
);

const convertedLightBordersOptions = {
  files: "./themes/nushu-light.json",
  from: lightGray3Borders,
  to: np.light.border,
};

const convertedDarkBordersOptions = {
  files: "./themes/nushu-dark.json",
  from: darkGray7Borders,
  to: np.dark.border,
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
