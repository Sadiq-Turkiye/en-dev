import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import PageHero from "../components/PageHero.jsx";
import BlueprintDiagram from "../components/BlueprintDiagram.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import PageCTA from "../components/PageCTA.jsx";
import { DEFINITION, AMBITION, PILLARS, DISCIPLINES, MODELS } from "../data/site.js";

export default function About() {
  useEffect(() => { document.title = "About Us | EN-DEV"; }, []);
  return (
    <div className="themed-page about-page">
      <PageHero
        eyebrow="About EN-DEV"
        title={<>Different expertise.<br /><span className="accent">One shared ambition.</span></>}
        description="EN-DEV brings specialist companies together in one development and investment platform. We combine technical, measurement and engineering capabilities to unlock the potential of industrial energy transition."
        actions={<><Link to="/contact?as=partner#enquiry" className="btn btn-primary btn-lg">Work with us <Icon name="arrow" /></Link><Link to="/services" className="btn btn-ghost btn-lg">Explore our services</Link></>}
      ><BlueprintDiagram variant="about" /></PageHero>

      <section className="page-section page-section-white" aria-labelledby="about-platform">
        <div className="container value-grid reveal">
          <div><SectionHeading number="01" eyebrow="Who we are" id="about-platform" title="Specialist expertise, working as one." /><p className="section-copy">{DEFINITION}</p></div>
          <div className="platform-roles">
            {[
              { icon: "compass", title: "Developer", text: "We identify the opportunity and develop the project." },
              { icon: "layers", title: "Integrator", text: "We connect industrial, energy and technical capabilities." },
              { icon: "investor", title: "Investment platform", text: "We prepare projects for capital and selectively co-invest." },
            ].map((role) => <div className="platform-role" key={role.title}><div className="aud-icon"><Icon name={role.icon} /></div><div><h3>{role.title}</h3><p>{role.text}</p></div></div>)}
            <p className="platform-note">Our initial focus is development, integration and strategic advice, with selective ownership and co-investment over time.</p>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="about-disciplines">
        <div className="container reveal">
          <SectionHeading number="02" eyebrow="Value through integration" id="about-disciplines" title="Five disciplines, one project team." description="We look at the whole asset, bringing the right capabilities together around its potential." />
          <ul className="pillar-grid stagger">{PILLARS.map((pillar, i) => <li className="pillar" key={pillar.title} style={{ "--i": i }}><div className="aud-icon"><Icon name={pillar.icon} /></div><h3>{pillar.title}</h3><ul>{pillar.items.map((item) => <li key={item}>{item}</li>)}</ul></li>)}</ul>
          <div className="discipline-footer"><p>Our work connects these disciplines across the full development journey.</p><Link to="/services#development" className="loc-link">See how we work <Icon name="arrow" /></Link></div>
        </div>
      </section>

      <section className="page-section page-section-white" aria-labelledby="about-intersection">
        <div className="container sit-grid reveal">
          <SectionHeading number="03" eyebrow="Where we connect" id="about-intersection" title="At the intersection of industry, energy and capital." description="The opportunity often sits between sectors. Our platform connects them, combining industrial understanding with the technical and financial thinking a project needs." />
          <ul className="chip-cloud" aria-label="Disciplines EN-DEV combines">{DISCIPLINES.map((discipline) => <li key={discipline}>{discipline}</li>)}</ul>
        </div>
      </section>

      <section className="page-section" aria-labelledby="about-models">
        <div className="container reveal">
          <SectionHeading number="04" eyebrow="How we participate" id="about-models" title="Different models. Aligned interests." description="Our role depends on the opportunity, the development stage and the partners involved." />
          <ul className="participation-grid stagger">{MODELS.map((model, i) => <li key={model.title} style={{ "--i": i }}><span className="participation-number">0{i + 1}</span><h3>{model.title}</h3><p>{model.text}</p></li>)}</ul>
        </div>
      </section>

      <section className="ambition page-section-white">
        <div className="container reveal"><div className="ambition-mark" aria-hidden="true"><Icon name="compass" /></div><p className="eyebrow">Our long-term ambition</p><blockquote>{AMBITION}</blockquote></div>
      </section>
      <PageCTA eyebrow="Build with us" title="Good projects start with the right people." label="Let’s work together" to="/contact?as=partner#enquiry" />
    </div>
  );
}
