import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import CountUp from "../components/CountUp.jsx";
import ProjectMap from "../components/ProjectMap.jsx";
import PortfolioScene from "../components/portfolio/PortfolioScene.jsx";
import { FOCUS, CONNECT } from "../data/site.js";

const STATS = [
  { value: 10, suffix: "+", label: "Countries" },
  { value: 5, label: "Asset types" },
  { value: 125, suffix: "+", label: "Projects" },
];

function Head({ num, eyebrow, title, id }) {
  return (
    <div className="section-head">
      <p className="eyebrow eyebrow-line" id={title ? undefined : id}><span className="eyebrow-num">{num}</span>{eyebrow}</p>
      {title && <h2 id={id} className="h2">{title}</h2>}
    </div>
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.title = "Our Portfolio | EN-DEV";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero portfolio-hero">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Our Portfolio</h1>
            <p className="lead">
              Industrial energy-transition projects, developed to create <strong className="accent">long-term value.</strong>
            </p>
            <div className="hero-actions">
              <Link to="/contact?as=investor" className="btn btn-primary btn-lg">Discuss an opportunity <Icon name="arrow" /></Link>
              <Link to="/contact?as=owner" className="btn btn-ghost btn-lg">Bring us a project</Link>
            </div>
            <dl className="hero-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dt><CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} /></dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <PortfolioScene />
        </div>
      </section>

      {/* FOCUS + CONNECT */}
      <section className="focus" aria-labelledby="focusTitle">
        <div className="container reveal">
          <Head num="01" eyebrow="Focus areas" id="focusTitle"/>
          <ul className="focus-grid stagger">
            {FOCUS.map((f, i) => (
              <li key={f.title} className="focus-card" style={{ "--i": i }}>
                <span className="focus-icon"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>

          <div className="connect">
            <p className="connect-title">One integrated approach, <span>from concept to realization.</span></p>
            <ol className="connect-row stagger">
              {CONNECT.map((c, i) => (
                <li key={c.label} className="connect-node" style={{ "--i": i }}>
                  <span className="connect-icon"><Icon name={c.icon} /></span>
                  <span className="connect-label">{c.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-zone" aria-labelledby="mapTitle">
        <div className="container reveal">
          <Head num="02" eyebrow="Where we work" id="mapTitle" />
          <ProjectMap />
          <aside className="pmap-cta" aria-label="Project enquiries">
            <span className="pmap-cta-icon"><Icon name="message" /></span>
            <div className="pmap-cta-copy">
              <strong>Want to know more about our projects?</strong>
              <span>Ask us about our work in any of these countries.</span>
            </div>
            <Link to="/contact#enquiry" className="btn btn-primary">Know about our projects <Icon name="arrow" /></Link>
          </aside>
        </div>
      </section>

    </>
  );
}
