import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import BlueprintDiagram from "../components/BlueprintDiagram.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PageCTA from "../components/PageCTA.jsx";
import DevelopmentProcess from "../components/DevelopmentProcess.jsx";
import { SERVICES } from "../data/services.js";
import { STRUCTURES, SIGNALS, TARGET_ASSETS } from "../data/site.js";

export default function Services() {
  useEffect(() => { document.title = "Our Services | EN-DEV"; }, []);
  return (
    <div className="themed-page services-page">
      <PageHero
        eyebrow="Our services"
        title={<>From possibility<br />to <span className="accent">a developed project.</span></>}
        description="Industrial insight, energy expertise and investment thinking, working together. We connect every part of the development journey around your asset."
        actions={<><Link to="/contact?as=owner#enquiry" className="btn btn-primary btn-lg">Talk about your project <Icon name="arrow" /></Link><a href="#services" className="btn btn-ghost btn-lg">Explore our services</a></>}
      ><BlueprintDiagram variant="services" /></PageHero>

      <section className="page-section page-section-white" id="services" aria-labelledby="services-title">
        <div className="container reveal">
          <SectionHeading number="01" eyebrow="What we bring" id="services-title" title="Five disciplines. One connected approach." description="Each asset needs a different mix. We bring the relevant specialists together to develop a coherent technical, commercial and investment case." />
          <div className="services-grid stagger">
            {SERVICES.map((service, i) => (
              <article className="service-card" id={service.id} key={service.id} style={{ "--i": i }}>
                <div className="service-card-top"><div className="aud-icon"><Icon name={service.icon} /></div><span className="service-index">0{i + 1}</span></div>
                <h3>{service.title}</h3><p>{service.text}</p>
                <ul className="ticks">{service.items.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
              </article>
            ))}
            <article className="service-card service-card-invitation" style={{ "--i": 5 }}>
              <div className="aud-icon"><Icon name="message" /></div><p className="eyebrow">Let’s start with your asset</p>
              <h3>Where could we create value together?</h3>
              <p>Tell us about your site, your energy challenges or your investment priorities. We’ll help identify the right starting point.</p>
              <Link to="/contact?as=owner#enquiry" className="loc-link">Start the conversation <Icon name="arrow" /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section" id="development" aria-labelledby="development-title">
        <div className="container reveal">
          <SectionHeading number="02" eyebrow="How we work" id="development-title" title="A clear path from asset to opportunity." description="Explore the seven stages of our development process. Select a stage to see what it involves." />
          <DevelopmentProcess />
        </div>
      </section>

      <section className="page-section page-section-white" aria-labelledby="assetTitle">
        <div className="container reveal">
          <SectionHeading number="03" eyebrow="What we develop" id="assetTitle" title="Four types of industrial assets." />
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

      <section className="page-section" aria-labelledby="sigTitle">
        <div className="container reveal">
          <SectionHeading number="04" eyebrow="What we look for" id="sigTitle" title="Does your site have several of these?" />
          <ul className="signal-grid stagger">
            {SIGNALS.map((s, i) => (
              <li key={s.label} className="signal" style={{ "--i": i }}>
                <span className="signal-icon"><Icon name={s.icon} /></span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className="signals-cta">
            <Link to="/contact?as=owner#enquiry" className="btn btn-primary btn-lg">Tell us about your asset <Icon name="arrow" /></Link>
          </div>
        </div>
      </section>

      <section className="page-section page-section-white" aria-labelledby="strTitle">
        <div className="container reveal">
          <SectionHeading number="05" eyebrow="Typical project structures" id="strTitle" title="Several value levers. One investable project." />
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

      <PageCTA eyebrow="Your next step" title="Let’s find the potential in your asset." label="Start the conversation" to="/contact?as=owner#enquiry" />
    </div>
  );
}
