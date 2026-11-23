import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import BlueprintDiagram from "../components/BlueprintDiagram.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PageCTA from "../components/PageCTA.jsx";
import DevelopmentProcess from "../components/DevelopmentProcess.jsx";
import { SERVICES } from "../data/services.js";
import { STRUCTURES } from "../data/site.js";

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

      <section className="page-section page-section-white" aria-labelledby="combinations-title">
        <div className="container reveal">
          <SectionHeading number="03" eyebrow="Better together" id="combinations-title" title="Connected solutions. More possibilities." description="A project may combine several opportunities. These are some of the ways we bring them together." />
          <ol className="formula-list stagger">
            {STRUCTURES.map((parts, i) => (
              <li key={parts.map((part) => part.label).join("-")} style={{ "--i": i }}>
                <span className="formula-idx">0{i + 1}</span>
                <div className="formula-parts">{parts.map((part, index) => <span className="formula-part" key={part.label}>{index > 0 && <b aria-label="plus">+</b>}<span className="formula-chip"><Icon name={part.icon} />{part.label}</span></span>)}</div>
                <span className="formula-line" aria-hidden="true" /><span className="formula-result"><Icon name="check" />One project</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <PageCTA eyebrow="Your next step" title="Let’s find the potential in your asset." label="Start the conversation" to="/contact?as=owner#enquiry" />
    </div>
  );
}
