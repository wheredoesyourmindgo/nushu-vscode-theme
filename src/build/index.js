const fs = require("node:fs/promises");
const { setDarkBorders, setLightBorders } = require("./set-borders");
const {
  setLightRemoteConnect,
  setDarkRemoteConnect,
} = require("./set-remote-connect");
const { setLightTermMagenta } = require("./set-light-magenta");
const {
  setLightSelectionBackground,
  setDarkSelectionBackground,
} = require("./set-selection-background");
const setDarkMiscBlack = require("./set-dark-misc-black");
const resetThemes = require("./reset-themes");
const {
  setLightColorScales,
  setDarkColorScales,
} = require("./set-color-scales");
const { setLightForeground, setDarkForeground } = require("./set-foreground");
const {
  setLightEditorHoverWidget,
  setDarkEditorHoverWidget,
} = require("./set-editor-hover-widget");

async function main() {
  try {
    await resetThemes();

    const lightTheme = JSON.parse(
      await fs.readFile("./themes/nushu-light.json")
    );
    if (lightTheme.name === "GitHub Light Default") {
      await setLightColorScales();
      await setLightForeground();
      await setLightRemoteConnect();
      await setLightBorders();
      await setLightSelectionBackground();
      await setLightEditorHoverWidget();
      setLightTermMagenta();
    } else {
      console.log("Skipping Light Theme conversion");
    }
    const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
    if (darkTheme.name === "GitHub Dark Default") {
      await setDarkColorScales();
      await setDarkForeground();
      await setDarkRemoteConnect();
      await setDarkBorders();
      await setDarkSelectionBackground();
      await setDarkEditorHoverWidget();
      setDarkMiscBlack();
    } else {
      console.log("Skipping Dark Theme conversion");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
