"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/common/Button";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import {
  Check,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Monitor,
  Palette,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "basic" | "interaction" | "visual" | "conversion";
}

interface Page {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ExtraFeature {
  id: string;
  name: string;
  description: string;
  price: number;
}

const features: Feature[] = [
  // Funcionalidades Básicas
  {
    id: "responsive-design",
    name: "Design responsivo e moderno",
    description: "Layout adaptável para todos os dispositivos",
    price: 0,
    category: "basic",
  },
  {
    id: "contact-form",
    name: "Formulário de contato integrado",
    description: "Captura de leads com validação",
    price: 200,
    category: "basic",
  },
  {
    id: "crm-integration",
    name: "Integração CRM/Email Marketing",
    description: "Conecta com sua ferramenta de CRM",
    price: 400,
    category: "basic",
  },
  {
    id: "ab-testing",
    name: "Testes A/B",
    description: "Compare diferentes versões da página",
    price: 300,
    category: "basic",
  },
  {
    id: "performance-reports",
    name: "Relatórios mensais de performance",
    description: "Análise detalhada de métricas",
    price: 150,
    category: "basic",
  },
  {
    id: "auto-backup",
    name: "Backup automático",
    description: "Proteção dos seus dados",
    price: 100,
    category: "basic",
  },
  {
    id: "seo-optimization",
    name: "Otimização de SEO técnico",
    description: "Melhor posicionamento no Google",
    price: 250,
    category: "basic",
  },
  {
    id: "speed-optimization",
    name: "Velocidade de carregamento otimizada",
    description: "Página rápida e eficiente",
    price: 200,
    category: "basic",
  },

  // Funcionalidades de Interação
  {
    id: "whatsapp-button",
    name: "Botão flutuante do WhatsApp",
    description: "Atendimento direto via WhatsApp",
    price: 200,
    category: "interaction",
  },
  {
    id: "multi-step-form",
    name: "Formulário multi-etapas",
    description: "Maior taxa de conversão",
    price: 350,
    category: "interaction",
  },
  {
    id: "online-chat",
    name: "Chat online integrado",
    description: "Atendimento em tempo real",
    price: 500,
    category: "interaction",
  },
  {
    id: "auto-email",
    name: "Disparo de e-mail automático",
    description: "E-mail após cadastro",
    price: 200,
    category: "interaction",
  },
  {
    id: "online-scheduling",
    name: "Agendamento online",
    description: "Integração Google Calendar/Calendly",
    price: 400,
    category: "interaction",
  },
  {
    id: "interactive-sidebar",
    name: "Sidebar interativa",
    description: "Menu lateral com atalhos",
    price: 300,
    category: "interaction",
  },
  {
    id: "fixed-cta",
    name: "CTA fixo",
    description: "Botão sempre visível no scroll",
    price: 150,
    category: "interaction",
  },

  // Funcionalidades Visuais e UI/UX
  {
    id: "image-carousel",
    name: "Carrossel de imagens",
    description: "Galeria de imagens interativa",
    price: 250,
    category: "visual",
  },
  {
    id: "portfolio-gallery",
    name: "Galeria de portfólio/produtos",
    description: "Showcase dos seus trabalhos",
    price: 300,
    category: "visual",
  },
  {
    id: "scroll-animations",
    name: "Efeitos de scroll animados",
    description: "Animações suaves ao rolar",
    price: 400,
    category: "visual",
  },
  {
    id: "custom-icons",
    name: "Ícones customizados",
    description: "Ícones únicos para sua marca",
    price: 200,
    category: "visual",
  },
  {
    id: "dark-light-mode",
    name: "Dark/Light mode",
    description: "Alternância de tema",
    price: 300,
    category: "visual",
  },
  {
    id: "reusable-components",
    name: "Componentes reutilizáveis",
    description: "Cards, depoimentos, FAQs",
    price: 250,
    category: "visual",
  },
  {
    id: "interactive-map",
    name: "Mapa interativo",
    description: "Google Maps integrado",
    price: 200,
    category: "visual",
  },

  // Funcionalidades de Conversão
  {
    id: "lead-popup",
    name: "Pop-up de captura de leads",
    description: "Captura mais leads",
    price: 300,
    category: "conversion",
  },
  {
    id: "testimonials-area",
    name: "Área de depoimentos/clientes",
    description: "Social proof para conversão",
    price: 200,
    category: "conversion",
  },
  {
    id: "prominent-cta",
    name: "Call-to-Action em destaque",
    description: "CTAs otimizados para conversão",
    price: 150,
    category: "conversion",
  },
  {
    id: "segmented-landing",
    name: "Landing page segmentada",
    description: "Versões para diferentes produtos",
    price: 500,
    category: "conversion",
  },
  {
    id: "pixel-integration",
    name: "Integração com pixel",
    description: "Google/Meta Ads tracking",
    price: 200,
    category: "conversion",
  },
  {
    id: "heatmap-analysis",
    name: "Ferramenta de análise de calor",
    description: "Hotjar, Clarity integrados",
    price: 300,
    category: "conversion",
  },
];

const pages: Page[] = [
  {
    id: "landing-simples",
    name: "Landing Page simples",
    description: "Página única otimizada para conversão",
    price: 300,
  },
  {
    id: "lead-page",
    name: "Página de captura (Lead Page)",
    description: "Foco total na captura de leads",
    price: 400,
  },
  {
    id: "pagina-vendas",
    name: "Página de vendas",
    description: "Página completa para vendas online",
    price: 500,
  },
  {
    id: "pagina-obrigado",
    name: "Página de obrigado (Thank You)",
    description: "Página de confirmação pós-compra",
    price: 50,
  },
  {
    id: "pagina-institucional",
    name: "Página institucional (Sobre, Contato, etc.)",
    description: "Páginas institucionais personalizadas",
    price: 300,
  },
  {
    id: "pagina-servicos",
    name: "Página de serviços",
    description: "Showcase dos seus serviços",
    price: 350,
  },
  {
    id: "pagina-portfolio",
    name: "Página de portfólio",
    description: "Galeria dos seus trabalhos",
    price: 400,
  },
  {
    id: "pagina-agendamento",
    name: "Página de agendamento",
    description: "Sistema de agendamento online",
    price: 450,
  },
  {
    id: "pagina-depoimentos",
    name: "Página de depoimentos/cases",
    description: "Social proof e cases de sucesso",
    price: 300,
  },
  {
    id: "pagina-blog",
    name: "Página de blog (estrutura)",
    description: "Sistema de blog completo",
    price: 500,
  },
  {
    id: "pagina-produtos",
    name: "Página de produtos (mini catálogo)",
    description: "Catálogo de produtos online",
    price: 600,
  },
  {
    id: "pagina-faq",
    name: "Página de FAQ (Perguntas Frequentes)",
    description: "Central de dúvidas e respostas",
    price: 150,
  },
];

const extraFeatures: ExtraFeature[] = [
  {
    id: "seo-inicial",
    name: "SEO inicial na página",
    description: "Otimização básica para mecanismos de busca",
    price: 100,
  },
  {
    id: "formulario-customizado",
    name: "Formulário customizado",
    description: "Formulário personalizado com validações",
    price: 150,
  },
  {
    id: "integracao-crm",
    name: "Integração com ferramentas externas (CRM, email marketing)",
    description: "Conecta com suas ferramentas de marketing",
    price: 300,
  },
  {
    id: "animacoes-adicionais",
    name: "Animações adicionais",
    description: "Efeitos visuais e transições",
    price: 50,
  },
  {
    id: "versao-multilingue",
    name: "Versão multilíngue (por idioma)",
    description: "Suporte a múltiplos idiomas",
    price: 600,
  },
  {
    id: "google-analytics",
    name: "Configuração de Google Analytics",
    description: "Tracking completo de visitantes",
    price: 40,
  },
  {
    id: "whatsapp-flutuante",
    name: "Botão flutuante WhatsApp",
    description: "Atendimento direto via WhatsApp",
    price: 50,
  },
  {
    id: "popup-captura",
    name: "Popup de captura de e-mail",
    description: "Captura de leads com popup",
    price: 200,
  },
  {
    id: "recaptcha",
    name: "Configuração de reCAPTCHA",
    description: "Proteção contra spam",
    price: 200,
  },
  {
    id: "redes-sociais",
    name: "Integração com redes sociais",
    description: "Botões e feeds das redes sociais",
    price: 100,
  },
  {
    id: "card-grid-animado",
    name: "Card em grid animado",
    description: "Layout de cards com animações",
    price: 50,
  },
  {
    id: "barra-aviso",
    name: "Barra de aviso (banner fixo)",
    description: "Banner de promoções ou avisos",
    price: 70,
  },
  {
    id: "scroll-reveal",
    name: "Animação de rolagem (scroll reveal)",
    description: "Elementos aparecem conforme o scroll",
    price: 80,
  },
  {
    id: "galeria-fotos",
    name: "Galeria de fotos simples",
    description: "Galeria de imagens interativa",
    price: 150,
  },
  {
    id: "pagina-agradecimento",
    name: "Página de agradecimento (Obrigado!)",
    description: "Página de confirmação personalizada",
    price: 150,
  },
];

const maintenancePlans = [
  {
    id: "gold",
    name: "Plano Gold",
    description: "Até 3 alterações mensais + 3 criativos redes sociais",
    price: 600,
    features: [
      "Até 3 alterações mensais",
      "3 criativos para redes sociais",
      "Backup automático",
      "Suporte técnico",
    ],
    popular: false,
  },
  {
    id: "platinum",
    name: "Plano Platinum",
    description: "Até 6 alterações + monitoramento SEO básico + tráfego pago",
    price: 900,
    features: [
      "Até 6 alterações mensais",
      "Monitoramento SEO básico",
      "Tráfego pago Google Ads ou Meta Ads",
      "Backup automático",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    id: "ouro",
    name: "Plano Ouro",
    description: "Alterações ilimitadas + SEO avançado + tráfego pago completo",
    price: 1500,
    features: [
      "Alterações ilimitadas (dentro do bom senso)",
      "Relatórios de performance",
      "SEO avançado",
      "Tráfego pago Google Ads e Meta Ads",
      "Suporte VIP",
    ],
    popular: false,
  },
];

const basePlans = [
  {
    id: "start",
    name: "Landing Page Start",
    description: "One-page simples para presença digital básica",
    basePrice: 900,
    features: [
      "Estrutura básica de uma página (Home + CTA)",
      "Design responsivo simples",
      "Formulário de contato básico",
      "Integração com WhatsApp (link direto)",
      "Entrega rápida (2 a 3 dias úteis)",
    ],
    popular: false,
  },
  {
    id: "essential",
    name: "Landing Page Essencial",
    description: "One-page otimizada para captar leads",
    basePrice: 1500,
    features: [
      "Design responsivo e moderno",
      "Formulário de contato integrado",
      "Otimização de SEO técnico",
      "Velocidade de carregamento otimizada",
      "Backup automático",
    ],
    popular: true,
  },
  {
    id: "pro",
    name: "Landing Page Pro",
    description: "Mais seções, integrações e testes de conversão",
    basePrice: 2500,
    features: [
      "Todas as features da Essencial",
      "Testes A/B",
      "Relatórios mensais de performance",
      "Integração CRM/Email Marketing",
      "Suporte técnico por 30 dias",
    ],
    popular: false,
  },
];

export default function LandingPagePersonalizada() {
  const [selectedPlan, setSelectedPlan] = useState<string>("essential");
  const [customizationType, setCustomizationType] = useState<
    "none" | "base" | "full"
  >("base");
  const [selectedMaintenancePlan, setSelectedMaintenancePlan] =
    useState<string>("");
  const [wantsMaintenance, setWantsMaintenance] = useState<boolean>(false);
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set(),
  );
  const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set());
  const [selectedExtraFeatures, setSelectedExtraFeatures] = useState<
    Set<string>
  >(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(),
  );

