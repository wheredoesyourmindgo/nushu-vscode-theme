# Code Block Demo

Sample code in the languages MarkEdit highlights with the Language Data extension. Each example uses a wide range of syntax: keywords, strings, numbers, comments, functions, types, properties, and punctuation.

## TypeScript

```ts
import { readFile } from 'node:fs/promises';
import type { Stats } from 'node:fs';

/** Supported log levels. */
export enum LogLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
}

export interface Task<T = unknown> {
  readonly id: string;
  name: string;
  payload?: T;
  retries: number;
}

type Handler<T> = (task: Task<T>) => Promise<void>;

const DEFAULT_RETRIES = 3;
const ID_PATTERN = /^[a-z0-9-]{8,}$/i;

export class TaskQueue<T> {
  private tasks: Task<T>[] = [];
  #running = false;

  constructor(private readonly handler: Handler<T>, public level = LogLevel.Info) {}

  add(name: string, payload?: T): Task<T> {
    const task: Task<T> = {
      id: crypto.randomUUID(),
      name,
      payload,
      retries: DEFAULT_RETRIES,
    };
    this.tasks.push(task);
    return task;
  }

  async run(): Promise<number> {
    if (this.#running) return 0;
    this.#running = true;

    let completed = 0;
    for (const task of this.tasks) {
      try {
        await this.handler(task);
        completed++;
      } catch (error) {
        console.error(`Task ${task.name} failed:`, error instanceof Error ? error.message : error);
      }
    }

    this.#running = false;
    return completed;
  }
}

export async function loadConfig(path: string): Promise<Record<string, unknown>> {
  const text = await readFile(path, 'utf8');
  return JSON.parse(text) ?? {};
}

const isValidId = (id: string): boolean => ID_PATTERN.test(id) && id.length <= 64;
```

## JavaScript

```js
// Debounce a function so it only runs after calls stop for `wait` ms
export function debounce(fn, wait = 250) {
  let timer = null;

  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

const prices = [19.99, 5, 42.5, null, 7];
const total = prices
  .filter((price) => typeof price === 'number')
  .reduce((sum, price) => sum + price, 0);

const user = { name: 'Ada', roles: ['admin', 'editor'], active: true };
const { name, ...rest } = user;

console.log(`Total: $${total.toFixed(2)} for ${name}`, rest);
```

## React (TSX)

```tsx
import { useEffect, useState } from 'react';

type Props = {
  title: string;
  initialCount?: number;
  onChange?: (count: number) => void;
};

export function Counter({ title, initialCount = 0, onChange }: Props) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `${title}: ${count}`;
    onChange?.(count);
  }, [count, title, onChange]);

  return (
    <section className="counter" aria-label={title}>
      <h2>{title}</h2>
      <p>
        Count is <strong>{count}</strong>
      </p>
      <button type="button" disabled={count >= 10} onClick={() => setCount(count + 1)}>
        Add one
      </button>
    </section>
  );
}
```

## Python

```python
from dataclasses import dataclass, field
from pathlib import Path
import re

EMAIL = re.compile(r"^[\w.+-]+@[\w-]+\.\w+$")


@dataclass
class Contact:
    name: str
    email: str
    tags: list[str] = field(default_factory=list)

    def is_valid(self) -> bool:
        """Return True when the email address looks valid."""
        return bool(EMAIL.match(self.email))


def load_contacts(path: Path) -> list[Contact]:
    contacts = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line or line.startswith("#"):
            continue
        name, email, *tags = line.split(",")
        contacts.append(Contact(name.strip(), email.strip(), tags))
    return contacts


if __name__ == "__main__":
    valid = [c for c in load_contacts(Path("contacts.csv")) if c.is_valid()]
    print(f"Loaded {len(valid)} valid contacts")
```

## Shell

```sh
#!/usr/bin/env bash
set -euo pipefail

BACKUP_DIR="${HOME}/Backups"
TODAY=$(date +%Y-%m-%d)

log() {
  echo "[$(date +%H:%M:%S)] $*"
}

mkdir -p "$BACKUP_DIR"

for dir in Documents Projects; do
  if [[ -d "$HOME/$dir" ]]; then
    log "Backing up $dir"
    tar -czf "$BACKUP_DIR/$dir-$TODAY.tar.gz" -C "$HOME" "$dir"
  else
    log "Skipping $dir (not found)" >&2
  fi
done

count=$(ls "$BACKUP_DIR" | wc -l)
log "Done. $count backups in $BACKUP_DIR"
```

## Ruby

```ruby
require "json"

module Inventory
  class Item
    attr_reader :name, :price, :quantity

    def initialize(name:, price:, quantity: 1)
      @name = name
      @price = price
      @quantity = quantity
    end

    def total
      price * quantity
    end

    def to_h
      { name: name, price: price, quantity: quantity, total: total }
    end
  end
end

items = [
  Inventory::Item.new(name: "Keyboard", price: 89.0),
  Inventory::Item.new(name: "Cable", price: 12.5, quantity: 3),
]

puts JSON.pretty_generate(items.map(&:to_h))
puts "Grand total: #{items.sum(&:total)}" if items.any?
```

## Go

