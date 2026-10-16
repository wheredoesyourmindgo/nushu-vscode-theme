<h1 align="center">Nushu</h1>

<p align="center">Warm, low-contrast light and dark themes for VS Code, built on GitHub's Primer colors.</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/HEAD/images/hero.webp" alt="Nüshu characters resolving into code in Nushu Dark, then switching to Nushu Light" width="870" />
</p>

## Why Nushu

Nushu replaces pure white and near-black backgrounds with softer paper and earth tones, which lowers overall contrast without washing out the code. It's built from the same Primer palette as the GitHub Light Default and GitHub Dark Default themes, with some hues remapped: keywords are magenta rather than red, for example, and tags are gold rather than green.

## Previews

<p align="center">
  <img src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/HEAD/images/Nushu%20Light%20Theme%20Preview.png" alt="Nushu Light" width="800" />
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/HEAD/images/Nushu%20Dark%20Theme%20Preview.png" alt="Nushu Dark" width="800" />
</p>

## Themes

| Theme | Based on |
| --- | --- |
| **Nushu Light** | GitHub Light Default, on a warm paper background (`#f8f6f1`) |
| **Nushu Dark** | GitHub Dark Default, on a warm earth background (`#25211d`) |
| **Nushu Classic** | The original Nushu: a light theme with italics for some tokens |

<p align="center">
  <img src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/HEAD/images/preview-collage@2x.png" alt="Nushu Classic" width="700" />
</p>

## What's different from GitHub's themes

- **Warmer, lower-contrast backgrounds.** The grays throughout the UI are shifted to match, so borders, panels, and selections sit naturally on the new backgrounds.
- **Fewer colors at once.** Variables and a few other tokens use a neutral gray instead of a color, so the colors that remain stay meaningful. This is most noticeable in front-end code like `.tsx`. See [Customizing](#customizing) to bring them back.
- **Colored comments.** Comments are shown in color in both Nushu Light and Nushu Dark. See [Customizing](#customizing) to make them gray.

## Recommended settings

To switch between Nushu Light and Nushu Dark with your OS appearance:

```jsonc
"window.autoDetectColorScheme": true,
"workbench.preferredLightColorTheme": "Nushu Light",
"workbench.preferredDarkColorTheme": "Nushu Dark"
```

Text on a light background often looks thinner than the same text on a dark one. If you use a variable font, [Settings on Theme Switch](https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-settings-on-theme-switch) can use a different font weight for each theme:

```jsonc
"editor.fontVariations": true,
"settingsOnThemeSwitch.lightColorThemeSettings": {
  "editor.fontWeight": 400
},
"settingsOnThemeSwitch.darkColorThemeSettings": {
  "editor.fontWeight": 375
}
```

## Customizing

All of these go in your user `settings.json`.

<details>
<summary><strong>Italic comments and types</strong></summary>

Nushu Classic italicizes some tokens by default. To italicize comments and types in Nushu Light and Nushu Dark:

```jsonc
"editor.tokenColorCustomizations": {
  "[Nushu Light][Nushu Dark]": {
    "textMateRules": [
      {
        "name": "Italic Comments and Types",
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.comment",
          "entity.name.type"
        ],
        "settings": { "fontStyle": "italic" }
      }
    ]
  }
}
```

To turn italics off in Nushu Classic, use the same approach with `"[Nushu Classic]"` and `"fontStyle": ""`.

</details>

<details>
<summary><strong>Colored variables, as in GitHub's themes</strong></summary>

Nushu Light and Nushu Dark show these tokens in neutral gray: `variable`, `punctuation.definition.list.begin.markdown`, `markup.changed`, `punctuation.definition.changed`, `entity.name`, `meta.export.default`, and `meta.definition.variable`. To color them orange, as GitHub's themes do:

```jsonc
"editor.tokenColorCustomizations": {
  "[Nushu Light]": {
    "textMateRules": [
      {
        "name": "Orange Variables",
        "scope": [
          "variable",
          "punctuation.definition.list.begin.markdown",
          "markup.changed",
          "punctuation.definition.changed",
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings": { "foreground": "#953800" }
      }
    ]
  },
  "[Nushu Dark]": {
    "textMateRules": [
      {
        "name": "Orange Variables",
        "scope": [
          "variable",
          "punctuation.definition.list.begin.markdown",
          "markup.changed",
          "punctuation.definition.changed",
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings": { "foreground": "#FFA657" }
      }
    ]
  }
}
```

</details>

<details>
<summary><strong>Gray comments, as in GitHub's themes</strong></summary>

```jsonc
"editor.tokenColorCustomizations": {
  "[Nushu Light]": {
    "textMateRules": [
      {
        "name": "Gray Comments",
        "scope": ["comment", "punctuation.definition.comment", "string.comment"],
        "settings": { "foreground": "#6E7781" }
      }
    ]
  },
  "[Nushu Dark]": {
    "textMateRules": [
      {
        "name": "Gray Comments",
        "scope": ["comment", "punctuation.definition.comment", "string.comment"],
        "settings": { "foreground": "#8B949E" }
      }
    ]
  }
}
```

</details>

<details>
<summary><strong>Language-specific tweaks</strong></summary>

Scopes can target a single language. For example, to bold parameters in C files:

```jsonc
"editor.tokenColorCustomizations": {
  "[Nushu Light][Nushu Dark]": {
    "textMateRules": [
      {
        "name": "Bold C Parameters",
        "scope": ["variable.parameter.c"],
        "settings": { "fontStyle": "bold" }
      }
    ]
  }
}
```

</details>

## Nushu for other apps

The [`extra`](https://github.com/wheredoesyourmindgo/nushu-vscode-theme/tree/HEAD/extra) folder on GitHub has matching themes for Ghostty, iTerm2, Hyper, Monkeytype, and One Markdown. The terminal themes use each theme's editor background, rather than the slightly different background of VS Code's built-in terminal.

## About the name

The name refers to [Nüshu](https://www.atlasobscura.com/articles/nushu-chinese-script-women), a script from Hunan, China, that was written only by women. The icon and the animation at the top use Nüshu characters from Google's [Noto Sans Nüshu](https://fonts.google.com/noto/specimen/Noto+Sans+Nushu) font.

## Credits

- [GitHub Theme](https://github.com/primer/github-vscode-theme) for VS Code, which Nushu is a fork of, and GitHub's [Primer](https://primer.style) colors.
- [Pen Paper Coffee](https://github.com/nylki/pen-paper-coffee-syntax) for Atom, which inspired the light background.
- [Earthsong](https://github.com/monkeytypegame/monkeytype/blob/master/frontend/static/themes/earthsong.css) for Monkeytype, which inspired the dark background.
- The animation and previews use [Maple Mono](https://github.com/subframe7536/Maple-font) for Light and Dark, and [Sudo](https://github.com/jenskutilek/sudo-font) for Classic.
- [Noto Sans Nüshu](https://fonts.google.com/noto/specimen/Noto+Sans+Nushu), under the SIL Open Font License, for the Nüshu characters in the icon and the animation.

## License

[MIT](LICENSE)
