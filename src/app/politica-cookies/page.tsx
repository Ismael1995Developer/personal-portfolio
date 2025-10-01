import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export const metadata: Metadata = {
  title: "Política de Cookies - José Ismael Correia",
  description:
    "Saiba como utilizamos cookies em nosso site para melhorar sua experiência de navegação.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900">
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
            Política de Cookies
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Esta política explica como utilizamos cookies e tecnologias
              similares em nosso site.
            </p>

            <Section className="mb-8">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                O que são cookies?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Cookies são pequenos arquivos de texto armazenados no seu
                dispositivo quando você visita um site. Eles nos ajudam a
                fornecer uma experiência melhor e mais personalizada.
              </p>
            </Section>

            <Section className="mb-8">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Tipos de cookies que utilizamos
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    🍪 Cookies Necessários
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    Essenciais para o funcionamento básico do site. Incluem
                    cookies de sessão, preferências de idioma e configurações de
                    segurança.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    <strong>Status:</strong> Sempre ativos (não podem ser
                    desabilitados)
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    📊 Cookies de Analytics
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    Nos ajudam a entender como você usa o site, quais páginas
                    são mais visitadas e como podemos melhorar a experiência do
                    usuário.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    <strong>Ferramentas:</strong> Google Analytics, Hotjar
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    🎯 Cookies de Marketing
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    Usados para personalizar anúncios, medir a eficácia de
                    campanhas e fornecer conteúdo relevante baseado em seus
                    interesses.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    <strong>Ferramentas:</strong> Google Ads, Facebook Pixel,
                    LinkedIn Insight
                  </p>
                </div>

                <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    ⚙️ Cookies Funcionais
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-2">
                    Permitem funcionalidades avançadas como chat ao vivo,
                    formulários interativos e personalização da interface do
                    usuário.
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    <strong>Ferramentas:</strong> Intercom, Typeform, Calendly
                  </p>
                </div>
              </div>
            </Section>

            <Section className="mb-8">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Como gerenciar seus cookies
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Você pode gerenciar suas preferências de cookies a qualquer
                momento:
              </p>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>Use o banner de cookies que aparece na primeira visita</li>
                <li>Acesse as configurações de cookies no rodapé do site</li>
                <li>
                  Configure seu navegador para bloquear ou aceitar cookies
                </li>
                <li>Use ferramentas de opt-out fornecidas por terceiros</li>
              </ul>
            </Section>

            <Section className="mb-8">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Cookies de terceiros
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Alguns cookies são definidos por serviços de terceiros que
                aparecem em nossas páginas:
              </p>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  Serviços que utilizamos:
                </h3>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  <li>
                    <strong>Google Analytics:</strong> Análise de tráfego e
                    comportamento
                  </li>
                  <li>
                    <strong>Google Ads:</strong> Publicidade direcionada
                  </li>
                  <li>
                    <strong>Facebook Pixel:</strong> Rastreamento de conversões
                  </li>
                  <li>
                    <strong>LinkedIn Insight:</strong> Análise de público
                    profissional
                  </li>
                  <li>
                    <strong>Hotjar:</strong> Análise de experiência do usuário
                  </li>
                </ul>
              </div>
            </Section>

            <Section className="mb-8">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Seus direitos
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                De acordo com a LGPD e GDPR, você tem o direito de:
              </p>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
                <li>Ser informado sobre o uso de cookies</li>
                <li>Consentir ou recusar cookies não essenciais</li>
                <li>Retirar seu consentimento a qualquer momento</li>
                <li>Acessar, corrigir ou excluir seus dados</li>
                <li>Solicitar a portabilidade dos seus dados</li>
              </ul>
            </Section>

            <Section className="mb-8">
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Alterações nesta política
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Podemos atualizar esta política de cookies periodicamente.
                Quando isso acontecer, notificaremos você através de um banner
                no site ou por email.
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                <strong>Última atualização:</strong>{" "}
                {new Date().toLocaleDateString("pt-BR")}
              </p>
            </Section>

            <Section>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">
                Contato
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Se você tiver dúvidas sobre nossa política de cookies, entre em
                contato:
              </p>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg">
                <p className="text-zinc-600 dark:text-zinc-400">
                  <strong>Email:</strong> ismael1995internacional.com.br
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <strong>WhatsApp:</strong> (54) 99996-1487
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <strong>Endereço:</strong> Rua Henrique Leonard, 645 - Caxias
                  do Sul, RS
                </p>
              </div>
            </Section>
          </div>
        </div>
      </Container>
    </div>
  );
}
