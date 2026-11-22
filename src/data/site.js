// Page content for Home, About and Portfolio — edit copy here rather than in the page components.

export const ONE_LINER = "EN-DEV develops industrial assets into investable energy-transition opportunities.";

export const DEFINITION =
  "EN-DEV is an Industrial Energy Transition & Asset Development platform that identifies underperforming, underutilized or energy-intensive industrial assets, integrates energy transition and industrial optimization opportunities, develops them into bankable projects, connects them with capital, and selectively retains development economics and ownership.";

export const AMBITION =
  "To become an industrial energy-transition development and investment platform connecting underperforming or energy-intensive industrial assets with technology, renewable energy, capital and strategic transformation.";

// Value proposition: from -> to
export const TRANSFORM = {
  from: ["Underperforming", "Underutilized", "Energy-exposed"],
  to: ["Optimized", "Lower energy cost", "Lower carbon", "Investable"],
};

// The two sides EN-DEV brings together
export const AUDIENCES = [
  {
    key: "owner",
    icon: "owner",
    kind: "Project owners",
    title: "You own an industrial asset with a problem worth solving.",
    text: "Our ideal partner is an industrial owner whose asset has an energy, operational, capital or strategic problem that can be solved through integrated development. You don't need to be an energy company.",
    points: ["Energy-intensive manufacturers", "Owners of brownfield or underused sites", "Companies facing decarbonization pressure"],
    cta: { label: "Bring us an asset", to: "/contact?as=owner" },
  },
  {
    key: "investor",
    icon: "investor",
    kind: "Investors",
    title: "You want mature, de-risked industrial energy projects.",
    text: "We bring opportunities to capital once they are technically and commercially developed: feasibility done, permitting strategy set, financing structure prepared.",
    points: ["Infrastructure funds & private equity", "Strategic & industrial investors", "Banks, project-finance lenders & family offices"],
    cta: { label: "Explore opportunities", to: "/contact?as=investor" },
  },
];

// The 7-step development process
export const PROCESS = [
  {
    title: "Origination",
    text: "Find an industrial company, asset or opportunity.",
    items: ["Industrial owners", "Banks & investors", "M&A advisors", "Municipalities", "Developers", "Energy & engineering companies"],
  },
  {
    title: "Industrial & energy diagnostic",
    text: "Understand the asset and where its value is being lost.",
    items: ["Asset condition", "Energy consumption & costs", "Available land", "Renewable potential", "Infrastructure", "Operational problems"],
  },
  {
    title: "Opportunity identification",
    text: "Identify the value-creation opportunities.",
    items: ["Solar + BESS", "Electrification", "Modernization", "Brownfield redevelopment", "Asset restructuring"],
  },
  {
    title: "Pre-feasibility",
    text: "Build the preliminary business case.",
    items: ["Technical feasibility", "CAPEX & OPEX", "Revenues & payback", "Carbon reduction", "Risks", "Regulatory requirements"],
  },
  {
    title: "Development",
    text: "If attractive, develop the opportunity further.",
    items: ["Technical & grid studies", "Permitting strategy", "Land analysis", "Supplier selection", "EPC strategy", "Financing structure"],
  },
  {
    title: "Capital introduction",
    text: "Once mature, bring in the right capital.",
    items: ["Infrastructure funds", "Private equity", "Strategic investors", "Banks & project-finance lenders", "Family offices", "Institutional capital"],
  },
  {
    title: "Execution & investment",
    text: "Take the project to realization under the model that fits.",
    items: ["Development fee", "Success fee", "Equity", "Co-investment", "Asset acquisition"],
  },
];

// About: what EN-DEV combines
export const PILLARS = [
  { icon: "factory", title: "Industrial", items: ["Operational optimization", "Brownfield analysis", "Industrial modernization"] },
  { icon: "bolt", title: "Energy", items: ["Renewable generation", "Battery energy storage (BESS)", "Electrification"] },
  { icon: "cog", title: "Technical", items: ["Engineering", "Feasibility studies", "Digitalization", "Energy modelling"] },
  { icon: "coins", title: "Financial", items: ["CAPEX modelling", "Financial modelling", "Project finance", "Investor preparation"] },
  { icon: "compass", title: "Strategic", items: ["Asset restructuring", "Investment strategy"] },
];

export const DISCIPLINES = [
  "Energy transition development", "Infrastructure development", "Industrial asset optimization",
  "Renewable energy development", "Energy as an industrial input", "Brownfield development",
  "Corporate & asset restructuring", "Project development", "Project finance", "Strategic investment",
];

