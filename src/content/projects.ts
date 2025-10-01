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
    imagem: "/projetos/ultratech-sistemas.png",
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
    imagem: "/projetos/advkarinepaulino.png",
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
    slug: "Caminhos da fé",
    titulo: "Caminhos da fé",
    resumo: "ecoomerce de produtos religiosos com foco em performance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
    imagem: "/projetos/caminhosdafe.png",
    demo: "https://caminhos-da-fe.vercel.app/",
    resultado: "Taxa de conversão 15% e alta retenção",
  },
  {
    slug: "sistema-barbearia",
    titulo: "Sistema de Barbearia",
    resumo:
      "Sistema completo para gestão de barbearia com agendamentos, controle de clientes, vendas e relatórios financeiros.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
    imagem: "/projetos/sistema-vendas.svg",
    demo: "https://demo-sistema-vendas.ismael-correia.dev",
    resultado: "Redução de 60% no tempo de gestão",
  },
  {
    slug: "landing-page-beleza-feminina",
    titulo: "Landing Page Beleza Feminina",
    resumo:
      "Landing page especializada em produtos e serviços de beleza feminina com design elegante e foco em conversão.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "SEO"],
    imagem: "/projetos/landing-conversao.svg",
    demo: "https://demo-landing-conversao.ismael-correia.dev",
    resultado: "Taxa de conversão 25% acima da média",
  },
];
