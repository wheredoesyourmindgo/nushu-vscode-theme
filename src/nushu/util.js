const fs = require("node:fs");
const replace = require("replace-in-file");
const rp = require("replace-json-property");

// Flag edits so values are not changed more than once, which is important so chroma doesn't repeatedly apply hue and lightness adjustments
function flagHex(hex) {
  return `#FLAG_${hex.replace("#", "")}`;
}

/*
Run a replace-in-file conversion and fail the build unless it made exactly the expected number of
replacements. A count that drifts (after an upstream merge or a Primer update, for example) means a
conversion silently matched more or less than it used to, so it should be looked at, not ignored.
*/
async function replaceExpecting(label, options, expected) {
  const results = await replace({ ...options, countMatches: true });
  const actual = results.reduce((sum, result) => sum + result.numReplacements, 0);
  console.log(`${label}: ${actual} replacements`);
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected} replacements, got ${actual}`);
  }
  return results;
}

/*
replace-json-property silently does nothing when a property doesn't exist, so check that it does
before replacing it.
*/
function replaceExistingProp(file, key, value) {
  const theme = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!(key in theme.colors)) {
    throw new Error(`${file}: expected "${key}" to exist in colors`);
  }
  rp.replace(file, key, value);
}

/*
Final check: every color in the converted themes should be a plain hex value, with no flags left.
`knownIssues` lists color keys that are known to be invalid and accepted for now.
*/
function assertValidColors(file, knownIssues = []) {
  const theme = JSON.parse(fs.readFileSync(file, "utf8"));
  const hex = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
  const values = [
    ...Object.entries(theme.colors),
    ...theme.tokenColors.flatMap((token, i) =>
      ["foreground", "background"]
        .filter((key) => token.settings?.[key] !== undefined)
        .map((key) => [`tokenColors[${i}].settings.${key}`, token.settings[key]])
    ),
  ];
  const invalid = values.filter(
    ([key, value]) => !hex.test(value) && !knownIssues.includes(key)
  );
  if (invalid.length > 0) {
    throw new Error(
      `${file}: invalid colors: ${invalid.map(([key, value]) => `${key}=${value}`).join(", ")}`
    );
  }
}

module.exports = {
  flagHex,
  replaceExpecting,
  replaceExistingProp,
  assertValidColors,
};
