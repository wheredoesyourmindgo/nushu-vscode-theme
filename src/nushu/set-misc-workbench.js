const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");
const np = require("./nushu-palette");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

/*
Misc workbench
*/

async function setLightMiscWorkbench() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  colors["peekViewResult.fileForeground"] = flagHex(np.light.foreground);
  colors["peekViewResult.lineForeground"] = flagHex(lightColors.scale.gray[6]); // variable gray
  colors["peekViewResult.selectionForeground"] = flagHex(np.light.foreground);
  colors["peekViewTitle.background"] = flagHex(np.light.tertiary);
  colors["peekViewTitleLabel.foreground"] = flagHex(np.light.foreground);
  colors["peekViewTitleDescription.foreground"] = flagHex(
    lightColors.scale.gray[6]
  ); // variable gray
  colors["peekViewEditor.background"] = flagHex(np.light.gray[1]);
  colors["peekViewResult.background"] = flagHex(np.light.secondary);
  colors["peekView.border"] = flagHex(np.light.border);
  // button options (ie. find widget buttons)
  colors["inputOption.activeForeground"] = flagHex(np.light.foreground);

  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkMiscWorkbench() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  colors["peekViewResult.fileForeground"] = flagHex(np.dark.foreground);
  colors["peekViewResult.lineForeground"] = flagHex(darkColors.scale.gray[2]); // variable gray
  colors["peekViewResult.selectionForeground"] = flagHex(np.dark.foreground);
  colors["peekViewTitle.background"] = flagHex(np.dark.tertiary);
  colors["peekViewTitleLabel.foreground"] = flagHex(np.dark.foreground);
  colors["peekViewTitleDescription.foreground"] = flagHex(
    darkColors.scale.gray[2]
  ); // variable
  colors["peekViewEditor.background"] = flagHex(np.dark.black);
  colors["peekViewResult.background"] = flagHex(np.dark.secondary);
  colors["peekView.border"] = flagHex(np.dark.border);
  // button options (ie. find widget buttons)
  colors["inputOption.activeForeground"] = flagHex(np.dark.foreground);

  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setLightMiscWorkbench,
  setDarkMiscWorkbench,
};
