const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");

async function setLightRemoteConnect() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  // don't use gray background with Remote Connect button in status bar, just use the status bar background for uniform appearance
  const statusBarBg = flagHex(lightTheme.colors["statusBar.background"]);
  rp.replace(
    "./themes/nushu-light.json",
    "statusBarItem.remoteBackground",
    statusBarBg
  );
}

async function setDarkRemoteConnect() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  // don't use gray background with Remote Connect button in status bar, just use the status bar background for uniform appearance
  const statusBarBg = flagHex(darkTheme.colors["statusBar.background"]);
  rp.replace(
    "./themes/nushu-dark.json",
    "statusBarItem.remoteBackground",
    statusBarBg
  );
}

module.exports = {
  setDarkRemoteConnect,
  setLightRemoteConnect,
};
