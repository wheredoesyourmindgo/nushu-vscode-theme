"use strict";
/**
 * JSDoc block.
 * @param {string[]} names - list of names
 * @returns {Map<string, number>}
 */
const countLetters = (names) => new Map(names.map((n) => [n, n.length]));

class Queue extends EventTarget {
  #items = [];
  push(...items) {
    this.#items.push(...items);
    this.dispatchEvent(new CustomEvent("change", { detail: this.size }));
    return this;
  }
  get size() { return this.#items.length; }
  *[Symbol.iterator]() { yield* this.#items; }
}

async function* ticks(limit = 3) {
  for (let i = 0; i < limit; i++) {
    await new Promise((r) => setTimeout(r, 10));
    yield i;
  }
}

const q = new Queue().push("a", "b");
const { size, missing = null } = q;
const tagged = String.raw`C:\path\${size}`;
const pattern = /(?<year>\d{4})-(?<month>\d{2})/gu;

label: for (const x of q) {
  switch (typeof x) {
    case "string": continue label;
    default: break label;
  }
}

(async () => {
  for await (const t of ticks()) console.log(t, size, missing, tagged, pattern, countLetters(["nushu"]));
})().catch(console.error);

export default q;
