// Small inline icon set (stroke icons, inherit currentColor)
const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  external: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M20 6 9 17l-5-5" />,
  message: <><path d="M4 5h16v11H8l-4 4z" /><path d="M8 9h8M8 12h5" /></>,
  route: <><circle cx="5" cy="12" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="19" cy="18" r="2" /><path d="M7 12h4l6-6M11 12l6 6" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m20 20-4.9-4.9" /></>,
  investor: <><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></>,
  owner: <><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /></>,
  partner: <><circle cx="8" cy="8" r="3" /><circle cx="16" cy="8" r="3" /><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6M12 15.5c1-1 2.4-1.5 4-1.5 3.3 0 6 2.7 6 6" /></>,
  other: <><circle cx="12" cy="12" r="9" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></>,
  whatsapp: <><path d="M3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 7.9 19.3z" /><path d="M9 8.6c0 3.4 2.9 6.4 6.4 6.4l.9-1.5-1.9-.9-.9.8c-1-.4-2.1-1.5-2.5-2.5l.8-.9-.9-1.9z" /></>,
  copy:<><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
  factory: <><path d="M3 21V10l5 3V10l5 3V10l5 3V4h3v17z" /><path d="M7 17h2M12 17h2" /></>,
  bolt: <path d="M13 3 5 14h6l-1 7 8-11h-6z" />,
  cog: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>,
  coins: <><ellipse cx="9" cy="7" rx="6" ry="3" /><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7" /><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  battery: <><rect x="2" y="7" width="18" height="10" rx="2" /><path d="M22 11v2M6 10v4M10 10v4M14 10v4" /></>,
  wind: <><path d="M12 10v11M9 21h6" /><circle cx="12" cy="9" r="1.4" /><path d="M12 7.6V2.5M13.2 9.7l4.4 2.6M10.8 9.7l-4.4 2.6" /></>,
  leaf: <><path d="M5 20c0-9 5-15 15-15 0 10-6 15-14 15" /><path d="M5 20c3-4 6-7 10-9" /></>,
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  gauge: <><path d="M4 18a8 8 0 1 1 16 0" /><path d="m12 14 4-5" /><circle cx="12" cy="14" r="1.2" /></>,
  plug: <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0zM12 17v4" />,
  layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 13 9 5 9-5" /></>,
  cpu: <><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></>,
  flame: <path d="M12 21c-4 0-6-2.7-6-6 0-4 3-6 4-10 2 2 3 3.5 3 6 1-1 1.5-2 1.5-3 2 2 3.5 4.2 3.5 7 0 3.3-2 6-6 6z" />,
};

export const ICON_PATHS = PATHS;

export default function Icon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
