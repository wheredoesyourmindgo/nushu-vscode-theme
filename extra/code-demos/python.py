"""Module docstring: a small palette loader."""
from __future__ import annotations

import json
import re
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterator

HEX = re.compile(r"^#(?:[0-9a-fA-F]{3}){1,2}$")
DEFAULT_PATH = Path.home() / ".config" / "nushu.json"


@dataclass(frozen=True)
class Color:
    name: str
    hex: str
    tags: list[str] = field(default_factory=list)

    def __post_init__(self) -> None:
        if not HEX.match(self.hex):
            raise ValueError(f"bad hex for {self.name!r}: {self.hex}")


class Palette:
    """A named collection of colors."""

    def __init__(self, name: str, *colors: Color, **meta: str) -> None:
        self.name = name
        self._colors = {c.name: c for c in colors}
        self.meta = meta

    def __iter__(self) -> Iterator[Color]:
        yield from self._colors.values()

    @property
    def size(self) -> int:
        return len(self._colors)

    @classmethod
    def load(cls, path: Path = DEFAULT_PATH) -> Palette:
        with path.open(encoding="utf-8") as fh:
            data = json.load(fh)
        return cls(data["name"], *(Color(**c) for c in data.get("colors", [])))


async def main() -> None:
    p = Palette("nushu", Color("gold", "#9a6700", ["accent"]), variant="light")
    match p.size:
        case 0:
            print("empty")
        case n if n > 10:
            print(f"{n=} big")
        case _:
            print([c.hex for c in p if "accent" in c.tags], 0x2A, 3.14j, b"bytes", None, True)
    lam = lambda x, /, *, y=2: x ** y  # noqa: E731
    print(lam(3, y=3))


if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
