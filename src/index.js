const fs = require("fs");
const getTheme = require("./theme");

const lightTheme = getTheme({
  style: "light",
  name: "Nüshu",
});
fs.writeFileSync("./themes/light.json", JSON.stringify(lightTheme, null, 2));

const darkTheme = getTheme({
  style: "dark",
  name: "Nüshu disappear",
});
fs.writeFileSync("./themes/dark.json", JSON.stringify(darkTheme, null, 2));
