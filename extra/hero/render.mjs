/*
Renders the README hero animation: Nüshu characters resolve into highlighted code in a
VS Code-style window in Nushu Dark, which then cross-fades to Nushu Light, using the
generated themes. Usage, from this folder:

  npm install
  npm run render            # -> ../../images/hero.webp

Needs Google Chrome and img2webp (brew install webp). Set CHROME to use another Chrome path.
Frames go to ./frames/ (ignored by git). The output is a lossless animated WebP, so colors stay exact.
*/
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createHighlighter } from "shiki";
import puppeteer from "puppeteer-core";

const here = path.dirname(fileURLToPath(import.meta.url));
const readTheme = (name) =>
  JSON.parse(fs.readFileSync(path.resolve(here, `../../themes/${name}.json`), "utf8"));
const themes = { dark: readTheme("nushu-dark"), light: readTheme("nushu-light") };
const output = path.resolve(here, process.argv[2] ?? "../../images/hero.webp");
const outDir = path.join(here, "frames");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir);

// Noto Sans Nüshu (SIL Open Font License), downloaded from Google Fonts on first run
const fontFile = path.join(os.tmpdir(), "NotoSansNushu-Regular.ttf");
if (!fs.existsSync(fontFile)) {
  const css = await (await fetch("https://fonts.googleapis.com/css2?family=Noto+Sans+Nushu")).text();
  const url = css.match(/url\((https:[^)]+\.ttf)\)/)?.[1];
  if (!url) throw new Error("Couldn't find the Noto Sans Nushu font on Google Fonts");
  fs.writeFileSync(fontFile, Buffer.from(await (await fetch(url)).arrayBuffer()));
}

const CODE = `import { useState } from "react";
import { Avatar, Button, Card } from "./ui";

// A teammate's card, with a button to follow them.
export function ProfileCard({ name, role, avatarUrl, onFollow }: Props) {
  const [following, setFollowing] = useState(false);

  return (
    <Card className="profile">
      <Avatar src={avatarUrl} alt={name} size={48} />
      <Button disabled={following} onClick={() => onFollow(name)}>
        {following ? "Following" : "Follow"}
      </Button>
    </Card>
  );
}`;

// Timeline, in seconds. Holds are single long frames; everything else is rendered at FPS.
const FPS = 12;
const T = {
  intro: 0.6, // scrambled, in Dark
  decode: 2.8, // decode wave
  holdDark: 2.5,
  fade: 0.8, // Dark to Light
  holdLight: 2.5,
  encode: 0.8, // scramble back, in Light
  restLight: 0.8, // a moment with the Nüshu characters in Light before fading back
  fadeBack: 1.0, // Light to Dark while scrambled, so the loop restarts smoothly
};
const at = {};
let clock = 0;
for (const [phase, seconds] of Object.entries(T)) {
  at[phase] = clock;
  clock += seconds;
}
const total = clock;

const highlighter = await createHighlighter({ themes: Object.values(themes), langs: ["tsx"] });
// Characters with their color in each theme (both themes tokenize the code the same way)
const colored = Object.fromEntries(
  Object.entries(themes).map(([key, theme]) => [
    key,
    highlighter.codeToTokens(CODE, { lang: "tsx", theme: theme.name }).tokens.map((line) =>
      line.flatMap((token) =>
        [...token.content].map(() => token.color ?? theme.colors["editor.foreground"])
      )
    ),
  ])
);
const lines = CODE.split("\n").map((line, row) =>
  [...line].map((ch, col) => ({ ch, dark: colored.dark[row][col], light: colored.light[row][col] }))
);

function windowCss(key) {
  const c = themes[key].colors;
  return `
#${key} { background: ${c["editor.background"]}; color: ${c["editor.foreground"]};
  box-shadow: 0 0 0 1px ${c["titleBar.border"]}, 0 18px 40px rgba(20, 16, 12, 0.35); }
#${key} .title { background: ${c["titleBar.activeBackground"]}; border-bottom: 1px solid ${c["titleBar.border"]};
  color: ${c["tab.inactiveForeground"]}; }
#${key} .dot { background: ${key === "dark" ? "#4a443e" : "#d6d1c7"}; }
#${key} .tabs { background: ${c["editorGroupHeader.tabsBackground"]}; }
#${key} .tab { background: ${c["tab.activeBackground"]}; color: ${c["tab.activeForeground"]};
  border-top: 2px solid ${c["tab.activeBorderTop"]}; border-right: 1px solid ${c["tab.border"]}; }
#${key} .ln { color: ${c["editorLineNumber.foreground"]}; }`;
}
const windowHtml = (key, label) => `
<div class="win" id="${key}">
  <div class="title"><span class="dot"></span><span class="dot"></span><span class="dot"></span>
    <span class="name">ProfileCard.tsx — ${label}</span></div>
  <div class="tabs"><div class="tab">ProfileCard.tsx</div></div>
  <div class="code"></div>
</div>`;

