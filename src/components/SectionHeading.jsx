export default function SectionHeading({ number, eyebrow, title, description, id, className = "" }) {
  return (
    <div className={`section-head ${className}`.trim()}>
      <p className="eyebrow eyebrow-line"><span className="eyebrow-num">{number}</span>{eyebrow}</p>
      <h2 className="h2" id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
