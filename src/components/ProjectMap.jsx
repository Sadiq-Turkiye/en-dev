import { useState } from "react";
import Icon from "./Icon.jsx";
import { MAP_VIEWBOX, MAP_LAND, MAP_COUNTRIES } from "../data/mapGeometry.js";
import { COUNTRY_REGIONS } from "../data/site.js";

// Keep the Balkans label clear of its neighbours.
const LABEL_POSITIONS = { Serbia: { x: 366, y: 270, anchor: "end" } };

// Türkiye (home market) leads the list; the rest keep their west-to-east order.
export const ORDERED_COUNTRIES = [
  ...MAP_COUNTRIES.filter((c) => c.name === "Türkiye"),
  ...MAP_COUNTRIES.filter((c) => c.name !== "Türkiye"),
];

export default function ProjectMap() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const active = hovered ?? focused ?? selected;
  const activeCountry = MAP_COUNTRIES.find((country) => country.name === active);
  const names = ORDERED_COUNTRIES.map((c) => c.name);

  const selectCountry = (name) => {
    setFocused(null);
    setSelected((current) => current === name ? null : name);
  };
  const clearSelection = () => {
    setSelected(null);
    setHovered(null);
    setFocused(null);
  };
  const previewCountry = (event, name) => {
    if (event.pointerType !== "touch") setHovered(name);
  };

  return (
    <div className={`pmap${active ? " has-active" : ""}`} onKeyDown={(event) => {
      if (event.key === "Escape") clearSelection();
    }}>
      <div className="pmap-sidebar">
        <div className="pmap-list-head">
          <span>Explore by country</span>
          <span className="pmap-count">{MAP_COUNTRIES.length}</span>
        </div>
        <ul className="pmap-list" aria-label="Countries where EN-DEV is active">
          {ORDERED_COUNTRIES.map((c, i) => (
            <li key={c.id}>
              <button
                type="button"
                className={`pmap-item${active === c.name ? " on" : ""}`}
                aria-pressed={selected === c.name}
                onClick={() => selectCountry(c.name)}
                onPointerEnter={(event) => previewCountry(event, c.name)}
                onPointerLeave={() => setHovered(null)}
                onFocus={() => setFocused(c.name)}
                onBlur={() => setFocused(null)}
              >
                <span className="pmap-idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="pmap-name">{c.name}</span>
                <span className="pmap-region">{COUNTRY_REGIONS[c.name]}</span>
                <Icon name="arrow" className="pmap-item-arrow" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <figure className="pmap-card">
        <svg viewBox={MAP_VIEWBOX} className="pmap-svg" role="img" aria-label={`Map of EN-DEV's active countries: ${names.join(", ")}`}>
          <path d={MAP_LAND} className="pmap-land" />
          {MAP_COUNTRIES.map((c) => (
            <path
              key={c.id}
              d={c.d}
              className={`pmap-country${active === c.name ? " on" : ""}`}
              onClick={() => selectCountry(c.name)}
              onPointerEnter={(event) => previewCountry(event, c.name)}
              onPointerLeave={() => setHovered(null)}
            >
              <title>{c.name}</title>
            </path>
          ))}
          {MAP_COUNTRIES.map((c) => {
            const label = LABEL_POSITIONS[c.name];
            return (
              <g key={`m${c.id}`} className={`pmap-marker${active === c.name ? " on" : ""}`}>
                {label && <path d={`M${c.x} ${c.y} L${label.x + 6} ${label.y - 5}`} className="pmap-label-line" />}
                <text x={label?.x ?? c.x} y={label?.y ?? c.y + 5} textAnchor={label?.anchor ?? "middle"} className="pmap-label">{c.name}</text>
              </g>
            );
          })}
        </svg>
        <figcaption className="pmap-caption">
          <div className="pmap-detail">
            <span className="pmap-detail-icon"><Icon name={activeCountry ? "pin" : "compass"} /></span>
            <div>
              <strong>{activeCountry?.name ?? "An international presence"}</strong>
              <span>{activeCountry ? COUNTRY_REGIONS[activeCountry.name] : "Select a country to explore the map"}</span>
            </div>
          </div>
          <button type="button" className="pmap-reset" onClick={clearSelection} disabled={!selected}>Clear selection</button>
          <div className="pmap-legend">
            <span><i className="pmap-legend-country" aria-hidden="true" /> Countries of activity</span>
          </div>
        </figcaption>
      </figure>
      <span className="pmap-status" role="status">{selected ? `${selected} selected. ${COUNTRY_REGIONS[selected]}.` : "All countries shown."}</span>
    </div>
  );
}
