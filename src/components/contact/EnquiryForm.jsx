import { useMemo, useRef, useState } from "react";
import Icon from "../Icon.jsx";
import { CONTACT, PERSONAS, REASONS } from "../../data/contact.js";
import { OTHER_COUNTRIES, PRIORITY_COUNTRIES } from "../../data/countries.js";

const EMPTY = { fullName: "", email: "", company: "", title: "", country: "", reason: "", description: "", website: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_DESC = 1500;
const CIRC = 2 * Math.PI * 19;

const RULES = {
  fullName: (v) => v.trim().length > 0,
  email: (v) => EMAIL_RE.test(v.trim()),
  title: (v) => v.trim().length > 0,
  country: (v) => v !== "",
  reason: (v) => v !== "",
  description: (v) => v.trim().length >= 20,
};

/**
 * TODO: connect to a real backend (your API, Formspree, or a serverless
 * function that emails the enquiry to CONTACT.email). For example:
 *   const res = await fetch("/api/enquiry", { method: "POST",
 *     headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
 *   if (!res.ok) throw new Error("Request failed");
 */
async function sendEnquiry(payload) {
  console.info("[EN-DEV] enquiry payload", payload);
  await new Promise((r) => setTimeout(r, 1200));
}

function Field({ id, label, required, optional, error, children }) {
  return (
    <div className={`field${error ? " invalid" : ""}`}>
      {children}
      <label htmlFor={id}>
        {label} {required && <em>*</em>}
        {optional && <span className="opt">(optional)</span>}
      </label>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}

export default function EnquiryForm({ persona, setPersona, onToast }) {
  const [values, setValues] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false); // a submit was attempted
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const [sentData, setSentData] = useState(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const valid = useMemo(() => {
    const v = {};
    for (const k in RULES) v[k] = RULES[k](values[k]);
    return v;
  }, [values]);

  const showErr = (k) => (touched[k] || submitted) && !valid[k];
  const consentErr = submitted && !consent;

  const checks = [...Object.values(valid), consent];  const pct = Math.round((checks.filter(Boolean).length / checks.length) * 100);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const touch = (k) => () => values[k] && setTouched((t) => ({ ...t, [k]: true }));

  const autoReasons = PERSONAS.map((x) => x.reason).filter(Boolean);

  // Clicking the selected card again deselects it
  const deselectPersona = (p) => {
    if (persona !== p.value) return;
    setPersona(null);
    if (p.reason && values.reason === p.reason) setValues((v) => ({ ...v, reason: "" }));
  };

  const choosePersona = (p) => {
    setPersona(p.value);
    if (p.reason && (!values.reason || autoReasons.includes(values.reason))) {
      setValues((v) => ({ ...v, reason: p.reason }));
    }
  };


  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.website) return; // honeypot — drop bot submissions silently
    setSubmitted(true);

    const firstBad =
      Object.keys(RULES).find((k) => !valid[k]) ||
      (!consent && "consent");
    if (firstBad) {
      const el = formRef.current.querySelector(`#${firstBad}`);
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      onToast("Please complete the highlighted fields");
      return;
    }

    const payload = { ...values, persona };
    delete payload.website;
    setStatus("sending");
    try {
      await sendEnquiry(payload);
      setSentData(payload);
      setStatus("sent");
      requestAnimationFrame(() => {
        successRef.current?.focus();
        successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    } catch {
      setStatus("idle");
      onToast("Something went wrong. Please email us directly.");
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setTouched({});
    setConsent(false);
    setSubmitted(false);
    setPersona(null);
    setSentData(null);
    setStatus("idle");
  };

  if (status === "sent" && sentData) {
    return (
      <div className="form-card">
        <div className="success" ref={successRef} tabIndex={-1}>
          <svg className="success-mark" viewBox="0 0 80 80" aria-hidden="true">
            <circle cx="40" cy="40" r="36" />
            <path d="M24 41l11 11 21-23" />
          </svg>
          <h3>Thank you, {sentData.fullName.trim().split(/\s+/)[0]}.</h3>
          <p>
            Your enquiry is on its way to our team. We'll review it and contact you at{" "}
            <strong>{sentData.email}</strong> with next steps.
          </p>
          <button type="button" className="btn btn-ghost" onClick={reset}>Send another enquiry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <div className="form-top">
        <div>
          <h2 id="formTitle">Start the conversation</h2>
        </div>
        <div className={`progress${pct === 100 ? " done" : ""}`} aria-hidden="true">
          <svg viewBox="0 0 44 44">
            <circle className="track" cx="22" cy="22" r="19" />
            <circle className="bar" cx="22" cy="22" r="19" style={{ strokeDashoffset: CIRC * (1 - pct / 100) }} />
          </svg>
          <span>{pct}%</span>
        </div>
      </div>

      <form ref={formRef} onSubmit={onSubmit} noValidate>
        <fieldset className="persona">
          <legend>I'm reaching out as</legend>
          <div className="persona-grid">
            {PERSONAS.map((p) => (
              <label className="persona-opt" key={p.value}>
                <input type="radio" name="persona" value={p.value} checked={persona === p.value} onChange={() => choosePersona(p)} onClick={() => deselectPersona(p)} />
                <span className="persona-box">
                  <Icon name={p.value} />
                  <strong>{p.label}</strong>
                  <small>{p.hint}</small>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field-grid">
          <Field id="fullName" label="Full name" required error={showErr("fullName") && "Please enter your full name."}>
            <input id="fullName" type="text" placeholder=" " autoComplete="name" value={values.fullName} onChange={set("fullName")} onBlur={touch("fullName")} />
          </Field>
          <Field id="email" label="Email" required error={showErr("email") && "Please enter a valid email address."}>
            <input id="email" type="email" placeholder=" " autoComplete="email" value={values.email} onChange={set("email")} onBlur={touch("email")} />
          </Field>
          <Field id="company" label="Company" optional>
            <input id="company" type="text" placeholder=" " autoComplete="organization" value={values.company} onChange={set("company")} />
          </Field>
          <Field id="title" label="Title" required error={showErr("title") && "Please enter your title."}>
            <input id="title" type="text" placeholder=" " autoComplete="organization-title" value={values.title} onChange={set("title")} onBlur={touch("title")} />
          </Field>

          <div className={`field select${showErr("country") ? " invalid" : ""}`}>
            <select id="country" required value={values.country} onChange={set("country")}>
              <option value="" disabled>Select your country</option>
              {PRIORITY_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
              <option disabled value="--">──────────</option>
              {OTHER_COUNTRIES.map((c) => <option key={c}>{c}</option>)}
            </select>
            <label htmlFor="country">Country <em>*</em></label>
            {showErr("country") && <span className="error-msg">Please select your country.</span>}
          </div>

          <div className={`field select${showErr("reason") ? " invalid" : ""}`}>
            <select id="reason" required value={values.reason} onChange={set("reason")}>
              <option value="" disabled>Select a reason</option>
              {REASONS.map((r) => <option key={r}>{r}</option>)}
            </select>
            <label htmlFor="reason">Reason for contact <em>*</em></label>
            {showErr("reason") && <span className="error-msg">Please select a reason.</span>}
          </div>
        </div>


        <div className={`field textarea${showErr("description") ? " invalid" : ""}`}>
          <textarea id="description" rows={5} maxLength={MAX_DESC} placeholder=" " value={values.description} onChange={set("description")} onBlur={touch("description")} />
          <label htmlFor="description">Project description <em>*</em></label>
          <span className="counter">{values.description.length} / {MAX_DESC}</span>
          {showErr("description") && <span className="error-msg">Please describe your project (at least 20 characters).</span>}
        </div>

        {/* Honeypot: hidden from people, filled in by bots */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set("website")} />
        </div>

        <label className="consent">
          <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span className="check" aria-hidden="true"><Icon name="check" /></span>
          <span>
            I agree that EN-DEV may use these details to respond to my enquiry. They are emailed to{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> and not used for anything else.
          </span>
        </label>
        {consentErr && <span className="error-msg consent-error show">Please accept to continue.</span>}

        <button type="submit" className={`btn btn-primary btn-lg btn-submit${status === "sending" ? " loading" : ""}`}>
          <span className="label">{status === "sending" ? "Sending…" : "Send enquiry"}</span>
          <span className="spinner" aria-hidden="true" />
          <Icon name="arrow" />
        </button>
      </form>
    </div>
  );
}
