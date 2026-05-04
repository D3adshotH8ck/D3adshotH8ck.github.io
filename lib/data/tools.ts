export interface Tool {
  id: string;
  title: string;
  tag?: string;
  tagColor?: "red" | "cyan";
  description: string;
  stack: string[];
  href: string;
  docsHref?: string;
  featured?: boolean;
  bgVariant?: "particles" | "grid" | "plain";
}

export const tools: Tool[] = [
  {
    id: "01",
    title: "D3adphish",
    tag: "[ RED TEAM TOOL ]",
    tagColor: "red",
    description:
      "GoPhish fork engineered to strip every detectable fingerprint — X-Mailer headers, tracking params, session cookies, server identifiers. One binary, zero traces. For authorized engagements only.",
    stack: ["Go", "GoPhish", "SQLite", "Linux"],
    href: "https://github.com/D3adshotH8ck/D3adphish",
    featured: true,
    bgVariant: "particles",
  },
  {
    id: "02",
    title: "OwlSec Tool",
    tag: "[ RECON SUITE ]",
    tagColor: "cyan",
    description:
      "Terminal-based recon suite built for the OwlSec community. WHOIS lookups, three Nmap scan profiles, passive/active subdomain enumeration via Subfinder & Amass, live host detection with HTTPX, and JS secret extraction — all from one interactive menu.",
    stack: ["Python 3", "Nmap", "Subfinder", "Amass", "HTTPX"],
    href: "https://github.com/D3adshotH8ck/owlsec-tool",
    bgVariant: "grid",
  },
  {
    id: "03",
    title: "More on GitHub →",
    tag: "[ EXPLORE ]",
    tagColor: "cyan",
    description: "All public repos, tools, and experiments.",
    stack: [],
    href: "https://github.com/D3adshotH8ck",
    bgVariant: "plain",
  },
];
