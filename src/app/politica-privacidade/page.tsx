import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { Shield, Mail, Phone } from "lucide-react";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Section className="pt-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl mb-6">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                  Política de Privacidade
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  Última atualização: {new Date().toLocaleDateString("pt-BR")}
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    Resumo Executivo
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Esta Política de Privacidade descreve como coletamos, usamos
                    e protegemos suas informações pessoais quando você utiliza
                    nossos serviços de desenvolvimento web, marketing digital e
                    projetos de engenharia.
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    1. Informações que Coletamos
                  </h2>

                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                    1.1 Informações Fornecidas Diretamente
                  </h3>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Nome completo e dados de contato (e-mail, telefone)</li>
                    <li>Informações da empresa ou projeto</li>
                    <li>Requisitos técnicos e especificações do projeto</li>
                    <li>Comunicações via WhatsApp, e-mail ou formulários</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-3">
                    1.2 Informações Coletadas Automaticamente
                  </h3>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Dados de navegação e uso do site</li>
                    <li>Endereço IP e informações do dispositivo</li>
                    <li>Cookies e tecnologias similares</li>
                    <li>Dados de analytics e performance</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    2. Como Utilizamos suas Informações
                  </h2>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Fornecer e melhorar nossos serviços</li>
                    <li>Comunicar sobre projetos e propostas</li>
                    <li>Processar pagamentos e contratos</li>
                    <li>
                      Enviar atualizações e newsletters (com seu consentimento)
                    </li>
                    <li>Analisar o uso do site para melhorias</li>
                    <li>Cumprir obrigações legais e contratuais</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    3. Compartilhamento de Informações
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Não vendemos, alugamos ou compartilhamos suas informações
                    pessoais com terceiros, exceto nas seguintes situações:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais</li>
                    <li>
                      Com prestadores de serviços que nos auxiliam (sob acordos
                      de confidencialidade)
                    </li>
                    <li>
                      Em caso de fusão, aquisição ou reestruturação da empresa
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    4. Segurança dos Dados
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Implementamos medidas de segurança técnicas e
                    organizacionais para proteger suas informações:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>Criptografia de dados sensíveis</li>
                    <li>Acesso restrito a informações pessoais</li>
                    <li>Monitoramento regular de segurança</li>
                    <li>Backup seguro dos dados</li>
                    <li>Treinamento da equipe em proteção de dados</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    5. Seus Direitos (LGPD)
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Conforme a Lei Geral de Proteção de Dados (LGPD), você tem
                    os seguintes direitos:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      <strong>Acesso:</strong> Solicitar informações sobre seus
                      dados pessoais
                    </li>
                    <li>
                      <strong>Correção:</strong> Corrigir dados incompletos ou
                      incorretos
                    </li>
                    <li>
                      <strong>Exclusão:</strong> Solicitar a exclusão de dados
                      desnecessários
                    </li>
                    <li>
                      <strong>Portabilidade:</strong> Transferir seus dados para
                      outro fornecedor
                    </li>
                    <li>
                      <strong>Revogação:</strong> Retirar o consentimento a
                      qualquer momento
                    </li>
                    <li>
                      <strong>Oposição:</strong> Opor-se ao tratamento de seus
                      dados
                    </li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    6. Cookies e Tecnologias Similares
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                    Utilizamos cookies para melhorar sua experiência no site:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-300">
                    <li>
                      <strong>Cookies Essenciais:</strong> Necessários para o
                      funcionamento do site
                    </li>
                    <li>
                      <strong>Cookies de Analytics:</strong> Para entender como
                      o site é usado
                    </li>
                    <li>
                      <strong>Cookies de Preferências:</strong> Para lembrar
                      suas configurações
                    </li>
                  </ul>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Você pode gerenciar as preferências de cookies através das
                    configurações do seu navegador.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    7. Retenção de Dados
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Mantemos suas informações pessoais apenas pelo tempo
                    necessário para cumprir os propósitos descritos nesta
                    política, salvo quando um período de retenção mais longo for
                    exigido por lei.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    8. Alterações nesta Política
                  </h2>
                  <p className="text-zinc-700 dark:text-zinc-300">
                    Esta política pode ser atualizada periodicamente.
                    Notificaremos sobre mudanças significativas através do site
                    ou por e-mail. A data da última atualização está indicada no
                    topo desta página.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                    9. Contato
                  </h2>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                      Para exercer seus direitos ou esclarecer dúvidas sobre
                      esta política, entre em contato conosco:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-zinc-700 dark:text-zinc-300">
                          E-mail: ismael1995internacional@gmail.com
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
