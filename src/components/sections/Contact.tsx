"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { MessageCircle, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { event } from "@/lib/analytics";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Aqui você implementaria o envio real do formulário
      console.log("Formulário enviado:", data);

      // Track form submission
      event({
        action: "form_submit",
        category: "contact",
        label: data.servico,
      });

      setIsSubmitted(true);
      reset();

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contato">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Entre em contato e vamos conversar sobre seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Solicitar Orçamento
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Preencha o formulário e entraremos em contato em até 24h
              </p>
            </CardHeader>

            <CardContent>
              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-3" />
                  <p className="text-emerald-800 dark:text-emerald-200 font-medium">
                    Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      {...register("nome")}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                      placeholder="Seu nome completo"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.nome.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      {...register("telefone")}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                      placeholder="(54) 99961-487"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="servico"
                      className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Tipo de serviço *
                    </label>
                    <select
                      id="servico"
                      {...register("servico")}
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="landing-page">Landing Page</option>
                      <option value="manutencao">Manutenção de Site</option>
                      <option value="marketing">Marketing Digital</option>
                      <option value="projeto-fotovoltaico">
                        Projeto Fotovoltaico
                      </option>
                      <option value="projeto-eletrico">Projeto Elétrico</option>
                      <option value="outros">Outros</option>
                    </select>
                    {errors.servico && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.servico.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    {...register("mensagem")}
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white resize-none"
                    placeholder="Conte-me mais sobre seu projeto..."
                  />
                  {errors.mensagem && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.mensagem.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de contato */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  Informações de Contato
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Outras formas de entrar em contato
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      WhatsApp
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Resposta rápida
                    </p>
                    <a
                      href="https://wa.me/555499961487"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      onClick={() =>
                        event({
                          action: "click",
                          category: "contact",
                          label: "whatsapp_info",
                        })
                      }
                    >
                      (54) 99996-1487
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      E-mail
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Resposta em até 24h
                    </p>
                    <a
                      href="mailto:ismael1995internacional@gmail.com"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      ismael1995internacional@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white">
                      Localização
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Atendimento remoto
                    </p>
                    <p className="text-zinc-500 dark:text-zinc-500">Brasil</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA direto */}
            <Card className="gradient-brand text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">
                  Precisa de uma resposta mais rápida?
                </h3>
                <p className="mb-4 opacity-90">
                  Chame no WhatsApp para conversarmos agora mesmo
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-indigo-600"
                  asChild
                >
                  <a
                    href="https://wa.me/555499961487"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      event({
                        action: "click",
                        category: "contact",
                        label: "whatsapp_cta",
                      })
                    }
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chamar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}
