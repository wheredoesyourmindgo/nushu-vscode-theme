<?php
declare(strict_types=1);

namespace Nushu;

final class Palette
{
    public const MAX = 256;

    public function __construct(
        private readonly string $name,
        private array $colors = ['gold' => '#9a6700'],
    ) {}

    public function get(string $key): ?string
    {
        return $this->colors[$key] ?? null;
    }

    public function __toString(): string
    {
        return "{$this->name} has " . count($this->colors) . ' colors';
    }
}

$p = new Palette('nushu');
echo $p, PHP_EOL, match (true) { $p->get('gold') !== null => 'gold', default => 'none' };
?>
<p class="<?= htmlspecialchars($p->get('gold')) ?>">Inline PHP in HTML</p>
