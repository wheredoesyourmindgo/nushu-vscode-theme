# Changelog

## 2.7.0

- SQL is less pink: column types like `VARCHAR` and `TIMESTAMPTZ` are now blue, like `string` and `number` in TypeScript, and built-in functions like `COUNT`, `COALESCE`, and `NOW` are now purple, like functions in other languages, instead of blue

## 2.6.0

- Shell variables are no longer gold. Names use the regular text color, like variables in other languages, and `$`, `${`, and `}` are pink, like the `${ }` in JavaScript template strings, so a variable like `"${HOME}/Backups"` stands out from the string around it
- Shell commands are now purple like functions, including builtins like `echo` and `printf`, which were blue, and other commands like `rsync` and `cat`, which were gray
- CSS, SCSS, and Less are less blue: property names use the regular text color, selectors are purple (element selectors were gold, which was hard to see in Nushu Light), and units like `px` and `rem` match their numbers instead of being pink
- Package only the Nushu themes; drop GitHub's build-intermediate themes and dev config files from the extension

## 2.5.0

- Shell variables are now gold, the same color as JSX tags. The whole expansion is colored, `$`, `${`, and `}` included, so a variable like `"${HOME}/Backups"` stands out from the string around it instead of showing as blue braces around plain text

## 2.4.3

- README: credit the fonts used in the animation (no changes to the themes)

## 2.4.2

- README: new animated header, refreshed Light and Dark previews, and a clearer layout (no changes to the themes)

## 2.4.1

- README image links no longer depend on the branch name (no changes to the themes)

## 2.4.0

- Variables, list bullets, and changed-markup now use warm grays that match Nushu's backgrounds, instead of GitHub's cool blue-grays (same lightness, so contrast is unchanged)
- Fix constant symbol icons in Nushu Dark, which had an invalid color inherited from GitHub's theme and showed as plain text; they're now green
- Update Marketplace keywords

## 2.3.0

- New icon: a Nüshu character in a calligraphy-style layout, in Nushu Light colors
- Rewrite README
- New Marketplace description and banner color
- Switch from yarn to npm (no changes to the themes)
- Build checks: each conversion step must make its expected number of replacements, renamed properties fail the build, and every output color must be valid hex (no changes to the themes)

## 2.2.18

- .vscodeignore updates

## 2.2.17

- Rebuild yarn.lock

## 2.2.16

- Remove vsce dev dependency

## 2.2.15

- Remove special character, "ü" with diaeresis, from name

## 2.2.14

- Add Ghostty theme to extras

## 2.2.12

- Don't use alpha with comment color

## 2.2.11

- Preview image (for README.md) updates

## 2.2.10

- Readme.md updates

## 2.2.6

- Readme.md updates

## 2.2.1

- Merge in upstream/main commits, aka GitHub Theme

## 2.2

- New App Icon.

## 2.1.28

- Nushu Light/Dark: Fix Word selection colors

## 2.1.27

- Nushu Dark: Fix contributes.

## 2.1.26

- Nushu Light/Dark: peekView workbench border updates

## 2.1.25

- Nushu Light/Dark: peekView workbench updates

## 2.1.23

- Nushu Light/Dark: Explicitly set peekViewResult text color

## 2.1.20

- Nushu Light/Dark: Use slightly transparent text for begin/end text strings, so the content that matters pops a bit
- Nushu Light/Dark: Set unset specific borders explicitly

## 2.1.19

- Nushu Light/Dark: Use slightly transparent borders in standard cases

## 2.1.18

- Nushu Light/Dark: Fix active tab borders

## 2.1.17

- Nushu Light/Dark: Set specific UI colors explicitly, based on what they were falling back to in their respective GitHub Default Dark/Light themes

## 2.1.16

- Nushu Light/Dark: Add proper file status foreground to filenames in lists and tabs

## 2.1.15

- Updated Readme.md
- Nushu Light/Dark: Use flagHex to write hex values and enforce single color conversions
- Nushu Light/Dark: Adjustments to gray borders
- Nushu Light/Dark: Use Chroma JS to calc Nushu color palette

## 2.1.14

- Nushu Light/Dark: Match hue of Foreground to Background

## 2.1.13

- Nushu Light/Dark: Use secondary, tertiary, and quaternary shades in lieu of grays

## 2.1.12

- Nushu Light/Dark: Use gray instead of green for parameters
- Nushu Light/Dark: Use green with comments

## 2.1.11

- Nushu Light: Fix some backgrounds used

## 2.1.10

- Set 6 inconsistently used shades of gray to secondary Nushu color
- Set "editorHoverWidget.border"

## 2.1.8

- Don't use GitHub Theme foreground, revert to foreground found in Primer primitives
- Nushu Light/Dark: Use LCH to calculate background css hex codes

## 2.1.7

- Nushu Light: Use a lighter green (same as GitHub Light Default)
- Nushu Light/Dark: Use a custom color with borders (17 instances in each theme)

## 2.1.5

- Nushu Light: Use darker purple with `terminal.ansiMagenta` and `terminal.ansiBrightMagenta`

## 2.0.0

- Nushu Light and Dark Themes added
- Original Nushu Theme renamed to Nushu Classic

## 0.4.11

- Merge upstream/master

## 0.4.10

- Use a blue badge and background for consistency
- Decrease contrast of focus borders
- Increase contrast of input background
- Increase contrast of list.focusBackground
- Changes targeting YAML scopes.
- Use different color for variable.other.normal scope (target variables in Shell scripts)

## 0.4.9

- Use a separate color for css id selectors
- Use a separate color for pseudo class/element scopes

## 0.4.8

- Use a separate color for constant.language scope

## 0.4.7

- Add opacity to list and badge backgrounds

## 0.4.6

- New preview image added to README.md

## 0.4.5

- Updated badge background and foreground from bluish to yellow/brownish
  - #005cc5 --> #735C0F
  - #dbedff --> #FFFBDD

## 0.4.4

- Defined palette for statusBar.debuggingForeground and statusBar.noFolderForeground to prevent purple status bar from displaying
- Selection background colors updated from blue-ish to yellow/brown-ish
  - #e8eaed --> #E7E1D0 (10% darker than PPC background color)
  - #0366d6 --> #DBAB09 (yellow 700)
- Updated terminal white & black colors

## 0.4.3

- Preview added to README.md

## 0.4.2

- #e36209 --> #044289 (Use blue foreground over orange)
- #22863a --> #d15704 (Use orange foreground over green)
- Icon updated

## 0.4.1

- README.md updated

## 0.4.0

- Project renamed

## 0.3.5

- Fix package version

## 0.3.3

- README.md updated

## 0.3.2

- Icon added

## 0.3.1

- Don't use bold fonts

## 0.3.0

- First release

## 0.2.3

- #f9826c --> #B08800 (Use yellow/brown foreground over rose)
- #d73a49 --> #735C0F (Syntax doesn't need to be dangerous)
- Custom font styles added for Bold and Italic font variations
- Custom Terminal colors added using Primer palette selections
- #f6f8fa --> #EFEBE0 (5% darker than PPC background color)
- #fafbfc --> #F3F0E8 (2.5% darker than PPC background color)
- #fff --> #F8F6F1 (Pen Paper Coffee background color)

## 0.2.2

- Fix invalid scope [#2](https://github.com/primer/github-vscode-theme/pull/2)

## 0.2.1

- Update README

## 0.2.0

- Change tabs
- Add icon

## 0.1.0

- Initial release
