function flagHex(hex) {
  return `#FLAG_${hex.replace("#", "")}`;
}

module.exports = {
  flagHex,
};
