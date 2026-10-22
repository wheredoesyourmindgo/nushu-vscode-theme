-- Lua: tables, metatables, closures
local Palette = {}
Palette.__index = Palette

function Palette.new(name, colors)
  return setmetatable({ name = name, colors = colors or {} }, Palette)
end

function Palette:get(key)
  return self.colors[key] or ("missing: " .. key)
end

local p = Palette.new("nushu", { gold = "#9a6700" })
for k, v in pairs(p.colors) do
  print(string.format("%s = %s", k, v), #p.name, nil, true, 0x2a)
end
--[[ block
comment ]]
