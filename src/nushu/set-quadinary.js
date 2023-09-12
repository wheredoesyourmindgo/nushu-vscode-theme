const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const np = require("./nushu-palette");
const { flagHex } = require("./util");

/*

*/

async function setLightQuaternary() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const colors = lightTheme.colors;
  colors["welcomePage.tileHoverBackground"] = flagHex(np.light.quaternary);
  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkQuaternary() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const colors = darkTheme.colors;
  colors["welcomePage.tileHoverBackground"] = flagHex(np.dark.quaternary);
  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkQuaternary,
  setLightQuaternary,
};
