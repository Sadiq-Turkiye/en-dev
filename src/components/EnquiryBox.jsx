import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

// Small animated enquiry box (styles: .pmap-cta in global.css). Place it inside a `.reveal` block
// so the entrance, sheen, icon pulse and arrow nudge start when it scrolls into view.
export default function EnquiryBox({ title, text, label, to, className = "" }) {
  return (
    <aside className={`pmap-cta ${className}`.trim()} aria-label={title}>
      <span className="pmap-cta-icon"><Icon name="message" /></span>
      <div className="pmap-cta-copy">
        <strong>{title}</strong>
        <span>{text}</span>
      </div>
      <Link to={to} className="btn btn-primary">{label} <Icon name="arrow" /></Link>
    </aside>
  );
}
