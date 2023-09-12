const np = require("./nushu-palette");
const replace = require("replace-in-file");
const { flagHex } = require("./util");

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

const convertedLightOptions = {
  files: "./themes/nushu-light.json",
  from: new RegExp(`${ghThemeOverrides.light.fg.default}`, "gi"),
  to: flagHex(np.light.foreground),
};

const convertedDarkOptions = {
  files: "./themes/nushu-dark.json",
  from: new RegExp(`${ghThemeOverrides.dark.fg.default}`, "gi"),
  to: flagHex(np.dark.foreground),
};

async function setLightForeground() {
  const convertedResults = await replace(convertedLightOptions);
  console.log("Converted replacement results:", convertedResults);
}
async function setDarkForeground() {
  const convertedResults = await replace(convertedDarkOptions);
  console.log("Converted replacement results:", convertedResults);
}

module.exports = {
  setLightForeground,
  setDarkForeground,
  ghThemeOverrides,
};
