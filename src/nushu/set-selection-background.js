const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");

/*
Set editor.selectionBackground (unset for some reason in GitHub theme).
Not sure how the color are constructed in the GitHub Themes, so they are defined
explicitly below.
Light Theme - Use "#add6..." colors from generated GitHub Light Theme
Dark Theme - Use "#264f..." colors from generated GitHub Dark Theme
*/

async function setLightSelectionBackground() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  // const selectionHighlightBackground = flagHex(
  //   lightTheme.colors["editor.selectionHighlightBackground"]
  // );
  // colors["editor.selectionBackground"] = selectionHighlightBackground;

  colors["terminal.hoverHighlightBackground"] = flagHex("#add6ff13");

  colors["editor.hoverHighlightBackground"] = flagHex("#add6ff26");
  colors["inlineChat.regionHighlight"] = flagHex("#add6ff26");

  colors["editor.inactiveSelectionBackground"] = flagHex("#add6ff80");
  colors["terminal.inactiveSelectionBackground"] = flagHex("#add6ff80");

  colors["editor.selectionBackground"] = flagHex("#add6ff");
  colors["terminal.selectionBackground"] = flagHex("#add6ff");
  colors["minimap.selectionHighlight"] = flagHex("#add6ff");
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkSelectionBackground() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  // const selectionHighlightBackground = flagHex(
  //   darkTheme.colors["editor.selectionHighlightBackground"]
  // );
  // colors["editor.selectionBackground"] = selectionHighlightBackground;

  colors["terminal.hoverHighlightBackground"] = flagHex("#264f7820");

  colors["editor.hoverHighlightBackground"] = flagHex("#264f7840");
  colors["inlineChat.regionHighlight"] = flagHex("#264f7840");

  colors["editor.inactiveSelectionBackground"] = flagHex("#264f7880");
  colors["terminal.inactiveSelectionBackground"] = flagHex("#264f7880");

  colors["editor.selectionBackground"] = flagHex("#264f78");
  colors["terminal.selectionBackground"] = flagHex("#264f78");
  colors["minimap.selectionHighlight"] = flagHex("#264f78");
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkSelectionBackground,
  setLightSelectionBackground,
};
