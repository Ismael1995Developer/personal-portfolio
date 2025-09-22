export type Testimonial = {
  id: string;
  nome: string;
  cargo: string;
  empresa: string;
  depoimento: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    nome: "Maria Silva",
    cargo: "CEO",
    empresa: "TechStart",
    depoimento:
      "O José desenvolveu nossa landing page em tempo recorde. A conversão aumentou 40% em apenas 2 semanas. Profissional excepcional!",
  },
  {
    id: "2",
    nome: "João Santos",
    cargo: "Diretor de Marketing",
    empresa: "Digital Solutions",
    depoimento:
      "Excelente trabalho na gestão das nossas campanhas de Google Ads. ROI aumentou 60% e custo por aquisição caiu pela metade.",
  },
  {
    id: "3",
    nome: "Ana Costa",
    cargo: "Proprietária",
    empresa: "Energia Solar Plus",
    depoimento:
      "Projeto fotovoltaico impecável! José entregou toda documentação necessária e o sistema está funcionando perfeitamente há 2 anos.",
  },
  {
    id: "4",
    nome: "Carlos Oliveira",
    cargo: "CTO",
    empresa: "Inovação Tech",
    depoimento:
      "Código limpo, documentação completa e suporte excepcional. José é o desenvolvedor que toda empresa precisa ter.",
  },
  {
    id: "5",
    nome: "Lucia Fernandes",
    cargo: "Gerente de Projetos",
    empresa: "Construções Modernas",
    depoimento:
      "Projeto elétrico detalhado e dentro do prazo. José domina tanto a parte técnica quanto a documentação normativa.",
  },
];
