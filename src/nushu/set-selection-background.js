const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");

/*
Set editor.selectionBackground (unset for some reason in GitHub theme) to the same value
as editor.selectionHighlightBackground, which is set.
*/

async function setLightSelectionBackground() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  const selectionHighlightBackground = flagHex(
    lightTheme.colors["editor.selectionHighlightBackground"]
  );
  colors["editor.selectionBackground"] = selectionHighlightBackground;
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkSelectionBackground() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  const selectionHighlightBackground = flagHex(
    darkTheme.colors["editor.selectionHighlightBackground"]
  );
  colors["editor.selectionBackground"] = selectionHighlightBackground;
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkSelectionBackground,
  setLightSelectionBackground,
};
