const cpFile = require("cp-file");

module.exports = async function resetThemes() {
  await cpFile("./themes/light-default.json", "./themes/nushu-light.json", {
    overwrite: true,
  });
  await cpFile("./themes/dark-default.json", "./themes/nushu-dark.json", {
    overwrite: true,
  });
};
