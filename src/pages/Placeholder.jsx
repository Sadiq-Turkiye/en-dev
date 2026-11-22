import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";

// Temporary page shell until each page is designed.
export default function Placeholder({ num, title, text }) {
  useEffect(() => {
    document.title = `${title} | EN-DEV`;
  }, [title]);

  return (
    <section className="hero placeholder">
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="container">
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        <Link to="/contact" className="btn btn-primary btn-lg">Contact us <Icon name="arrow" /></Link>
      </div>
    </section>
  );
}
