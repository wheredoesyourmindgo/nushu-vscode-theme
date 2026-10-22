# Makefile
SRC := $(wildcard src/*.js)
OUT ?= themes

.PHONY: build clean

build: $(SRC)
	@echo "Building $(words $^) files into $(OUT)"
	node src/index.js && node src/nushu/index.js

clean:
	rm -rf $(OUT)/*.json
