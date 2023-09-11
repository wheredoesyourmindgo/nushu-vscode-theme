const np = require("./nushu-palette");
const replace = require("replace-in-file");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");

/*
Don't use GitHub Theme foreground, just use one found in the theme palette since it
provides less contrast.
*/

/*
Select GitHub Theme overrides (eg. foreground) will be reverted back to Primer primitives below.
It is important to just define these here, due to how javascript works, do not call getColors() in colors.js
cause it will mutate the Primer primitives.
*/
const ghThemeOverrides = {
  light: {
    fg: {
      default: "#1f2328",
    },
  },
  dark: {
    fg: {
      default: "#e6edf3",
    },
  },
};

const toTmpArry = [np.temp.foreground];

const fromTmpArry = [new RegExp(`${np.temp.foreground}`, "gi")];

const tmpLightOptions = {
  files: "./themes/nushu-light.json",
  from: [new RegExp(`${ghThemeOverrides.light.fg.default}`, "gi")],
  to: toTmpArry,
};

const tmpDarkOptions = {
  files: "./themes/nushu-dark.json",
  from: [new RegExp(`${ghThemeOverrides.dark.fg.default}`, "gi")],
  to: toTmpArry,
};

const convertedLightOptions = {
  files: "./themes/nushu-light.json",
  from: [/"name": "GitHub Light Default"/g, ...fromTmpArry],
  to: ['"name": "Nüshu Light"', np.light.foreground],
};

const convertedDarkOptions = {
  files: "./themes/nushu-dark.json",
  from: [/"name": "GitHub Dark Default"/g, ...fromTmpArry],
  to: ['"name": "Nüshu Dark"', np.dark.foreground],
};

async function setLightForeground() {
  const tmpResults = await replace(tmpLightOptions);
  //   console.log("Temp replacement results:", tmpResults);
  const convertedResults = await replace(convertedLightOptions);
  console.log("Converted replacement results:", convertedResults);
}
async function setDarkForeground() {
  const tmpResults = await replace(tmpDarkOptions);
  //   console.log("Temp replacement results:", tmpResults);
  const convertedResults = await replace(convertedDarkOptions);
  console.log("Converted replacement results:", convertedResults);
}

module.exports = {
  setLightForeground,
  setDarkForeground,
  ghThemeOverrides,
};
