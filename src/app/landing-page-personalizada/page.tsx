"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Button } from "@/components/common/Button";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import { WelcomePopup } from "@/components/common/WelcomePopup";
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
  period?: "mês" | "ano";
  category: "basic" | "interaction" | "visual" | "conversion";
  isDestaque?: boolean;
  isPromocao?: boolean;
  precoOriginal?: number;
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
  period?: "mês" | "ano";
  isDestaque?: boolean;
  isPromocao?: boolean;
  precoOriginal?: number;
  isMaisVendida?: boolean;
  isMaisProcurada?: boolean;
}

const features: Feature[] = [
  // Funcionalidades Básicas
  {
    id: "responsive-design",
    name: "Design responsivo e moderno",
    description: "Layout adaptável para todos os dispositivos",
    price: 100.0,
    category: "basic",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "contact-form",
    name: "Formulário de contato integrado",
    description: "Captura de leads com validação",
    price: 150,
    category: "basic",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 200,
  },
  {
    id: "crm-integration",
    name: "Integração CRM/Email Marketing",
    description: "Conecta com sua ferramenta de CRM",
    price: 400,
    category: "basic",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "ab-testing",
    name: "Testes A/B",
    description: "Compare diferentes versões da página",
    price: 250,
    category: "basic",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 300,
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
    price: 350,
    category: "basic",
  },
  {
    id: "google-analytics",
    name: "Configuração de Google Analytics",
    description: "Tracking completo de visitantes",
    price: 40,
    period: "mês",
    category: "basic",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "google-ads",
    name: "Configuração de Google Ads",
    description: "Configuração completa das contas",
    price: 150,
    period: "mês",
    category: "basic",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 200,
  },
  {
    id: "meta-ads",
    name: "Configuração de Meta Ads",
    description: "Configuração completa das contas",
    price: 200,
    category: "basic",
  },
  {
    id: "google-search-console",
    name: "Configuração de Google Search Console",
    description: "Configuração completa das contas",
    price: 100,
    category: "basic",
  },
  {
    id: "google-tag-manager",
    name: "Configuração de Google Tag Manager",
    description: "Configuração completa das contas",
    price: 100,
    category: "basic",
  },
  {
    id: "hospedagem",
    name: "Hospedagem",
    description: "Hospedagem completa do site (hostinger/hostgator)",
    price: 40,
    period: "mês",
    category: "basic",
  },
  {
    id: "ssl",
    name: "SSL",
    description: "SSL completo das contas",
    price: 45,
    period: "ano",
    category: "basic",
  },
  {
    id: "dominio",
    name: "Dominio",
    description: "Dominio completo do site (RegistroBr)",
    price: 40,
    period: "ano",
    category: "basic",
  },
  {
    id: "email-marketing",
    name: "Email Marketing Setup",
    description: "Mailchimp/RD Station + automações",
    price: 120,
    category: "basic",
  },
  {
    id: "crm-integration",
    name: "Integração CRM",
    description: "Pipedrive/HubSpot + formulários",
    price: 180,
    category: "basic",
  },
  {
    id: "speed-optimization",
    name: "Otimização Avançada",
    description: "CDN + compressão + lazy loading",
    price: 150,
    category: "basic",
  },

  // Funcionalidades de Interação
  {
    id: "whatsapp-button",
    name: "Botão flutuante do WhatsApp",
    description: "Atendimento direto via WhatsApp",
    price: 100,
    category: "interaction",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "multi-step-form",
    name: "Formulário multi-etapas",
    description: "Maior taxa de conversão",
    price: 300,
    category: "interaction",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 350,
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
  {
    id: "whatsapp-business",
    name: "WhatsApp Business API",
    description: "Chat automático + respostas rápidas",
    price: 90,
    period: "mês",
    category: "interaction",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "live-chat-widget",
    name: "Widget de Chat ao Vivo",
    description: "Chat flutuante com operador humano",
    price: 180,
    period: "mês",
    category: "interaction",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 220,
  },
  {
    id: "notification-popup",
    name: "Notificações Push",
    description: "Alertas personalizados para visitantes",
    price: 180,
    category: "interaction",
  },
  {
    id: "video-call-integration",
    name: "Integração de Videochamada",
    description: "Agendamento com videochamada automática",
    price: 250,
    category: "interaction",
  },
  {
    id: "smart-form",
    name: "Formulário Inteligente",
    description: "Campos que aparecem conforme preenchimento",
    price: 220,
    category: "interaction",
  },
  {
    id: "voice-message",
    name: "Mensagens de Voz",
    description: "Gravação e envio de áudio via WhatsApp",
    price: 160,
    category: "interaction",
  },
  {
    id: "interactive-tour",
    name: "Tour Interativo",
    description: "Guia passo a passo para novos visitantes",
    price: 300,
    category: "interaction",
  },
  {
    id: "real-time-notifications",
    name: "Notificações em Tempo Real",
    description: "Alertas de atividade no site",
    price: 140,
    category: "interaction",
  },
  {
    id: "social-login",
    name: "Login Social",
    description: "Entrada com Google, Facebook, LinkedIn",
    price: 200,
    category: "interaction",
  },
  {
    id: "progress-indicator",
    name: "Indicador de Progresso",
    description: "Barra de progresso em formulários longos",
    price: 100,
    category: "interaction",
  },
  {
    id: "floating-help",
    name: "Botão de Ajuda Flutuante",
    description: "Suporte contextual em cada página",
    price: 120,
    category: "interaction",
  },

  // Funcionalidades Visuais e UI/UX
  {
    id: "image-carousel",
    name: "Carrossel de imagens",
    description: "Galeria de imagens interativa",
    price: 200,
    category: "visual",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 250,
  },
  {
    id: "portfolio-gallery",
    name: "Galeria de portfólio/produtos",
    description: "Showcase dos seus trabalhos",
    price: 300,
    category: "visual",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "scroll-animations",
    name: "Efeitos de scroll animados",
    description: "Animações suaves ao rolar",
    price: 400,
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
  {
    id: "micro-animations",
    name: "Micro-animações",
    description: "Animações sutis em botões e elementos",
    price: 180,
    category: "visual",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "gradient-backgrounds",
    name: "Backgrounds Gradientes",
    description: "Gradientes personalizados e animados",
    price: 150,
    category: "visual",
  },
  {
    id: "floating-elements",
    name: "Elementos Flutuantes",
    description: "Ícones e formas que flutuam na tela",
    price: 200,
    category: "visual",
  },
  {
    id: "parallax-scrolling",
    name: "Efeito Parallax",
    description: "Camadas que se movem em velocidades diferentes",
    price: 250,
    category: "visual",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 300,
  },
  {
    id: "loading-animations",
    name: "Animações de Carregamento",
    description: "Spinners e loaders personalizados",
    price: 120,
    category: "visual",
  },
  {
    id: "hover-effects",
    name: "Efeitos de Hover",
    description: "Animações ao passar o mouse",
    price: 100,
    category: "visual",
  },
  {
    id: "custom-cursor",
    name: "Cursor Personalizado",
    description: "Cursor customizado que segue o mouse",
    price: 160,
    category: "visual",
  },
  {
    id: "particle-effects",
    name: "Efeitos de Partículas",
    description: "Partículas animadas no background",
    price: 250,
    category: "visual",
  },
  {
    id: "morphing-shapes",
    name: "Formas que se Transformam",
    description: "Elementos que mudam de forma suavemente",
    price: 280,
    category: "visual",
  },
  {
    id: "neon-effects",
    name: "Efeitos Neon",
    description: "Brilho e efeitos de neon nos elementos",
    price: 200,
    category: "visual",
  },
  {
    id: "3d-elements",
    name: "Elementos 3D",
    description: "Cards e botões com profundidade",
    price: 350,
    category: "visual",
  },
  {
    id: "magnetic-buttons",
    name: "Botões Magnéticos",
    description: "Botões que seguem o cursor",
    price: 180,
    category: "visual",
  },
  {
    id: "text-animations",
    name: "Animações de Texto",
    description: "Texto que aparece com efeitos especiais",
    price: 140,
    category: "visual",
  },
  {
    id: "image-reveal",
    name: "Revelação de Imagens",
    description: "Imagens que aparecem com efeitos únicos",
    price: 160,
    category: "visual",
  },
  {
    id: "smooth-transitions",
    name: "Transições Suaves",
    description: "Mudanças de página com animações",
    price: 120,
    category: "visual",
  },
  {
    id: "interactive-timeline",
    name: "Timeline Interativa",
    description: "Linha do tempo com animações",
    price: 240,
    category: "visual",
  },
  {
    id: "flip-cards",
    name: "Cards que Viram",
    description: "Cartões com efeito de flip 3D",
    price: 200,
    category: "visual",
  },
  {
    id: "progress-ring",
    name: "Anel de Progresso",
    description: "Indicador circular de progresso",
    price: 130,
    category: "visual",
  },

  // Funcionalidades de Conversão
  {
    id: "lead-popup",
    name: "Pop-up de captura de leads",
    description: "Captura mais leads",
    price: 300,
    category: "conversion",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "testimonials-area",
    name: "Área de depoimentos/clientes",
    description: "Social proof para conversão",
    price: 150,
    category: "conversion",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 200,
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
    name: "Landing page segmentada (pagina de destino)",
    description: "Versões para diferentes produtos",
    price: 500,
    category: "conversion",
  },
  {
    id: "social-proof",
    name: "Social Proof Widget",
    description: "Notificações de compra + depoimentos",
    price: 90,
    category: "conversion",
  },
  {
    id: "ab-testing",
    name: "Testes A/B Simples",
    description: "2 versões + relatórios básicos",
    price: 200,
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
  {
    id: "urgency-timer",
    name: "Timer de Urgência",
    description: "Contador regressivo para ofertas limitadas",
    price: 120,
    category: "conversion",
    isDestaque: true,
    isPromocao: false,
  },
  {
    id: "exit-intent-popup",
    name: "Popup de Saída",
    description: "Oferta especial quando usuário vai sair",
    price: 180,
    category: "conversion",
  },
  {
    id: "sticky-cart",
    name: "Carrinho Fixo",
    description: "Carrinho sempre visível no scroll",
    price: 160,
    category: "conversion",
  },
  {
    id: "countdown-offer",
    name: "Oferta com Contador",
    description: "Desconto com tempo limitado",
    price: 140,
    category: "conversion",
  },
  {
    id: "trust-badges",
    name: "Selo de Confiança",
    description: "Certificados de segurança e garantia",
    price: 80,
    category: "conversion",
  },
  {
    id: "live-sales-notification",
    name: "Notificação de Vendas ao Vivo",
    description: "Mostra compras recentes em tempo real",
    price: 300,
    category: "conversion",
  },
  {
    id: "progress-bar",
    name: "Barra de Progresso",
    description: "Mostra progresso para meta de desconto",
    price: 100,
    category: "conversion",
  },
  {
    id: "scarcity-indicator",
    name: "Indicador de Escassez",
    description: "Mostra estoque limitado ou vagas restantes",
    price: 90,
    category: "conversion",
  },
  {
    id: "guarantee-banner",
    name: "Banner de Garantia",
    description: "Garantia de satisfação em destaque",
    price: 70,
    category: "conversion",
  },
  {
    id: "video-testimonial",
    name: "Depoimento em Vídeo",
    description: "Vídeos de clientes satisfeitos",
    price: 200,
    category: "conversion",
    isDestaque: false,
    isPromocao: true,
    precoOriginal: 250,
  },
  {
    id: "comparison-table",
    name: "Tabela de Comparação",
    description: "Compara planos e produtos lado a lado",
    price: 180,
    category: "conversion",
  },
  {
    id: "risk-reversal",
    name: "Reversão de Risco",
    description: "Garantia de devolução do dinheiro",
    price: 60,
    category: "conversion",
  },
  {
    id: "bonus-offer",
    name: "Oferta de Bônus",
    description: "Bônus exclusivos para compradores",
    price: 80,
    category: "conversion",
  },
  {
    id: "mobile-optimized-cta",
    name: "CTA Otimizado Mobile",
    description: "Botões otimizados para dispositivos móveis",
    price: 120,
    category: "conversion",
  },
  {
    id: "one-click-upsell",
    name: "Upsell de Um Clique",
    description: "Oferta adicional após compra principal",
    price: 200,
    category: "conversion",
  },
  {
    id: "abandoned-cart-recovery",
    name: "Recuperação de Carrinho",
    description: "E-mail automático para carrinho abandonado",
    price: 150,
    category: "conversion",
  },
  {
    id: "social-validation",
    name: "Validação Social",
    description: "Mostra número de clientes satisfeitos",
    price: 110,
    category: "conversion",
  },
  {
    id: "instant-gratification",
    name: "Gratificação Instantânea",
    description: "Acesso imediato após compra",
    price: 90,
    category: "conversion",
  },
  {
    id: "conversion-funnel",
    name: "Funil de Conversão",
    description: "Jornada otimizada do visitante ao cliente",
    price: 300,
    category: "conversion",
  },
  {
    id: "card-grid-price",
    name: "Grid de cards com preço",
    description: "Grid de cards com preço com 3 cards",
    price: 100,
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
    id: "Seção-obrigado",
    name: "Seção de obrigado (Thank You)",
    description: "Página de confirmação pós-compra",
    price: 50,
  },
  {
    id: "pag com 4 seções",
    name: "Página com 4 seções (hero, Sobre, Contato, etc.)",
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
    price: 250,
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
  {
    id: "ecommerce",
    name: "Ecommerce",
    description: "Ecommerce completo 1 página",
    price: 1000,
  },
  {
    id: "pagina-de-pagamento",
    name: "Página de pagamento",
    description: "Sistema de pagamento online",
    price: 250,
  },
  {
    id: "pagina-de-login",
    name: "Página de login",
    description: "Sistema de login online",
    price: 250,
  },
  {
    id: "pagina-de-cadastro",
    name: "Página de cadastro",
    description: "Sistema de cadastro online",
    price: 250,
  },
  {
    id: "pagina-de-recuperacao-de-senha",
    name: "Página de recuperação de senha",
    description: "Sistema de recuperação de senha online",
    price: 250,
  },
  {
    id: "pagina-de-pedidos",
    name: "Página de pedidos",
    description: "Sistema de pedidos online",
    price: 350,
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
    name: "Formulário customizado até 5 campos",
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
    name: "Animações adicionais simples",
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
    id: "popup-captura",
    name: "Popup de captura de e-mail",
    description: "Captura de leads com popup",
    price: 200,
  },
  {
    id: "Popup-de-obrigado",
    name: "Popup-de-obrigado",
    description: "Popup de obrigado",
    price: 200,
  },
  {
    id: "popup-de-carregamento",
    name: "Popup de carregamento",
    description: "Popup de carregamento",
    price: 200,
  },
  {
    id: "popup-de-recuperacao",
    name: "Popup de recuperação",
    description: "Popup de recuperação",
    price: 200,
  },
  {
    id: "popup-de-recomendacao",
    name: "Popup de recomendação",
    description: "Popup de recomendação",
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
  {
    id: "popup-de-saida",
    name: "Popup de saída",
    description: "Popup que aparece quando o usuário tenta sair da página",
    price: 250,
    isMaisVendida: true,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-oferta",
    name: "Popup de oferta especial",
    description: "Popup com ofertas e promoções limitadas",
    price: 300,
    isMaisVendida: false,
    isMaisProcurada: true,
  },
  {
    id: "popup-de-cupom",
    name: "Popup de cupom de desconto",
    description: "Popup para exibir cupons e códigos promocionais",
    price: 200,
    isMaisVendida: true,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-newsletter",
    name: "Popup de newsletter",
    description: "Popup para captura de e-mails para newsletter",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: true,
  },
  {
    id: "popup-de-depoimento",
    name: "Popup de depoimento",
    description: "Popup com depoimentos de clientes",
    price: 250,
    isMaisVendida: true,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-video",
    name: "Popup de vídeo",
    description: "Popup com vídeo promocional ou explicativo",
    price: 300,
    isMaisVendida: false,
    isMaisProcurada: true,
  },
  {
    id: "popup-de-carrinho",
    name: "Popup de carrinho abandonado",
    description: "Popup para recuperar carrinho abandonado",
    price: 250,
    isMaisVendida: true,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-urgencia",
    name: "Popup de urgência",
    description: "Popup com timer de urgência e escassez",
    price: 300,
    isMaisVendida: false,
    isMaisProcurada: true,
  },
  {
    id: "popup-de-social-proof",
    name: "Popup de prova social",
    description: "Popup mostrando compras recentes e avaliações",
    price: 250,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-garantia",
    name: "Popup de garantia",
    description: "Popup destacando garantias e políticas",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-frete-gratis",
    name: "Popup de frete grátis",
    description: "Popup promovendo frete grátis",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-bonus",
    name: "Popup de bônus",
    description: "Popup oferecendo bônus e brindes",
    price: 250,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-compra-segura",
    name: "Popup de compra segura",
    description: "Popup destacando segurança da compra",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-atendimento",
    name: "Popup de atendimento",
    description: "Popup para suporte e atendimento ao cliente",
    price: 250,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-politica",
    name: "Popup de política de privacidade",
    description: "Popup com política de privacidade e termos",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-localizacao",
    name: "Popup de localização",
    description: "Popup para capturar localização do usuário",
    price: 250,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-idade",
    name: "Popup de verificação de idade",
    description: "Popup para verificar idade do usuário",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-cookie",
    name: "Popup de cookies",
    description: "Popup de consentimento de cookies LGPD",
    price: 200,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
  {
    id: "popup-de-mantenha-contato",
    name: "Popup de mantenha contato",
    description: "Popup para manter contato com visitantes",
    price: 250,
    isMaisVendida: false,
    isMaisProcurada: false,
  },
];

const basePlans = [
  {
    id: "start",
    name: "Landing Page Start",
    description: "One-page simples para presença digital básica",
    basePrice: 799.9,
    features: [
      "Estrutura básica de uma página (Home + Produto + Sobre + Contato + CTA)",
      "Design responsivo simples (atende mobile e desktop)",
      "Formulário de contato básico",
      "Integração com WhatsApp (link direto)",
      "Entrega rápida (1 dia útil)",
    ],
    popular: false,
  },
  {
    id: "essential",
    name: "Landing Page Essencial",
    description: "One-page otimizada para captação e SEO técnico básico.",
    basePrice: 799,
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
    popular: true,
  },
  {
    id: "pro",
    name: "Landing Page Pro",
    description: "Mais seções, testes A/B simples e tags de conversão.",
    basePrice: 2299,
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
    popular: false,
  },
];

export default function LandingPagePersonalizada() {
  const [selectedPlan, setSelectedPlan] = useState<string>("essential");
  const [customizationType, setCustomizationType] = useState<
    "none" | "base" | "full"
  >("base");
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(
    new Set(),
  );
  const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set());
  const [selectedExtraFeatures, setSelectedExtraFeatures] = useState<
    Set<string>
  >(new Set());
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
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

    // Verificar se selecionou 3 funcionalidades extras
    if (newSelected.size === 3 && !showDiscountPopup) {
      setShowDiscountPopup(true);
    }
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

    // Se não quer customização, retorna apenas o preço base
    if (customizationType === "none") {
      return basePrice;
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
      // Aplicar desconto de 10% se 3 ou mais funcionalidades extras foram selecionadas
      const extraFeaturesDiscount =
        selectedExtraFeatures.size >= 3 ? extraFeaturesPrice * 0.1 : 0;
      return (
        featuresPrice + pagesPrice + extraFeaturesPrice - extraFeaturesDiscount
      );
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
    // Aplicar desconto de 10% se 3 ou mais funcionalidades extras foram selecionadas
    const extraFeaturesDiscount =
      selectedExtraFeatures.size >= 3 ? extraFeaturesPrice * 0.1 : 0;
    return (
      basePrice +
      featuresPrice +
      pagesPrice +
      extraFeaturesPrice -
      extraFeaturesDiscount
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
      `• ${feature.name}: R$ ${feature.price.toLocaleString("pt-BR")}${feature.period ? `/${feature.period}` : ""}`,
  )
  .join("\n")}`;
      }

      if (selectedExtraFeaturesData.length > 0) {
        message += `\n\n⚡ *Funcionalidades Extras:*
${selectedExtraFeaturesData
  .map(
    (feature) =>
      `• ${feature.name}: R$ ${feature.price.toLocaleString("pt-BR")}${feature.period ? `/${feature.period}` : ""}`,
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

  // Componente do Popup de Desconto
  const DiscountPopup = () => {
    if (!showDiscountPopup) return null;

    const extraFeaturesPrice = getSelectedExtraFeaturesData().reduce(
      (sum, feature) => sum + feature.price,
      0,
    );
    const discount = extraFeaturesPrice * 0.1;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
              Parabéns!
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Você selecionou 3 funcionalidades extras e ganhou um desconto
              especial!
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4 mb-6">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                10% de Desconto
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Economia de R$ {discount.toLocaleString("pt-BR")}
              </div>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
              O desconto já foi aplicado automaticamente no seu orçamento!
            </p>
            <button
              onClick={() => setShowDiscountPopup(false)}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg"
            >
              Continuar Personalizando
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WelcomePopup />
      <DiscountPopup />
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
            </div>
          </Container>
        </Section>

        {/* Opção de Customização */}
        <Section className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
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

        {/* Tabela de Planos */}
        {customizationType !== "full" && (
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

                        {/* Preço com promoção igual à página inicial */}
                        <div className="text-center mb-3">
                          {plan.id === "start" && (
                            <div className="text-sm text-zinc-500 dark:text-zinc-400 line-through mb-1">
                              R$ 999,90
                            </div>
                          )}
                          {plan.id === "essential" && (
                            <div className="text-sm text-zinc-500 dark:text-zinc-400 line-through mb-1">
                              R$ 1.199,00
                            </div>
                          )}
                          {plan.id === "pro" && (
                            <div className="text-sm text-zinc-500 dark:text-zinc-400 line-through mb-1">
                              R$ 3.399,00
                            </div>
                          )}

                          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                            {plan.id === "start" && "12x de R$ 83,33"}
                            {plan.id === "essential" && "12x de R$ 66,58"}
                            {plan.id === "pro" && "12x de R$ 191,58"}
                          </div>
                          <div className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                            Cartão
                          </div>
                          <div className="text-sm text-zinc-500 dark:text-zinc-400">
                            Valor à vista: R${" "}
                            {plan.basePrice.toLocaleString("pt-BR")}
                          </div>
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
                            Quero este projeto!
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </Container>
          </Section>
        )}

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
                    Personalize seu Projeto
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
                                    className={`p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                                      selectedFeatures.has(feature.id)
                                        ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/20 shadow-md"
                                        : feature.isDestaque ||
                                            feature.isPromocao
                                          ? "border-orange-400 dark:border-orange-500 hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10"
                                          : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                                    }`}
                                    onClick={() => toggleFeature(feature.id)}
                                  >
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1">
                                        <div className="flex items-start gap-3 mb-3">
                                          <div
                                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                                              selectedFeatures.has(feature.id)
                                                ? "border-emerald-500 bg-emerald-500"
                                                : "border-gray-300 dark:border-gray-600"
                                            }`}
                                          >
                                            {selectedFeatures.has(
                                              feature.id,
                                            ) && (
                                              <Check className="h-3 w-3 text-white" />
                                            )}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-zinc-900 dark:text-white text-base leading-tight mb-2">
                                              {feature.name}
                                            </h4>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
                                              {feature.description}
                                            </p>
                                            {feature.isDestaque && (
                                              <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-sm inline-block">
                                                ⭐ DESTAQUE
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                      <div className="text-right flex-shrink-0">
                                        {feature.isPromocao &&
                                          feature.precoOriginal && (
                                            <div className="text-sm text-zinc-500 dark:text-zinc-400 line-through mb-1">
                                              R${" "}
                                              {feature.precoOriginal.toLocaleString(
                                                "pt-BR",
                                              )}
                                              {feature.period &&
                                                `/${feature.period}`}
                                            </div>
                                          )}
                                        <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                                          R${" "}
                                          {feature.price.toLocaleString(
                                            "pt-BR",
                                          )}
                                          {feature.period && (
                                            <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                                              /{feature.period}
                                            </span>
                                          )}
                                        </div>
                                        {feature.isPromocao &&
                                          feature.precoOriginal && (
                                            <div className="text-xs text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full mb-2">
                                              💰 Economia: R${" "}
                                              {(
                                                feature.precoOriginal -
                                                feature.price
                                              ).toLocaleString("pt-BR")}
                                            </div>
                                          )}
                                        {feature.isPromocao && (
                                          <div className="text-right">
                                            <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-sm">
                                              🔥 PROMOÇÃO
                                            </span>
                                          </div>
                                        )}
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

            {/* Funcionalidades Mais Vendidas e Procuradas */}
            <Section
              id="funcionalidades-destaque"
              className="py-16 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-indigo-900/20 dark:via-zinc-900 dark:to-blue-900/20"
            >
              <Container>
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                    Funcionalidades em Destaque
                  </h2>
                  <p className="text-xl text-zinc-600 dark:text-zinc-400">
                    As funcionalidades mais vendidas e procuradas pelos nossos
                    clientes
                  </p>
                </div>

                <div className="max-w-6xl mx-auto">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {extraFeatures
                      .filter(
                        (feature) =>
                          feature.isMaisVendida || feature.isMaisProcurada,
                      )
                      .map((feature) => (
                        <div
                          key={feature.id}
                          className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                            selectedExtraFeatures.has(feature.id)
                              ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/20 shadow-md"
                              : feature.isMaisVendida || feature.isMaisProcurada
                                ? "border-orange-400 dark:border-orange-500 hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10"
                                : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          }`}
                          onClick={() => toggleExtraFeature(feature.id)}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div
                              className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                                selectedExtraFeatures.has(feature.id)
                                  ? "border-emerald-500 bg-emerald-500"
                                  : "border-gray-300 dark:border-gray-600"
                              }`}
                            >
                              {selectedExtraFeatures.has(feature.id) && (
                                <Check className="h-4 w-4 text-white" />
                              )}
                            </div>
                            <div className="text-right">
                              {feature.isPromocao && feature.precoOriginal && (
                                <div className="text-sm text-zinc-500 dark:text-zinc-400 line-through mb-1">
                                  R${" "}
                                  {feature.precoOriginal.toLocaleString(
                                    "pt-BR",
                                  )}
                                  {feature.period && `/${feature.period}`}
                                </div>
                              )}
                              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                                R$ {feature.price.toLocaleString("pt-BR")}
                                {feature.period && (
                                  <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                                    /{feature.period}
                                  </span>
                                )}
                              </div>
                              {feature.isPromocao && feature.precoOriginal && (
                                <div className="text-xs text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full mb-2">
                                  💰 Economia: R${" "}
                                  {(
                                    feature.precoOriginal - feature.price
                                  ).toLocaleString("pt-BR")}
                                </div>
                              )}
                              {feature.isPromocao && (
                                <div className="text-right">
                                  <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-sm">
                                    🔥 PROMOÇÃO
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-tight mb-2">
                            {feature.name}
                          </h3>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                            {feature.description}
                          </p>
                          {feature.isDestaque && (
                            <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-sm inline-block mb-2">
                              ⭐ DESTAQUE
                            </span>
                          )}
                          {feature.isMaisVendida && (
                            <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm inline-block mb-2">
                              🏆 MAIS VENDIDA
                            </span>
                          )}
                          {feature.isMaisProcurada && (
                            <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm inline-block mb-2">
                              🔥 MAIS PROCURADA
                            </span>
                          )}
                        </div>
                      ))}
                  </div>
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
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          selectedExtraFeatures.has(feature.id)
                            ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/20 shadow-md"
                            : feature.isDestaque || feature.isPromocao
                              ? "border-orange-400 dark:border-orange-500 hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/10"
                              : "border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                        }`}
                        onClick={() => toggleExtraFeature(feature.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                              selectedExtraFeatures.has(feature.id)
                                ? "border-emerald-500 bg-emerald-500"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                          >
                            {selectedExtraFeatures.has(feature.id) && (
                              <Check className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div className="text-right">
                            {feature.isPromocao && feature.precoOriginal && (
                              <div className="text-sm text-zinc-500 dark:text-zinc-400 line-through mb-1">
                                R${" "}
                                {feature.precoOriginal.toLocaleString("pt-BR")}
                                {feature.period && `/${feature.period}`}
                              </div>
                            )}
                            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                              R$ {feature.price.toLocaleString("pt-BR")}
                              {feature.period && (
                                <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                                  /{feature.period}
                                </span>
                              )}
                            </div>
                            {feature.isPromocao && feature.precoOriginal && (
                              <div className="text-xs text-green-600 dark:text-green-400 font-bold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full mb-2">
                                💰 Economia: R${" "}
                                {(
                                  feature.precoOriginal - feature.price
                                ).toLocaleString("pt-BR")}
                              </div>
                            )}
                            {feature.isPromocao && (
                              <div className="text-right">
                                <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-sm">
                                  🔥 PROMOÇÃO
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white leading-tight mb-2">
                          {feature.name}
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
                          {feature.description}
                        </p>
                        {feature.isDestaque && (
                          <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-sm inline-block mb-2">
                            ⭐ DESTAQUE
                          </span>
                        )}
                        {feature.isMaisVendida && (
                          <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-sm inline-block mb-2">
                            🏆 MAIS VENDIDA
                          </span>
                        )}
                        {feature.isMaisProcurada && (
                          <span className="px-2 py-1 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm inline-block mb-2">
                            🔥 MAIS PROCURADA
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          </>
        )}

        {/* Simulador de Orçamento */}

        {/* Seu Orçamento Personalizado */}
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
                                    {feature.period && `/${feature.period}`}
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
                                    {feature.period && `/${feature.period}`}
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
                    <div className="py-4 pt-6 border-t-2 border-indigo-200 dark:border-indigo-700">
                      {/* Desconto de 10% se 3+ funcionalidades extras */}
                      {selectedExtraFeatures.size >= 3 && (
                        <div className="mb-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl">🎉</span>
                              <div>
                                <div className="text-sm font-semibold text-green-700 dark:text-green-300">
                                  Desconto de 10% Aplicado!
                                </div>
                                <div className="text-xs text-green-600 dark:text-green-400">
                                  Por selecionar 3+ funcionalidades extras
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                                -R${" "}
                                {getSelectedExtraFeaturesData().reduce(
                                  (sum, feature) => sum + feature.price,
                                  0,
                                ) * 0.1}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-between items-center">
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
