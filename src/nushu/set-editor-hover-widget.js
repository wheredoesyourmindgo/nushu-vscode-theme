const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");
const { flagHex } = require("./util");

/*
Set "editorHoverWidget.border" to the border color.
*/

async function setLightEditorHoverWidget() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  const editorHoverWidgetBorder = flagHex(np.light.border);
  colors["editorHoverWidget.border"] = editorHoverWidgetBorder;
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkEditorHoverWidget() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  const editorHoverWidgetBorder = flagHex(np.dark.border);
  colors["editorHoverWidget.border"] = editorHoverWidgetBorder;
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkEditorHoverWidget,
  setLightEditorHoverWidget,
};
