export interface Capability {
  id: string;
  title: string;
  description: string;
  techniques: string[];
  accentColor: "cyan" | "red";
}

export const capabilities: Capability[] = [
  {
    id: "01",
    title: "Web App Pentesting",
    description: "Full-scope web application assessments targeting authentication, authorization, and business logic , the bugs that scanners miss.",
    accentColor: "cyan",
    techniques: [
      "IDOR chain exploitation",
      "Business logic bypass",
      "SSRF & blind SSRF",
      "Stored & DOM XSS",
      "HTTP request smuggling",
      "File upload bypass",
      "Insecure deserialization",
      "Race condition attacks",
      "JWT algorithm confusion",
    ],
  },
  {
    id: "02",
    title: "Social Engineering",
    description: "Human-layer attack simulation. Pretexting, persona building, and OSINT-driven targeting to expose the weakest link in any organization.",
    accentColor: "red",
    techniques: [
      "Pretexting & persona building",
      "OSINT-driven targeting",
      "Vishing simulation",
      "Authority & urgency manipulation",
      "Callback phishing",
      "LinkedIn reconnaissance",
      "Physical security bypass",
      "USB drop campaigns",
      "Impersonation attacks",
      "Trust exploitation chains",
    ],
  },
  {
    id: "03",
    title: "Phishing Campaign Specialist",
    description: "End-to-end phishing simulation using D3adphish , fingerprint-stripped, fully authorized, and built to test real-world defences.",
    accentColor: "cyan",
    techniques: [
      "D3adphish framework deployment",
      "Domain spoofing & typosquatting",
      "Evasion of email security filters",
      "SSL certs for phishing domains",
      "Credential harvesting pipelines",
      "Template design & A/B testing",
      "Tracking & open-rate metrics",
      "Spear phishing campaigns",
      "GoPhish hardening",
      "Post-campaign reporting",
    ],
  },
];
