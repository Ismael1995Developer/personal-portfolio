import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { GraduationCap, Code, Wrench, Lightbulb } from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "MongoDB",
  "Prettier",
  "ESLint",
  "Testing Library",
  "Vitest",
];

const formations = [
  {
    icon: GraduationCap,
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Uniftec",
    status: "Concluído",
  },
  {
    icon: Code,
    title: "Engenharia de Software",
    institution: "Uniftec",
    status: "Em andamento",
  },
  {
    icon: Wrench,
    title: "Eletrotécnica",
    institution: "Uniftec",
    status: "Concluído",
  },
];

const differentials = [
  {
    icon: Lightbulb,
    title: "SEO Técnico",
    description:
      "Otimização para mecanismos de busca com foco em performance e acessibilidade",
  },
  {
    icon: Code,
    title: "Código Limpo",
    description:
      "Desenvolvimento seguindo boas práticas e padrões de qualidade",
  },
  {
    icon: Wrench,
    title: "Testes Automatizados",
    description:
      "Implementação de testes unitários e de integração para garantir qualidade",
  },
];

export function About() {
  return (
    <Section id="sobre" background="muted">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Sobre Mim
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Estudante de <strong>Engenharia de Software</strong> e formado em{" "}
            <strong>Análise e Desenvolvimento de Sistemas</strong> pela{" "}
            <strong>Uniftec</strong>. Também formado em{" "}
            <strong>Eletrotécnica</strong> (Uniftec). Integro conhecimentos de
            engenharia e desenvolvimento para entregar soluções digitais de alto
            desempenho e confiabilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Formações */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Formação Acadêmica
            </h3>
            <div className="space-y-4">
              {formations.map((formation, index) => (
                <Card key={index} hover className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                        <formation.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {formation.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        {formation.institution}
                      </p>
                      <Badge
                        variant={
                          formation.status === "Concluído" ? "success" : "info"
                        }
                        size="sm"
                        className="mt-2"
                      >
                        {formation.status}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Diferenciais */}
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
              Diferenciais
            </h3>
            <div className="space-y-4">
              {differentials.map((differential, index) => (
                <Card key={index} hover className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                        <differential.icon className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                        {differential.title}
                      </h4>
                      <p className="text-zinc-600 dark:text-zinc-400 break-words">
                        {differential.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Tecnologias e Ferramentas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="default"
                size="lg"
                className="text-sm px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
