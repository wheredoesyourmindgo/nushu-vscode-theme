#include <concepts>
#include <iostream>
#include <map>
#include <string>
#include <variant>
#include <vector>

namespace nushu {

enum class Mode : unsigned char { Light, Dark };

using Hex = std::uint32_t;

template <typename T>
concept Named = requires(const T &t) {
    { t.name() } -> std::convertible_to<std::string>;
};

struct Color {
    std::string label;
    Hex rgb = 0x24292f;
};

class Theme {
public:
    explicit Theme(std::string name, Mode mode = Mode::Dark) : name_{std::move(name)}, mode_{mode} {}
    virtual ~Theme() = default;

    [[nodiscard]] const std::string &name() const noexcept { return name_; }
    virtual Hex accent() const { return 0x9a6700; }
    bool operator==(const Theme &) const = default;

protected:
    std::string name_;
    Mode mode_;
    std::map<std::string, Color> colors_;
};

class ClassicTheme final : public Theme {
public:
    using Theme::Theme;
    Hex accent() const override { return colors_.empty() ? Theme::accent() : colors_.begin()->second.rgb; }
};

template <Named T>
void describe(const T &item) {
    std::cout << item.name() << '\n';
}

} // namespace nushu

int main() {
    using namespace nushu;
    static constexpr int kMax = 256;
    ClassicTheme classic{"nushu-classic", Mode::Light};
    std::vector<std::variant<int, double, std::string>> values{42, 3.5, R"(raw "string")"};
    auto *ptr = &classic; /* block comment */
    auto count = [&](int limit) -> int { return limit > kMax ? kMax : limit; };
    if (ptr != nullptr && count(values.size()) > 0) describe(*ptr);
    return 0;
}
