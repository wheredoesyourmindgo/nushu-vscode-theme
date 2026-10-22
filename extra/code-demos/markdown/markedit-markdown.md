---
title: Setting Up a New Mac
author: Nushu Demo
tags: [macos, homebrew, dotfiles]
updated: 2026-10-21
---

# Setting Up a New Mac

This guide walks through setting up a new Mac for development, from installing **Homebrew** to restoring your *dotfiles* with [chezmoi](https://www.chezmoi.io). It's also a tour of everything **Markdown** can do, so each section leans on a different feature.

Some steps are ***especially important***, some are ~~no longer needed~~ optional, and a few use `inline code` like `brew bundle` or `chezmoi apply`.

## Before You Start

Make sure you have:

- An Apple ID signed in to the App Store
- A stable internet connection
- About an hour of time
  - Most of that is waiting on downloads
  - The rest is answering prompts

> **Note:** Back up your old Mac before you begin. Time Machine works well for this, and you can restore individual files later if you need them.

### Check Your macOS Version

Open **System Settings → General → About** and confirm you're on the latest release. You can also check from the terminal:

```sh
sw_vers -productVersion
```

## Installing Homebrew

Homebrew is the package manager most Mac developers use. Install it with the official script:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

When it finishes, add Homebrew to your `PATH`:

```sh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# Confirm it worked
brew --version
```

### Installing Apps from a Brewfile

A `Brewfile` lists everything you want installed, so a new machine takes one command:

```ruby
# Brewfile
tap "homebrew/bundle"

brew "git"
brew "node"
brew "chezmoi"

cask "ghostty"
cask "visual-studio-code"
cask "markedit"
```

Then run:

```sh
brew bundle --file ~/Brewfile
```

## Apps from the Developer's Website

Not every app is available through Homebrew. Download these directly:

1. [1Password](https://1password.com/downloads/mac) (see below)
2. [Docker Desktop](https://www.docker.com/products/docker-desktop/)
3. Any app your team requires, such as a VPN client

### 1Password

After installing, sign in and turn on the browser extension. For more on setting it up, see the [1Password support site][1password-support] or the [Apps section](#apps-from-the-developers-website) above.

## Restoring Your Dotfiles

If your dotfiles are managed with chezmoi, restoring them takes two commands:

```sh
chezmoi init --apply git@github.com:your-username/dotfiles.git
chezmoi diff
```

Your setup checklist:

- [x] Install Homebrew
- [x] Run `brew bundle`
- [ ] Restore dotfiles with chezmoi
- [ ] Sign in to 1Password
- [ ] Set up SSH keys

## Configuring Your Editor

### VS Code Settings

Here's a small `settings.json` to start from:

```json
{
  "workbench.colorTheme": "Nushu Dark",
  "editor.fontSize": 14,
  "editor.formatOnSave": true,
  "files.trimTrailingWhitespace": true
}
```

For more code samples in other languages, see [code.md](code.md).

## Keyboard Shortcuts

| Shortcut | Action | Where |
| :------- | :----- | ----: |
| ⌘Space | Open Spotlight | System |
| ⌘⇧. | Show hidden files | Finder |
| ⌃⌘Q | Lock screen | System |
| ⌘, | Open settings | Most apps |

## Tips and Notes

> Good setup is boring setup. If you can rebuild your machine from a Brewfile and a dotfiles repo, you'll never dread a new laptop again.
>
> > A nested quote works too, for when you're quoting someone quoting someone else.

A few last tips:

* Keep your `Brewfile` in your dotfiles repo
* Run `brew update && brew upgrade` once a week
* Use `brew cleanup` to free up disk space

---

### Line Breaks and Escapes

This line ends with two spaces
so this one starts on a new line.

Use a backslash to show literal characters: \*not italic\*, \# not a heading, and \`not code\`.

### HTML in Markdown

Press <kbd>⌘</kbd> + <kbd>Q</kbd> to quit an app. Some text can be <mark>highlighted</mark> with HTML.

<details>
<summary>Click to expand</summary>

Hidden content goes here.

</details>

### Images

![The Homebrew logo](https://brew.sh/assets/img/homebrew.svg "Homebrew")

### Plain Links

You can paste a bare URL like https://brew.sh or wrap it in angle brackets: <https://github.com>.

### Indented Code

    This block is indented four spaces,
    so it's treated as code.

#### A Fourth-Level Heading

##### A Fifth-Level Heading

###### A Sixth-Level Heading

Setext Heading One
==================

Setext Heading Two
------------------

## Footnotes

Homebrew installs to `/opt/homebrew` on Apple silicon Macs[^1], but to `/usr/local` on Intel Macs[^2].

[^1]: Macs with M-series chips.
[^2]: Older Macs from before late 2020.

[1password-support]: https://support.1password.com "1Password Support"
