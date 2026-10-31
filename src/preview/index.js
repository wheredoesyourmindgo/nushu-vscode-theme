const fs = require("node:fs");

/*
Generates preview/nushu-preview.css, the stylesheet contributed to VS Code's markdown preview
(markdown.previewStyles), so the preview matches the MarkEdit theme's (preview.ts in
markedit-theme-nushu). MarkEdit's preview is GitHub's markdown CSS with Nushu colors on top, so this
is the same: the GitHub files MarkEdit-preview ships (vendored here), then the same Nushu overrides.
VS Code's font settings are kept, so GitHub's font families and base size are dropped.

The stylesheet loads whatever theme is active, so every rule is scoped to a Nushu theme through the
data-vscode-theme-id attribute VS Code sets on webview bodies (the theme's label, as Nushu sets no
ids). That scope stands in for GitHub's .markdown-body, and outranks the preview's own rules.
Nushu Classic lacks the markdown token colors this relies on, as MarkEdit lacks a Classic theme, so
its preview keeps VS Code's defaults.
*/

const themes = [
  { file: "./themes/nushu-light.json", id: "Nushu Light", github: "light" },
  { file: "./themes/nushu-dark.json", id: "Nushu Dark", github: "dark" },
];

const themeScope = (id) => `body[data-vscode-theme-id="${id}"]`;
const allScope = `:is(${themes.map(({ id }) => themeScope(id)).join(", ")})`;

const github = (name) => fs.readFileSync(`${__dirname}/github-${name}.css`, "utf8");

// Fails the build when a vendored file no longer contains what an edit expects, after an update say
function replaceExpecting(css, search, replacement) {
  if (!css.includes(search)) {
    throw new Error(`preview: expected to find ${JSON.stringify(search)}`);
  }
  return css.replace(search, replacement);
}

// GitHub's base rules, minus its fonts and base size. Its em sizes then scale from VS Code's
// markdown.preview.fontSize, and code takes VS Code's editor font.
function baseStyles() {
  let css = github("base");
  css = replaceExpecting(css, "  font-size: 16px;\n  line-height: 1.5;\n", "");
  css = css.replace(/^\s*font-family: (?!inherit).*\n/gm, "");
  return css.replaceAll(".markdown-body", allScope);
}

// VS Code's own preview styles that GitHub's rules don't override, reset to GitHub's look
function vsCodeResets() {
  const rule = (selectors, body) => `${selectors.map((selector) => `${allScope} ${selector}`).join(",\n")} {\n  ${body}\n}`;
  return [
    rule(["blockquote"], "background: transparent; border-radius: 0;"),
    rule(["pre"], "border: 0;"),
    rule(["pre.hljs code > div"], "padding: 0;"),
    rule(["code"], "line-height: inherit;"),
    // From MarkEdit-preview's main.css
    rule([".task-list-item-checkbox"], "width: 1.1em; height: 1.1em;"),
  ].join("\n");
}

// Resolves a scope the way TextMate themes do for simple selectors: the most specific matching
// selector wins, and later rules win ties. Descendant selectors (containing spaces) are ignored.
function tokenColor(tokenColors, scope) {
  let best;
  tokenColors.forEach((rule) => {
    if (!rule.settings?.foreground) {
      return;
    }
    const selectors = [rule.scope ?? []].flat().flatMap((s) => s.split(",")).map((s) => s.trim());
    selectors
      .filter((s) => !s.includes(" "))
      .forEach((selector) => {
        if ((scope === selector || scope.startsWith(`${selector}.`)) && selector.length >= (best?.length ?? 0)) {
          best = { length: selector.length, color: rule.settings.foreground };
        }
      });
  });
  return best?.color;
}

// The same named colors markedit-theme-nushu's sync-colors.mjs takes from the theme
function palette(theme) {
  const colors = theme.colors;
  const token = (scope) => tokenColor(theme.tokenColors, scope);
  const values = {
    text: colors["editor.foreground"],
    background: colors["editor.background"],
    mutedText: token("punctuation.definition.list.begin.markdown"),
    lineNumber: colors["editorLineNumber.foreground"],
    widgetBackground: colors["editorWidget.background"],
    border: colors["panel.border"],
    codeBackground: colors["textCodeBlock.background"],
    textLink: colors["textLink.foreground"],
    // Nushu's gold, the converted Primer yellow (light #9a6700, dark #e3b341)
    gold: colors["debugConsole.sourceForeground"],
    heading: token("markup.heading"),
    inlineCode: token("markup.inline.raw"),
    keyword: token("keyword"),
    function: token("entity.name.function"),
    insertedBackground: colors["diffEditor.insertedTextBackground"],
    deletedBackground: colors["diffEditor.removedTextBackground"],
    syntax: {
      comment: token("comment"),
      keyword: token("keyword"),
      constant: token("constant.language"),
      string: token("string"),
      function: token("entity.name.function"),
      tag: token("entity.name.tag"),
    },
  };
  const missing = Object.entries({ ...values, ...values.syntax })
    .filter(([, value]) => value === undefined)
    .map(([name]) => name);
  if (missing.length > 0) {
    throw new Error(`${theme.name}: no color for ${missing.join(", ")}`);
  }
  return values;
}

