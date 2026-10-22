# frozen_string_literal: true

require "json"

module Nushu
  class Palette
    attr_reader :name, :colors

    DEFAULT = { gold: "#9a6700", ink: "#24292f" }.freeze

    def initialize(name, colors = DEFAULT)
      @name = name
      @colors = colors
    end

    def each_hex(&block) = colors.each_value(&block)

    def to_s
      "#{name}: #{colors.keys.map(&:to_s).join(', ')}"
    end

    def self.parse(json) = new(*JSON.parse(json).values_at("name", "colors"))
  end
end

p = Nushu::Palette.new("nushu")
p.each_hex { |h| puts h if h =~ /\A#\h{6}\z/ }
puts p, :symbol, %w[a b c].inspect, 1..10, nil.to_a
