export default function PageHero({ eyebrow, title, description, actions, children }) {
  return (
    <section className="hero page-hero">
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <div className="hero-actions">{actions}</div>
        </div>
        {children}
      </div>
    </section>
  );
}
