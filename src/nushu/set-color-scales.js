const np = require("./nushu-palette");
const replace = require("replace-in-file");
const lightColors = require("@primer/primitives/dist/json/colors/light.json");
const darkColors = require("@primer/primitives/dist/json/colors/dark.json");
const { flagHex } = require("./util");

const ignorePropStrings = [
  `"symbolIcon\..*":\\s"`,
  `"terminal\..*":\\s"`,
  `"gitDecoration\..*":\\s"`, // green, yellow, red, orange, and gray all mean something
  `"debugConsole\..*":\\s"`,
  `"diffEditor\..*":\\s"`, // green means add, red means minus
  `"editorGutter\..*":\\s"`, //  red means minus, yellow means modified, and green means add
  `"button\..*":\\s"`, // don't change anything associated with "color.btn" (for now), see theme.js and colors.js for more info
  `"debugIcon.breakpointForeground":\\s"`, // red means no
  `"editor.findMatchBackground":\\s"`, // yellow (over red)
  `"editor.findMatchHighlightBackground":\\s"`, // yellow (over red)
  `"errorForeground":\\s"`, // red means error (ex. find results empty label foreground)
  `"notificationsErrorIcon.foreground":\\s"`, // red means error
  `"notificationsWarningIcon.foreground":\\s"`, // orange means warning
  `"notificationsInfoIcon.foreground":\\s"`, // blue means info
  `"editor.stackFrameHighlightBackground":\\s"`, // not sure what this is, leave it yellow
  `"editor.focusedStackFrameHighlightBackground":\\s"`, // not sure what this is, leave it green
  `"peekViewEditor.matchHighlightBackground":\\s"`, // yellow (over red)
  `"peekViewResult.matchHighlightBackground":\\s"`, // yellow (over red)
];
const skipProps = `(?<!${ignorePropStrings.join("|")})`;

const toLightTmpHex = [
  np.light.white,
  np.light.black,
  //
  np.light.gray[0],
  np.light.gray[1],
  np.light.gray[2],
  np.light.gray[3],
  np.light.gray[4],
  np.light.gray[5],
  np.light.gray[6],
  np.light.gray[7],
  np.light.gray[8],
  np.light.gray[9],
  // green --> yellow +1 (slightly darker)
  lightColors.scale.yellow[1],
  lightColors.scale.yellow[2],
  lightColors.scale.yellow[3],
  lightColors.scale.yellow[4],
  lightColors.scale.yellow[5],
  lightColors.scale.yellow[6],
  lightColors.scale.yellow[7],
  lightColors.scale.yellow[8],
  lightColors.scale.yellow[9],
  lightColors.scale.yellow[9],
  // red --> pink +1 (slightly darker)
  lightColors.scale.pink[1],
  lightColors.scale.pink[2],
  lightColors.scale.pink[3],
  lightColors.scale.pink[4],
  lightColors.scale.pink[5],
  lightColors.scale.pink[6],
  lightColors.scale.pink[7],
  lightColors.scale.pink[8],
  lightColors.scale.pink[9],
  lightColors.scale.pink[9],
  // orange --> gray (green provides too much contrast in dark theme, and not enough contrast in light theme)
  lightColors.scale.gray[0],
  lightColors.scale.gray[1],
  lightColors.scale.gray[2],
  lightColors.scale.gray[3],
  lightColors.scale.gray[4],
  lightColors.scale.gray[5],
  lightColors.scale.gray[6],
  lightColors.scale.gray[7],
  lightColors.scale.gray[8],
  lightColors.scale.gray[9],
  // coral --> orange
  lightColors.scale.orange[0],
  lightColors.scale.orange[1],
  lightColors.scale.orange[2],
  lightColors.scale.orange[3],
  lightColors.scale.orange[4],
  lightColors.scale.orange[5],
  lightColors.scale.orange[6],
  lightColors.scale.orange[7],
  lightColors.scale.orange[8],
  lightColors.scale.orange[9],
  // purple --> purple +1 (slightly darker)
  lightColors.scale.purple[1],
  lightColors.scale.purple[2],
  lightColors.scale.purple[3],
  lightColors.scale.purple[4],
  lightColors.scale.purple[5],
  lightColors.scale.purple[6],
  lightColors.scale.purple[7],
  lightColors.scale.purple[8],
  lightColors.scale.purple[9],
  lightColors.scale.purple[9],
  // pink --> coral
  lightColors.scale.coral[0],
  lightColors.scale.coral[1],
  lightColors.scale.coral[2],
  lightColors.scale.coral[3],
  lightColors.scale.coral[4],
  lightColors.scale.coral[5],
  lightColors.scale.coral[6],
  lightColors.scale.coral[7],
  lightColors.scale.coral[8],
  lightColors.scale.coral[9],
  // yellow --> red
  lightColors.scale.red[0],
  lightColors.scale.red[1],
  lightColors.scale.red[2],
  lightColors.scale.red[3],
  lightColors.scale.red[4],
  lightColors.scale.red[5],
  lightColors.scale.red[6],
  lightColors.scale.red[7],
  lightColors.scale.red[8],
  lightColors.scale.red[9],
].map(flagHex);
const convertedLightOptions = {
  files: "./themes/nushu-light.json",
  // name, white, black, gray, green, red, orange, coral, purple, pink, yellow
  from: [
    /"name": "GitHub Light Default"/g,
    //
    new RegExp(`${skipProps}${lightColors.scale.white}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.black}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.gray[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.gray[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.green[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.green[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.red[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.red[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.orange[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.orange[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.coral[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.coral[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.purple[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.purple[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.pink[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.pink[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${lightColors.scale.yellow[0]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[1]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[2]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[3]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[4]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[5]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[6]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[7]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[8]}`, "gi"),
    new RegExp(`${skipProps}${lightColors.scale.yellow[9]}`, "gi"),
  ],
  // name, white, black, gray, yellow, pink, green, orange, purple, coral, red
  to: [
    '"name": "Nüshu Light"',
    //
    ...toLightTmpHex,
  ],
};