// The Nushu overrides from preview.ts, scoped to one theme
function nushuStyles(id, p) {
  const s = p.syntax;
  const scope = themeScope(id);
  const rule = (selectors, body) => `${selectors.map((selector) => `${scope} ${selector}`).join(",\n")} {\n  ${body}\n}`;
  const color = (value) => `color: ${value};`;

  return [
    `${scope} {
  --fgColor-default: ${p.text};
  --fgColor-muted: ${p.mutedText};
  --fgColor-accent: ${p.textLink};
  --bgColor-default: ${p.background};
  --bgColor-muted: ${p.widgetBackground};
  --bgColor-neutral-muted: ${p.codeBackground};
  --borderColor-default: ${p.border};
  --borderColor-muted: ${p.border};
  color: ${p.text};
  background-color: ${p.background};
}`,
    // Match the editor: blue headings, purple link text, blue inline code, faint rules
    rule(["h1", "h2", "h3", "h4", "h5", "h6"], color(p.heading)),
    rule(["a", "a:hover", "a code"], color(p.function)),
    rule([":not(pre) > code"], color(p.inlineCode)),
    rule(["hr"], `background-color: ${p.lineNumber};`),
    // The quote bar is Nushu gold, softened to 50%
    rule(["blockquote"], `border-left-color: ${p.gold.slice(0, 7)}80;`),
    // Code blocks use the editor's code block shade; the code inside drops highlight.js's own background
    // (code.hljs, as VS Code can put the hljs class on the pre itself)
    rule(["pre"], `${color(p.text)} background-color: ${p.widgetBackground};`),
    rule(["pre code", "code.hljs"], `${color(p.text)} background: transparent;`),
    // highlight.js classes, grouped as in its GitHub theme (which MarkEdit uses), with Nushu's code
    // colors. The preview's own vs/vs2015 styles also color some older class names, so those join in.
    rule([".hljs-doctag", ".hljs-keyword", ".hljs-meta .hljs-keyword", ".hljs-meta-keyword", ".hljs-template-tag",
      ".hljs-template-variable", ".hljs-variable.language_", ".hljs-operator"], color(s.keyword)),
    rule([".hljs-title", ".hljs-title.class_", ".hljs-title.class_.inherited__", ".hljs-title.function_",
      ".hljs-selector-tag", ".hljs-selector-class", ".hljs-selector-id", ".hljs-selector-pseudo"], color(s.function)),
    rule([".hljs-attr", ".hljs-literal", ".hljs-meta", ".hljs-number", ".hljs-selector-attr", ".hljs-type",
      ".hljs-built_in", ".hljs-builtin-name", ".hljs-symbol"], color(s.constant)),
    rule([".hljs-attribute", ".hljs-variable", ".hljs-subst", ".hljs-emphasis", ".hljs-strong", ".hljs-function",
      ".hljs-params", ".hljs-class", ".hljs-tag", ".hljs-link"], color(p.text)),
    rule([".hljs-regexp", ".hljs-string", ".hljs-meta .hljs-string", ".hljs-meta-string"], color(s.string)),
    // The editor doesn't italicize comments, and neither does MarkEdit's preview
    rule([".hljs-comment", ".hljs-code", ".hljs-formula"], `${color(s.comment)} font-style: normal;`),
    rule([".hljs-name"], color(s.tag)),
    rule([".hljs-quote", ".hljs-bullet"], `${color(p.mutedText)} font-style: normal;`),
    rule([".hljs-section"], color(p.heading)),
    rule([".hljs-addition"], `${color(p.text)} background-color: ${p.insertedBackground};`),
    rule([".hljs-deletion"], `${color(p.text)} background-color: ${p.deletedBackground};`),
  ].join("\n");
}

const css = [
  "/* Generated by src/preview/index.js from the Nushu themes. Do not edit. */",
  baseStyles(),
  "/* VS Code preview resets */",
  vsCodeResets(),
  ...themes.map(({ file, id, github: variant }) => {
    const theme = JSON.parse(fs.readFileSync(file, "utf8"));
    const colors = github(variant).replaceAll(".markdown-body", themeScope(id));
    return `/* ${id} */\n${colors}\n${nushuStyles(id, palette(theme))}`;
  }),
];

fs.mkdirSync("./preview", { recursive: true });
fs.writeFileSync("./preview/nushu-preview.css", `${css.join("\n\n")}\n`);
console.log("Wrote preview/nushu-preview.css");
