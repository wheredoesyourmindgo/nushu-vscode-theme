const fs = require("fs");
const getTheme = require("./theme");

const lightTheme = getTheme({
  theme: "light",
  name: "Nüshu",
});

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    // fs.writeFile("./themes/light-default.json", JSON.stringify(lightDefaultTheme, null, 2)),
    // fs.writeFile("./themes/light-high-contrast.json", JSON.stringify(lightHighContrastTheme, null, 2)),
    // fs.writeFile("./themes/light-colorblind.json", JSON.stringify(lightColorblindTheme, null, 2)),
    // fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    // fs.writeFile("./themes/dark-high-contrast.json", JSON.stringify(darkHighContrastTheme, null, 2)),
    // fs.writeFile("./themes/dark-colorblind.json", JSON.stringify(darkColorblindTheme, null, 2)),
    // fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    // fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),
  ]))
  .catch(() => process.exit(1))


