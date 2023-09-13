<p align="center">
   <img width="400" src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/master/images/logo.png" />
</p>

### TL;DR

Nüshu is a fork of the VSCode [Github theme](https://github.com/primer/github-vscode-theme). The World isn't so Black or White, so why should our code _backgrounds_ be.

### About

Nüshu (this theme) is a fork of the VSCode Github theme, specifically the GitHub Light Default and GitHub Dark Default themes. This theme uses alternative background colors, which effectively reduce overall contrast. This theme uses the same Primer palette used in the GitHub Default themes for syntax, so both the Light and Dark variants of this theme should seem "familiar".

## Theme Previews

### Light / Dark

<div align="center" style="padding-top:16px;padding-bottom:32px;">

<img src="https://github.com/wheredoesyourmindgo/nushu-vscode-theme/raw/master/images/Nushu Light Theme Preview.png" alt="Theme Preview Image" width="700" />
<img src="https://github.com/wheredoesyourmindgo/nushu-vscode-theme/raw/master/images/Nushu Dark Theme Preview.png" alt="Theme Preview Image" width="700" />

</div>

### Classic

<div align="center" style="padding-top:16px;padding-bottom:32px;">

<img src="https://github.com/wheredoesyourmindgo/nushu-vscode-theme/raw/master/images/preview-collage@2x.png" alt="Theme Preview Image" width="700" />

</div>

## Hints

### Italic Fonts

You can opt-in to italicizing certain tokens for Nüshu Light and Dark within `settings.json`, for example you can render Comments and Types in italic with the following VSCode settings:

```json
{
  "editor.tokenColorCustomizations": {
    "[Nüshu Light][Nüshu Dark]": {
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

_Note, Nüshu Classic italicizes certain tokens by default. You can opt-out of that if you wish with a similar approach to setting "editor.tokenColorCustomizations" as shown above._

### Preferred Themes

Set Light / Dark Theme preferences in `settings.json` for toggling and detection with OS appearance.

```json
{
  "workbench.preferredDarkColorTheme": "Nüshu Dark",
  "workbench.preferredLightColorTheme": "Nüshu Light"
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
    "[Nüshu Light]": {
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
    "[Nüshu Dark]": {
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
    "[Nüshu Light][Nüshu Dark]": {
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
    "[Nüshu Light]": {
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
    "[Nüshu Dark]": {
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

I'll likely be maintaining iTerm, One Markdown, and other such themes too that compliment the light/dark Nüshu themes. Find this repo on GitHub at [link](https://github.com/wheredoesyourmindgo/nushu-vscode-theme) and take a look at the `extra` folder if those are of interest to you. Note, any Terminal themes I post in there will likely use the respective themes editor background color, not the background color used within the embedded VSCode terminal; it just makes more sense to me this way due to how the programs are used.

## Attribution

The project name references [Remembering Nüshu, the 19th-Century Chinese Script Only Women Could Write](https://www.atlasobscura.com/articles/nushu-chinese-script-women).

The font used in this README's title (logo) is [Kiperman](https://www.harbortype.com/fonts/kiperman/) from Harbor Type. The font used in the code previews is [Sudo](https://github.com/jenskutilek/sudo-font) from Jens Kutilek.

Icon template provided via Freepik <a href="https://www.freepik.com/free-vector/illustration-document-icon_2945058.htm#page=1&query=pen%20paper%20icon&position=0">Business vector created by rawpixel.com - www.freepik.com</a>

[GitHub Theme](https://github.com/primer/github-vscode-theme) VSCode theme, [Pen Paper Coffee](https://github.com/nylki/pen-paper-coffee-syntax) Atom theme, & [Earthsong](https://github.com/monkeytypegame/monkeytype/blob/master/frontend/static/themes/earthsong.css) monkeytype theme.
