import { Link } from "react-router-dom";
import logo from "../assets/en-dev-logo.png";
import { CONTACT, NAV_LINKS } from "../data/contact.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/portfolio" className="footer-logo" aria-label="EN-DEV portfolio">
            <img src={logo} alt="EN-DEV" />
          </Link>
          <p>Industrial development and investment, engineered with purpose.</p>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
            <li><a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} EN-DEV. All rights reserved.</span>
      </div>
    </footer>
  );
}
