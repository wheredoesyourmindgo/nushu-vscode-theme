const rp = require("replace-json-property");
const np = require("./nushu-palette");

/*
Use black with dark theme and gray 1 with light theme for various backgrounds. Should produce
17 occurrences in both the light and dark Nüshu themes.
*/

function setLightBackground() {
  rp.replace(
    "./themes/nushu-light.json",
    "quickInput.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "breadcrumbPicker.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "editorWidget.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "debugToolBar.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "checkbox.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "dropdown.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "dropdown.listBackground",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "notificationCenterHeader.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "notifications.background",
    np.light.gray[0]
  );
  rp.replace(
    "./themes/nushu-light.json",
    "welcomePage.buttonBackground",
    np.light.gray[0]
  );
}

function setDarkBackground() {
  rp.replace(
    "./themes/nushu-dark.json",
    "quickInput.background",
    np.dark.black
  );
  rp.replace(
    "./themes/nushu-dark.json",
    "breadcrumbPicker.background",
    np.dark.black
  );
  rp.replace(
    "./themes/nushu-dark.json",
    "editorWidget.background",
    np.dark.black
  );
  rp.replace(
    "./themes/nushu-dark.json",
    "debugToolBar.background",
    np.dark.black
  );
  rp.replace("./themes/nushu-dark.json", "checkbox.background", np.dark.black);
  rp.replace("./themes/nushu-dark.json", "dropdown.background", np.dark.black);
  rp.replace(
    "./themes/nushu-dark.json",
    "dropdown.listBackground",
    np.dark.black
  );
  rp.replace(
    "./themes/nushu-dark.json",
    "notificationCenterHeader.background",
    np.dark.black
  );
  rp.replace(
    "./themes/nushu-dark.json",
    "notifications.background",
    np.dark.black
  );
  rp.replace(
    "./themes/nushu-dark.json",
    "welcomePage.buttonBackground",
    np.dark.black
  );
}
module.exports = {
  setDarkBackground,
  setLightBackground,
};
