import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { PARTNERS } from "../data/partners.js";
import PartnerFlow from "../components/partners/PartnerFlow.jsx";

function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
}

function PartnerCard({ partner, index }) {
  const { name, field, description, logo, website, location } = partner;
  return (
    <li className="partner-card">
      <div className="partner-top">
        <div className="partner-logo">
          {logo ? <img src={logo} alt={`${name} logo`} /> : <span aria-hidden="true">{initials(name)}</span>}
        </div>
        <span className="partner-num">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>{name}</h3>
      {field && <p className="partner-field">{field}</p>}
      {description && <p className="partner-desc">{description}</p>}
      {(location || website) && (
        <div className="partner-meta">
          {location && <span>{location}</span>}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="partner-link">
              Visit website <Icon name="external" />
            </a>
          )}
        </div>
      )}
    </li>
  );
}

export default function Partners() {
  useEffect(() => {
    document.title = "Partners | EN-DEV";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero partners-hero">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Our Partners</h1>
            <p className="lead">
              EN-DEV works alongside trusted partners who bring the technical, engineering, and commercial expertise
              needed to take industrial energy transition projects from concept to realization.
            </p>
          </div>
          <PartnerFlow partners={PARTNERS} />
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners-section" aria-label="Partner companies">
        <div className="container">
          <ul className="partner-grid">
            {PARTNERS.map((p, i) => <PartnerCard key={p.name} partner={p} index={i} />)}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <p className="eyebrow light">Partnerships</p>
              <h2>Interested in partnering with EN-DEV?</h2>
            </div>
            <Link to="/contact?as=partner" className="btn btn-light btn-lg">Get in touch <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
