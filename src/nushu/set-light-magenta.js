const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const { flagHex, replaceExistingProp } = require("./util");

/*
Magenta doesn't look dark enough in light theme terminal (it looks good in dark theme),
so replace with purple + 1.
*/
function setLightTermMagenta() {
  replaceExistingProp(
    "./themes/nushu-light.json",
    "terminal.ansiMagenta",
    flagHex(lightColors.scale.purple[6])
  );
  replaceExistingProp(
    "./themes/nushu-light.json",
    "terminal.ansiBrightMagenta",
    flagHex(lightColors.scale.purple[5])
  );
}

module.exports = {
  setLightTermMagenta,
};
