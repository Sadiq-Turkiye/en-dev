import Icon from "../Icon.jsx";
import { CONTACT } from "../../data/contact.js";

export default function DirectChannels() {
  return (
    <aside className="direct" aria-labelledby="directTitle">
      <h2 id="directTitle">Prefer to reach out directly?</h2>
      <p className="muted">Pick whichever channel suits you.</p>

      <a className="channel" href={CONTACT.phoneHref}>
        <div className="channel-icon"><Icon name="phone" /></div>
        <div className="channel-body">
          <span className="channel-label">Phone</span>
          <span className="channel-value">{CONTACT.phone}</span>
        </div>
      </a>

      <a className="channel channel-whatsapp" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
        <div className="channel-icon"><Icon name="whatsapp" /></div>
        <div className="channel-body">
          <span className="channel-label">WhatsApp</span>
          <span className="channel-value">Chat with us</span>
        </div>
        <Icon name="external" className="ext" />
      </a>

      <a className="channel" href={`mailto:${CONTACT.email}`}>
        <div className="channel-icon"><Icon name="mail" /></div>
        <div className="channel-body">
          <span className="channel-label">Email</span>
          <span className="channel-value">{CONTACT.email}</span>
        </div>
      </a>

      <a className="channel" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
        <div className="channel-icon"><Icon name="linkedin" /></div>
        <div className="channel-body">
          <span className="channel-label">LinkedIn</span>
          <span className="channel-value">Follow our updates</span>
        </div>
        <Icon name="external" className="ext" />
      </a>
    </aside>
  );
}
