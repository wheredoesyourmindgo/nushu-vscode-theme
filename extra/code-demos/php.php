<?php
declare(strict_types=1);

namespace Nushu;

use InvalidArgumentException;
use JsonSerializable;

enum Variant: string
{
    case Light = 'light';
    case Dark = 'dark';

    public function label(): string
    {
        return ucfirst($this->value);
    }
}

interface HasName
{
    public function name(): string;
}

trait Countable
{
    public function count(): int
    {
        return count($this->colors);
    }
}

#[\Attribute(\Attribute::TARGET_CLASS)]
final class Theme {}

#[Theme]
final class Palette implements HasName, JsonSerializable
{
    use Countable;

    public const MAX = 256;
    private static int $instances = 0;

    /**
     * @param array<string, string> $colors hex values keyed by name
     */
    public function __construct(
        private readonly string $name,
        private array $colors = ['gold' => '#9a6700'],
        public ?Variant $variant = Variant::Dark,
    ) {
        self::$instances++;
    }

    public function name(): string { return $this->name; }

    public function get(string $key): ?string
    {
        return $this->colors[$key] ?? null;
    }

    public function add(string $key, string|int $hex): static
    {
        if (!str_starts_with((string) $hex, '#') || strlen((string) $hex) > 7) {
            throw new InvalidArgumentException(sprintf('Bad hex for %s: %s', $key, $hex));
        }
        $this->colors[$key] = strtolower((string) $hex);
        return $this;
    }

    public function hexes(float $alpha = 1.0, bool $sorted = false): array
    {
        $hexes = array_map(fn (string $h): string => $h . dechex((int) round($alpha * 255)), $this->colors);
        if ($sorted) sort($hexes);
        return array_values($hexes);
    }

    public function jsonSerialize(): mixed
    {
        return ['name' => $this->name, 'variant' => $this->variant?->label(), 'class' => __CLASS__];
    }

    public function __toString(): string
    {
        return "{$this->name} has " . $this->count() . ' colors';
    }
}

$p = (new Palette('nushu'))->add('ink', '#24292F');
try {
    $p->add('bad', 123);
} catch (InvalidArgumentException $e) {
    error_log($e->getMessage());
} finally {
    $json = json_encode($p, JSON_PRETTY_PRINT);
}

$report = <<<TXT
    Palette: {$p->name()}
    Colors: {$p->count()}
    TXT;

foreach ($p->hexes(0.5, sorted: true) as $i => $hex) {
    printf("%d: %s\n", $i, $hex);
}
echo $p, PHP_EOL, match (true) { $p->get('gold') !== null => 'gold', default => 'none' };
var_dump(in_array('#9a6700', $p->hexes(), true), $p instanceof HasName, is_null($p->variant));
?>
<p class="<?= htmlspecialchars($p->get('gold')) ?>">Inline PHP in HTML</p>
