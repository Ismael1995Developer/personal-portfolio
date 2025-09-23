"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import PriceTablePopup from "@/components/common/PriceTablePopup";
import { services } from "@/content/services";
import {
  Check,
  ShoppingCart,
  Target,
  Wrench,
  MessageCircle,
  Calculator,
} from "lucide-react";

export function Services() {
  const [isPriceTableOpen, setIsPriceTableOpen] = useState(false);

  return (
    <>
      {/* Desenvolvimento - Criação de Sites */}
      <Section id="desenvolvimento" background="muted">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl mb-8">
              <ShoppingCart className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Desenvolvimento — Criação de Sites
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Soluções completas para presença digital com foco em conversão e
              performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {services.desenvolvimento.map((service) => (
              <Card key={service.slug} hover className="relative">
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {service.titulo}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    {service.descricao}
                  </p>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {service.preco}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button variant="primary" className="w-full" asChild>
                      <a href="#contato">Contratar Plano</a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href="https://wa.me/555499961487"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Card Personalizável */}
          <div className="max-w-4xl mx-auto">
            <Card className="relative border-2 border-dashed border-indigo-300 dark:border-indigo-600 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center py-12">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                      Projeto Personalizado
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">
                      Precisa de algo específico? Crie seu projeto do zero com
                      funcionalidades personalizadas, design único e integrações
                      avançadas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                          100%
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                          Personalizado
                        </div>
                      </div>
                      <div className="text-center p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                          ∞
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                          Funcionalidades
                        </div>
                      </div>
                      <div className="text-center p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                          24/7
                        </div>
                        <div className="text-sm text-zinc-600 dark:text-zinc-400">
                          Suporte
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="text-lg px-8 py-4"
                      asChild
                    >
                      <a href="/landing-page-personalizada">
                        <Target className="h-5 w-5 mr-2" />
                        Personalizar Projeto
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 py-4"
                      asChild
                    >
                      <a
                        href="https://wa.me/555499961487"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Marketing - Google Ads & Meta Ads */}
      <Section id="marketing">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-2xl mb-6">
              <Target className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Marketing — Google Ads & Meta Ads
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Gestão completa de campanhas digitais para maximizar ROI e
              conversões
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.marketing.map((service) => (
              <Card key={service.slug} hover className="relative">
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {service.titulo}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    {service.descricao}
                  </p>
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                    {service.preco}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="gradient" className="w-full" asChild>
                    <a href="#contato">Solicitar Proposta</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Engenharia - Projetos Fotovoltaicos e Elétricos */}
      <Section id="engenharia" background="muted">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 dark:bg-sky-900 rounded-2xl mb-6">
              <Wrench className="h-8 w-8 text-sky-600 dark:text-sky-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Engenharia — Projetos Fotovoltaicos e Elétricos
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              Projetos técnicos com conformidade normativa e foco em eficiência
              energética
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primeiro Card - Projeto Fotovoltaico */}
            <Card hover className="relative">
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {services.engenharia[0].titulo}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  {services.engenharia[0].descricao}
                </p>
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                  {services.engenharia[0].preco}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {services.engenharia[0].features.map(
                    (feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <a href="#contato">Orçar Projeto</a>
                </Button>
              </CardContent>
            </Card>

            {/* Card de Personalização no Meio */}
            <Card className="relative border-2 border-dashed border-sky-300 dark:border-sky-600 bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="text-center py-8 h-full flex flex-col justify-center">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                      Personalização de Projeto
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                      Precisa de um orçamento personalizado? Use nossa
                      calculadora de preços para projetos fotovoltaicos com
                      cálculo progressivo por faixas de potência.
                    </p>
                  </div>
                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={() => setIsPriceTableOpen(true)}
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calcular Preço Personalizado
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Segundo Card - Projeto Elétrico */}
            <Card hover className="relative">
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {services.engenharia[1].titulo}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  {services.engenharia[1].descricao}
                </p>
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                  {services.engenharia[1].preco}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {services.engenharia[1].features.map(
                    (feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">
                          {feature}
                        </span>
                      </li>
                    ),
                  )}
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <a href="#contato">Orçar Projeto</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Popup da Tabela de Preços */}
      <PriceTablePopup
        isOpen={isPriceTableOpen}
        onClose={() => setIsPriceTableOpen(false)}
      />
    </>
  );
}
