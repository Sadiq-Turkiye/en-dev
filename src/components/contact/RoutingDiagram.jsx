import logo from "../../assets/en-dev-logo.png";

// "Deal" animation: an investor and a project owner travel toward each other,
// meet at the centre and shake hands — all inside the EN-DEV frame.
// Pure CSS keyframes (see .deal-* in global.css); highlights the visitor's chosen side.

const CENTER_X = 240;
const TRACK_Y = 190;
const PARTY_OFFSET = 150;
const PARTY_RADIUS = 34;
const MEETING_RADIUS = 40;
const TRAVEL = 64;
const CONNECTOR_LENGTH = PARTY_OFFSET - PARTY_RADIUS - MEETING_RADIUS;

const ICON_INVESTOR = (
  <>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </>
);
const ICON_OWNER = (
  <>
    <path d="M3 21h18M5 21V8l7-5 7 5v13" />
    <path d="M9 21v-6h6v6" />
  </>
);
// Handshake glyph (Lucide, ISC licence)
const ICON_HANDSHAKE = (
  <>
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
  </>
);

function Party({ className, cx, kind, label, icon, active }) {
  return (
    <g className={`deal-party ${className}${active ? " focus" : ""}`}>
      <circle className="deal-body" cx={cx} cy={TRACK_Y} r={PARTY_RADIUS} />
      <svg x={cx - 13} y={TRACK_Y - 13} width="26" height="26" viewBox="0 0 24 24" className="deal-icon">{icon}</svg>
      <text x={cx} y="248" textAnchor="middle" className="deal-kind">{kind}</text>
      <text x={cx} y="266" textAnchor="middle" className="deal-label">{label}</text>
    </g>
  );
}

function Connector({ side }) {
  const direction = side === "left" ? -1 : 1;
  const from = CENTER_X + direction * (PARTY_OFFSET - PARTY_RADIUS);
  const to = CENTER_X + direction * MEETING_RADIUS;

  return (
    <g className={`deal-connector deal-connector-${side}`}>
      <line className="deal-track" x1={from} y1={TRACK_Y} x2={to} y2={TRACK_Y} />
      <line className="deal-progress" x1={from} y1={TRACK_Y} x2={to} y2={TRACK_Y} />
    </g>
  );
}

export default function RoutingDiagram({ persona }) {
  return (
    <figure
      className="flow-card deal-card"
      style={{ "--deal-travel": `${TRAVEL}px`, "--deal-connector-scale": (CONNECTOR_LENGTH - TRAVEL) / CONNECTOR_LENGTH }}
      aria-label="Animation: an investor and a project owner meet and shake hands on a deal inside EN-DEV"
    >
      {/* EN-DEV frame — everything happens inside the company. Drawn in CSS so it can stretch to the hero's height. */}
      <span className="deal-logo"><img src={logo} alt="" /></span>
      <svg viewBox="30 135 420 200" aria-hidden="true" className="flow-svg">

        {/* Connectors shorten in sync with the parties, anchored at the meeting ring. */}
        <Connector side="left" />
        <Connector side="right" />

        {/* Meeting point */}
        <circle className="deal-meet" cx={CENTER_X} cy={TRACK_Y} r={MEETING_RADIUS} />

        <Party className="deal-investor" cx={CENTER_X - PARTY_OFFSET} kind="CAPITAL" label="Investor" icon={ICON_INVESTOR} active={persona === "investor"} />
        <Party className="deal-owner" cx={CENTER_X + PARTY_OFFSET} kind="PROJECT" label="Project owner" icon={ICON_OWNER} active={persona === "owner"} />

        {/* Handshake */}
        <circle className="deal-ripple" cx="240" cy="190" r="28" />
        <circle className="deal-ripple deal-ripple-2" cx="240" cy="190" r="28" />
        <g className="deal-shake">
          <circle cx="240" cy="190" r="28" />
          <svg x="225" y="175" width="30" height="30" viewBox="0 0 24 24">{ICON_HANDSHAKE}</svg>
        </g>
        <g className="deal-badge">
          <rect x="185" y="292" width="110" height="30" rx="15" />
          <text x="240" y="312" textAnchor="middle">Deal agreed</text>
        </g>
      </svg>
    </figure>
  );
}
