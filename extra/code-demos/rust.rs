//! Crate-level doc comment.
use std::collections::HashMap;
use std::fmt::{self, Display};

/// A color with a name.
#[derive(Debug, Clone, PartialEq)]
pub struct Color<'a> {
    name: &'a str,
    rgb: (u8, u8, u8),
}

pub trait Hex {
    fn hex(&self) -> String;
}

impl Hex for Color<'_> {
    fn hex(&self) -> String {
        let (r, g, b) = self.rgb;
        format!("#{r:02x}{g:02x}{b:02x}")
    }
}

impl<'a> Display for Color<'a> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{} ({})", self.name, self.hex())
    }
}

#[derive(Debug)]
enum Variant { Light, Dark, Custom(u32) }

const MAX: usize = 1_024;
static GREETING: &str = "hello";

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let gold = Color { name: "gold", rgb: (0x9a, 0x67, 0x00) };
    let mut map: HashMap<&str, Color> = HashMap::with_capacity(MAX);
    map.insert(gold.name, gold.clone());

    for (k, v) in map.iter().filter(|(_, c)| c.rgb.0 > 128) {
        println!("{k}: {v}");
    }

    let v = Variant::Custom(42);
    match v {
        Variant::Light | Variant::Dark => {}
        Variant::Custom(n) if n > 10 => println!("{GREETING} {n:?}"),
        Variant::Custom(_) => unreachable!(),
    }

    let raw = r#"raw "string""#;
    let bytes = b'x';
    println!("{raw} {bytes} {:.2}", 3.14159_f64);
    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn hex_works() { assert_eq!(Color { name: "w", rgb: (255, 255, 255) }.hex(), "#ffffff"); }
}
