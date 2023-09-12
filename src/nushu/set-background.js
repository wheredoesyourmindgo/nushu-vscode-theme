const rp = require("replace-json-property");
const np = require("./nushu-palette");
const { flagHex } = require("./util");

/*
Use black with dark theme and gray 2 with light theme for various backgrounds. Should produce
17 occurrences in both the light and dark Nüshu themes.
*/

function setLightBackground() {
  rpLightGray2("quickInput.background");
  rpLightGray2("breadcrumbPicker.background");
  rpLightGray2("editorWidget.background");
  rpLightGray2("debugToolBar.background");
  rpLightGray2("checkbox.background");
  rpLightGray2("dropdown.background");
  rpLightGray2("dropdown.listBackground");
  rpLightGray2("notificationCenterHeader.background");
  rpLightGray2("notifications.background");
  rpLightGray2("welcomePage.buttonBackground");
  rpLightGray2("textBlockQuote.background");
  rpLightGray2("titleBar.inactiveBackground");
  rpLightGray2("sideBar.background");
  rpLightGray2("sideBarSectionHeader.background");
  rpLightGray2("editorGroupHeader.tabsBackground");
  rpLightGray2("tab.inactiveBackground");
  rpLightGray2("panel.background");
}

function rpLightGray2(key) {
  rp.replace("./themes/nushu-light.json", key, flagHex(np.light.gray[1]));
}

function setDarkBackground() {
  rpDarkBlack("quickInput.background");
  rpDarkBlack("breadcrumbPicker.background");
  rpDarkBlack("editorWidget.background");
  rpDarkBlack("debugToolBar.background");
  rpDarkBlack("checkbox.background");
  rpDarkBlack("dropdown.background");
  rpDarkBlack("dropdown.listBackground");
  rpDarkBlack("notificationCenterHeader.background");
  rpDarkBlack("notifications.background");
  rpDarkBlack("welcomePage.buttonBackground");
  rpDarkBlack("textBlockQuote.background");
  rpDarkBlack("titleBar.inactiveBackground");
  rpDarkBlack("sideBar.background");
  rpDarkBlack("sideBarSectionHeader.background");
  rpDarkBlack("editorGroupHeader.tabsBackground");
  rpDarkBlack("tab.inactiveBackground");
  rpDarkBlack("panel.background");
}

function rpDarkBlack(key) {
  rp.replace("./themes/nushu-dark.json", key, flagHex(np.dark.black));
}
module.exports = {
  setDarkBackground,
  setLightBackground,
};
