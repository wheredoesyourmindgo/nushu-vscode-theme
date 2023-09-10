const rp = require("replace-json-property");
const np = require("./nushu-palette");

/*
Use black just as white is used in the light theme
*/

module.exports = function setMiscBlack() {
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
};
