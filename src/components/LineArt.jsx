// Two-tone line illustrations used for the larger feature cards and bands.
const ART = {
  casefile: (
    <>
      <path className="la-accent" d="M34 12h28l10 10v34" />
      <path className="la-accent" d="M62 12v10h10" />
      <path d="M26 20h24" className="la-accent" />
      <path d="M12 34h24l6 7h40v38a3 3 0 0 1-3 3H15a3 3 0 0 1-3-3z" />
      <path d="M12 48h70" />
    </>
  ),
  network: (
    <>
      <path className="la-accent" d="M48 24 24 68M48 24l24 44M24 68h48" />
      <circle cx="48" cy="18" r="8" />
      <circle cx="20" cy="74" r="8" />
      <circle cx="76" cy="74" r="8" />
      <circle className="la-accent" cx="48" cy="54" r="5" />
      <path d="M48 26v23M26 70l18-13M70 70 52 57" />
    </>
  ),
  gauge: (
    <>
      <path d="M18 70a32 32 0 1 1 60 0" />
      <path d="M48 14v6M22 30l4 4M74 30l-4 4M12 52h6M84 52h-6" />
      <path className="la-accent" d="M53 30 39 52h11l-5 18 15-24H49z" />
    </>
  ),
  globehand: (
    <>
      <path className="la-accent" d="M20 30a30 30 0 0 1 56 0" />
      <circle cx="48" cy="38" r="20" />
      <path d="M48 18c-8 6-8 34 0 40M48 18c8 6 8 34 0 40M28 38h40M32 28h32M32 48h32" />
      <path d="M10 70h16l8 4h18a4 4 0 0 1 0 8H36" />
      <path d="M26 66l14-6h10a4 4 0 0 1 0 8M52 82l24-10a5 5 0 0 0-4-9l-18 5" />
    </>
  ),
};

export default function LineArt({ name, className = "" }) {
  return (
    <svg viewBox="0 0 96 96" className={`line-art ${className}`.trim()} aria-hidden="true" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {ART[name]}
    </svg>
  );
}
