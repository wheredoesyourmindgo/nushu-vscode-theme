using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nushu.Demo;

public enum Variant { Light, Dark }

/// <summary>A palette.</summary>
public sealed class Palette(string name)
{
    public string Name { get; } = name;
    public Dictionary<string, string> Colors { get; init; } = new();
    public Variant Variant { get; set; } = Variant.Light;

    public async Task<string?> FindAsync(string key)
    {
        await Task.Delay(10);
        return Colors.TryGetValue(key, out var hex) ? hex : null;
    }

    public static void Main()
    {
        var p = new Palette("nushu") { Colors = { ["gold"] = "#9a6700" } };
        var gold = p.Colors.Where(kv => kv.Value.StartsWith('#')).Select(kv => kv.Key).FirstOrDefault();
        Console.WriteLine($"{p.Name}: {gold ?? "none"} @\"verbatim\" {0x2A:N0}");
    }
}
