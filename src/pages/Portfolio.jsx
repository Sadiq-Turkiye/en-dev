import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import CountUp from "../components/CountUp.jsx";
import ProjectMap from "../components/ProjectMap.jsx";
import PortfolioScene from "../components/portfolio/PortfolioScene.jsx";
import { FOCUS, CONNECT, SIGNALS, TARGET_ASSETS, STRUCTURES, PROCESS } from "../data/site.js";
import { MAP_COUNTRIES } from "../data/mapGeometry.js";

const STATS = [
  { value: MAP_COUNTRIES.length, label: "Countries" },
  { value: TARGET_ASSETS.length, label: "Asset types" },
  { value: PROCESS.length, label: "Development steps" },
];

function Head({ num, eyebrow, title, id }) {
  return (
    <div className="section-head">
      <p className="eyebrow eyebrow-line"><span className="eyebrow-num">{num}</span>{eyebrow}</p>
      <h2 id={id} className="h2">{title}</h2>
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
                  <dt><CountUp to={s.value} /></dt>
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
          <Head num="01" eyebrow="Focus areas" id="focusTitle" title="Initiatives across energy, industrial infrastructure and sustainable technologies." />
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
          <Head num="02" eyebrow="Where we work" id="mapTitle" title={`Active across ${MAP_COUNTRIES.length} countries, from the UK to Central Asia.`} />
          <ProjectMap />
        </div>
      </section>

      {/* TARGET ASSETS */}
      <section className="assets" aria-labelledby="assetTitle">
        <div className="container reveal">
          <Head num="03" eyebrow="What we develop" id="assetTitle" title="Four types of industrial assets." />
          <ul className="asset-grid stagger">
            {TARGET_ASSETS.map((a, i) => (
              <li key={a.tag} className="asset-card" style={{ "--i": i }}>
                <span className="asset-tag" aria-hidden="true"><Icon name={a.icon} /></span>
                <Icon name={a.icon} className="asset-watermark" />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                {a.chips.length > 0 && <ul className="chips">{a.chips.map((c) => <li key={c}>{c}</li>)}</ul>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SIGNALS */}
      <section className="signals" aria-labelledby="sigTitle">
        <div className="container reveal">
          <Head num="04" eyebrow="What we look for" id="sigTitle" title="Does your site have several of these?" />
          <ul className="signal-grid stagger">
            {SIGNALS.map((s, i) => (
              <li key={s.label} className="signal" style={{ "--i": i }}>
                <span className="signal-icon"><Icon name={s.icon} /></span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="signals-cta">
            <Link to="/contact?as=owner" className="btn btn-primary btn-lg">Tell us about your asset <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* STRUCTURES */}
      <section className="structures" aria-labelledby="strTitle">
        <div className="container reveal">
          <Head num="05" eyebrow="Typical project structures" id="strTitle" title="Several value levers. One investable project." />
          <ul className="formula-list stagger">
            {STRUCTURES.map((parts, row) => (
              <li key={row} style={{ "--i": row }}>
                <span className="formula-idx">{String(row + 1).padStart(2, "0")}</span>
                <span className="formula-parts">
                  {parts.map((p, i) => (
                    <span key={p.label} className="formula-part">
                      {i > 0 && <b aria-hidden="true">+</b>}
                      <span className="formula-chip"><Icon name={p.icon} />{p.label}</span>
                    </span>
                  ))}
                </span>
                <span className="formula-line" aria-hidden="true" />
                <span className="formula-result" aria-label="results in an investable project">
                  <Icon name="check" /> Investable project
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
