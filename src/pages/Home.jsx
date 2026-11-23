import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import BlueprintDiagram from "../components/BlueprintDiagram.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PageCTA from "../components/PageCTA.jsx";
import { MAP_COUNTRIES } from "../data/mapGeometry.js";
import { DEFINITION, TRANSFORM, AUDIENCES } from "../data/site.js";
import { SERVICES } from "../data/services.js";

export default function Home() {
  useEffect(() => { document.title = "EN-DEV | Industrial Energy Transition & Asset Development"; }, []);
  return (
    <div className="themed-page home-page">
      <PageHero
        eyebrow="Industrial energy transition & asset development"
        title={<>Industrial potential.<br /><span className="accent">Developed into value.</span></>}
        description="We find the hidden value in industrial assets, develop energy-transition opportunities, and bring together the expertise and capital to realize them."
        actions={<><Link to="/contact?as=owner#enquiry" className="btn btn-primary btn-lg">Let’s develop your asset <Icon name="arrow" /></Link><Link to="/portfolio" className="btn btn-ghost btn-lg">Explore our portfolio</Link></>}
      ><BlueprintDiagram variant="home" /></PageHero>

      <section className="page-section page-section-white" aria-labelledby="home-value">
        <div className="container value-grid reveal">
          <div>
            <SectionHeading number="01" eyebrow="What we do" id="home-value" title="A new chapter for industrial assets." />
            <p className="section-copy">{DEFINITION}</p>
            <Link to="/about" className="loc-link">Get to know EN-DEV <Icon name="arrow" /></Link>
          </div>
          <div className="value-panel">
            <div className="value-before"><span className="channel-label">The opportunity today</span><ul>{TRANSFORM.from.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="value-bridge"><span /><Icon name="arrow" /><span /></div>
            <div className="value-after"><span className="channel-label">What we work towards</span><ul>{TRANSFORM.to.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="home-services">
        <div className="container reveal">
          <div className="section-heading-row">
            <SectionHeading number="02" eyebrow="Connected expertise" id="home-services" title="The right expertise. Around one asset." />
            <Link to="/services" className="loc-link">Explore all services <Icon name="arrow" /></Link>
          </div>
          <div className="service-preview-grid stagger">
            {[SERVICES[0], SERVICES[1], SERVICES[3]].map((service, i) => (
              <Link key={service.id} to={`/services#${service.id}`} className="service-preview" style={{ "--i": i }}>
                <div className="aud-icon"><Icon name={service.icon} /></div><h3>{service.title}</h3><p>{service.text}</p>
                <span className="service-preview-link">Discover the service <Icon name="arrow" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-white" aria-labelledby="home-audiences">
        <div className="container reveal">
          <SectionHeading number="03" eyebrow="Who we bring together" id="home-audiences" title="Your asset. Your capital. Our shared opportunity." />
          <div className="aud-grid stagger">
            {AUDIENCES.map((audience, i) => (
              <article key={audience.key} className={`aud-card aud-${audience.key}`} style={{ "--i": i }}>
                <div className="aud-icon"><Icon name={audience.icon} /></div><p className="partner-field">{audience.kind}</p>
                <h3>{audience.title}</h3><p>{audience.text}</p>
                <ul className="ticks">{audience.points.map((point) => <li key={point}><Icon name="check" />{point}</li>)}</ul>
                <Link to={`${audience.cta.to}#enquiry`} className="btn btn-primary">{audience.cta.label} <Icon name="arrow" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCTA eyebrow={`Active in ${MAP_COUNTRIES.length} countries`} title="Discover where potential becomes a project." label="Our portfolio" to="/portfolio" />
    </div>
  );
}
