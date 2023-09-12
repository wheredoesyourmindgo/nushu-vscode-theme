const replace = require("replace-in-file");

/*
Remove all flags set during conversions
*/

const convertedOptions = {
  files: ["./themes/nushu-light.json", "./themes/nushu-dark.json"],
  from: new RegExp("FLAG_", "gi"),
  to: "",
};

async function removeFlags() {
  const convertedResults = await replace(convertedOptions);
  console.log("Converted replacement results:", convertedResults);
}

module.exports = {
  removeFlags,
};
