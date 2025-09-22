"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card, CardContent } from "@/components/common/Card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Qual é o prazo médio para uma landing page?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Uma Landing Page Essencial leva de 7 a 10 dias úteis, enquanto uma Landing Page Pro pode levar de 15 a 20 dias úteis. Sempre entregamos dentro do prazo acordado.",
  },
  {
    question: "O que está incluso na manutenção de sites?",
    answer:
      "A manutenção inclui atualizações de segurança mensais, correções de bugs, monitoramento de performance, backup automático e relatórios mensais de status. Também fazemos pequenos ajustes e melhorias conforme necessário.",
  },
  {
    question: "Como funciona a gestão de anúncios?",
    answer:
      "Fazemos a configuração completa das contas, criação e otimização de campanhas, análise de performance e relatórios detalhados. Trabalhamos com Google Ads, Meta Ads e outras plataformas conforme a necessidade do cliente.",
  },
  {
    question: "Quais documentos preciso para projeto fotovoltaico?",
    answer:
      "Para projetos fotovoltaicos, precisamos da conta de energia dos últimos 12 meses, planta baixa da residência/empresa, foto do telhado e área disponível. Para projetos elétricos, a planta baixa e especificações dos equipamentos.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim! Oferecemos 30 dias de suporte gratuito para landing pages e suporte contínuo para clientes de manutenção. Para projetos de engenharia, oferecemos suporte durante todo o processo de homologação.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Para desenvolvimento, cobramos 50% na assinatura do contrato e 50% na entrega. Para manutenção e marketing, cobrança mensal. Para projetos de engenharia, parcelamos conforme cronograma de entrega. Aceitamos PIX, boleto e cartão.",
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <Section id="faq" background="muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </div>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <CardContent className="pt-0 pb-6">
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
