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
const { removeFlags } = require("./remove-flags");
const {
  setDarkFilenameForeground,
  setLightFilenameForeground,
} = require("./set-filename-foreground");
const { setDarkFallback, setLightFallback } = require("./set-fallback");

async function main() {
  try {
    await resetThemes();

    const lightTheme = JSON.parse(
      await fs.readFile("./themes/nushu-light.json")
    );
    if (lightTheme.name === "GitHub Light Default") {
      // Order matters, call things that are explicit first, and place less
      // explicit/important conversions later. Some scripts require things to
      // already be set, so they should be run after any such requirement is met.
      await setLightBorders();
      await setLightForeground();
      await setLightEditorHoverWidget();
      await setLightSecondary();
      await setLightTertiary();
      await setLightQuaternary();
      await setLightComments();
      await setLightQuickInputList();
      await setLightFallback();
      setLightBackground();
      setLightTermMagenta();
      await setLightColorScales();
      await setLightRemoteConnect(); // should run after setLightColorScales()
      await setLightSelectionBackground(); // should run after setLightColorScales()
      await setLightFilenameForeground(); // should run after setLightColorScales()
    } else {
      console.log("Skipping Light Theme conversion");
    }
    const darkTheme = JSON.parse(await fs.readFile("./themes/nushu-dark.json"));
    if (darkTheme.name === "GitHub Dark Default") {
      // Order matters, call things that are explicit first, and place less
      // explicit/important conversions later. Some scripts require things to
      // already be set, so they should be run after any such requirement is met.
      await setDarkBorders();
      await setDarkForeground();
      await setDarkEditorHoverWidget();
      await setDarkSecondary();
      await setDarkTertiary();
      await setDarkQuaternary();
      await setDarkComments();
      await setDarkQuickInputList();
      await setDarkFallback();
      setDarkBackground();
      await setDarkColorScales();
      await setDarkRemoteConnect(); // should run after setDarkColorScales()
      await setDarkSelectionBackground(); // should run after setDarkColorScales()
      await setDarkFilenameForeground(); // should run after setDarkColorScales()
    } else {
      console.log("Skipping Dark Theme conversion");
    }
    // lastly, remove flags
    removeFlags();
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

main();