const html = `<!doctype html><meta charset="utf-8"><style>
@font-face { font-family: "Nushu"; src: url("file://${fontFile}"); }
html, body { margin: 0; background: transparent; }
#stage { padding: 48px 72px 100px; display: inline-block; }
#frame { position: relative; width: 820px; }
.win { width: 820px; border-radius: 12px; overflow: hidden; }
#light { position: absolute; inset: 0; opacity: 0; }
.title { height: 34px; display: flex; align-items: center; gap: 8px; padding: 0 14px;
  font: 12px -apple-system, "Helvetica Neue", sans-serif; }
.dot { width: 11px; height: 11px; border-radius: 50%; }
.name { flex: 1; text-align: center; margin-right: 50px; }
.tabs { height: 34px; display: flex; }
.tab { padding: 0 18px; display: flex; align-items: center; font: 12.5px -apple-system, "Helvetica Neue", sans-serif; }
.code { padding: 18px 0 22px; font: 15px/1.6 "Maple Mono", monospace; }
.ln { display: inline-block; width: 46px; padding-right: 22px; text-align: right; }
.cell { display: inline-block; width: 1ch; white-space: pre; position: relative; }
.cell .nu { position: absolute; left: 0; width: 2ch; text-align: center; font-family: "Nushu";
  font-size: 1.15em; line-height: 1.39; opacity: 0.6; }
${windowCss("dark")}
${windowCss("light")}
</style>
<div id="stage"><div id="frame">${windowHtml("dark", "Nushu Dark")}${windowHtml("light", "Nushu Light")}</div></div>
<script>
const LINES = ${JSON.stringify(lines)};
const AT = ${JSON.stringify(at)}, T = ${JSON.stringify(T)};
// Deterministic pseudo-random numbers, so every render is identical
function rand(a, b) { let h = (a * 2654435761) ^ (b * 1597334677); h = Math.imul(h ^ (h >>> 15), 2246822519);
  h = Math.imul(h ^ (h >>> 13), 3266489917); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
const NUSHU_FIRST = 0x1b170, NUSHU_COUNT = 396;
const cells = [];
for (const key of ["dark", "light"]) {
  const code = document.querySelector("#" + key + " .code");
  LINES.forEach((line, row) => {
    const div = document.createElement("div");
    div.innerHTML = '<span class="ln">' + (row + 1) + "</span>";
    line.forEach((g, col) => {
      const span = document.createElement("span");
      span.className = "cell";
      span.style.color = g[key];
      div.appendChild(span);
      // One Nüshu glyph covers two cells, so pairs of cells decode together, in a soft wave
      const pair = Math.floor(col / 2);
      const reveal = AT.decode + (row / LINES.length) * (T.decode - 0.6) + pair * 0.012 + rand(row, pair) * 0.5;
      const hide = AT.encode + rand(pair, row) * (T.encode - 0.1);
      cells.push({ span, g, row, col, reveal, hide, id: row * 1000 + pair });
    });
    if (line.length === 0) div.appendChild(document.createTextNode("\\u200b"));
    code.appendChild(div);
  });
}
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const ease = (x) => x * x * (3 - 2 * x);
window.render = (t) => {
  // Light shows from the first fade until the fade back
  let fade = 0;
  if (t >= AT.fade && t < AT.fadeBack) fade = ease(Math.min(1, (t - AT.fade) / T.fade));
  else if (t >= AT.fadeBack) fade = 1 - ease(Math.min(1, (t - AT.fadeBack) / T.fadeBack));
  light.style.opacity = fade;
  // Hide Dark underneath once Light is fully shown, so its border and shadow don't show around Light
  dark.style.visibility = fade >= 1 ? "hidden" : "visible";
  for (const cell of cells) {
    const { span, g } = cell;
    if (t >= cell.reveal && t < cell.hide) {
      span.textContent = g.ch;
    } else if (cell.col % 2 === 0 && (g.ch + (LINES[cell.row][cell.col + 1]?.ch ?? "")).trim() !== "") {
      // The first cell of each pair draws one Nüshu glyph across both cells
      const cp = NUSHU_FIRST + Math.floor(rand(cell.id, Math.floor(t / 0.3)) * NUSHU_COUNT);
      span.innerHTML = '<span class="nu">' + String.fromCodePoint(cp) + "</span> ";
    } else {
      span.textContent = " ";
    }
  }
};
window.render(0);
</script>`;
fs.writeFileSync(path.join(outDir, "hero.html"), html);

const browser = await puppeteer.launch({
  executablePath: process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  args: ["--allow-file-access-from-files", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 700, deviceScaleFactor: 2 });
await page.goto("file://" + path.join(outDir, "hero.html"));
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => document.fonts.load('16px "Nushu"', "\u{1B170}"));
const stage = await page.$("#stage");

const frames = [];
const shot = async (t, ms) => {
  await page.evaluate((t) => window.render(t), t);
  const file = path.join(outDir, `f${String(frames.length).padStart(4, "0")}.png`);
  await stage.screenshot({ path: file, omitBackground: true });
  frames.push({ file, ms });
};
const motion = async (from, to, fps = FPS) => {
  for (let t = from; t < to - 1e-9; t += 1 / fps) await shot(t, Math.round(1000 / fps));
};
// Cross-fades change every pixel, which is costly to store losslessly, so they use fewer frames
const FADE_FPS = 8;
await motion(0, at.holdDark);
await shot(at.holdDark, T.holdDark * 1000);
await motion(at.fade, at.holdLight, FADE_FPS);
await shot(at.holdLight, T.holdLight * 1000);
await motion(at.encode, at.fadeBack);
await motion(at.fadeBack, total, FADE_FPS);
await browser.close();

// Encode: consecutive frames with the same duration share one -d option
const args = ["-loop", "0", "-lossless", "-m", "6"];
let lastMs;
for (const { file, ms } of frames) {
  if (ms !== lastMs) args.push("-d", String(ms));
  lastMs = ms;
  args.push(file);
}
execFileSync("img2webp", [...args, "-o", output], { stdio: "inherit" });
console.log(`${frames.length} frames, ${total.toFixed(1)}s loop -> ${path.relative(process.cwd(), output)}`);
