<p align="center">
   <img width="400" src="https://raw.githubusercontent.com/wheredoesyourmindgo/nushu-vscode-theme/master/images/logo.png" />
</p>

### TL;DR

Nüshu is a fork of the VSCode [Github theme](https://github.com/primer/github-vscode-theme). The World isn't so Black or White, so why should our code *backgrounds* be.

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

*Note, Nüshu Classic italicizes certain tokens by default. You can opt-out of that if you wish with a similar approach to setting "editor.tokenColorCustomizations" as shown above.*

## Attribution

The project name references [Remembering Nüshu, the 19th-Century Chinese Script Only Women Could Write](https://www.atlasobscura.com/articles/nushu-chinese-script-women).

The font used in this README's title (logo) is [Kiperman](https://www.harbortype.com/fonts/kiperman/) from Harbor Type. The font used in the code previews is [Sudo](https://github.com/jenskutilek/sudo-font) from Jens Kutilek.

Icon template provided via Freepik <a href="https://www.freepik.com/free-vector/illustration-document-icon_2945058.htm#page=1&query=pen%20paper%20icon&position=0">Business vector created by rawpixel.com - www.freepik.com</a>

[GitHub Theme](https://github.com/primer/github-vscode-theme) VSCode theme, [Pen Paper Coffee](https://github.com/nylki/pen-paper-coffee-syntax) Atom theme, & [Earthsong](https://github.com/monkeytypegame/monkeytype/blob/master/frontend/static/themes/earthsong.css) monkeytype theme.
