import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { services } from "@/content/services";
import {
  Check,
  ShoppingCart,
  Target,
  Wrench,
  MessageCircle,
} from "lucide-react";

export function Services() {
  return (
    <>
      {/* Loja - Landing Pages & Manutenção */}
      <Section id="loja" background="muted">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-2xl mb-8">
              <ShoppingCart className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Loja — Landing Pages & Manutenção
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Soluções completas para presença digital com foco em conversão e
              performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.loja.map((service) => (
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

          <div className="grid md:grid-cols-2 gap-8">
            {services.engenharia.map((service) => (
              <Card key={service.slug} hover className="relative">
                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {service.titulo}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                    {service.descricao}
                  </p>
                  <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">
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

                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contato">Orçar Projeto</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
