const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");

async function setLightFallback() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const { colors } = lightTheme;

  colors["keybindingLabel.background"] = flagHex("#dddddd66");
  colors["keybindingLabel.border"] = flagHex("#cccccc66");
  colors["keybindingLabel.bottomBorder"] = flagHex("#bbbbbb66");
  colors["keybindingTable.headerBackground"] = flagHex("#1f23280a");
  colors["keybindingTable.rowsBackground"] = flagHex("#1f23280a");
  //
  colors["inputValidation.errorBackground"] = flagHex("#f2dede");
  colors["inputValidation.errorBorder"] = flagHex("#be1100");
  colors["inputValidation.infoBackground"] = flagHex("#d6ecf2");
  colors["inputValidation.infoBorder"] = flagHex("#007acc");
  colors["inputValidation.warningBackground"] = flagHex("#f6f5d2");
  colors["inputValidation.warningBorder"] = flagHex("#b89500");

  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkFallback() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const { colors } = darkTheme;

  // set these to the values they fall back to in GitHub Default Dark
  colors["keybindingLabel.background"] = flagHex("#dddddd26"); // 15%, default 40% in Gdd theme was #dddddd66, but not transparent enough for dark theme
  colors["keybindingLabel.border"] = flagHex("cccccc26"); // 15%, default 40% in Gdd theme was #cccccc66, but not transparent enough for dark theme
  colors["keybindingLabel.bottomBorder"] = flagHex("#bbbbbb26"); // 15%, default 40% in Gdd theme was #bbbbbb66, but not transparent enough for dark theme
  colors["keybindingTable.headerBackground"] = flagHex("#d7cfc70a");
  colors["keybindingTable.rowsBackground"] = flagHex("#d7cfc70a");
  //
  colors["inputValidation.errorBackground"] = flagHex("#5a1d1d");
  colors["inputValidation.errorBorder"] = flagHex("#be1100");
  colors["inputValidation.infoBackground"] = flagHex("#063b49");
  colors["inputValidation.infoBorder"] = flagHex("#007acc");
  colors["inputValidation.warningBackground"] = flagHex("#352a05");
  colors["inputValidation.warningBorder"] = flagHex("#b89500");

  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkFallback,
  setLightFallback,
};
