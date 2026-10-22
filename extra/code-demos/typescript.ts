// TypeScript: types, generics, enums, decorators, async
import { readFile } from "node:fs/promises";
import type { Stats } from "node:fs";

export enum Variant {
  Light = "light",
  Dark = "dark",
}

type Hex = `#${string}`;

interface Palette<T extends string = Hex> {
  readonly name: string;
  colors: Record<string, T>;
  variant?: Variant;
}

abstract class Theme implements Palette {
  static count = 0;
  #secret = 0x2a;
  colors: Record<string, Hex> = {};

  constructor(public readonly name: string, public variant = Variant.Light) {
    Theme.count++;
  }

  abstract render(): string;

  get isDark(): boolean {
    return this.variant === Variant.Dark;
  }
}

function sealed<T extends { new (...args: any[]): {} }>(ctor: T) {
  Object.seal(ctor.prototype);
  return ctor;
}

@sealed
class Nushu extends Theme {
  render() {
    return `${this.name} (${this.isDark ? "dark" : "light"})`;
  }
}

export async function load(path: string): Promise<Palette | null> {
  try {
    const raw = await readFile(path, "utf8");
    const data = JSON.parse(raw) as Palette;
    return data.colors ? data : null;
  } catch (err: unknown) {
    if (err instanceof Error) console.error(err.message);
    return null;
  } finally {
    // nothing to clean up
  }
}

const keys = <T extends object>(o: T) => Object.keys(o) as (keyof T)[];
const re = /^#(?:[0-9a-f]{3}){1,2}$/i;
const n: number = 1_000_000 + 3.14e-2;
let maybe: string | undefined;
maybe ??= "fallback";
console.log(new Nushu("Nushu").render(), keys({ a: 1 }), re.test("#fff"), n, maybe);