  const toggleFeature = (featureId: string) => {
    const newSelected = new Set(selectedFeatures);
    if (newSelected.has(featureId)) {
      newSelected.delete(featureId);
    } else {
      newSelected.add(featureId);
    }
    setSelectedFeatures(newSelected);
  };

  const togglePage = (pageId: string) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(pageId)) {
      newSelected.delete(pageId);
    } else {
      newSelected.add(pageId);
    }
    setSelectedPages(newSelected);
  };

  const toggleExtraFeature = (featureId: string) => {
    const newSelected = new Set(selectedExtraFeatures);
    if (newSelected.has(featureId)) {
      newSelected.delete(featureId);
    } else {
      newSelected.add(featureId);
    }
    setSelectedExtraFeatures(newSelected);
  };

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const getSelectedFeaturesData = () => {
    return features.filter((feature) => selectedFeatures.has(feature.id));
  };

  const getSelectedPagesData = () => {
    return pages.filter((page) => selectedPages.has(page.id));
  };

  const getSelectedExtraFeaturesData = () => {
    return extraFeatures.filter((feature) =>
      selectedExtraFeatures.has(feature.id),
    );
  };

  const calculateTotal = () => {
    const basePrice =
      basePlans.find((plan) => plan.id === selectedPlan)?.basePrice || 0;

    // Se não quer customização, retorna apenas o preço base + manutenção
    if (customizationType === "none") {
      const maintenancePrice =
        wantsMaintenance && selectedMaintenancePlan
          ? maintenancePlans.find((plan) => plan.id === selectedMaintenancePlan)
              ?.price || 0
          : 0;
      return basePrice + maintenancePrice;
    }

    // Se quer customização completa (sem plano base), calcula apenas customizações
    if (customizationType === "full") {
      const featuresPrice = getSelectedFeaturesData().reduce(
        (sum, feature) => sum + feature.price,
        0,
      );
      const pagesPrice = getSelectedPagesData().reduce(
        (sum, page) => sum + page.price,
        0,
      );
      const extraFeaturesPrice = getSelectedExtraFeaturesData().reduce(
        (sum, feature) => sum + feature.price,
        0,
      );
      const maintenancePrice =
        wantsMaintenance && selectedMaintenancePlan
          ? maintenancePlans.find((plan) => plan.id === selectedMaintenancePlan)
              ?.price || 0
          : 0;
      return featuresPrice + pagesPrice + extraFeaturesPrice + maintenancePrice;
    }

    // Se quer customização com plano base, inclui todas as opções
    const featuresPrice = getSelectedFeaturesData().reduce(
      (sum, feature) => sum + feature.price,
      0,
    );
    const pagesPrice = getSelectedPagesData().reduce(
      (sum, page) => sum + page.price,
      0,
    );
    const extraFeaturesPrice = getSelectedExtraFeaturesData().reduce(
      (sum, feature) => sum + feature.price,
      0,
    );
    const maintenancePrice =
      wantsMaintenance && selectedMaintenancePlan
        ? maintenancePlans.find((plan) => plan.id === selectedMaintenancePlan)
            ?.price || 0
        : 0;
    return (
      basePrice +
      featuresPrice +
      pagesPrice +
      extraFeaturesPrice +
      maintenancePrice
    );
  };

  const getFeaturesByCategory = (category: string) => {
    return features.filter((feature) => feature.category === category);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "basic":
        return <Shield className="h-5 w-5" />;
      case "interaction":
        return <Users className="h-5 w-5" />;
      case "visual":
        return <Palette className="h-5 w-5" />;
      case "conversion":
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <Check className="h-5 w-5" />;
    }
  };

  const getCategoryTitle = (category: string) => {
    switch (category) {
      case "basic":
        return "Funcionalidades Básicas";
      case "interaction":
        return "Funcionalidades de Interação";
      case "visual":
        return "Funcionalidades Visuais e UI/UX";
      case "conversion":
        return "Funcionalidades de Conversão";
      default:
        return "Funcionalidades";
    }
  };

  const generateWhatsAppMessage = () => {
    const selectedPlanData = basePlans.find((plan) => plan.id === selectedPlan);
    const selectedMaintenancePlanData = maintenancePlans.find(
      (plan) => plan.id === selectedMaintenancePlan,
    );
    const selectedFeaturesData = getSelectedFeaturesData();
    const selectedPagesData = getSelectedPagesData();
    const selectedExtraFeaturesData = getSelectedExtraFeaturesData();
    const total = calculateTotal();

    let message = `Olá! Gostaria de solicitar um orçamento para Landing Page.`;

    if (customizationType === "full") {
      message += `\n\n🎨 *Tipo de Projeto:*
• Customização completa (sem plano base)`;
    } else if (customizationType === "base") {
      message += `\n\n📋 *Plano Selecionado:*
• ${selectedPlanData?.name}: R$ ${selectedPlanData?.basePrice.toLocaleString("pt-BR")}`;
    } else {
      message += `\n\n📋 *Plano Selecionado:*
• ${selectedPlanData?.name}: R$ ${selectedPlanData?.basePrice.toLocaleString("pt-BR")}`;
    }

    if (wantsMaintenance && selectedMaintenancePlanData) {
      message += `\n\n🔧 *Plano de Manutenção:*
• ${selectedMaintenancePlanData.name}: R$ ${selectedMaintenancePlanData.price.toLocaleString("pt-BR")}/mês`;
    }

    if (customizationType === "base" || customizationType === "full") {
      if (selectedPagesData.length > 0) {
        message += `\n\n📄 *Páginas Selecionadas:*
${selectedPagesData
  .map((page) => `• ${page.name}: R$ ${page.price.toLocaleString("pt-BR")}`)
  .join("\n")}`;
      }

      if (selectedFeaturesData.length > 0) {
        message += `\n\n🎯 *Funcionalidades Adicionais:*
${selectedFeaturesData
  .map(
    (feature) =>
      `• ${feature.name}: R$ ${feature.price.toLocaleString("pt-BR")}`,
  )
  .join("\n")}`;
      }

      if (selectedExtraFeaturesData.length > 0) {
        message += `\n\n⚡ *Funcionalidades Extras:*
${selectedExtraFeaturesData
  .map(
    (feature) =>
      `• ${feature.name}: R$ ${feature.price.toLocaleString("pt-BR")}`,
  )
  .join("\n")}`;
      }
    } else {
      message += `\n\n✨ *Tipo de Projeto:*
• Apenas o plano base (sem customizações)`;
    }

    message += `\n\n💰 *Valor Total Estimado: R$ ${total.toLocaleString("pt-BR")}*

Gostaria de receber mais informações sobre o desenvolvimento da minha Landing Page.`;

    return encodeURIComponent(message);
  };

  const whatsappUrl = `https://wa.me/5554999961487?text=${generateWhatsAppMessage()}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <Section className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-indigo-900/20 dark:via-zinc-900 dark:to-blue-900/20">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl mb-8">
                <Monitor className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6">
                Crie sua Presença Digital com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Performance
                </span>{" "}
                e Conversão
              </h1>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Landing Pages e manutenção contínua para seu negócio escalar com
                segurança e resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="lg"
                  className="text-lg px-8 py-4"
                  asChild
                >
                  <a href="#simulador">Solicitar Orçamento</a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Tabela de Planos */}
        <Section id="planos" className="py-16">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                Escolha seu Plano Base
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Selecione o plano que melhor se adapta ao seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {basePlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "ring-2 ring-indigo-500 shadow-xl scale-105"
                      : "hover:shadow-lg"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <Card
                    className={`h-full flex flex-col ${plan.popular ? "border-2 border-indigo-500" : ""}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Mais recomendado
                        </div>
                      </div>
                    )}
                    {selectedPlan === plan.id && !plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Selecionado
                        </div>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                        R$ {plan.basePrice.toLocaleString("pt-BR")}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col flex-grow">
                      <ul className="space-y-3 mb-6 flex-grow">
                        {plan.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-zinc-600 dark:text-zinc-400">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="gradient"
                        className="w-full mt-auto"
                        asChild
                      >
                        <a
                          href={`https://wa.me/5554999961487?text=${encodeURIComponent(`Olá! Gostaria de contratar o ${plan.name} (R$ ${plan.basePrice.toLocaleString("pt-BR")}).

📋 *Plano Selecionado:*
• ${plan.name}: R$ ${plan.basePrice.toLocaleString("pt-BR")}

✨ *Tipo de Projeto:*
• Apenas o plano base (sem customizações)

💰 *Valor Total: R$ ${plan.basePrice.toLocaleString("pt-BR")}*

Gostaria de receber mais informações sobre o desenvolvimento da minha Landing Page.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Contratar Plano
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Opção de Customização */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Como deseja personalizar seu projeto?
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Escolha o nível de personalização ideal para seu negócio
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <div className="flex flex-col sm:flex-row bg-gray-100 dark:bg-gray-800 rounded-lg p-1 gap-1">
                  <button
                    className={`px-4 py-3 rounded-md font-semibold transition-all duration-200 text-sm ${
                      customizationType === "none"
                        ? "bg-white dark:bg-gray-700 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                    onClick={() => setCustomizationType("none")}
                  >
                    Apenas o plano base
                  </button>
                  <button
                    className={`px-4 py-3 rounded-md font-semibold transition-all duration-200 text-sm ${
                      customizationType === "base"
                        ? "bg-white dark:bg-gray-700 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                    onClick={() => setCustomizationType("base")}
                  >
                    Plano + customizações
                  </button>
                  <button
                    className={`px-4 py-3 rounded-md font-semibold transition-all duration-200 text-sm ${
                      customizationType === "full"
                        ? "bg-white dark:bg-gray-700 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                    onClick={() => setCustomizationType("full")}
                  >
                    Só desejo customizar
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Seleção de Plano de Manutenção */}
        <Section className="py-16">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                Deseja Incluir um Plano de Manutenção?
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Mantenha seu site sempre atualizado e performático
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <button
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                      !wantsMaintenance
                        ? "bg-white dark:bg-gray-700 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                    onClick={() => {
                      setWantsMaintenance(false);
                      setSelectedMaintenancePlan("");
                    }}
                  >
                    Não, obrigado
                  </button>
                  <button
                    className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                      wantsMaintenance
                        ? "bg-white dark:bg-gray-700 text-zinc-900 dark:text-white shadow-sm"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                    onClick={() => setWantsMaintenance(true)}
                  >
                    Sim, quero manutenção
                  </button>
                </div>
              </div>

              {wantsMaintenance && (
                <div className="grid md:grid-cols-3 gap-6">
                  {maintenancePlans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        selectedMaintenancePlan === plan.id
                          ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                          : plan.popular
                            ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-900/10 hover:border-indigo-400"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                      }`}
                      onClick={() => setSelectedMaintenancePlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Recomendado
                          </div>
                        </div>
                      )}
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                          {plan.description}
                        </p>
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                          R$ {plan.price.toLocaleString("pt-BR")}/mês
                        </div>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </Section>

        {/* Seções de Customização - Só aparecem se o usuário escolher customizar */}
        {(customizationType === "base" || customizationType === "full") && (
          <>
            {/* Seleção de Páginas */}
            <Section className="py-16 bg-gray-50 dark:bg-gray-900">
              <Container>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                    Selecione as Páginas que Deseja Incluir
                  </h2>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400">
                    Escolha quais páginas farão parte do seu projeto
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.map((page) => (
                      <div
                        key={page.id}
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedPages.has(page.id)
                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                        onClick={() => togglePage(page.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                              selectedPages.has(page.id)
                                ? "border-indigo-500 bg-indigo-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                          >
                            {selectedPages.has(page.id) && (
                              <Check className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                              R$ {page.price.toLocaleString("pt-BR")}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                          {page.name}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {page.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>

            {/* Checklist Personalizado */}
            <Section
              id="checklist"
              className="py-16 bg-gray-50 dark:bg-gray-900"
            >
              <Container>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                    Personalize sua Landing Page
                  </h2>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400">
                    Selecione as funcionalidades que deseja adicionar ao seu
                    projeto
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  {["basic", "interaction", "visual", "conversion"].map(
                    (category) => (
                      <Card key={category} className="mb-6">
                        <div
                          className="cursor-pointer"
                          onClick={() => toggleCategory(category)}
                        >
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                                  {getCategoryIcon(category)}
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                                    {getCategoryTitle(category)}
                                  </h3>
                                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {getFeaturesByCategory(category).length}{" "}
                                    funcionalidades disponíveis
                                  </p>
                                </div>
                              </div>
                              {expandedCategories.has(category) ? (
                                <ChevronUp className="h-5 w-5 text-zinc-500" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-zinc-500" />
                              )}
                            </div>
                          </CardHeader>
                        </div>
                        {expandedCategories.has(category) && (
                          <CardContent className="pt-0">
                            <div className="grid md:grid-cols-2 gap-4">
                              {getFeaturesByCategory(category).map(
                                (feature) => (
                                  <div
                                    key={feature.id}
                                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                                      selectedFeatures.has(feature.id)
                                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                                    }`}
                                    onClick={() => toggleFeature(feature.id)}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                          <div
                                            className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                              selectedFeatures.has(feature.id)
                                                ? "border-indigo-500 bg-indigo-500"
                                                : "border-gray-300 dark:border-gray-600"
                                            }`}
                                          >
                                            {selectedFeatures.has(
                                              feature.id,
                                            ) && (
                                              <Check className="h-3 w-3 text-white" />
                                            )}
                                          </div>
                                          <h4 className="font-semibold text-zinc-900 dark:text-white">
                                            {feature.name}
                                          </h4>
                                        </div>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                                          {feature.description}
                                        </p>
                                      </div>
                                      <div className="text-right">
                                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                          R${" "}
                                          {feature.price.toLocaleString(
                                            "pt-BR",
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ),
                              )}
                            </div>
                          </CardContent>
                        )}
                      </Card>
                    ),
                  )}
                </div>
              </Container>
            </Section>

            {/* Funcionalidades Extras */}
            <Section className="py-16">
              <Container>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                    Funcionalidades Extras
                  </h2>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400">
                    Adicione funcionalidades específicas ao seu projeto
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extraFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedExtraFeatures.has(feature.id)
                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                        onClick={() => toggleExtraFeature(feature.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                              selectedExtraFeatures.has(feature.id)
                                ? "border-indigo-500 bg-indigo-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                          >
                            {selectedExtraFeatures.has(feature.id) && (
                              <Check className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                              R$ {feature.price.toLocaleString("pt-BR")}
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                          {feature.name}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          </>
        )}

        {/* Simulador de Orçamento */}
        <Section id="simulador" className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  Seu Orçamento Personalizado
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                  Veja o resumo das suas escolhas e o valor estimado
                </p>
              </div>

              <Card className="mb-8">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Plano Base - Só aparece se não for customização completa */}
                    {customizationType !== "full" && (
                      <div className="flex justify-between items-center py-4 border-b border-gray-200 dark:border-gray-700">
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                            {
                              basePlans.find((plan) => plan.id === selectedPlan)
                                ?.name
                            }
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            Plano base selecionado
                          </p>
                        </div>
                        <div className="text-lg font-bold text-zinc-900 dark:text-white">
                          R${" "}
                          {basePlans
                            .find((plan) => plan.id === selectedPlan)
                            ?.basePrice.toLocaleString("pt-BR")}
                        </div>
                      </div>
                    )}

                    {/* Plano de Manutenção */}
                    {wantsMaintenance && selectedMaintenancePlan && (
                      <div>
                        <h4 className="text-md font-semibold text-zinc-900 dark:text-white mb-4">
                          Plano de Manutenção
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2">
                            <span className="text-zinc-700 dark:text-zinc-300">
                              {
                                maintenancePlans.find(
                                  (plan) => plan.id === selectedMaintenancePlan,
                                )?.name
                              }
                            </span>
                            <span className="font-semibold text-zinc-900 dark:text-white">
                              R${" "}
                              {maintenancePlans
                                .find(
                                  (plan) => plan.id === selectedMaintenancePlan,
                                )
                                ?.price.toLocaleString("pt-BR")}
                              /mês
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Seções de Customização - Só aparecem se o usuário escolher customizar */}
                    {(customizationType === "base" ||
                      customizationType === "full") && (
                      <>
                        {/* Páginas Selecionadas */}
                        {getSelectedPagesData().length > 0 && (
                          <div>
                            <h4 className="text-md font-semibold text-zinc-900 dark:text-white mb-4">
                              Páginas Selecionadas
                            </h4>
                            <div className="space-y-3">
                              {getSelectedPagesData().map((page) => (
                                <div
                                  key={page.id}
                                  className="flex justify-between items-center py-2"
                                >
                                  <span className="text-zinc-700 dark:text-zinc-300">
                                    {page.name}
                                  </span>
                                  <span className="font-semibold text-zinc-900 dark:text-white">
                                    R$ {page.price.toLocaleString("pt-BR")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Funcionalidades Adicionais */}
                        {getSelectedFeaturesData().length > 0 && (
                          <div>
                            <h4 className="text-md font-semibold text-zinc-900 dark:text-white mb-4">
                              Funcionalidades Adicionais
                            </h4>
                            <div className="space-y-3">
                              {getSelectedFeaturesData().map((feature) => (
                                <div
                                  key={feature.id}
                                  className="flex justify-between items-center py-2"
                                >
                                  <span className="text-zinc-700 dark:text-zinc-300">
                                    {feature.name}
                                  </span>
                                  <span className="font-semibold text-zinc-900 dark:text-white">
                                    R$ {feature.price.toLocaleString("pt-BR")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Funcionalidades Extras */}
                        {getSelectedExtraFeaturesData().length > 0 && (
                          <div>
                            <h4 className="text-md font-semibold text-zinc-900 dark:text-white mb-4">
                              Funcionalidades Extras
                            </h4>
                            <div className="space-y-3">
                              {getSelectedExtraFeaturesData().map((feature) => (
                                <div
                                  key={feature.id}
                                  className="flex justify-between items-center py-2"
                                >
                                  <span className="text-zinc-700 dark:text-zinc-300">
                                    {feature.name}
                                  </span>
                                  <span className="font-semibold text-zinc-900 dark:text-white">
                                    R$ {feature.price.toLocaleString("pt-BR")}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Tipo de Projeto */}
                    {customizationType === "none" && (
                      <div>
                        <h4 className="text-md font-semibold text-zinc-900 dark:text-white mb-4">
                          Tipo de Projeto
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2">
                            <span className="text-zinc-700 dark:text-zinc-300">
                              Apenas o plano base (sem customizações)
                            </span>
                            <span className="font-semibold text-zinc-900 dark:text-white">
                              Incluído
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {customizationType === "full" && (
                      <div>
                        <h4 className="text-md font-semibold text-zinc-900 dark:text-white mb-4">
                          Tipo de Projeto
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center py-2">
                            <span className="text-zinc-700 dark:text-zinc-300">
                              Customização completa (sem plano base)
                            </span>
                            <span className="font-semibold text-zinc-900 dark:text-white">
                              Personalizado
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Total */}
                    <div className="flex justify-between items-center py-4 pt-6 border-t-2 border-indigo-200 dark:border-indigo-700">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                          Total Estimado
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          Valor final do seu projeto
                        </p>
                      </div>
                      <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                        R$ {calculateTotal().toLocaleString("pt-BR")}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Final */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                  Monte sua página personalizada agora mesmo 🚀
                </h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                  Vamos transformar sua ideia em uma Landing Page de alta
                  conversão
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="text-lg px-8 py-4"
                    asChild
                  >
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Contratar Agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Planos de Manutenção */}
        <Section className="py-16 bg-gray-50 dark:bg-gray-900">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                Planos de Manutenção
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400">
                Mantenha seu site sempre atualizado e performático
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Plano Gold */}
                <Card className="p-8 flex flex-col h-full">
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Plano Gold
                    </h3>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                      R$ 600/mês
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <ul className="space-y-3 mb-6 flex-grow">
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Até 3 alterações mensais
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          3 criativos para redes sociais
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Backup automático
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Suporte técnico
                        </span>
                      </li>
                    </ul>
                    <Button
                      variant="gradient"
                      className="w-full mt-auto"
                      asChild
                    >
                      <a
                        href="https://wa.me/5554999961487?text=Olá! Gostaria de contratar o Plano Gold de Manutenção (R$ 600/mês)."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Contratar Gold
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Plano Platinum */}
                <Card className="p-8 border-2 border-indigo-500 relative flex flex-col h-full">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </div>
                  </div>
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Plano Platinum
                    </h3>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                      R$ 900/mês
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <ul className="space-y-3 mb-6 flex-grow">
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Até 6 alterações mensais
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Monitoramento SEO básico
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Tráfego pago Google Ads ou Meta Ads
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Backup automático
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Suporte prioritário
                        </span>
                      </li>
                    </ul>
                    <Button
                      variant="gradient"
                      className="w-full mt-auto"
                      asChild
                    >
                      <a
                        href="https://wa.me/5554999961487?text=Olá! Gostaria de contratar o Plano Platinum de Manutenção (R$ 900/mês)."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Contratar Platinum
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Plano Ouro */}
                <Card className="p-8 flex flex-col h-full">
                  <CardHeader className="text-center pb-4">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      Plano Ouro
                    </h3>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                      R$ 1.500/mês
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex flex-col flex-grow">
                    <ul className="space-y-3 mb-6 flex-grow">
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Alterações ilimitadas (dentro do bom senso)
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Relatórios de performance
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          SEO avançado
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Tráfego pago Google Ads e Meta Ads
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          Suporte VIP
                        </span>
                      </li>
                    </ul>
                    <Button
                      variant="gradient"
                      className="w-full mt-auto"
                      asChild
                    >
                      <a
                        href="https://wa.me/5554999961487?text=Olá! Gostaria de contratar o Plano Ouro de Manutenção (R$ 1.500/mês)."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Contratar Ouro
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
