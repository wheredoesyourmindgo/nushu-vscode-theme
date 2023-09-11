const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");

/*

*/

async function setLightTertiary() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  colors["list.inactiveSelectionBackground"] = np.light.tertiary;
  colors["list.activeSelectionBackground"] = np.light.tertiary;
  colors["peekViewEditor.background"] = np.light.tertiary;
  colors["tab.unfocusedHoverBackground"] = np.light.tertiary;
  colors["list.hoverBackground"] = np.light.tertiary;
  colors["editor.wordHighlightBackground"] = np.light.tertiary;
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkTertiary() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  colors["list.inactiveSelectionBackground"] = np.dark.tertiary;
  colors["list.activeSelectionBackground"] = np.dark.tertiary;
  colors["peekViewEditor.background"] = np.dark.tertiary;
  colors["tab.unfocusedHoverBackground"] = np.dark.tertiary;
  colors["list.hoverBackground"] = np.dark.tertiary;
  colors["editor.wordHighlightBackground"] = np.dark.tertiary;
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkTertiary,
  setLightTertiary,
};
