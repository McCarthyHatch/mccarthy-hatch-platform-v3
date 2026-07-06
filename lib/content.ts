export const navItems = [
  ["Platform", "/platform"],
  ["Products", "/products"],
  ["Research", "/research"],
  ["Client Workspace", "/client-workspace"],
  ["Contact", "/contact"],
];

export const externalLinks = {
  clientWorkspace: "/client-workspace#workspace-gate",
  terminal: "https://fsaimarketterminal32440.z13.web.core.windows.net/terminal/",
  cpdim: "https://fsaifrontend30919.z13.web.core.windows.net/cpdim/index.html",
  deliverables: "/client-workspace#deliverables-gate",
};

export const capabilities = [
  "Enterprise AI systems",
  "Secure client workspaces",
  "Research-grade model workflows",
  "Financial and product intelligence",
  "Delivery operations",
  "Azure-native deployment",
];

export const products = [
  {
    name: "Financial Services AI",
    status: "Active development",
    href: "/products#financial-services-ai",
    summary:
      "Decision intelligence for financial institutions that need governed models, auditable workflows, and fast market response.",
  },
  {
    name: "Consumer Financial Market Terminal",
    status: "Live terminal",
    href: externalLinks.terminal,
    summary:
      "A secure terminal experience for market discovery, financial context, and AI-assisted research across consumer finance.",
  },
  {
    name: "Consumer Product Discovery Intelligence Model (CPDIM)",
    status: "Live product",
    href: externalLinks.cpdim,
    summary:
      "A product intelligence model for discovering demand, positioning, competitors, pricing, and category movement.",
  },
  {
    name: "Future Enterprise Products",
    status: "Roadmap",
    href: "/products#future-enterprise-products",
    summary:
      "Future enterprise-grade systems for applied AI, secure delivery, and domain-specific operating layers.",
  },
];
