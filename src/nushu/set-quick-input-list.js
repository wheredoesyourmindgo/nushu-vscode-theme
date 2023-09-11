const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

/*
Set quickInputList.* (unset in GitHub default theme)
*/

async function setLightQuickInputList() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  // same yellow as the one used with syntax
  colors["quickInputList.focusForeground"] = lightColors.scale.yellow[7];
  colors["quickInputList.focusIconForeground"] = lightColors.scale.yellow[7];
  colors["quickInputList.focusBackground"] = np.light.tertiary;
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkQuickInputList() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  // same yellow as the one used with syntax
  colors["quickInputList.focusForeground"] = darkColors.scale.yellow[2];
  colors["quickInputList.focusIconForeground"] = darkColors.scale.yellow[2];
  colors["quickInputList.focusBackground"] = np.dark.tertiary;
  rp.replace("./themes/nushu-dark.json", "colors", colors,);
}

module.exports = {
  setDarkQuickInputList,
  setLightQuickInputList,
};
