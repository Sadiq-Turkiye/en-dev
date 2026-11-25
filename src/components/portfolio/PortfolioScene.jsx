import DashedFrame from "../DashedFrame.jsx";
import logo from "../../assets/en-dev-logo.png";

// Hero illustration: an industrial site that gains solar, storage and wind,
// while its asset value rises. Builds once on load, then keeps gentle ambient motion.
// Pure SVG + CSS (see .ps-* in global.css).

// One roof plane keeps every solar panel aligned with the building's perspective.
const roofPoint = (u, v) => [168 + 128 * u + 98 * v, 150 - 46 * u + 39 * v];
const roofPanel = (u, v) => [roofPoint(u, v), roofPoint(u + .21, v), roofPoint(u + .21, v + .29), roofPoint(u, v + .29)].map((point) => point.join(",")).join(" ");
const PANELS = Array.from({ length: 6 }, (_, index) => ({ u: .13 + (index % 3) * .25, v: .14 + Math.floor(index / 3) * .36 }));

function Blade({ rotate }) {
  return (
    <path
      d="M478 112 C 472 92, 473 64, 478 44 C 483 64, 484 92, 478 112 Z"
      transform={`rotate(${rotate} 478 112)`}
      className="ps-blade"
    />
  );
}

export default function PortfolioScene() {
  return (
    <figure className="ps" aria-label="Illustration: an industrial site gains solar panels, battery storage and wind power, and its asset value rises until it is investment-ready">
      <DashedFrame />
      <span className="deal-logo"><img src={logo} alt="" /></span>
      <div className="ps-visual">
        <svg viewBox="0 0 560 312" className="ps-svg" aria-hidden="true">
          <defs>
            <linearGradient id="psArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3976C4" stopOpacity=".28" />
              <stop offset="1" stopColor="#3976C4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="psSolar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5B9AE2" />
              <stop offset="1" stopColor="#174C82" />
            </linearGradient>
          </defs>

          {/* Ground */}
          <ellipse cx="280" cy="262" rx="258" ry="8" className="ps-shadow" />
          <line x1="12" y1="258" x2="548" y2="258" className="ps-ground" />

          {/* Battery storage (BESS) */}
          <g className="ps-bess">
            <path d="M102 204L116 196V250L102 258Z" className="ps-bess-side" />
            <rect x="48" y="204" width="54" height="54" rx="3" className="ps-bess-body" />
            <path d="M48 204L62 196H116L102 204Z" className="ps-bess-top" />
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <rect x={58 + i * 14} y="219" width="8" height="30" rx="2" className="ps-cell" />
                <rect x={58 + i * 14} y="219" width="8" height="30" rx="2" className="ps-cell-fill" style={{ animationDelay: `${2.4 + i * 0.35}s` }} />
              </g>
            ))}
          </g>

          {/* Industrial building: two elevations and a shared solar roof. */}
          <g className="ps-factory">
            <polygon points="168,150 266,189 266,253 168,214" className="ps-wall" />
            <polygon points="266,189 394,143 394,207 266,253" className="ps-wall ps-wall-side" />
            <polygon points="168,150 296,104 394,143 266,189" className="ps-roof" />
            <polygon points="182,169 197,175 197,190 182,184" className="ps-window" />
            <polygon points="207,179 222,185 222,200 207,194" className="ps-window" />
            <polygon points="234,203 253,211 253,248 234,240" className="ps-door" />
            <polygon points="285,195 302,189 302,203 285,209" className="ps-window" />
            <polygon points="317,184 334,178 334,192 317,198" className="ps-window" />
            <polygon points="349,172 366,166 366,180 349,186" className="ps-window" />
            <polygon points="325,204 373,186 373,214 325,232" className="ps-loading-bay" />
            {[0, 6, 12].map((offset) => <path key={offset} d={`M325 ${212 + offset}L373 ${194 + offset}`} className="ps-loading-line" />)}
          </g>

          {/* Panels use the same axes as the roof, including their cell divisions. */}
          {PANELS.map(({ u, v }, i) => (
            <g key={i} className="ps-panel" style={{ animationDelay: `${0.35 + i * 0.1}s` }}>
              <polygon points={roofPanel(u, v)} className="ps-panel-body" />
              <path d={`M${roofPoint(u + .105, v)}L${roofPoint(u + .105, v + .29)}M${roofPoint(u, v + .145)}L${roofPoint(u + .21, v + .145)}`} className="ps-panel-grid" />
            </g>
          ))}

          {/* Wind turbine */}
          <g className="ps-turbine">
            <path d="M474 258 L476.5 114 H479.5 L482 258 Z" className="ps-tower" />
            <g className="ps-rotor">
              <Blade rotate={0} />
              <Blade rotate={120} />
              <Blade rotate={240} />
            </g>
            <circle cx="478" cy="112" r="5" className="ps-hub" />
          </g>

          {/* Power flowing into the factory */}
          <path d="M474 246L438 258H349L320 234" className="ps-cable" />
          <path d="M116 238L143 250H217L234 240" className="ps-cable" />

          {/* Asset value card */}
          <g transform="translate(-266 -8)">
            <g className="ps-card">
              <rect x="290" y="22" width="244" height="84" rx="14" className="ps-card-bg" />
              <text x="308" y="46" className="ps-card-label">ASSET VALUE</text>
              <g transform="translate(434 32)">
                <g className="ps-card-badge">
                  <rect width="84" height="20" rx="10" className="ps-card-pill" />
                  <path d="M10 10.5 L13 13.5 L18.5 7" className="ps-card-check" />
                  <text x="24" y="14" className="ps-card-pill-text">Investable</text>
                </g>
              </g>
              <path d="M308 94 C 336 92, 350 90, 368 86 S 404 80, 424 72 S 470 60, 516 54 L516 96 L308 96 Z" className="ps-area" fill="url(#psArea)" />
              <path d="M308 94 C 336 92, 350 90, 368 86 S 404 80, 424 72 S 470 60, 516 54" className="ps-line" pathLength="1" />
              <circle cx="516" cy="54" r="4" className="ps-dot" />
              <circle cx="516" cy="54" r="4" className="ps-dot-ring" />
            </g>
          </g>

          {/* Ground labels */}
          <g className="ps-tags">
            <g transform="translate(82 286)"><rect x="-36" y="-12" width="72" height="24" rx="12" /><text y="4">Storage</text></g>
            <g transform="translate(270 286)"><rect x="-82" y="-12" width="164" height="24" rx="12" /><text y="4">Solar + electrification</text></g>
            <g transform="translate(478 286)"><rect x="-28" y="-12" width="56" height="24" rx="12" /><text y="4">Wind</text></g>
          </g>
        </svg>
      </div>

    </figure>
  );
}
