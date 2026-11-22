import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import Rotator from "../components/contact/Rotator.jsx";
import RoutingDiagram from "../components/contact/RoutingDiagram.jsx";
import LocationMap from "../components/contact/LocationMap.jsx";
import EnquiryForm from "../components/contact/EnquiryForm.jsx";
import DirectChannels from "../components/contact/DirectChannels.jsx";
import { PERSONAS } from "../data/contact.js";

export default function Contact() {
  const [params] = useSearchParams();
  const preset = PERSONAS.some((p) => p.value === params.get("as")) ? params.get("as") : null;

  const [persona, setPersona] = useState(preset);
  const [toast, setToast] = useState("");
  const toastTimer = useRef();

  useEffect(() => {
    document.title = "Contact Us | EN-DEV";
  }, []);

  // "Invest with us" in the navbar presets the investor persona
  useEffect(() => {
    if (preset) setPersona(preset);
  }, [preset]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="blueprint-grid" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Let's talk about<br /><Rotator /></h1>
            <p className="lead">
              Tell us what you're working on. Whether you're an investor looking at our portfolio, a project owner,
              or a potential partner, your message goes straight to the right team, and we'll come back to you quickly.
            </p>
            <div className="hero-actions">
              <a href="#enquiry" className="btn btn-primary btn-lg">Start the conversation <Icon name="arrow" /></a>
              <Link to="/portfolio" className="btn btn-ghost btn-lg">Explore our portfolio</Link>
            </div>
          </div>
          <RoutingDiagram persona={persona} />
        </div>
      </section>

      {/* FORM + DIRECT */}
      <section className="contact-zone" id="enquiry" aria-labelledby="formTitle">
        <div className="container contact-grid">
          <EnquiryForm
            persona={persona}
            setPersona={setPersona}
            onToast={showToast}
          />
          <DirectChannels />
        </div>
      </section>

      <LocationMap />

      <div className={`toast${toast ? " show" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
