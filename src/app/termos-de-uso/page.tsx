import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { FileText, Mail, Phone, AlertTriangle } from "lucide-react";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Section className="pt-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mb-6">
                  <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  Termos de Uso
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mb-8 border-l-4 border-amber-400">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-2">
                        Aviso Importante
                      </h2>
                      <p className="text-amber-700 dark:text-amber-300">
                        Ao utilizar nossos serviços, você concorda com estes
                        termos. Leia atentamente antes de contratar nossos
                        serviços.
                      </p>
                    </div>
                  </div>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    1. Definições
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      <strong>
                        &ldquo;Nós&rdquo;, &ldquo;Nossa empresa&rdquo;,
                        &ldquo;Ultratech Sistemas&rdquo;:
                      </strong>{" "}
                      Refere-se à empresa prestadora dos serviços
                    </li>
                    <li>
                      <strong>
                        &ldquo;Você&rdquo;, &ldquo;Cliente&rdquo;:
                      </strong>{" "}
                      Refere-se à pessoa física ou jurídica que contrata nossos
                      serviços
                    </li>
                    <li>
                      <strong>&ldquo;Serviços&rdquo;:</strong> Incluem
                      desenvolvimento web, marketing digital e projetos de
                      engenharia
                    </li>
                    <li>
                      <strong>&ldquo;Site&rdquo;:</strong> Refere-se ao website
                      e plataformas digitais da empresa
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    2. Descrição dos Serviços
                  </h2>

                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                    2.1 Desenvolvimento Web
                  </h3>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Criação de landing pages e sites institucionais</li>
                    <li>Desenvolvimento de aplicações web responsivas</li>
                    <li>Otimização de performance e SEO</li>
                    <li>Manutenção e suporte técnico</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                    2.2 Marketing Digital
                  </h3>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      Configuração e gestão de campanhas Google Ads e Meta Ads
                    </li>
                    <li>Análise de performance e otimização de campanhas</li>
                    <li>Relatórios de ROI e conversões</li>
                    <li>Consultoria em estratégias digitais</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                    2.3 Projetos de Engenharia
                  </h3>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Projetos fotovoltaicos e elétricos</li>
                    <li>Memoriais descritivos e ART</li>
                    <li>Documentação para homologação</li>
                    <li>Consultoria técnica especializada</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    3. Processo de Contratação
                  </h2>
                  <ol className="list-decimal pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      Solicitação de orçamento através do site ou contato direto
                    </li>
                    <li>Análise dos requisitos e elaboração de proposta</li>
                    <li>Apresentação da proposta detalhada</li>
                    <li>Aprovação e assinatura do contrato</li>
                    <li>Início da execução dos serviços</li>
                    <li>Entrega e aprovação final</li>
                  </ol>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    4. Obrigações do Cliente
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      Fornecer informações completas e precisas sobre o projeto
                    </li>
                    <li>Disponibilizar materiais e recursos necessários</li>
                    <li>Realizar pagamentos conforme acordado</li>
                    <li>Participar ativamente do processo de aprovação</li>
                    <li>Respeitar os prazos estabelecidos</li>
                    <li>
                      Manter confidencialidade sobre metodologias proprietárias
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    5. Obrigações da Empresa
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      Executar os serviços com qualidade e profissionalismo
                    </li>
                    <li>Cumprir os prazos estabelecidos no contrato</li>
                    <li>
                      Manter confidencialidade sobre informações do cliente
                    </li>
                    <li>Fornecer suporte técnico conforme acordado</li>
                    <li>
                      Garantir a conformidade com normas técnicas aplicáveis
                    </li>
                    <li>Entregar documentação completa dos projetos</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    6. Pagamentos e Preços
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      Os preços são válidos conforme especificado na proposta
                    </li>
                    <li>
                      Pagamentos devem ser realizados conforme cronograma
                      acordado
                    </li>
                    <li>
                      Alterações no escopo podem resultar em ajustes de preço
                    </li>
                    <li>
                      Juros e multas aplicáveis em caso de atraso no pagamento
                    </li>
                    <li>
                      Reembolsos conforme política específica de cada serviço
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    7. Propriedade Intelectual
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      O cliente possui os direitos sobre o produto final
                      entregue
                    </li>
                    <li>
                      Metodologias e ferramentas proprietárias permanecem
                      conosco
                    </li>
                    <li>
                      O cliente não pode replicar nossos processos para
                      terceiros
                    </li>
                    <li>
                      Uso de bibliotecas e frameworks segue suas respectivas
                      licenças
                    </li>
                    <li>
                      Conteúdo criado pelo cliente deve ter direitos de uso
                      adequados
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    8. Limitação de Responsabilidade
                  </h2>
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-400">
                    <p className="text-red-700 dark:text-red-300 mb-4">
                      <strong>Importante:</strong> Nossa responsabilidade é
                      limitada ao valor pago pelos serviços contratados.
                    </p>
                    <ul className="list-disc pl-6 text-red-700 dark:text-red-300">
                      <li>
                        Não nos responsabilizamos por perdas indiretas ou lucros
                        cessantes
                      </li>
                      <li>
                        Danos causados por terceiros ou força maior não são de
                        nossa responsabilidade
                      </li>
                      <li>
                        O cliente é responsável por backups e segurança de seus
                        dados
                      </li>
                      <li>
                        Alterações não aprovadas pelo cliente podem invalidar
                        garantias
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    9. Garantias
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      <strong>Desenvolvimento Web:</strong> 30 dias para
                      correção de bugs
                    </li>
                    <li>
                      <strong>Marketing Digital:</strong> Otimização contínua
                      conforme contrato
                    </li>
                    <li>
                      <strong>Projetos de Engenharia:</strong> Conformidade com
                      normas técnicas
                    </li>
                    <li>Garantias não cobrem alterações não aprovadas</li>
                    <li>Suporte técnico conforme especificado no contrato</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    10. Rescisão
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      Qualquer das partes pode rescindir com 15 dias de
                      antecedência
                    </li>
                    <li>Pagamento proporcional pelos serviços já executados</li>
                    <li>
                      Entrega de materiais e documentação já desenvolvidos
                    </li>
                    <li>
                      Rescisão por descumprimento pode ter efeito imediato
                    </li>
                    <li>Cláusulas de confidencialidade permanecem válidas</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    11. Foro e Legislação
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Estes termos são regidos pela legislação brasileira. Para
                    resolução de conflitos, fica eleito o foro da comarca de
                    Passo Fundo/RS.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    12. Alterações nos Termos
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Estes termos podem ser alterados a qualquer momento.
                    Alterações serão comunicadas através do site ou por e-mail.
                    O uso continuado dos serviços após as alterações constitui
                    aceitação dos novos termos.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    13. Contato
                  </h2>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Para esclarecimentos sobre estes termos ou questões
                      contratuais:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-zinc-700 dark:text-zinc-300">
                          E-mail: ismael1995internacional@gmail.com
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-zinc-700 dark:text-zinc-300">
                          WhatsApp: (55) 54 99996-1487
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
