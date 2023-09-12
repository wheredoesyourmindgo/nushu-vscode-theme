const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");
const { flagHex } = require("./util");

/*
 */

async function setLightTertiary() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  colors["list.inactiveSelectionBackground"] = flagHex(np.light.tertiary);
  colors["list.activeSelectionBackground"] = flagHex(np.light.tertiary);
  colors["peekViewEditor.background"] = flagHex(np.light.tertiary);
  colors["tab.unfocusedHoverBackground"] = flagHex(np.light.tertiary);
  colors["list.hoverBackground"] = flagHex(np.light.tertiary);
  colors["editor.wordHighlightBackground"] = flagHex(np.light.tertiary);
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkTertiary() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  colors["list.inactiveSelectionBackground"] = flagHex(np.dark.tertiary);
  colors["list.activeSelectionBackground"] = flagHex(np.dark.tertiary);
  colors["peekViewEditor.background"] = flagHex(np.dark.tertiary);
  colors["tab.unfocusedHoverBackground"] = flagHex(np.dark.tertiary);
  colors["list.hoverBackground"] = flagHex(np.dark.tertiary);
  colors["editor.wordHighlightBackground"] = flagHex(np.dark.tertiary);
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkTertiary,
  setLightTertiary,
};
