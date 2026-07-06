export const navItems = [
  ["Platform", "/platform"],
  ["Products", "/products"],
  ["Research", "/research"],
  ["Client Workspace", "/client-workspace"],
  ["Contact", "/contact"],
];

export const externalLinks = {
  clientWorkspace: "/client-workspace",
  terminal: "https://fsaimarketterminal32440.z13.web.core.windows.net/terminal/",
  privateProductIntelligence:
    "https://fsaifrontend30919.z13.web.core.windows.net/cpdim/index.html",
  deliverables: "/client-workspace",
};

export const capabilities = [
  "Consumer harm intelligence",
  "Narrative-first regulatory analytics",
  "Emerging risk detection",
  "Control failure identification",
  "Secure client workspaces",
  "Azure-native deployment",
];

export const products = [
  {
    name: "Financial Services AI",
    status: "Enterprise platform",
    href: "/products#financial-services-ai",
    summary:
      "A consumer harm intelligence platform for financial institutions that need earlier visibility into emerging harm, regulatory exposure, and control failures.",
  },
  {
    name: "Consumer Financial Market Terminal",
    status: "Live terminal",
    href: externalLinks.terminal,
    summary:
      "A secure terminal experience for market discovery, financial context, and AI-assisted research across consumer finance.",
  },
  {
    name: "Private Product Intelligence",
    status: "Secure deliverable",
    href: "/client-workspace",
    summary:
      "A proprietary client deliverable for product discovery, market structure, category signals, and competitive intelligence.",
  },
  {
    name: "Future Enterprise Products",
    status: "Roadmap",
    href: "/products#future-enterprise-products",
    summary:
      "Future enterprise-grade systems for applied AI, secure delivery, and domain-specific operating layers.",
  },
];