export const NOT_LIST = ["An engineering consultancy", "An ESCO", "A renewable-energy developer", "An infrastructure fund"];

// Companies behind the EN-DEV platform
export const MEMBERS = ["Naukaplan", "WindThink", "ERK Dynamics", "Thinkmetric"];

export const MODELS = [
  { title: "Development fee", text: "EN-DEV develops the project and receives a fee." },
  { title: "Success fee", text: "Compensation when financing, transaction or execution occurs." },
  { title: "Equity", text: "EN-DEV retains an equity stake in the project." },
  { title: "Development + equity", text: "Development economics plus retained project ownership." },
  { title: "Co-investment", text: "EN-DEV invests alongside institutional or strategic capital." },
  { title: "Asset acquisition", text: "Where attractive, EN-DEV acquires the industrial asset itself." },
];

// Portfolio: focus areas and the parties EN-DEV connects
export const FOCUS = [
  { icon: "bolt", title: "Energy", text: "Renewables, storage & electrification" },
  { icon: "factory", title: "Industrial infrastructure", text: "Modernizing and repurposing industrial sites" },
  { icon: "leaf", title: "Sustainable technologies", text: "Lower-carbon, future-ready assets" },
];

export const CONNECT = [
  { icon: "owner", label: "Project owners" },
  { icon: "cpu", label: "Technology providers" },
  { icon: "cog", label: "Engineering specialists" },
  { icon: "investor", label: "Investors" },
];

// Portfolio: what we look for
export const SIGNALS = [
  { icon: "flame", label: "High energy costs" },
  { icon: "plug", label: "Outdated energy infrastructure" },
  { icon: "factory", label: "Underused or distressed sites" },
  { icon: "leaf", label: "Decarbonization pressure" },
  { icon: "sun", label: "Renewable potential" },
  { icon: "battery", label: "Storage (BESS) potential" },
  { icon: "bolt", label: "Electrification" },
  { icon: "cog", label: "Modernization needs" },
  { icon: "coins", label: "Restructuring & capital" },
];

export const TARGET_ASSETS = [
  {
    tag: "A", icon: "factory",
    title: "Existing industrial companies",
    text: "Especially energy-intensive, Mittelstand-type companies.",
    chips: ["Cement", "Metals", "Chemicals"],
  },
  {
    tag: "B", icon: "layers",
    title: "Brownfield industrial assets",
    text: "Sites whose existing infrastructure can be given a new life.",
    chips: ["Underutilized factories", "Obsolete facilities", "Distressed assets"],
  },
  {
    tag: "C", icon: "gauge",
    title: "Energy-intensive industrial sites",
    text: "Where energy is a material part of operating costs.",
    chips: ["High energy costs", "Heat-intensive processes", "Large power demand"],
  },
  {
    tag: "D", icon: "pin",
    title: "Industrial land with energy potential",
    text: "Land that already has what new energy projects need.",
    chips: ["Grid connection", "Renewable potential", "Existing infrastructure"],
  },
];

const L = {
  solar: { label: "Solar", icon: "sun" },
  bess: { label: "BESS", icon: "battery" },
  optim: { label: "Energy optimization", icon: "gauge" },
  modern: { label: "Factory modernization", icon: "cog" },
  electr: { label: "Electrification", icon: "bolt" },
  brown: { label: "Brownfield acquisition", icon: "factory" },
  renew: { label: "Renewable integration", icon: "wind" },
  restr: { label: "Asset restructuring", icon: "layers" },
  infra: { label: "New energy infrastructure", icon: "plug" },
  site: { label: "Industrial site", icon: "factory" },
  gen: { label: "Renewable generation", icon: "wind" },
  store: { label: "Storage", icon: "battery" },
  tenant: { label: "New tenant / production use", icon: "owner" },
};

export const STRUCTURES = [
  [L.solar, L.bess, L.optim],
  [L.modern, L.electr],
  [L.brown, L.renew],
  [L.restr, L.infra],
  [L.site, L.gen, L.store, L.tenant],
];

// Countries shown on the portfolio map (geometry lives in mapGeometry.js)
export const COUNTRY_REGIONS = {
  "United Kingdom": "Western Europe",
  Spain: "Southern Europe",
  Italy: "Southern Europe",
  Poland: "Central Europe",
  Hungary: "Central Europe",
  Serbia: "Southeast Europe",
  "Türkiye": "Europe & Asia",
  Kazakhstan: "Central Asia",
};
