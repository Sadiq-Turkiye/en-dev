import logo from "../assets/en-dev-logo.png";
import { ICON_PATHS } from "./Icon.jsx";

function DiagramIcon({ name, x, y, size = 26 }) {
  return <svg x={x - size / 2} y={y - size / 2} width={size} height={size} viewBox="0 0 24 24" className="blueprint-icon">{ICON_PATHS[name]}</svg>;
}

function Node({ x, y, icon, label, caption, index = 0 }) {
  return (
    <g className="blueprint-node" style={{ "--i": index }}>
      <circle className="blueprint-node-ring" cx={x} cy={y} r="37" />
      <circle className="blueprint-node-body" cx={x} cy={y} r="29" />
      <DiagramIcon name={icon} x={x} y={y} />
      <text className="blueprint-label" x={x} y={y + 52}>{label}</text>
      {caption && <text className="blueprint-caption" x={x} y={y + 70}>{caption}</text>}
    </g>
  );
}

function Result({ label }) {
  return <g className="blueprint-result"><rect x="119" y="290" width="242" height="34" rx="17" /><text x="240" y="312">{label}</text></g>;
}

function HomeDiagram() {
  return (
    <>
      <path className="blueprint-track" d="M100 160H380M240 160V290" />
      <path className="blueprint-flow" d="M100 160H240M380 160H240V290" />
      <Node x={88} y={160} icon="factory" label="Industrial assets" caption="Untapped potential" />
      <Node x={392} y={160} icon="investor" label="The right capital" caption="Aligned investment" index={2} />
      <g className="blueprint-core">
        <circle className="blueprint-orbit" cx="240" cy="160" r="61" />
        <rect x="180" y="125" width="120" height="70" rx="18" />
        <DiagramIcon name="layers" x={240} y={149} />
        <text x="240" y="179">Develop & integrate</text>
      </g>
      <Result label="Investment-ready opportunities" />
    </>
  );
}

function ServicesDiagram() {
  return (
    <>
      <path className="blueprint-track" d="M92 155H432V263H240V290" />
      <path className="blueprint-flow" d="M92 155H432V263H240V290" />
      <Node x={92} y={155} icon="gauge" label="Understand" caption="Find the opportunity" />
      <Node x={240} y={155} icon="cog" label="Develop" caption="Build the project" index={1} />
      <Node x={388} y={155} icon="coins" label="Connect" caption="Bring in capital" index={2} />
      <Result label="One integrated development journey" />
    </>
  );
}

// The people EN-DEV brings together on the About page
const ABOUT_ROLES = ["Project owner", "Investor", "Entrepreneur", "Consultant"];

function AboutDiagram() {
  const positions = [[105, 108], [375, 108], [105, 238], [375, 238]];
  return (
    <>
      <circle className="blueprint-orbit" cx="240" cy="175" r="82" />
      <path className="blueprint-track" d="M105 108L240 175L375 108M105 238L240 175L375 238M240 212V290" />
      <path className="blueprint-flow" d="M105 108L240 175M375 108L240 175M105 238L240 175M375 238L240 175V290" />
      {ABOUT_ROLES.map((member, i) => (
        <g className="blueprint-member" key={member} style={{ "--i": i }}>
          <rect x={positions[i][0] - 66} y={positions[i][1] - 22} width="132" height="44" rx="12" />
          <text className="blueprint-label" x={positions[i][0]} y={positions[i][1] + 5}>{member}</text>
        </g>
      ))}
      <g className="blueprint-core">
        <rect x="182" y="140" width="116" height="70" rx="18" />
        <DiagramIcon name="partner" x={240} y={163} />
        <text x="240" y="195">Future builder</text>
      </g>
      <Result label="Shared expertise. Integrated delivery." />
    </>
  );
}

const DIAGRAMS = {
  home: { component: HomeDiagram, label: "EN-DEV develops industrial assets and connects them with capital to create investment-ready opportunities.", caption: "From untapped potential to a developed opportunity." },
  services: { component: ServicesDiagram, label: "Understand the asset, develop the project, and connect it with capital in one integrated development journey.", caption: "Technical, commercial and financial expertise, connected." },
  about: { component: AboutDiagram, label: `${ABOUT_ROLES.join(", ")} come together around EN-DEV as the future builder.`, caption: "" },
};

export default function BlueprintDiagram({ variant }) {
  const { component: Diagram, label, caption } = DIAGRAMS[variant];
  return (
    <figure className="flow-card blueprint-diagram" aria-label={label}>
      <svg viewBox="0 0 480 360" aria-hidden="true" className="flow-svg">
        <rect className="deal-frame" x="12" y="28" width="456" height="318" rx="20" />
        <rect className="blueprint-brand" x="170" y="14" width="140" height="30" rx="15" />
        <image href={logo} x="190" y="19" width="100" height="20" preserveAspectRatio="xMidYMid meet" />
        <Diagram />
      </svg>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
