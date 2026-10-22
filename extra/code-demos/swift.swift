import SwiftUI

enum Variant: String, CaseIterable { case light, dark }

struct Swatch: View {
    let name: String
    @State private var selected = false
    var color: Color = .orange

    var body: some View {
        RoundedRectangle(cornerRadius: 8)
            .fill(color.opacity(selected ? 1 : 0.6))
            .overlay(Text("\(name) \(Variant.allCases.count)").font(.caption))
            .onTapGesture { selected.toggle() }
    }
}

func load(_ path: String) async throws -> [String: String]? {
    guard let data = FileManager.default.contents(atPath: path) else { return nil }
    return try JSONDecoder().decode([String: String].self, from: data)
}
