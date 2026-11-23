import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import { PROCESS } from "../data/site.js";

export default function DevelopmentProcess() {
  const [active, setActive] = useState(0);
  const step = PROCESS[active];
  return (
    <div className="development-process">
      <ol className="development-stages" aria-label="Explore the development stages">
        {PROCESS.map((item, index) => (
          <li key={item.title}>
            <button type="button" aria-pressed={active === index} aria-controls="development-detail" onClick={() => setActive(index)}>
              <span className="development-number">{String(index + 1).padStart(2, "0")}</span><span>{item.title}</span><Icon name="arrow" />
            </button>
          </li>
        ))}
      </ol>
      <div className="development-detail" id="development-detail" role="region" aria-label="Selected development stage" aria-live="polite" aria-atomic="true">
        <div className="development-detail-copy" key={active}>
          <p className="eyebrow">Stage {String(active + 1).padStart(2, "0")} / {String(PROCESS.length).padStart(2, "0")}</p>
          <h3>{step.title}</h3>
          <p className="development-description">{step.text}</p>
          <ul className="ticks">{step.items.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
        </div>
        <div className="development-detail-footer">
          <p>Start with your asset. We’ll help define the next step.</p>
          <Link to="/contact?as=owner#enquiry" className="loc-link">Talk about your project <Icon name="arrow" /></Link>
        </div>
      </div>
    </div>
  );
}
