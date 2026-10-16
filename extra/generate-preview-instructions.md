# Generate Preview Instructions

When generating theme preview images:

- open `extra/theme-preview-sample.tsx` and scroll its first 9 lines out of view
- Light/Dark previews: Maple Mono, size 19 (Classic: Sudo Variable, size 19)
- capture just the code area (Cmd+Shift+4 and drag), with the same window size and scroll position for both themes
- set VSCode to a minimal UI configuration with the following settings:

```json
{
  "editor.minimap.enabled": false,
  "workbench.statusBar.visible": false,
  "workbench.activityBar.visible": false,
  "breadcrumbs.enabled": false,
  "editor.lineNumbers": "off",
  "editor.folding": false,
  "editor.renderLineHighlight": "none",
  "git.decorations.enabled": false,
  "scm.diffDecorations": "none",
  "editor.hideCursorInOverviewRuler": true,
  "gitlens.codeLens.enabled": false,
  "gitlens.currentLine.enabled": false,
  "color-highlight.markRuler": false,
  "editor.guides.indentation": false,
  "editor.bracketPairColorization.enabled": false,
  "editor.scrollbar.vertical": "hidden",
  "editor.scrollbar.horizontal": "hidden",
  "workbench.editor.showTabs": "none",
}
```

When generating minimap preview images:

- set the following VSCode settings:

```json
{
  "editor.minimap.scale": 3,
}
```

macOS screenshots are tagged with the display's color profile. Convert them to sRGB before cropping so the colors match the theme exactly:

```sh
magick shot.png -profile "/System/Library/ColorSync/Profiles/sRGB Profile.icc" -strip out.png
```