const toDarkTmpHex = [
  np.dark.white,
  np.dark.black,
  //
  np.dark.gray[0],
  np.dark.gray[1],
  np.dark.gray[2],
  np.dark.gray[3],
  np.dark.gray[4],
  np.dark.gray[5],
  np.dark.gray[6],
  np.dark.gray[7],
  np.dark.gray[8],
  np.dark.gray[9],
  // green --> yellow +1 (slightly darker)
  darkColors.scale.yellow[1],
  darkColors.scale.yellow[2],
  darkColors.scale.yellow[3],
  darkColors.scale.yellow[4],
  darkColors.scale.yellow[5],
  darkColors.scale.yellow[6],
  darkColors.scale.yellow[7],
  darkColors.scale.yellow[8],
  darkColors.scale.yellow[9],
  darkColors.scale.yellow[9],
  // red --> pink +1 (slightly darker)
  darkColors.scale.pink[1],
  darkColors.scale.pink[2],
  darkColors.scale.pink[3],
  darkColors.scale.pink[4],
  darkColors.scale.pink[5],
  darkColors.scale.pink[6],
  darkColors.scale.pink[7],
  darkColors.scale.pink[8],
  darkColors.scale.pink[9],
  darkColors.scale.pink[9],
  // orange --> gray (green provides too much contrast in dark theme, and not enough contrast in light theme)
  darkColors.scale.gray[0],
  darkColors.scale.gray[1],
  darkColors.scale.gray[2],
  darkColors.scale.gray[3],
  darkColors.scale.gray[4],
  darkColors.scale.gray[5],
  darkColors.scale.gray[6],
  darkColors.scale.gray[7],
  darkColors.scale.gray[8],
  darkColors.scale.gray[9],
  // coral --> orange
  darkColors.scale.orange[0],
  darkColors.scale.orange[1],
  darkColors.scale.orange[2],
  darkColors.scale.orange[3],
  darkColors.scale.orange[4],
  darkColors.scale.orange[5],
  darkColors.scale.orange[6],
  darkColors.scale.orange[7],
  darkColors.scale.orange[8],
  darkColors.scale.orange[9],
  // purple --> purple +1 (slightly darker)
  darkColors.scale.purple[1],
  darkColors.scale.purple[2],
  darkColors.scale.purple[3],
  darkColors.scale.purple[4],
  darkColors.scale.purple[5],
  darkColors.scale.purple[6],
  darkColors.scale.purple[7],
  darkColors.scale.purple[8],
  darkColors.scale.purple[9],
  darkColors.scale.purple[9],
  // pink --> coral
  darkColors.scale.coral[0],
  darkColors.scale.coral[1],
  darkColors.scale.coral[2],
  darkColors.scale.coral[3],
  darkColors.scale.coral[4],
  darkColors.scale.coral[5],
  darkColors.scale.coral[6],
  darkColors.scale.coral[7],
  darkColors.scale.coral[8],
  darkColors.scale.coral[9],
  // yellow --> red
  darkColors.scale.red[0],
  darkColors.scale.red[1],
  darkColors.scale.red[2],
  darkColors.scale.red[3],
  darkColors.scale.red[4],
  darkColors.scale.red[5],
  darkColors.scale.red[6],
  darkColors.scale.red[7],
  darkColors.scale.red[8],
  darkColors.scale.red[9],
].map(flagHex);
const convertedDarkOptions = {
  files: "./themes/nushu-dark.json",
  from: [
    // name, white, black, gray, green, red, orange, coral, purple, pink, yellow
    /"name": "GitHub Dark Default"/g,
    //
    new RegExp(`${skipProps}${darkColors.scale.white}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.black}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.gray[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.gray[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.green[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.green[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.red[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.red[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.orange[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.orange[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.coral[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.coral[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.purple[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.purple[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.pink[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.pink[9]}`, "gi"),
    //
    new RegExp(`${skipProps}${darkColors.scale.yellow[0]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[1]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[2]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[3]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[4]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[5]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[6]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[7]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[8]}`, "gi"),
    new RegExp(`${skipProps}${darkColors.scale.yellow[9]}`, "gi"),
  ],
  // name, white, black, gray, yellow, pink, green, orange, purple, coral, red
  to: [
    '"name": "Nüshu Dark"',
    //
    ...toDarkTmpHex,
  ],
};

async function setLightColorScales() {
  !(
    convertedLightOptions.from.length === convertedLightOptions.to.length &&
    convertedDarkOptions.from.length === convertedDarkOptions.to.length
  )
    ? console.error(
        "WHOA THERE! SOMETHING IS NOT ADDING UP IN 'set-color-scales.js'"
      )
    : null;

  const convertedResults = await replace(convertedLightOptions);
  console.log("Converted replacement results:", convertedResults);
}
async function setDarkColorScales() {
  const convertedResults = await replace(convertedDarkOptions);
  console.log("Converted replacement results:", convertedResults);
}

module.exports = {
  setLightColorScales,
  setDarkColorScales,
};
