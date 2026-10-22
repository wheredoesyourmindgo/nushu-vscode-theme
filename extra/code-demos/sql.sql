-- SQL: DDL, CTE, window functions
CREATE TABLE IF NOT EXISTS colors (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(64) NOT NULL UNIQUE,
    hex         CHAR(7)     CHECK (hex ~ '^#[0-9a-f]{6}$'),
    created_at  TIMESTAMPTZ DEFAULT now()
);

INSERT INTO colors (name, hex) VALUES ('gold', '#9a6700'), ('ink', '#24292f')
ON CONFLICT (name) DO UPDATE SET hex = EXCLUDED.hex;

WITH ranked AS (
    SELECT name, hex,
           ROW_NUMBER() OVER (PARTITION BY LEFT(hex, 2) ORDER BY created_at DESC) AS rn
    FROM colors
    WHERE created_at > NOW() - INTERVAL '30 days'
)
SELECT r.name, COALESCE(r.hex, 'n/a') AS hex, COUNT(*) FILTER (WHERE rn = 1) AS latest
FROM ranked AS r
LEFT JOIN themes t ON t.color_id = r.rn
GROUP BY r.name, r.hex
HAVING COUNT(*) > 0
ORDER BY 1 LIMIT 10; /* block comment */
