// Flag edits so values are not changed more than once, which is important so chroma doesn't repeatedly apply hue and lightness adjustments
function flagHex(hex) {
  return `#FLAG_${hex.replace("#", "")}`;
}

module.exports = {
  flagHex,
};
