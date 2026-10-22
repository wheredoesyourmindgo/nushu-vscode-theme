# Fenced code blocks

Embedded languages should keep their own highlighting inside Markdown.

```ts
interface User {
  id: number;
  name: string;
}

export const greet = (user: User): string => `Hello, ${user.name}!`;
```

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

    def norm(self) -> float:
        return (self.x ** 2 + self.y ** 2) ** 0.5
```

```bash
#!/usr/bin/env bash
backup_dir="${HOME}/Backups"
for f in "$@"; do
  cp -v "$f" "$backup_dir/$(date +%F)-$f"
done
```

```json
{ "name": "nushu", "version": "2.5.0", "private": true, "tags": ["warm", null] }
```

```diff
- const color = "#0969da";
+ const color = "#9a6700";
  unchanged line
```

```css
.card:hover { color: var(--fg-muted, #57606a); transition: color 120ms ease; }
```

```
Plain fence with no language.
```

~~~yaml
# Tilde fence
theme: nushu
variants: [light, dark]
~~~

    Indented code block (four spaces).
    Second line.
