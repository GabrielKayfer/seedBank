export const staticPages = {
  legal: {
    eyebrow: "Legal",
    title: "Legal page route created.",
    description:
      "Use this page for terms, privacy policies, and regulatory disclosures without mixing compliance content into the main landing experience.",
    primaryLabel: "View security",
    primaryHref: "/security",
  },
  licenses: {
    eyebrow: "Licenses",
    title: "Licenses route created for compliance references.",
    description:
      "This route is ready for partner licenses, open-source notices, and platform certifications that need a stable standalone URL.",
    primaryLabel: "View legal",
    primaryHref: "/legal",
  },
  security: {
    eyebrow: "Security",
    title: "Security route created for trust content.",
    description:
      "This page can host your security posture, infrastructure notes, audit statements, and protection controls in a dedicated path.",
    primaryLabel: "Check status",
    primaryHref: "/status",
  },
  careers: {
    eyebrow: "Careers",
    title: "Careers route created for hiring pages.",
    description:
      "This route gives you a clean place to plug in open roles, company culture content, and application flows without inflating the landing page.",
    primaryLabel: "Open support",
    primaryHref: "/support",
  },
  support: {
    eyebrow: "Support",
    title: "Support route created for customer help.",
    description:
      "This page can receive FAQ content, chat entry points, escalation forms, or operational support details behind a stable path.",
    primaryLabel: "Check status",
    primaryHref: "/status",
  },
  status: {
    eyebrow: "Status",
    title: "Status route created for service health updates.",
    description:
      "Use this route for uptime reports, incident communication, maintenance windows, and transparency around platform availability.",
    primaryLabel: "Open support",
    primaryHref: "/support",
  },
} as const;

export type StaticPageKey = keyof typeof staticPages;
