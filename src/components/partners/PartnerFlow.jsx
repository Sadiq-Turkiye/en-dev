import logo from "../../assets/en-dev-logo.png";

// "Ready for investment" animation: a project leaves the project owner, passes
// through each partner (who lights up and adds a check), and arrives at the investor.
// Pure CSS keyframes (see .pf-* in global.css).

const ICON_OWNER = (
  <>
    <path d="M3 21h18M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6h6v6" />
  </>
);
const ICON_INVESTOR = (
  <>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </>
);

const PARTNER_X = [165, 240, 315];
const TRACK_Y = 210;
const NODE_Y = 112;

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
}

function End({ cx, kind, label, icon, className }) {
  return (
    <g className={className}>
      <circle className="pf-end" cx={cx} cy={TRACK_Y} r="32" />
      <svg x={cx - 13} y={TRACK_Y - 13} width="26" height="26" viewBox="0 0 24 24" className="pf-end-icon">{icon}</svg>
      <text x={cx} y={TRACK_Y + 56} textAnchor="middle" className="pf-kind">{kind}</text>
      <text x={cx} y={TRACK_Y + 74} textAnchor="middle" className="pf-label">{label}</text>
    </g>
  );
}

export default function PartnerFlow({ partners }) {
  return (
    <figure className="flow-card" aria-label="Animation: a project travels from the project owner through EN-DEV's partners and reaches the investor ready for investment">
      <svg viewBox="0 0 480 360" aria-hidden="true" className="flow-svg">
        {/* EN-DEV frame */}
        <rect className="deal-frame" x="12" y="28" width="456" height="318" rx="20" />
        <rect x="170" y="14" width="140" height="30" rx="15" fill="#fff" stroke="#DCE4EE" />
        <image href={logo} x="190" y="19" width="100" height="20" preserveAspectRatio="xMidYMid meet" />

        {/* Track */}
        <line className="deal-track" x1="70" y1={TRACK_Y} x2="410" y2={TRACK_Y} />

        {/* Partners */}
        {PARTNER_X.map((x, k) => (
          <g key={x}>
            <line className="pf-link" x1={x} y1={NODE_Y + 24} x2={x} y2={TRACK_Y - 20} />
            <line className={`pf-beam pf-beam-${k + 1}`} x1={x} y1={NODE_Y + 24} x2={x} y2={TRACK_Y - 20} />
            <text x={x} y={NODE_Y - 34} textAnchor="middle" className="pf-kind">{String(k + 1).padStart(2, "0")}</text>
            <circle className="pf-node" cx={x} cy={NODE_Y} r="24" />
            <text x={x} y={NODE_Y + 5} textAnchor="middle" className="pf-node-text">{initials(partners[k]?.name || "")}</text>
            <g className={`pf-on pf-on-${k + 1}`}>
              <circle cx={x} cy={NODE_Y} r="24" className="pf-node-lit" />
              <text x={x} y={NODE_Y + 5} textAnchor="middle" className="pf-node-text-lit">{initials(partners[k]?.name || "")}</text>
            </g>
          </g>
        ))}

        <End cx={70} kind="PROJECT" label="Project owner" icon={ICON_OWNER} />
        <End cx={410} kind="CAPITAL" label="Investor" icon={ICON_INVESTOR} className="pf-investor" />

        {/* Investor arrival ripple */}
        <circle className="pf-ripple" cx="410" cy={TRACK_Y} r="32" />

        {/* The project moving along the track */}
        <g className="pf-token">
          <rect x="52" y={TRACK_Y - 18} width="36" height="36" rx="10" className="pf-token-box" />
          <svg x="60" y={TRACK_Y - 10} width="20" height="20" viewBox="0 0 24 24" className="pf-token-icon">{ICON_OWNER}</svg>
          {[-9, 0, 9].map((dx, k) => (
            <g key={dx}>
              <circle cx={70 + dx} cy={TRACK_Y + 28} r="3.2" className="pf-pip" />
              <circle cx={70 + dx} cy={TRACK_Y + 28} r="3.2" className={`pf-pip-lit pf-on pf-on-${k + 1}`} />
            </g>
          ))}
        </g>

        <g className="deal-badge pf-badge">
          <rect x="165" y="300" width="150" height="30" rx="15" />
          <text x="240" y="320" textAnchor="middle">Investment-ready</text>
        </g>
      </svg>
    </figure>
  );
}