```go
package main

import (
	"errors"
	"fmt"
	"strings"
)

type Shape interface {
	Area() float64
}

type Rect struct {
	Width, Height float64
}

func (r Rect) Area() float64 {
	return r.Width * r.Height
}

var ErrEmpty = errors.New("no shapes")

func largest(shapes []Shape) (Shape, error) {
	if len(shapes) == 0 {
		return nil, ErrEmpty
	}
	best := shapes[0]
	for _, s := range shapes[1:] {
		if s.Area() > best.Area() {
			best = s
		}
	}
	return best, nil
}

func main() {
	shape, err := largest([]Shape{Rect{3, 4}, Rect{5, 2}})
	if err != nil {
		panic(err)
	}
	fmt.Printf("Largest area: %.1f\n", shape.Area())
	fmt.Println(strings.Repeat("-", 20))
}
```

## Rust

```rust
use std::collections::HashMap;
use std::fmt;

#[derive(Debug, Clone, PartialEq)]
enum Status {
    Active,
    Paused { reason: String },
}

struct Account {
    id: u32,
    owner: String,
    status: Status,
}

impl fmt::Display for Account {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "#{} {} ({:?})", self.id, self.owner, self.status)
    }
}

fn main() {
    let mut accounts: HashMap<u32, Account> = HashMap::new();
    accounts.insert(1, Account { id: 1, owner: "Ada".into(), status: Status::Active });

    if let Some(account) = accounts.get_mut(&1) {
        account.status = Status::Paused { reason: String::from("billing") };
        println!("{account}");
    }
}
```

## Swift

```swift
import Foundation

struct Note: Identifiable, Codable {
    let id: UUID
    var title: String
    var body: String
    var isPinned = false
}

final class NoteStore {
    private(set) var notes: [Note] = []

    func add(title: String, body: String) -> Note {
        let note = Note(id: UUID(), title: title, body: body)
        notes.append(note)
        return note
    }

    func pinned() -> [Note] {
        notes.filter { $0.isPinned }.sorted { $0.title < $1.title }
    }
}

let store = NoteStore()
let note = store.add(title: "Groceries", body: "Milk, eggs, coffee")
print("Added \(note.title) with \(store.notes.count) note(s)")
```

## SQL

```sql
-- Monthly revenue per customer, top 10
SELECT
  c.id,
  c.name,
  DATE_TRUNC('month', o.created_at) AS month,
  SUM(o.total) AS revenue,
  COUNT(*) AS orders
FROM customers AS c
JOIN orders AS o ON o.customer_id = c.id
WHERE o.status = 'paid'
  AND o.created_at >= NOW() - INTERVAL '1 year'
GROUP BY c.id, c.name, month
HAVING SUM(o.total) > 100
ORDER BY revenue DESC
LIMIT 10;
```

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Nushu Demo</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Main navigation -->
    <nav class="site-nav" aria-label="Primary">
      <a href="/" class="active">Home</a>
      <a href="/about">About</a>
    </nav>
    <main id="content">
      <h1>Hello, world</h1>
      <input type="email" placeholder="you@example.com" required />
    </main>
    <script src="app.js" defer></script>
  </body>
</html>
```

## CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

:root {
  --paper: #f8f6f1;
  --ink: #2b2822;
  --radius: 8px;
}

/* Card component */
.card,
.card > header {
  display: grid;
  gap: 1rem;
  padding: calc(var(--radius) * 2);
  border-radius: var(--radius);
  background: var(--paper);
  color: var(--ink);
}

.card:hover:not(.disabled) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: box-shadow 150ms ease-in-out;
}

#sidebar a[href^="https"]::after {
  content: " ↗";
}

@media (prefers-color-scheme: dark) {
  :root {
    --paper: #25211d;
    --ink: #d7cfc7 !important;
  }
}
```

## JSON

```json
{
  "name": "markedit-theme-nushu",
  "version": "1.1.0",
  "private": false,
  "keywords": ["markedit", "theme", "nushu"],
  "engines": { "node": ">=18" },
  "config": {
    "port": 8080,
    "ratio": 0.75,
    "debug": null
  }
}
```

## YAML

```yaml
# GitHub Actions workflow
name: Release
on:
  push:
    tags: ["v*"]

env:
  NODE_VERSION: 22
  CI: true

jobs:
  build:
    runs-on: macos-latest
    timeout-minutes: 10
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
      - run: npm ci
      - run: |
          npm run build
          shasum -a 256 dist/*.js
```

## TOML

```toml
# App settings
title = "Nushu"
version = "1.1.0"
enabled = true

[server]
host = "127.0.0.1"
port = 8080
timeout = 30.5

[[plugins]]
name = "spellcheck"
languages = ["en", "es"]
```

## Dockerfile

```dockerfile
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Diff

```diff
diff --git a/theme.ts b/theme.ts
index 3f2a1b0..8c9d4e2 100644
--- a/theme.ts
+++ b/theme.ts
@@ -12,7 +12,8 @@ export function nushuTheme(palette: Palette) {
   const important = (value: string) => `${value} !important`;
-  const color = (value: string) => ({ color: value });
+  const color = (value: string) => ({ color: important(value) });
+  const muted = color(palette.mutedText);
 
   return EditorView.theme({
```
