import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function PageCTA({ eyebrow, title, label, to }) {
  return (
    <section className="cta-band page-cta">
      <div className="container reveal">
        <div className="cta-inner">
          <div><p className="eyebrow light">{eyebrow}</p><h2>{title}</h2></div>
          <Link to={to} className="btn btn-light btn-lg">{label} <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}
