<!-- <p align="center">
   <img width="400" src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/master/images/logo.png" />
</p> -->

### TL;DR

Nushu is a fork of the VSCode [Github theme](https://github.com/primer/github-vscode-theme). The World isn't so Black or White, so why should our code _backgrounds_ be.

### About

Nushu (this theme) is a fork of the VSCode Github theme, specifically the GitHub Light Default and GitHub Dark Default themes. This theme uses alternative background colors, which effectively reduce overall contrast. This theme uses the same Primer palette used in the GitHub Default themes for syntax, so both the Light and Dark variants of this theme should seem "familiar".

## Theme Previews

### Light / Dark

<div align="center" style="padding-top:16px; padding-bottom:32px;">
  <div style="width: 95%; max-width: 800px; margin: 0 auto; box-shadow: rgba(17, 12, 46, 0.15) 0px 8px 16px;">
    <img src="https://github.com/wheredoesyourmindgo/nushu-vscode-theme/raw/master/images/Nushu Light Theme Preview.png" alt="Light Theme Preview" style="width: 100%; display: block;" />
  </div>
  <div style="height: 32px;"></div>
  <div style="width: 95%; max-width: 800px; margin: 0 auto; box-shadow: rgba(17, 12, 46, 0.15) 0px 8px 16px;">
    <img src="https://github.com/wheredoesyourmindgo/nushu-vscode-theme/raw/master/images/Nushu Dark Theme Preview.png" alt="Dark Theme Preview" style="width: 100%; display: block;" />
  </div>
</div>

### Classic

<div align="center" style="padding-top:16px;padding-bottom:32px;">

<img src="https://github.com/wheredoesyourmindgo/nushu-vscode-theme/raw/master/images/preview-collage@2x.png" alt="Theme Preview Image" width="700" />

</div>

## Hints

### Italic Fonts

You can opt-in to italicizing certain tokens for Nushu Light and Dark within `settings.json`, for example you can render Comments and Types in italic with the following VSCode settings:

```json
{
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
          "settings": {
            "fontStyle": "italic"
          }
        }
      ]
    }
  }
}
```

_Note, Nushu Classic italicizes certain tokens by default. You can opt-out of that if you wish with a similar approach to setting "editor.tokenColorCustomizations" as shown above._

### Preferred Themes

Set Light / Dark Theme preferences in `settings.json` for toggling and detection with OS appearance.

```json
{
  "workbench.preferredDarkColorTheme": "Nushu Dark",
  "workbench.preferredLightColorTheme": "Nushu Light"
}
```

### Variable Font Goodness

If you are using a variable font with VSCode consider using `"editor.fontVariations": true`. Below is a code snippet that utilizes another extension called [Settings on Theme Switch](https://marketplace.visualstudio.com/items?itemName=wheredoesyourmindgo.vscode-settings-on-theme-switch) to switch font weights out based on light/dark theme settings.

```json
{
  "editor.fontVariations": true,
  "settingsOnThemeSwitch.darkColorThemeSettings": {
    "editor.fontWeight": 375
  },
  "settingsOnThemeSwitch.lightColorThemeSettings": {
    "editor.fontWeight": 400
  }
}
```

## Opinions

The Light/Dark themes do not color the following tokens (deviating from the GitHub Default Light/Dark themes in this regard):

- "variable"
- "punctuation.definition.list.begin.markdown"
- "markup.changed" & "punctuation.definition.changed"
- "entity.name", "meta.export.default", & "meta.definition.variable"

The rational for this change is to decrease the amount of colors being displayed on screen at once, with the aim being to keep syntax coloring meaningful in most use cases. IMHO, front end web development (eg. .tsx) can often yield too many colors, so by default this theme will default to a shade of gray (slightly lighter than the foreground color) for those tokens listed above. To customize this to your liking, you can simply patch the theme in `settings.json` any manner as follows to suit the desired appearance either _"across the board"_, or conversely, just for specific file extensions/languages.

Additionally, comments are shown in color by default (cause I love to hear what people have to say I suppose 😊) in both the light/dark themes. If that isn't to your liking there is a snippet shown below to opt out of this behavior.

```json
// Example: Orange Variables, similar to Github Default Light/Dark Syntax
{
  "editor.tokenColorCustomizations": {
    "[Nushu Light]": {
      "textMateRules": [
        {
          "name": "Orange LightThm Syntax",
          "scope": [
            "variable",
            "punctuation.definition.list.begin.markdown",
            "markup.changed",
            "punctuation.definition.changed",
            "markup.changed",
            "punctuation.definition.changed",
            "entity.name",
            "meta.export.default",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": "#953800"
          }
        }
      ]
    },
    "[Nushu Dark]": {
      "textMateRules": [
        {
          "name": "Orange DarkThm Syntax",
          "scope": [
            "variable",
            "punctuation.definition.list.begin.markdown",
            "markup.changed",
            "punctuation.definition.changed",
            "markup.changed",
            "punctuation.definition.changed",
            "entity.name",
            "meta.export.default",
            "meta.definition.variable"
          ],
          "settings": {
            "foreground": "#FFA657"
          }
        }
      ]
    }
  }
}
```

```json
// Example: Bold Props with C Files
{
  "editor.tokenColorCustomizations": {
    "[Nushu Light][Nushu Dark]": {
      "textMateRules": [
        {
          "name": "Bold C Props",
          "scope": ["variable.parameter.c"],
          "settings": {
            "fontStyle": "bold"
          }
        }
      ]
    }
  }
}
```

```json
// Example: Gray comments, similar to Github Default Light/Dark Syntax
{
  "editor.tokenColorCustomizations": {
    "[Nushu Light]": {
      "textMateRules": [
        {
          "name": "Gray LightThm Comments",
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": "#6E7781"
          }
        }
      ]
    },
    "[Nushu Dark]": {
      "textMateRules": [
        {
          "name": "Gray DarkThm Comments",
          "scope": [
            "comment",
            "punctuation.definition.comment",
            "string.comment"
          ],
          "settings": {
            "foreground": "#8B949E"
          }
        }
      ]
    }
  }
}
```

### Extra

I'll likely be maintaining iTerm, One Markdown, and other such themes too that compliment the light/dark Nushu themes. Find this repo on GitHub at [link](https://github.com/wheredoesyourmindgo/nushu-vscode-theme) and take a look at the `extra` folder if those are of interest to you. Note, any Terminal themes I post in there will likely use the respective themes editor background color, not the background color used within the embedded VSCode terminal; it just makes more sense to me this way due to how the programs are used.

## Attribution

The project name references [Remembering Nüshu, the 19th-Century Chinese Script Only Women Could Write](https://www.atlasobscura.com/articles/nushu-chinese-script-women).

The font used in the Light/Dark code previews is [Maple](https://github.com/subframe7536/Maple-font), and the font used in the Classic code preview is [Sudo](https://github.com/jenskutilek/sudo-font).

App Icon by Chase Lean, via OpenAI Logo Creator <a href="https://chat.openai.com">OpenAI</a>

[GitHub Theme](https://github.com/primer/github-vscode-theme) VSCode theme, [Pen Paper Coffee](https://github.com/nylki/pen-paper-coffee-syntax) Atom theme, & [Earthsong](https://github.com/monkeytypegame/monkeytype/blob/master/frontend/static/themes/earthsong.css) monkeytype theme.
