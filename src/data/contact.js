// Contact details and form options — single source of truth for the site.

export const CONTACT = {
  phone: "+90 212 497 09 82",
  phoneHref: "tel:+902124970982",
  email: "info@naukaplan.com",
  // WhatsApp: placeholder uses the office number — replace with the real WhatsApp number (digits only, with country code)
  whatsappHref: "https://wa.me/902124970982",
  linkedin:"https://www.linkedin.com/company/naukaplan/",
  city: "Istanbul, Türkiye",
  coords: "41.0082° N · 28.9784° E",
  // Google Maps embed (no API key required). Replace the query with the exact office address when available.
  mapEmbed: "https://maps.google.com/maps?q=41.0082,28.9784&z=12&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=41.0082,28.9784",
};

export const PERSONAS = [
  { value: "investor", label: "Investor", hint: "Explore opportunities", reason: "Investment opportunity" },
  { value: "owner", label: "Project owner", hint: "Develop a project", reason: "New project" },
  { value: "partner", label: "Partner", hint: "Work together", reason: "Partnership" },
  { value: "other", label: "Other", hint: "General question", reason: null },
];

export const REASONS = ["Investment opportunity", "Tender", "New project", "Partnership", "Technical support"];

export const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/portfolio", label: "Our Portfolio" },
  { to: "/contact", label: "Contact Us" },
];
