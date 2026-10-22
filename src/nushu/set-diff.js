const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const { flagHex } = require("./util");

/*
Color diff lines (.diff files, ```diff blocks, git commit -v) with the git decoration colors, which
set-color-scales.js leaves as GitHub's green, red, and yellow. The color scale conversion would
otherwise turn them gold and pink. Run after setColorScales so they aren't converted.
*/

const diffScopes = {
  "markup.inserted": "gitDecoration.addedResourceForeground",
  "markup.deleted": "gitDecoration.deletedResourceForeground",
  "markup.changed": "gitDecoration.modifiedResourceForeground",
};

async function setDiff(file) {
  const theme = JSON.parse(await fs.readFile(file));
  const tokenColors = theme.tokenColors.map((token) => {
    const scope = Object.keys(diffScopes).find((s) => [token.scope].flat().indexOf(s) >= 0);
    if (!scope) {
      return token;
    }
    const hex = theme.colors[diffScopes[scope]].replace(/FLAG_/gi, "");
    return { ...token, settings: { ...token.settings, foreground: flagHex(hex) } };
  });

  rp.replace(file, "tokenColors", tokenColors, { silent: true });
}

const setLightDiff = () => setDiff("./themes/nushu-light.json");
const setDarkDiff = () => setDiff("./themes/nushu-dark.json");

module.exports = {
  setLightDiff,
  setDarkDiff,
};
