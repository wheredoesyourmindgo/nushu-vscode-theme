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
const { setLightBackground, setDarkBackground } = require("./set-background");
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
const { setLightSecondary, setDarkSecondary } = require("./set-secondary");
const { setLightComments, setDarkComments } = require("./set-comments");
const { setDarkTertiary, setLightTertiary } = require("./set-tertiary");
const {
  setDarkQuickInputList,
  setLightQuickInputList,
} = require("./set-quick-input-list");
const { setLightQuaternary, setDarkQuaternary } = require("./set-quadinary");

async function main() {
  try {
    await resetThemes();

    const lightTheme = JSON.parse(
      await fs.readFile("./themes/nushu-light.json")
    );
    if (lightTheme.name === "GitHub Light Default") {
      await setLightBorders();
      await setLightColorScales();
      await setLightForeground();
      await setLightRemoteConnect();
      await setLightSelectionBackground();
      await setLightEditorHoverWidget();
      await setLightSecondary();
      await setLightTertiary();
      await setLightQuaternary();
      await setLightComments();
      await setLightQuickInputList();
      setLightBackground();
      setLightTermMagenta();
    } else {
      console.log("Skipping Light Theme conversion");
    }
    const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
    if (darkTheme.name === "GitHub Dark Default") {
      await setDarkBorders();
      await setDarkColorScales();
      await setDarkForeground();
      await setDarkRemoteConnect();
      await setDarkSelectionBackground();
      await setDarkEditorHoverWidget();
      await setDarkSecondary();
      await setDarkTertiary();
      await setDarkQuaternary();
      await setDarkComments();
      await setDarkQuickInputList();
      setDarkBackground();
    } else {
      console.log("Skipping Dark Theme conversion");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
