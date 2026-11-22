import Icon from "../Icon.jsx";

// Hero illustration: an industrial site that gains solar, storage and wind,
// while its asset value rises. Builds once on load, then keeps gentle ambient motion.
// Pure SVG + CSS (see .ps-* in global.css).

// Sawtooth roof: four slopes, each 50 wide and 34 high, starting at these x positions
const ROOF_X = [130, 180, 230, 280];
const SLOPE = (Math.atan2(34, 50) * 180) / Math.PI; // ≈ 34.2°

const STEPS = ["Industrial asset", "Energy transition", "Investable project"];

function Blade({ rotate }) {
  return (
    <path
      d="M478 180 C 472 160, 473 132, 478 112 C 483 132, 484 160, 478 180 Z"
      transform={`rotate(${rotate} 478 180)`}
      className="ps-blade"
    />
  );
}

export default function PortfolioScene() {
  return (
    <figure className="ps" aria-label="Illustration: an industrial site gains solar panels, battery storage and wind power, and its asset value rises until it is investment-ready">
      <svg viewBox="0 0 560 440" className="ps-svg" aria-hidden="true">
        <defs>
          <linearGradient id="psArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3976C4" stopOpacity=".28" />
            <stop offset="1" stopColor="#3976C4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Sun */}
        <g className="ps-sun">
          <g className="ps-rays">
            {Array.from({ length: 8 }, (_, i) => (
              <line key={i} x1="86" y1="56" x2="86" y2="62" transform={`rotate(${i * 45} 86 86)`} />
            ))}
          </g>
          <circle cx="86" cy="86" r="17" className="ps-sun-core" />
        </g>

        {/* Ground */}
        <ellipse cx="290" cy="376" rx="270" ry="10" className="ps-shadow" />
        <line x1="12" y1="372" x2="548" y2="372" className="ps-ground" />

        {/* Battery storage (BESS) */}
        <g className="ps-bess">
          <rect x="34" y="318" width="76" height="54" rx="5" className="ps-bess-body" />
          <rect x="34" y="318" width="76" height="8" rx="4" className="ps-bess-top" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={43 + i * 16} y="333" width="10" height="30" rx="2" className="ps-cell" />
              <rect x={43 + i * 16} y="333" width="10" height="30" rx="2" className="ps-cell-fill" style={{ animationDelay: `${2.4 + i * 0.35}s` }} />
            </g>
          ))}
        </g>

        {/* Factory */}
        <g className="ps-factory">
          <rect x="342" y="196" width="18" height="70" className="ps-wall" />
          <rect x="342" y="196" width="18" height="7" className="ps-chimney-band" />
          <path d="M130 372 V262 L180 228 V262 L230 228 V262 L280 228 V262 L330 228 V262 H370 V372 Z" className="ps-wall" />
          {[180, 230, 280, 330].map((x) => <line key={x} x1={x} y1="232" x2={x} y2="260" className="ps-glazing" />)}
          {[148, 178, 208, 292, 322].map((x) => <rect key={x} x={x} y="288" width="22" height="22" rx="3" className="ps-window" />)}
          <rect x="242" y="318" width="30" height="54" rx="3" className="ps-door" />
          <line x1="130" y1="330" x2="232" y2="330" className="ps-trim" />
          <line x1="282" y1="330" x2="370" y2="330" className="ps-trim" />
        </g>

        {/* Solar panels on each roof slope */}
        {ROOF_X.map((x, i) => (
          <g key={x} transform={`translate(${x} 262) rotate(${-SLOPE})`}>
            <g className="ps-panel" style={{ animationDelay: `${0.35 + i * 0.15}s` }}>
              <rect x="4" y="-8" width="52" height="7" rx="1.5" className="ps-panel-body" />
              {[17, 30, 43].map((d) => <line key={d} x1={d} y1="-8" x2={d} y2="-1" className="ps-panel-grid" />)}
            </g>
          </g>
        ))}

        {/* Wind turbine */}
        <g className="ps-turbine">
          <path d="M474 372 L476.5 182 H479.5 L482 372 Z" className="ps-tower" />
          <g className="ps-rotor">
            <Blade rotate={0} />
            <Blade rotate={120} />
            <Blade rotate={240} />
          </g>
          <circle cx="478" cy="180" r="5" className="ps-hub" />
        </g>

        {/* Power flowing into the factory */}
        <path d="M470 362 H372" className="ps-cable" />
        <path d="M110 352 H128" className="ps-cable" />

        {/* Asset value card */}
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

        {/* Ground labels */}
        <g className="ps-tags">
          <g transform="translate(72 400)"><rect x="-36" y="-12" width="72" height="24" rx="12" /><text y="4">Storage</text></g>
          <g transform="translate(250 400)"><rect x="-82" y="-12" width="164" height="24" rx="12" /><text y="4">Solar + electrification</text></g>
          <g transform="translate(478 400)"><rect x="-28" y="-12" width="56" height="24" rx="12" /><text y="4">Wind</text></g>
        </g>
      </svg>

      <ol className="ps-steps">
        {STEPS.map((s, i) => (
          <li key={s} style={{ "--i": i }}>
            <span className="ps-step-num">{String(i + 1).padStart(2, "0")}</span>
            {s}
            {i < STEPS.length - 1 && <Icon name="arrow" className="ps-step-arrow" />}
          </li>
        ))}
      </ol>
    </figure>
  );
}
