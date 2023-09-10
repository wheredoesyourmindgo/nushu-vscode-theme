const rp = require("replace-json-property");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");

/*
Magenta doesn't look dark enough in light theme terminal (it looks good in dark theme),
so replace with purple + 1.
*/
function setLightTermMagenta() {
  rp.replace(
    "./themes/nushu-light.json",
    "terminal.ansiMagenta",
    lightColors.scale.purple[6]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "terminal.ansiBrightMagenta",
    lightColors.scale.purple[5]
  );
}

module.exports = {
  setLightTermMagenta,
};
