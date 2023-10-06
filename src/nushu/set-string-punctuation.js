const rp = require("replace-json-property");
const fs = require("node:fs/promises");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const { flagHex } = require("./util");
const chroma = require("chroma-js");

/*
Set comments to green 4 & 6, 90% alpha
*/

async function setLightStringPunctuation() {
  const lightTheme = JSON.parse(await fs.readFile("./themes/nushu-light.json"));
  const tokenColors = lightTheme.tokenColors;

  const [stringToken] = tokenColors.filter(
    (token) => token.scope.indexOf("string") >= 0
  );
  const [propertyToken] = tokenColors.filter(
    (token) => token.scope.indexOf("support.type.property-name.json") >= 0
  );

  const stringColorHex = stringToken.settings.foreground.replace(/FLAG_/gi, "");
  const partiallyTransparentStringColor = chroma(stringColorHex)
    .alpha(0.8)
    .hex(); // 80%

  const propertyColorHex = propertyToken.settings.foreground.replace(
    /FLAG_/gi,
    ""
  );
  const partiallyTransparentPropertyColor = chroma(propertyColorHex)
    .alpha(0.8)
    .hex(); // 80%

  const newStringPunctuationRule = {
    scope: [
      "punctuation.definition.string.end",
      "punctuation.definition.string.begin",
    ],
    settings: {
      foreground: flagHex(partiallyTransparentStringColor),
    },
  };
  const newPropertyPunctuationRule = {
    scope: [
      "punctuation.support.type.property-name.begin",
      "punctuation.support.type.property-name.end",
    ],
    settings: {
      foreground: flagHex(partiallyTransparentPropertyColor),
    },
  };

  rp.replace(
    "./themes/nushu-light.json",
    "tokenColors",
    [...tokenColors, newStringPunctuationRule, newPropertyPunctuationRule],
    { silent: true }
  );
}

async function setDarkStringPunctuation() {
  const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
  const tokenColors = darkTheme.tokenColors;

  const [stringToken] = tokenColors.filter(
    (token) => token.scope.indexOf("string") >= 0
  );
  const [propertyToken] = tokenColors.filter(
    (token) => token.scope.indexOf("support.type.property-name.json") >= 0
  );

  const stringColorHex = stringToken.settings.foreground.replace(/FLAG_/gi, "");
  const partiallyTransparentStringColor = chroma(stringColorHex)
    .alpha(0.8)
    .hex(); // 80%

  const propertyColorHex = propertyToken.settings.foreground.replace(
    /FLAG_/gi,
    ""
  );
  const partiallyTransparentPropertyColor = chroma(propertyColorHex)
    .alpha(0.8)
    .hex(); // 80%

  const newStringPunctuationRule = {
    scope: [
      "punctuation.definition.string.end",
      "punctuation.definition.string.begin",
    ],
    settings: {
      foreground: flagHex(partiallyTransparentStringColor),
    },
  };
  const newPropertyPunctuationRule = {
    scope: [
      "punctuation.support.type.property-name.begin",
      "punctuation.support.type.property-name.end",
    ],
    settings: {
      foreground: flagHex(partiallyTransparentPropertyColor),
    },
  };

  rp.replace(
    "./themes/nushu-dark.json",
    "tokenColors",
    [...tokenColors, newStringPunctuationRule, newPropertyPunctuationRule],
    { silent: true }
  );
}

module.exports = {
  setLightStringPunctuation,
  setDarkStringPunctuation,
};
