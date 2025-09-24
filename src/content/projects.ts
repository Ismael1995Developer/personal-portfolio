export type Project = {
  slug: string;
  titulo: string;
  resumo: string;
  stack: string[];
  imagem?: string;
  github?: string;
  demo?: string;
  resultado?: string;
};

export const projects: Project[] = [
  {
    slug: "ultratech-sistemas",
    titulo: "UltraTech Sistemas",
    resumo:
      "Sistema de gestão empresarial completo com módulos de vendas, estoque, financeiro e relatórios.",
    stack: [
      "Next.js",
      "React",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "TypeScript",
      "SEO",
    ],
    imagem: "/projetos/ultratech-sistemas.PNG",
    demo: "https://www.ultratechsistemas.com.br",
    resultado: "Sistema em produção com 50+ usuários ativos",
  },
  {
    slug: "karine-paulino-advocacia",
    titulo: "Karine Paulino Advocacia",
    resumo:
      "Site institucional para escritório de advocacia com design moderno e formulários de contato otimizados.",
    stack: [
      "Next.js",
      "React",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "TypeScript",
      "SEO",
    ],
    imagem: "/projetos/karine-advocacia.svg",
    demo: "https://karinepaulinoadvocacia.com.br",
    resultado: "Aumento de 200% nas consultas online",
  },
  {
    slug: "emagreca-comigo",
    titulo: "Emagreça Comigo",
    resumo:
      "Landing page para programa de emagrecimento com foco em conversão e engajamento do usuário.",
    stack: [
      "Next.js",
      "React",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "TypeScript",
      "SEO",
    ],
    imagem: "/projetos/emagreca-comigo.webp",
    demo: "https://www.emagrecacomigo.com.br",
    resultado: "Taxa de conversão 15% e alta retenção",
  },
  {
    slug: "portfolio-nextjs",
    titulo: "Portfólio Next.js",
    resumo:
      "Portfólio pessoal desenvolvido com Next.js 15, TypeScript e Tailwind CSS com foco em performance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
    imagem: "/projetos/portfolio-nextjs.svg",
    demo: "https://ismael-correia.dev",
    resultado: "Performance 100 no Lighthouse",
  },
  {
    slug: "sistema-gestao-vendas",
    titulo: "Sistema de Gestão de Vendas",
    resumo:
      "Sistema web para controle de vendas, clientes e relatórios com dashboard interativo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
    imagem: "/projetos/sistema-vendas.svg",
    demo: "https://demo-sistema-vendas.ismael-correia.dev",
    resultado: "Redução de 60% no tempo de gestão",
  },
  {
    slug: "landing-page-conversao",
    titulo: "Landing Page de Alta Conversão",
    resumo:
      "Landing page otimizada para conversão com formulários inteligentes e design responsivo.",
    stack: ["JavaScript", "Tailwind CSS", "TypeScript"],
    imagem: "/projetos/landing-conversao.svg",
    demo: "https://demo-landing-conversao.ismael-correia.dev",
    resultado: "Taxa de conversão 25% acima da média",
  },
];
