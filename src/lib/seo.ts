import { type Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://ismael-correia.dev"),
  title: "José Ismael Correia — Desenvolvedor Front-end & Engenheiro",
  description:
    "Desenvolvedor Front-end especializado em JavaScript, TypeScript, React e Next.js. Serviços: Landing Pages, Manutenção de Sites, Marketing Digital (Google/Meta Ads) e Projetos Fotovoltaicos/Elétricos.",
  keywords: [
    "desenvolvedor front-end",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "landing page",
    "marketing digital",
    "Google Ads",
    "Meta Ads",
    "projeto fotovoltaico",
    "projeto elétrico",
    "desenvolvimento web",
    "SEO",
    "performance web",
  ],
  authors: [{ name: "José Ismael Correia" }],
  creator: "José Ismael Correia",
  publisher: "José Ismael Correia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ismael-correia.dev",
    title: "José Ismael Correia — Desenvolvedor Front-end & Engenheiro",
    description:
      "Desenvolvedor Front-end especializado em JavaScript, TypeScript, React e Next.js. Serviços: Landing Pages, Manutenção de Sites, Marketing Digital e Projetos Fotovoltaicos/Elétricos.",
    siteName: "José Ismael Correia - Portfólio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "José Ismael Correia - Desenvolvedor Front-end",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "José Ismael Correia — Desenvolvedor Front-end & Engenheiro",
    description:
      "Desenvolvedor Front-end especializado em JavaScript, TypeScript, React e Next.js. Serviços: Landing Pages, Manutenção de Sites, Marketing Digital e Projetos Fotovoltaicos/Elétricos.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "José Ismael Correia",
  jobTitle: "Desenvolvedor Front-end & Engenheiro",
  description:
    "Desenvolvedor Front-end especializado em JavaScript, TypeScript, React e Next.js. Também atuo com Marketing Digital e Projetos Fotovoltaicos/Elétricos.",
  url: "https://ismael-correia.dev",
  sameAs: [
    "https://github.com/ismael-correia",
    "https://linkedin.com/in/ismael-correia",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "MongoDB",
    "Marketing Digital",
    "Google Ads",
    "Meta Ads",
    "Projetos Fotovoltaicos",
    "Projetos Elétricos",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Desenvolvedor Front-end",
    description:
      "Desenvolvimento de aplicações web modernas com foco em performance e conversão",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Uniftec",
      description: "Análise e Desenvolvimento de Sistemas",
    },
    {
      "@type": "EducationalOrganization",
      name: "Uniftec",
      description: "Eletrotécnica",
    },
  ],
};
