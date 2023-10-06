const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");
const { flagHex } = require("./util");

/*
Some tokens need setup since they are not falling back to appropriate colors, including editor hover widget border
("editorHoverWidget.border"), which is visible during relative line jump, and the left sash used with the find
widget ("editorWidget.border"). Set all these to the Nushu border color.
*/

async function setLightUnsetBorders() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  const borderColor = flagHex(np.light.border);
  colors["editorHoverWidget.border"] = borderColor;
  colors["editorWidget.border"] = borderColor;
  colors["inlineChat.border"] = borderColor;
  colors["inlineChatInput.border"] = borderColor;
  colors["scm.providerBorder"] = borderColor;
  colors["settings.dropdownListBorder"] = borderColor;
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkUnsetBorders() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  const borderColor = flagHex(np.dark.border);
  colors["editorHoverWidget.border"] = borderColor;
  colors["editorWidget.border"] = borderColor;
  colors["inlineChat.border"] = borderColor;
  colors["inlineChatInput.border"] = borderColor;
  colors["scm.providerBorder"] = borderColor;
  colors["settings.dropdownListBorder"] = borderColor;
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkUnsetBorders,
  setLightUnsetBorders,
};
