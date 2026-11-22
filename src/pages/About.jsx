import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import logo from "../assets/en-dev-logo.png";
import { DEFINITION, AMBITION, PILLARS, DISCIPLINES, NOT_LIST, MEMBERS, MODELS } from "../data/site.js";

function initials(name) {
  const caps = name.match(/[A-Z]/g) || [];
  return (caps.length > 1 ? caps.slice(0, 2).join("") : name.slice(0, 2)).toUpperCase();
}

function PlatformCard() {
  return (
    <figure className="platform" aria-label={`EN-DEV is a platform formed by ${MEMBERS.join(", ")} and other companies`}>
      <span className="channel-label">Platform members</span>
      <ul className="platform-members">
        {MEMBERS.map((m) => (
          <li key={m}><span className="platform-badge">{initials(m)}</span>{m}</li>
        ))}
        <li className="platform-more"><span className="platform-badge">+</span>Other specialist companies</li>
      </ul>
      <div className="platform-join" aria-hidden="true"><span /></div>
      <div className="platform-core">
        <img src={logo} alt="" />
        <span>Development & investment layer</span>
      </div>
      <div className="platform-join" aria-hidden="true"><span /></div>
      <div className="platform-out">
        <span>Bankable industrial energy-transition projects</span>
      </div>
    </figure>
  );
}

export default function About() {
  useEffect(() => {
    document.title = "About Us | EN-DEV";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>A platform, not a <span className="accent">single company.</span></h1>
            <p className="lead">
              EN-DEV is a work group created by several companies, including Naukaplan and WindThink. It combines their
              technical, measurement and engineering capabilities into one development and investment layer for
              industrial energy transition.
            </p>
            <div className="hero-actions">
              <Link to="/contact?as=partner" className="btn btn-primary btn-lg">Work with us <Icon name="arrow" /></Link>
              <Link to="/portfolio" className="btn btn-ghost btn-lg">Our portfolio</Link>
            </div>
          </div>
          <PlatformCard />
        </div>
      </section>

      {/* DEFINITION */}
      <section className="statement">
        <div className="container statement-grid">
          <p className="statement-big">Developer + Integrator + Investment Platform.</p>
          <div>
            <p>{DEFINITION}</p>
            <p className="muted small-gap">
              EN-DEV does not initially aim to own large amounts of physical infrastructure. It acts as developer,
              integrator and strategic advisor, and over time as co-investor.
            </p>
          </div>
        </div>
      </section>

      {/* WHERE WE SIT */}
      <section className="sit" aria-labelledby="sitTitle">
        <div className="container sit-grid">
          <div>
            <p className="eyebrow">Where we sit</p>
            <h2 id="sitTitle" className="h2">At the intersection of several sectors.</h2>
            <p className="sit-lead">EN-DEV is not simply one of these. It is the layer that connects them.</p>
            <ul className="not-list">
              {NOT_LIST.map((n) => <li key={n}><span aria-hidden="true">✕</span> Not only {n.charAt(0).toLowerCase() + n.slice(1)}</li>)}
            </ul>
          </div>
          <ul className="chip-cloud" aria-label="Disciplines EN-DEV combines">
            {DISCIPLINES.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars" aria-labelledby="pilTitle">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Value through integration</p>
            <h2 id="pilTitle" className="h2">Five disciplines, one project team.</h2>
          </div>
          <ul className="pillar-grid">
            {PILLARS.map((p) => (
              <li key={p.title} className="pillar">
                <div className="aud-icon"><Icon name={p.icon} /></div>
                <h3>{p.title}</h3>
                <ul>{p.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MODELS */}
      <section className="process models" aria-labelledby="modTitle">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow light">How we participate</p>
            <h2 id="modTitle">Flexible models, aligned with the project's success.</h2>
          </div>
          <ul className="model-grid">
            {MODELS.map((m, i) => (
              <li key={m.title} className="pstep">
                <span className="pstep-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AMBITION */}
      <section className="ambition">
        <div className="container">
          <p className="eyebrow">Our long-term ambition</p>
          <blockquote>{AMBITION}</blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <p className="eyebrow light">Partners</p>
              <h2>Meet the companies we work with.</h2>
            </div>
            <Link to="/partners" className="btn btn-light btn-lg">Our partners <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
