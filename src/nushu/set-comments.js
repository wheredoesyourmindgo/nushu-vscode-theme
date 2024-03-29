const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const { flagHex } = require("./util");
const chroma = require("chroma-js");

/*
Set comments to green 4 & 6, 90% alpha
*/

async function setLightComments() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const tokenColors = lightTheme.tokenColors;
  const green = chroma(lightColors.scale.green[5]).alpha(0.9).hex(); // 90%

  const [commentToken] = tokenColors.filter(
    (token) => token.scope.indexOf("comment") >= 0
  );
  const filteredTokenColors = tokenColors.filter(
    (token) => token.scope.indexOf("comment") <= -1
  );

  commentToken.settings.foreground = flagHex(green);
  rp.replace(
    "./themes/nushu-light.json",
    "tokenColors",
    [commentToken, ...filteredTokenColors],
    { silent: true }
  );
}

async function setDarkComments() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const tokenColors = darkTheme.tokenColors;
  const green = chroma(darkColors.scale.green[3]).alpha(0.9).hex(); // 90%

  const [commentToken] = tokenColors.filter(
    (token) => token.scope.indexOf("comment") >= 0
  );
  const filteredTokenColors = tokenColors.filter(
    (token) => token.scope.indexOf("comment") <= -1
  );

  commentToken.settings.foreground = flagHex(green);
  rp.replace(
    "./themes/nushu-dark.json",
    "tokenColors",
    [commentToken, ...filteredTokenColors],
    { silent: true }
  );
}

module.exports = {
  setLightComments,
  setDarkComments,
};
