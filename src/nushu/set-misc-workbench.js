const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");
const np = require("./nushu-palette");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

/*
Set editor.selectionBackground (unset for some reason in GitHub theme) to the same value
as editor.selectionHighlightBackground, which is set.
*/

async function setLightMiscWorkbench() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  colors["peekViewResult.fileForeground"] = flagHex(np.light.foreground);
  colors["peekViewResult.lineForeground"] = flagHex(lightColors.scale.gray[6]); // variable gray
  colors["peekViewResult.selectionForeground"] = flagHex(np.light.foreground);
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkMiscWorkbench() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  colors["peekViewResult.fileForeground"] = flagHex(np.dark.foreground);
  colors["peekViewResult.lineForeground"] = flagHex(darkColors.scale.gray[2]); // variable gray
  colors["peekViewResult.selectionForeground"] = flagHex(np.dark.foreground);
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setLightMiscWorkbench,
  setDarkMiscWorkbench,
};
