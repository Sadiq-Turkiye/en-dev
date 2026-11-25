// Stretchable EN-DEV frame drawn in SVG so its dashes match the diagram frames
// (.deal-frame) instead of the browser's short CSS border dashes.
export default function DashedFrame() {
  return (
    <svg className="dashed-frame" aria-hidden="true">
      <rect x="0" y="0" width="100%" height="100%" rx="20" />
    </svg>
  );
}
