const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");

async function setLightFilenameForeground() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const { colors } = lightTheme;
  const yellowForeground = flagHex(
    colors["gitDecoration.modifiedResourceForeground"]
  );
  const redForeground = flagHex(
    colors["gitDecoration.deletedResourceForeground"]
  );
  const greenForeground = flagHex(
    colors["gitDecoration.addedResourceForeground"]
  );
  colors["list.warningForeground"] = yellowForeground;
  colors["list.errorForeground"] = redForeground;
  colors["gitDecoration.stageModifiedResourceForeground"] = yellowForeground;
  colors["gitDecoration.renamedResourceForeground"] = greenForeground;
  colors["gitDecoration.stageDeletedResourceForeground"] = redForeground;

  rp.replace("./themes/nushu-light.json", "colors", colors);
}

async function setDarkFilenameForeground() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const { colors } = darkTheme;
  const yellowForeground = flagHex(
    colors["gitDecoration.modifiedResourceForeground"]
  );
  const redForeground = flagHex(
    colors["gitDecoration.deletedResourceForeground"]
  );
  const greenForeground = flagHex(
    colors["gitDecoration.addedResourceForeground"]
  );
  colors["list.warningForeground"] = yellowForeground;
  colors["list.errorForeground"] = redForeground;
  colors["gitDecoration.stageModifiedResourceForeground"] = yellowForeground;
  colors["gitDecoration.renamedResourceForeground"] = greenForeground;
  colors["gitDecoration.stageDeletedResourceForeground"] = redForeground;

  rp.replace("./themes/nushu-dark.json", "colors", colors);
}

module.exports = {
  setDarkFilenameForeground,
  setLightFilenameForeground,
};
