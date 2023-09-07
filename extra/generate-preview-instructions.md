# Generate Preview Instructions

When generating theme preview images:

- use Sudo Variable font, size 19pt
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
}
```

When generating minimap preview images:

- set the following VSCode settings:

```json
{
  "editor.minimap.renderCharacters": false,
  "editor.minimap.scale": 3,
}
```