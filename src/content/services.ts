export const services = {
  loja: [
    {
      slug: "lp-essencial",
      titulo: "Landing Page Essencial",
      descricao: "One-page otimizada para captação e SEO técnico básico.",
      features: [
        "Design responsivo e moderno",
        "Formulário de contato integrado",
        "Analytics básico configurado",
        "SEO técnico otimizado",
        "Velocidade de carregamento otimizada",
      ],
      preco: "A partir de R$ 1.500",
    },
    {
      slug: "lp-pro",
      titulo: "Landing Page Pro",
      descricao: "Mais seções, testes A/B simples e tags de conversão.",
      features: [
        "Todas as features da LP Essencial",
        "Testes A/B simples",
        "Integrações avançadas (CRM, Email Marketing)",
        "Relatórios de conversão detalhados",
        "Suporte técnico por 30 dias",
      ],
      preco: "A partir de R$ 2.500",
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
        "Backup automático",
        "Relatórios mensais de status",
      ],
      preco: "A partir de R$ 300/mês",
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
      preco: "A partir de R$ 800",
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
      preco: "A partir de R$ 1.200/mês",
    },
  ],
  engenharia: [
    {
      slug: "projeto-fv",
      titulo: "Projeto Fotovoltaico",
      descricao: "Dimensionamento, memorial, ART e homologação.",
      features: [
        "Estudo de viabilidade técnica",
        "Dimensionamento do sistema",
        "Memorial descritivo completo",
        "ART (Anotação de Responsabilidade Técnica)",
        "Documentação para homologação",
      ],
      preco: "A partir de R$ 800",
    },
    {
      slug: "projeto-eletrico",
      titulo: "Projeto Elétrico",
      descricao: "Projeto elétrico com conformidade normativa.",
      features: [
        "Projeto elétrico residencial/comercial",
        "Conformidade com NBR 5410",
        "Cálculos de carga e dimensionamento",
        "Esquemas unifilares",
        "Especificação de materiais",
      ],
      preco: "A partir de R$ 600",
    },
  ],
};

export type Service = {
  slug: string;
  titulo: string;
  descricao: string;
  features: string[];
  preco: string;
};
