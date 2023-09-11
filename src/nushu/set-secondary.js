const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");

/*
The following is loosely based on what is being set to some transparent hex value in both the GitHub Default Light and Dark themes.
The default themes are a bit different, so for simplicity we are aggregating what both themes set and will adjust as needed in the future.
*/

async function setLightSecondary() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  colors["welcomePage.tileBackground"] = np.light.secondary;
  colors["editor.lineHighlightBackground"] = np.light.secondary;
  colors["editor.foldBackground"] = np.light.secondary;
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkSecondary() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  colors["welcomePage.tileBackground"] = np.dark.secondary;
  colors["editor.lineHighlightBackground"] = np.dark.secondary;
  colors["editor.foldBackground"] = np.dark.secondary;
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkSecondary,
  setLightSecondary,
};
