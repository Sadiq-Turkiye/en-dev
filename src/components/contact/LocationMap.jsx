import Icon from "../Icon.jsx";
import { CONTACT } from "../../data/contact.js";

// Google Map aligned to the page's content width, with a floating location card.
export default function LocationMap() {
  return (
    <section className="map-section" aria-label="Our location">
      <div className="container">
        <div className="map-box">
          <iframe
            className="map-frame"
            title={`Map of ${CONTACT.city}`}
            src={CONTACT.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-card">
            <span className="channel-label">Location</span>
            <strong>{CONTACT.city}</strong>
            <span className="coords">{CONTACT.coords}</span>
            <a className="loc-link" href={CONTACT.mapLink} target="_blank" rel="noopener noreferrer">
              Open in Google Maps <Icon name="external" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
