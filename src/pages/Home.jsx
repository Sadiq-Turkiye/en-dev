import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { MAP_COUNTRIES } from "../data/mapGeometry.js";
import { DEFINITION, TRANSFORM, AUDIENCES, PROCESS } from "../data/site.js";

function TransformCard() {
  return (
    <figure className="xform" aria-label="EN-DEV turns underperforming, underutilized, energy-exposed assets into optimized, lower-cost, lower-carbon, investable assets">
      <div className="xform-panel">
        <span className="channel-label">The asset today</span>
        <ul>{TRANSFORM.from.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      <div className="xform-mid" aria-hidden="true">
        <span className="xform-line" />
        <span className="xform-chip">EN-DEV integrated development</span>
        <span className="xform-line" />
      </div>
      <div className="xform-panel xform-to">
        <span className="channel-label">The asset after</span>
        <ul>{TRANSFORM.to.map((t) => <li key={t}><Icon name="check" />{t}</li>)}</ul>
      </div>
    </figure>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "EN-DEV | Industrial Energy Transition & Asset Development";
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="h1-long">Industrial assets, developed into <span className="accent">investable</span> energy-transition opportunities.</h1>
            <p className="lead">
              We find industrial assets where energy transition and industrial transformation can unlock hidden value,
              develop them into bankable projects, and bring in the capital to realize them.
            </p>
            <div className="hero-actions">
              <Link to="/contact?as=owner" className="btn btn-primary btn-lg">I have an industrial asset <Icon name="arrow" /></Link>
              <Link to="/contact?as=investor" className="btn btn-ghost btn-lg">I'm an investor</Link>
            </div>
          </div>
          <TransformCard />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="statement">
        <div className="container statement-grid">
          <p className="statement-big">Where energy transition, industrial optimization and capital restructuring unlock more value than an asset generates today.</p>
          <div>
            <p>{DEFINITION}</p>
            <Link to="/about" className="loc-link">More about EN-DEV <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      {/* TWO SIDES */}
      <section className="audiences" aria-labelledby="audTitle">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Who we bring together</p>
            <h2 id="audTitle" className="h2">Asset owners on one side. Capital on the other.</h2>
          </div>
          <div className="aud-grid">
            {AUDIENCES.map((a) => (
              <article key={a.key} className={`aud-card aud-${a.key}`}>
                <div className="aud-icon"><Icon name={a.icon} /></div>
                <p className="partner-field">{a.kind}</p>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <ul className="ticks">{a.points.map((p) => <li key={p}><Icon name="check" />{p}</li>)}</ul>
                <Link to={a.cta.to} className="btn btn-primary">{a.cta.label} <Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" aria-labelledby="procTitle">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow light">How we work</p>
            <h2 id="procTitle">From an industrial site to an investment-ready project, in seven steps.</h2>
          </div>
          <ol className="psteps">
            {PROCESS.map((s, i) => (
              <li key={s.title} className="pstep">
                <span className="pstep-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band cta-top">
        <div className="container">
          <div className="cta-inner">
            <div>
              <p className="eyebrow light">Active in {MAP_COUNTRIES.length} countries</p>
              <h2>See where we develop projects.</h2>
            </div>
            <Link to="/portfolio" className="btn btn-light btn-lg">Our portfolio <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
