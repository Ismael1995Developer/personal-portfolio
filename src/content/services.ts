export const services = {
  desenvolvimento: [
    {
      slug: "lp-essencial",
      titulo: "Landing Page Essencial",
      descricao: "One-page otimizada para captação e SEO técnico básico.",
      features: [
        "Página única / seções: Hero, Serviços, Benefícios, Depoimentos, CTA",
        "Design responsivo e moderno",
        "Formulário de contato (envio por email) + reCAPTCHA",
        "Footer com Política de Privacidade, link de contato e link para redes sociais",
        "Robots.txt + sitemap + meta tags básicas",
        "HTTPS, compressão de imagens, lazy-loading",
        "Analytics básico (somente se cumprir cookie consent mínimo)",
        "SEO técnico otimizado (sem acesso a analytics)",
        "Velocidade de carregamento otimizada",
        "Certificado SSL",
      ],
      preco: "R$ 799,00",
      precoOriginal: "R$ 1.199,00",
      precoParcelado: "12x de R$ 66,58",
      condicaoPagamento: "Cartão",
      tecnologias: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      slug: "lp-pro",
      titulo: "Landing Page Pro",
      descricao: "Mais seções, testes A/B simples e tags de conversão.",
      features: [
        "Todas as features da LP Essencial",
        "Cookie banner com bloqueio de scripts até consentimento + registros",
        "Structured Data (Produto, LocalBusiness, FAQ)",
        "Página de Termos de Uso e política de devolução, FAQ detalhado",
        "Formulários avançados / formulários com tracking de conversão + eventos para GA4",
        "A/B testing simples (páginas de variação)",
        "Integração com CRM/Email Marketing (ex.: RD Station, Mailchimp, Zapier, etc.)",
        "Relatórios de conversão detalhados",
        "Otimização avançada de performance (CDN, critical CSS, tree-shaking)",
        "Suporte técnico por 30 dias",
        "+3 seções (Ex.: FAQ, Depoimentos, CTA)",
      ],
      preco: "R$ 2.299,00",
      precoOriginal: "R$ 3.399,00",
      precoParcelado: "12x de R$ 191,58",
      condicaoPagamento: "Cartão",
      tecnologias: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      slug: "manutencao",
      titulo: "Manutenção de Sites",
      descricao:
        "Atualizações, correções, monitoramento e melhorias contínuas.",
      features: [
        "Atualizações mensais de segurança",
        "Correções de bugs e problemas",
        "Monitoramento de performance",
        "Backups automáticos + verificação de integridade",
        "Relatórios mensais (vendas, visitas, taxa de conversão)",
      ],
      preco: "A partir de R$ 299,90/mês",
      tecnologias: ["Linux", "Windows", "Server", "Backup"],
    },
  ],
  marketing: [
    {
      slug: "setup-ads",
      titulo: "Setup de Campanhas",
      descricao: "Configuração de contas, pixels e primeiras campanhas.",
      features: [
        "Configuração de contas Google Ads e Meta Ads",
        "Instalação e configuração de pixels",
        "Criação de campanhas iniciais",
        "Configuração de conversões",
        "Treinamento básico para gestão",
      ],
      preco: "R$ 799,90",
      precoOriginal: "R$ 1.299,90",
      precoParcelado: "12x de R$ 66,66",
      condicaoPagamento: "Cartão",
    },
    {
      slug: "gestao-mensal",
      titulo: "Gestão Mensal de Anúncios",
      descricao: "Otimização contínua e relatórios de performance.",
      features: [
        "Otimização semanal de campanhas",
        "Criação de novos anúncios",
        "Análise de performance e ROI",
        "Relatórios mensais detalhados",
        "Ajustes baseados em dados",
      ],
      preco: "R$ 1.199,90/mês",
      precoOriginal: "R$ 1.199,90/mês",
      condicaoPagamento: "PIX",
      descontoAnual: "10% desconto no pagamento anual",
      precoAnual: "R$ 1.079,91/mês",
    },
  ],
  engenharia: [
    {
      slug: "projeto-fv Fast Track",
      titulo: "Projeto Fotovoltaico",
      descricao: "Dimensionamento, memorial, ART e homologação.",
      features: [
        "Estudo de viabilidade técnica",
        "Dimensionamento do sistema",
        "Memorial descritivo completo",
        "ART (Anotação de Responsabilidade Técnica)",
        "Documentação para homologação",
      ],
      preco: "A partir de R$ 499,00",
    },
    {
      slug: "projeto-eletrico Residência compacta (até 80 m²)",
      titulo: "Projeto Elétrico",
      descricao: "Projeto elétrico com conformidade normativa.",
      features: [
        "Projeto elétrico residencial/comercial",
        "Conformidade com NBR 5410",
        "Cálculos de carga e dimensionamento",
        "Esquemas unifilares",
        "Especificação de materiais",
      ],
      preco: "A partir de R$ 1200,00 ",
    },
  ],
};

export type Service = {
  slug: string;
  titulo: string;
  descricao: string;
  features: string[];
  preco: string;
  precoOriginal?: string;
  precoParcelado?: string;
  condicaoPagamento?: string;
  descontoAnual?: string;
  precoAnual?: string;
  tecnologias?: string[];
};
