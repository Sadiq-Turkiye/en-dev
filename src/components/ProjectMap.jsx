import { useState } from "react";
import { MAP_VIEWBOX, MAP_HUB, MAP_LAND, MAP_COUNTRIES } from "../data/mapGeometry.js";
import { COUNTRY_REGIONS } from "../data/site.js";

// Curved connection from the Istanbul hub to a country
function arc(x, y) {
  const { x: hx, y: hy } = MAP_HUB;
  const mx = (hx + x) / 2, my = (hy + y) / 2;
  const dx = x - hx, dy = y - hy;
  const k = 0.22;
  return `M${hx} ${hy} Q${mx + dy * k} ${my - Math.abs(dx) * k - 10} ${x} ${y}`;
}

// Countries whose label sits under the dot (avoids clashing with a close neighbour)
const LABEL_BELOW = new Set(["Serbia"]);

export default function ProjectMap() {
  const [active, setActive] = useState(null);
  const names = MAP_COUNTRIES.map((c) => c.name);

  return (
    <div className={`pmap${active ? " has-active" : ""}`}>
      <ul className="pmap-list" aria-label="Countries where EN-DEV is active">
        {MAP_COUNTRIES.map((c, i) => (
          <li key={c.id}>
            <button
              type="button"
              className={`pmap-item${active === c.name ? " on" : ""}`}
              onMouseEnter={() => setActive(c.name)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(c.name)}
              onBlur={() => setActive(null)}
            >
              <span className="pmap-idx">{String(i + 1).padStart(2, "0")}</span>
              <span className="pmap-name">{c.name}</span>
              <span className="pmap-region">{COUNTRY_REGIONS[c.name]}</span>
            </button>
          </li>
        ))}
      </ul>

      <figure className="pmap-card">
        <svg viewBox={MAP_VIEWBOX} className="pmap-svg" role="img" aria-label={`Map of EN-DEV's active countries: ${names.join(", ")}`}>
          <path d={MAP_LAND} className="pmap-land" />
          {MAP_COUNTRIES.map((c) => (
            <path
              key={c.id}
              d={c.d}
              className={`pmap-country${active === c.name ? " on" : ""}`}
              onMouseEnter={() => setActive(c.name)}
              onMouseLeave={() => setActive(null)}
            />
          ))}
          {MAP_COUNTRIES.filter((c) => Math.hypot(c.x - MAP_HUB.x, c.y - MAP_HUB.y) > 80).map((c, i) => (
            <path key={`a${c.id}`} d={arc(c.x, c.y)} className={`pmap-arc${active === c.name ? " on" : ""}`} style={{ animationDelay: `${i * -0.4}s` }} />
          ))}
          {MAP_COUNTRIES.map((c) => (
            <g key={`m${c.id}`} className={`pmap-marker${active === c.name ? " on" : ""}`}>
              <circle cx={c.x} cy={c.y} r="12" className="pmap-halo" />
              <circle cx={c.x} cy={c.y} r="5" className="pmap-dot" />
              <text x={c.x} y={LABEL_BELOW.has(c.name) ? c.y + 26 : c.y - 16} textAnchor="middle" className="pmap-label">{c.name}</text>
            </g>
          ))}
          <g className="pmap-hub">
            <circle cx={MAP_HUB.x} cy={MAP_HUB.y} r="7" />
            <text x={MAP_HUB.x - 12} y={MAP_HUB.y + 4} textAnchor="end" className="pmap-hub-label">{MAP_HUB.name}</text>
          </g>
        </svg>
      </figure>
    </div>
  );
}
