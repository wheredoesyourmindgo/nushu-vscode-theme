const { getVariant } = require("./process");
const { getColors } = require("./primer");

function getTheme({ style, name }) {
  // Usage: `auto('pink')`
  const auto = (hex) => getVariant(hex, style);

  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options) => options[style];

  const primer = getColors(style);
  return {
    name: name,
    colors: {
      foreground: primer.gray[7],
      // focusBorder: pick({ light: primer.blue[4], dark: primer.blue[3] }),
      focusBorder: pick({ light: primer.yellow[9] + '59', dark: primer.blue[3] }),
      foreground: pick({ light: primer.gray[7], dark: primer.gray[6] }),
      descriptionForeground: primer.gray[5],
      errorForeground: primer.red[6],
      "textLink.foreground": pick({ light: primer.blue[5], dark: primer.blue[6] }),
      "textLink.activeForeground": pick({ light: primer.blue[6], dark: primer.blue[7] }),
      // "textBlockQuote.background": primer.gray[0],
      "textBlockQuote.background": primer.nushuGray[0],
      "textBlockQuote.border": primer.gray[2],
      // "textCodeBlock.background": primer.gray[1],
      "textCodeBlock.background": primer.nushuGray[1],
      "textPreformat.foreground": primer.gray[6],
      "textSeparator.foreground": primer.gray[3],
      "button.background": pick({ light: "#159739", dark: primer.green[2] }),
      "button.foreground": pick({ light: primer.white, dark: primer.green[8] }),
      "button.hoverBackground": pick({ light: "#138934", dark: primer.green[3] }),
      "checkbox.border": pick({ light: primer.gray[3], dark: primer.white }),
      "checkbox.background": pick({ light: primer.gray[0], dark: primer.gray[2] }),
      // "dropdown.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "dropdown.background": pick({ light: primer.nushuGray[0], dark: primer.gray[1] }),
      "dropdown.listBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "dropdown.border": pick({ light: primer.gray[2], dark: primer.white }),
      "dropdown.foreground": primer.gray[9],
      // "input.background": pick({ light: primer.gray[0], dark: primer.gray[1] }),
      "input.background": pick({ light: primer.white, dark: primer.gray[1] }),
      "input.border": pick({ light: primer.gray[2], dark: primer.white }),
      "input.foreground": primer.gray[9],
      "input.placeholderForeground": pick({ light: primer.gray[4], dark: primer.gray[5] }),
      // "badge.foreground": pick({ light: primer.blue[6], dark: primer.blue[7] }),
      "badge.foreground": pick({ light: primer.blue[4], dark: primer.blue[7] }),
      // "badge.background": pick({ light: primer.blue[1], dark: primer.blue[2] }),
      "badge.background": pick({ light: primer.white, dark: primer.blue[2] }),
      "progressBar.background": primer.blue[4],

      "titleBar.activeForeground": primer.gray[9],
      "titleBar.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "titleBar.inactiveForeground": primer.gray[5],
      // "titleBar.inactiveBackground": primer.nushuGray[1],
      "titleBar.inactiveBackground": pick({ light: primer.nushuGray[1], dark: "#1f2428" }),
      "titleBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "activityBar.foreground": primer.gray[9],
      "activityBar.inactiveForeground": primer.gray[4],
      "activityBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      "activityBarBadge.foreground": pick({ light: primer.white, dark: primer.black }),
      "activityBarBadge.background": pick({ light: primer.blue[4], dark: primer.blue[4] }),
      "activityBarBadge.foreground": primer.white,
      "activityBarBadge.background": primer.blue[4],
      // "activityBar.activeBorder": "#f9826c",
      "activityBar.activeBorder": primer.yellow[8],
      "activityBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "sideBar.foreground": primer.gray[7],
      // "sideBar.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "sideBar.background": pick({ light: primer.nushuGray[1], dark: "#1f2428" }),
      "sideBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "sideBarTitle.foreground": primer.gray[9],
      "sideBarSectionHeader.foreground": primer.gray[9],
      // "sideBarSectionHeader.background": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "sideBarSectionHeader.background": pick({ light: primer.nushuGray[1], dark: "#1f2428" }),
      "sideBarSectionHeader.border": pick({ light: primer.gray[2], dark: primer.white }),
      "list.hoverForeground": primer.gray[9],
      "list.inactiveSelectionForeground": primer.gray[9],
      "list.activeSelectionForeground": primer.gray[9],
      // "list.hoverBackground": pick({ light: "#ebf0f4", dark: primer.gray[0] }),
      "list.hoverBackground": pick({ light: "#ebf0f4" + 'E6', dark: primer.gray[0] }),
      // "list.inactiveSelectionBackground": pick({ light: "#e8eaed", dark: "#282e34" }),
      "list.inactiveSelectionBackground": pick({ light: primer.nushuGray[2] + 'F2', dark: "#282e34" }),
      // "list.activeSelectionBackground": pick({ light: "#e2e5e9", dark: "#39414a" }),
      "list.activeSelectionBackground": pick({ light: "#e2e5e9" + 'F2', dark: "#39414a" }),
      "list.inactiveFocusBackground": pick({ light: primer.blue[1], dark: "#1d2d3e" }),
      // "list.focusBackground": pick({ light: "#cce5ff", dark: primer.blue[2] }),
      "list.focusBackground": pick({ light: primer.blue[1] + 'F2', dark: primer.blue[2] }),
      "tree.indentGuidesStroke": pick({ light: primer.gray[2], dark: primer.gray[1] }),
      // "notificationCenterHeader.background": primer.gray[0],
      "notificationCenterHeader.background": primer.nushuGray[0],
      "pickerGroup.border": primer.gray[2],
      "pickerGroup.foreground": primer.gray[9],
      // "quickInput.background": primer.gray[0],
      "quickInput.background": primer.nushuGray[0],
      "quickInput.foreground": primer.gray[9],

      "statusBar.foreground": primer.gray[6],
      // "statusBar.debuggingForeground": primer.white,
      "statusBar.debuggingForeground": primer.gray[6],
      "statusBar.noFolderForeground": primer.gray[6],
      "statusBar.background": pick({ light: primer.white, dark: primer.gray[0] }),
      // "statusBar.debuggingBackground": auto("#f9826c"),
      "statusBar.debuggingBackground": primer.white,
      "statusBar.border": pick({ light: primer.gray[2], dark: primer.white }),
      "statusBar.noFolderBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "statusBar.debuggingBorder": primer.gray[2],
      "statusBar.noFolderBorder": primer.gray[2],
      // "editorGroupHeader.tabsBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "editorGroupHeader.tabsBackground": pick({ light: primer.nushuGray[1], dark: "#1f2428" }),
      "editorGroupHeader.tabsBorder": pick({ light: primer.gray[2], dark: primer.white }),
      "editorGroup.border": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.activeForeground": primer.gray[9],
      "tab.inactiveForeground": primer.gray[5],
      // "tab.inactiveBackground": pick({ light: primer.gray[1], dark: "#1f2428" }),
      "tab.inactiveBackground": pick({ light: primer.nushuGray[1], dark: "#1f2428" }),
      "tab.activeBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.hoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.border": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.unfocusedActiveBorderTop": pick({ light: primer.gray[2], dark: primer.white }),
      "tab.unfocusedHoverBackground": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.activeBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      "tab.unfocusedActiveBorder": pick({ light: primer.white, dark: primer.gray[0] }),
      // "tab.activeBorderTop": "#f9826c",
      "tab.activeBorderTop": primer.yellow[8],
      "breadcrumb.foreground": primer.gray[5],
      "breadcrumb.focusForeground": primer.gray[9],
      "breadcrumb.activeSelectionForeground": primer.gray[6],
      // "breadcrumbPicker.background": pick({ light: primer.gray[0], dark: "#2b3036" }),
      "breadcrumbPicker.background": pick({ light: primer.nushuGray[0], dark: "#2b3036" }),
      "editor.foreground": primer.gray[9],
      "editor.background": pick({ light: primer.white, dark: primer.gray[0] }),
      // "editor.foldBackground": pick({ light: primer.gray[0], dark: "#282e33" }),
      "editor.foldBackground": pick({ light: primer.nushuGray[0], dark: "#282e33" }),
      // "editor.lineHighlightBackground": pick({ light: primer.gray[1], dark: "#2b3036" }),
      "editor.lineHighlightBackground": pick({ light: primer.nushuGray[1], dark: "#2b3036" }),
      "editorLineNumber.foreground": pick({ light: "#1b1f234d", dark: primer.gray[2] }),
      "editorLineNumber.activeForeground": primer.gray[9],
      "editorIndentGuide.background": pick({ light: "#eff2f6", dark: primer.gray[1] }),
      "editorIndentGuide.activeBackground": pick({ light: "#d7dbe0", dark: primer.gray[2] }),
      "editorWhitespace.foreground": pick({ light: primer.gray[4], dark: primer.gray[4] }),
      "editorCursor.foreground": primer.blue[7],
      // "editor.inactiveSelectionBackground": pick({ light: "#0366d611", dark: "#79b8ff11" }),
      "editor.inactiveSelectionBackground": pick({ light: primer.yellow[7] + '11', dark: "#79b8ff11" }),
      // "editor.selectionBackground": pick({ light: "#0366d625", dark: "#2188ff33" }),
      "editor.selectionBackground": pick({ light: primer.yellow[7] + '25', dark: "#2188ff33" }),
      // "editor.wordHighlightBackground": pick({ light: "#0366d622", dark: "#2188ff22" }),
      "editor.wordHighlightBackground": pick({ light:  primer.yellow[7] + '22', dark: "#2188ff22" }),
      // "editor.findMatchBackground": pick({ light: primer.yellow[4], dark: "#ffd33d44" }),
      "editor.findMatchBackground": pick({ light: primer.yellow[4], dark: "#ffd33d44" }),
      "editor.findMatchHighlightBackground": pick({ light: "#ffdf5d66", dark: "#ffd33d22" }),
      "editorBracketMatch.background": pick({ light: primer.blue[2], dark: primer.blue[3] }),
      "editorBracketMatch.border": pick({ light: primer.blue[2], dark: primer.blue[3] }),
      "editorGutter.modifiedBackground": pick({ light: primer.blue[4], dark: primer.blue[5] }),
      "editorGutter.addedBackground": pick({ light: primer.green[5], dark: primer.green[4] }),
      "editorGutter.deletedBackground": primer.red[5],

      "diffEditor.insertedTextBackground": pick({ light: "#34d05822", dark: "#28a74511" }),
      "diffEditor.removedTextBackground": pick({ light: "#d73a4922", dark: "#d73a4918" }),

      "scrollbar.shadow": pick({ light: "#6a737d33", dark: "#0008" }),
      "scrollbarSlider.background": pick({ light: "#959da533", dark: "#6a737d33" }),
      "scrollbarSlider.hoverBackground": pick({ light: "#959da544", dark: "#6a737d44" }),
      "scrollbarSlider.activeBackground": pick({ light: "#959da588", dark: "#6a737d88" }),
      "editorOverviewRuler.border": primer.white,
      // "panel.background": primer.gray[1],
      "panel.background": pick({ light: primer.nushuGray[1], dark: "#1f2428" }),
      "panel.border": pick({ light: primer.gray[2], dark: primer.white }),
      // "panelTitle.activeBorder": "#f9826c",
      "panelTitle.activeBorder": primer.yellow[8],
      "panelTitle.activeForeground": primer.gray[9],
      "panelTitle.inactiveForeground": primer.gray[5],
      "panelInput.border": pick({ light: primer.gray[2], dark: primer.gray[1] }),
      "terminal.ansiBlack": primer.gray[3],
      "terminal.ansiRed": primer.red[8],
      "terminal.ansiGreen": primer.green[8],
      "terminal.ansiYellow": primer.yellow[8],
      "terminal.ansiBlue":  primer.purple[8],
      "terminal.ansiMagenta": primer.pink[8],
      "terminal.ansiCyan": primer.blue[8],
      "terminal.ansiWhite": primer.gray[7],
      "terminal.ansiBrightBlack": primer.gray[5],
      "terminal.ansiBrightRed": primer.red[7],
      "terminal.ansiBrightGreen":  primer.green[7],
      "terminal.ansiBrightYellow": primer.yellow[7],
      "terminal.ansiBrightBlue": primer.purple[7],
      "terminal.ansiBrightMagenta":primer.pink[7],
      "terminal.ansiBrightCyan": primer.blue[7],
      "terminal.ansiBrightWhite": primer.gray[2],
      "terminal.background": "#f6f3ed",
      "terminal.foreground": primer.gray[6],

      "gitDecoration.addedResourceForeground": primer.green[5],
      "gitDecoration.modifiedResourceForeground": primer.blue[6],
      "gitDecoration.deletedResourceForeground": primer.red[5],
      "gitDecoration.untrackedResourceForeground": primer.green[5],
      "gitDecoration.ignoredResourceForeground": primer.gray[4],
      "gitDecoration.conflictingResourceForeground": primer.orange[6],
      "gitDecoration.submoduleResourceForeground": primer.gray[4],
      "debugToolBar.background": pick({ light: primer.white, dark: "#2b3036" }),
      "editor.stackFrameHighlightBackground": primer.yellow[1],
      "editor.focusedStackFrameHighlightBackground": primer.yellow[2],
      "settings.headerForeground": primer.gray[9],
      "settings.modifiedItemIndicator": primer.blue[4],
      // "welcomePage.buttonBackground": primer.gray[1],
      "welcomePage.buttonBackground": primer.nushuGray[1],
      "welcomePage.buttonHoverBackground": primer.gray[2],
    },
    tokenColors: [
      {
        scope: ["comment", "punctuation.definition.comment", "string.comment"],
        settings: {
          foreground: pick({ light: primer.gray[5], dark: primer.gray[4] }),
        },
      },
      {
        scope: [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.language",
          // Added.
          "variable.other.normal"
        ],
        settings: {
          foreground: primer.blue[6],
        },
      },
      /* Added */
      {
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": primer.orange[7]
        }
      },
      /* */
      {
        scope: ["entity", "entity.name"],
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
        },
      },
      {
        scope: "variable.parameter.function",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          // foreground: primer.green[6],
          foreground: primer.orange[7],
        },
      },
      {
        scope: "keyword",
        settings: {
          // foreground: primer.red[5],
          foreground: primer.yellow[9],
          foreground: pick({ light: primer.yellow[9], dark: primer.red[6] }),
        },
      },
      {
        scope: ["storage", "storage.type"],
        settings: {
          // foreground: primer.red[5],
          foreground: primer.yellow[9],
          foreground: pick({ light: primer.yellow[9], dark: primer.red[6] }),
        },
      },
      {
        scope: [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java",
        ],
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: [
          "string",
          "punctuation.definition.string",
          "string punctuation.section.embedded source",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: "support",
        settings: {
          foreground: primer.blue[6],
        },
      },
      /* Added */
      {
        "scope": [
          "source.yaml entity.name.tag"
        ],
        "settings": {
          foreground: primer.blue[6],
        }
      },
      /* */
      {
        scope: "meta.property-name",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "variable",
        settings: {
          // foreground: primer.orange[6],
          foreground: primer.blue[7],
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "invalid.broken",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.deprecated",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.illegal",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "invalid.unimplemented",
        settings: {
          fontStyle: "italic",
          foreground: primer.red[7],
        },
      },
      {
        scope: "carriage-return",
        settings: {
          fontStyle: "italic underline",
          // background: primer.red[5],
          background: pick({ light: primer.yellow[9], dark: primer.red[6] }),
          // foreground: primer.gray[0],
          foreground: primer.nushuGray[0],
          content: "^M",
        },
      },
      {
        scope: "message.error",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: "string source",
        settings: {
          foreground: primer.gray[9],
        },
      },
      {
        scope: "string variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: ["source.regexp", "string.regexp"],
        settings: {
          foreground: primer.blue[8],
        },
      },
      {
        scope: [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition",
        ],
        settings: {
          foreground: primer.blue[8],
        },
      },
      /* Added */
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class",
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
          "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css"
        ],
        "settings": {
          "foreground": primer.yellow[9]
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.id", 
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": primer.gray[9]
        }
      },
      /* Added */
      {
        scope: "string.regexp constant.character.escape",
        settings: {
          fontStyle: "bold",
          // foreground: primer.green[6],
          foreground: primer.orange[7],
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "support.variable",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.module-reference",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.list",
        settings: {
          foreground: primer.yellow[9],
        },
      },
      {
        scope: ["markup.heading", "markup.heading entity.name"],
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "markup.quote",
        settings: {
          // foreground: primer.green[6],
          foreground: primer.orange[7],
        },
      },
      {
        scope: "markup.italic",
        settings: {
          fontStyle: "italic",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.bold",
        settings: {
          fontStyle: "bold",
          foreground: primer.gray[9],
        },
      },
      {
        scope: "markup.raw",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted",
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted",
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ["markup.ignored", "markup.untracked"],
        settings: {
          // foreground: primer.gray[1],
          foreground: primer.nushuGray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: "meta.diff.range",
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: "bold",
        },
      },
      {
        scope: "meta.diff.header",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.separator",
        settings: {
          fontStyle: "bold",
          foreground: primer.blue[6],
        },
      },
      {
        scope: "meta.output",
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote",
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: "brackethighlighter.unmatched",
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: ["constant.other.reference.link", "string.other.link"],
        settings: {
          foreground: primer.blue[8],
          fontStyle: "underline",
        },
      },
      {
        name: "ITALIC",
        scope: [
          "comment",
          "storage.modifier",
          "punctuation.definition.comment",
          "entity.other",
          "variable.language",
          "support.type.vendored",
          "support.constant.vendored",
          "markup.quote",
          "markup.italic",
          "tag.decorator.js entity.name.tag.js",
          "tag.decorator.js punctuation.definition.tag.js",
          "keyword.control.clojure",
          "source.clojure meta.symbol.dynamic",
          "keyword.other.this.cs",
          "keyword.other.base.cs",
          "variable.other.member.c",
          "support.type.core.rust",
          "variable.other.object.property",
          "variable.other.property",
          "source.r meta.function.r keyword.control.r",
          "comment.line.roxygen.r keyword",
          "comment.line.roxygen.r variable.parameter.r",
          "keyword.control.inheritance.coffee",
          "comment.block.documentation.phpdoc.php keyword",
          "keyword.other.array.phpdoc.php",
          "storage.type.modifier",
          "comment.block.javadoc.java keyword",
          "comment.block.javadoc.java variable.parameter.java",
          "keyword.operator.documentation.powershell",
          "variable.other.table.property.lua",
          "storage.type.scala",
          "variable.parameter.function.language.special",
          "comment.block.documentation.scala keyword",
          "comment.block.documentation.scala variable.parameter",
          "support.function.builtin.go",
          "constant.other.symbol.hashkey.ruby",
          "constant.other.symbol.hashkey.ruby punctuation.definition.constant.ruby",
          "constant.other.symbol.ruby",
          "source.vala storage.type.generic",
          "constant.other.table-name",
          "constant.other.placeholder",
          "variable.other.field",
          "keyword.function.go",
          "entity.alias.import.go",
          "source.swift keyword.other.declaration-specifier",
          "support.variable.swift",
          "keyword.other.capture-specifier",
          "text.tex support.function.emph",
          "constant.other.math",
          "support.function.textit",
          "entity.name.footnote",
          "entity.name.function.directive.graphql",
          "source.graphql support.type.enum",
          "source.ocaml entity.name.filename",
          "source.reason entity.name.filename",
          "abstract.definition.fsharp keyword",
          "abstract.definition.fsharp entity",
          "function.anonymous keyword",
          "entity.name.record.field.accessor.elm",
          "support.type.primitive",
          "support.type.builtin",
          "keyword.type.cs",
          "storage.type.built-in",
          "storage.type.primitive",
          "source.python support.type.python",
          "storage.type.core.rust",
          "source.swift support.type",
          "source.go storage.type",
          "storage.type.php",
          "storage.type.function.kotlin",
          "entity.name.type.kotlin",
          "support.type.julia",
          "variable.other.member",
          "keyword.other.import",
          "keyword.package",
          "keyword.import",
          "source.wsd keyword.control.diagram",
          "keyword.language.gherkin.feature.step",
          "source.hlsl storage.type.basic",
          "source.apex keyword.type",
          "sharing.modifier",
          "source.nim storage.type.concrete",
          "meta.preprocessor.pragma.nim",
          "storage.type.integral",
          "entity.name.scope-resolution.function.call",
          "support.class.builtin",
          "comment.block.documentation storage.type.class",
          "source.tf meta.keyword.string",
          "source.tf meta.keyword.number",
          "source.scala entity.name.class",
          "meta.import keyword.control",
          "keyword.control.export",
          "meta.tag.attributes entity.other.attribute-name",
          "text.html entity.other.attribute-name",
          "meta.attribute-selector entity.other.attribute-name",
        ],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "MORE-ITALIC",
        scope: [
          "markup.bold markup.italic",
          "markup.italic markup.bold",
          "markup.quote markup.bold",
          "markup.bold markup.italic string",
          "markup.italic markup.bold string",
          "markup.quote markup.bold string",
          "text.html punctuation.section.embedded",
          "variable.other.c",
          "storage.modifier.lifetime.rust",
          "entity.name.lifetime.rust",
          "source.rust meta.attribute.rust",
          "meta.attribute.id entity.other.attribute-name",
          "keyword.other.fn.rust",
          "source.ocaml punctuation.definition.tag emphasis",
          "source.tf entity.name",
          "comment.block.documentation variable.other",
        ],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        name: "NORMAL",
        scope: [
          "keyword.begin.tag.ejs",
          "source.python meta.function.decorator.python support.type.python",
          "source.cs keyword.other",
          "keyword.other.var.cs",
          "source.go keyword",
          "storage.modifier.static.rust",
          "variable.parameter.r",
          "variable.parameter.handlebars",
          "storage.modifier.import",
          "storage.modifier.package",
          "meta.class.identifier storage.modifier",
          "keyword.operator.other.powershell",
          "source.lua storage.type.function",
          "source.css variable.parameter",
          "string.interpolated variable.parameter",
          "source.apacheconf keyword",
          "keyword.other.julia",
          "storage.modifier.using.vala",
          "source.objc keyword.other.property.attribute",
          "source.sql keyword.other",
          "keyword.other.using.vala",
          "keyword.operator.function.infix",
          "keyword.control.directive",
          "keyword.other.rust",
          "keyword.other.declaration-specifier.swift",
          "entity.name.function.swift",
          "keyword.control.function-end.lua",
          "keyword.control.class",
          "keyword.control.def",
          "punctuation.definition.variable",
          "entity.name.section.latex",
          "source.ocaml keyword markup.underline",
          "source.ocaml constant.language constant.numeric entity.other.attribute-name.id.css",
          "source.reason entity.other.attribute-name constant.language constant.numeric",
          "keyword.format.specifier.fsharp",
          "entity.name.section.fsharp",
          "binding.fsharp keyword",
          "binding.fsharp keyword.symbol",
          "record.fsharp keyword",
          "keyword.symbol.fsharp",
          "entity.name.section.fsharp keyword",
          "namespace.open.fsharp keyword",
          "namespace.open.fsharp entity",
          "storage.type",
          "source.cpp keyword.other",
          "source.c keyword.other",
          "keyword.other.unit",
          "storage.modifier.array.bracket",
          "keyword.control.default",
          "meta.import.haskell keyword",
          "keyword.declaration.dart",
          "source.wsd keyword.other",
          "keyword.other.skinparam",
          "source.css keyword.control",
          "source.css keyword.operator",
          "keyword.language.gherkin.feature.scenario",
          "keyword.control.cucumber.table",
          "source.toml entity.other.attribute-name",
          "source.toml keyword",
          "keyword.other.nim",
          "source.nim keyword.other.common.function",
          "source.nim keyword.other",
          "source.scala keyword.declaration",
          "source.scala entity.name.class.declaration",
          "entity.other.attribute-name.pseudo-class",
          "entity.other.attribute-name.pseudo-element",
          "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
          "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
        ],
        settings: {
          fontStyle: "",
        },
      },
    ],
  };
}

module.exports = getTheme;
