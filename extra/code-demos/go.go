// Package palette demonstrates Go syntax.
package palette

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"time"
)

type Variant int

const (
	Light Variant = iota
	Dark
)

var ErrNotFound = errors.New("palette: not found")

type Palette struct {
	mu     sync.RWMutex
	Name   string            `json:"name"`
	Colors map[string]string `json:"colors,omitempty"`
}

func (p *Palette) Get(name string) (string, error) {
	p.mu.RLock()
	defer p.mu.RUnlock()
	if hex, ok := p.Colors[name]; ok {
		return hex, nil
	}
	return "", fmt.Errorf("get %q: %w", name, ErrNotFound)
}

func Watch[T any](ctx context.Context, in <-chan T, fn func(T)) {
	ticker := time.NewTicker(500 * time.Millisecond)
	defer ticker.Stop()
	for {
		select {
		case v, ok := <-in:
			if !ok {
				return
			}
			fn(v)
		case <-ticker.C:
		case <-ctx.Done():
			return
		}
	}
}

func Example() {
	p := &Palette{Name: "nushu", Colors: map[string]string{"gold": "#9a6700"}}
	ch := make(chan string, 1)
	go func() { ch <- `raw\nstring`; close(ch) }()
	Watch(context.Background(), ch, func(s string) { fmt.Println(s, p.Name, 0x2a, 1e3) })
}
