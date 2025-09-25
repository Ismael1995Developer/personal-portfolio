import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { TechIcon } from "@/components/common/TechIcon";
import Image from "next/image";
import {
  GraduationCap,
  Code,
  Wrench,
  Zap,
  Target,
  Building2,
  Laptop,
  Layers,
  BookOpen,
  Globe,
  TrendingUp,
} from "lucide-react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML5",
  "CSS3",
  "MongoDB",
  "Git",
  "GitHub",
  "Postman",
  "Linux",
  "Prettier",
  "ESLint",
  "Testing Library",
  "Vitest",
];

const formations = [
  {
    icon: Code,
    title: "Engenharia de Software",
    institution: "Faculdade da Serra Gaúcha",
    location: "Caxias do Sul",
    status: "Em andamento",
    semester: "3° semestre",
    type: "Ensino Superior",
    isActive: true,
  },
  {
    icon: Zap,
    title: "Engenharia Elétrica",
    institution: "Faculdade da Serra Gaúcha",
    location: "Caxias do Sul",
    status: "Em andamento",
    semester: "2° semestre",
    type: "Ensino Superior",
    isActive: true,
  },
  {
    icon: GraduationCap,
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "UniFtec",
    location: "Caxias do Sul",
    status: "Concluído",
    year: "2023",
    type: "Ensino Superior",
    isActive: false,
  },
  {
    icon: Wrench,
    title: "Eletrotécnico",
    institution: "UniFtec",
    location: "Caxias do Sul",
    status: "Concluído",
    year: "2020",
    type: "Curso Técnico",
    isActive: false,
  },
];

const differentials = [
  {
    icon: Target,
    title: "Formação e Base Técnica Sólida",
    description:
      "Graduação dupla: já concluiu Análise e Desenvolvimento de Sistemas e está cursando Engenharia de Software.",
    details: [
      "Combinação de conhecimento prático aplicado + base teórica avançada",
      "Evolução constante como desenvolvedor",
      "Base sólida em programação e engenharia de software",
    ],
  },
  {
    icon: Building2,
    title: "Experiência Profissional em Tecnologia e Infraestrutura",
    description:
      "Experiência como Técnico em Eletrônica/Segurança Eletrônica e Atendimento em Elevadores, com forte atuação em manutenção, redes e automação predial.",
    details: [
      "Raciocínio lógico e resolução de problemas",
      "Atuação prática em sistemas complexos",
    ],
  },
  {
    icon: Laptop,
    title: "Projetos Reais em Desenvolvimento Web",
    description:
      "Já construiu sites institucionais, portfólio próprio, integrações de formulários e otimização SEO.",
    details: [
      "Vivência prática além dos estudos",
      "Aplicação real dos conhecimentos",
      "Experiência com projetos completos",
    ],
  },
  {
    icon: Layers,
    title: "Versatilidade em Ferramentas e Tecnologias",
    description:
      "Domínio de HTML, CSS, JavaScript e React, além de WordPress, Tailwind e Bootstrap.",
    details: [
      "Experiência com Git/GitHub e versionamento",
      "Atuação em front-end moderno e soluções híbridas",
      "WordPress + código customizado",
    ],
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    description:
      "Diversos cursos e certificações em andamento, como React avançado e JavaScript completo com Node.js.",
    details: [
      "Compromisso com atualização constante",
      "Mentalidade de crescimento contínuo",
    ],
  },
  {
    icon: Globe,
    title: "Perfil Pessoal e Competências Comportamentais",
    description: "Adaptabilidade, proatividade e boa comunicação",
    details: [
      "Experiência em ambientes de pressão",
      "Trabalho em equipes multidisciplinares",
      "Valor agregado em empresas ágeis",
    ],
  },
  {
    icon: TrendingUp,
    title: "Diferenciais Estratégicos",
    description:
      "Transição de carreira estruturada e portfólio ativo com mentalidade de solução.",
    details: [
      "Transição de área técnica para desenvolvimento",
      "Visão prática e multidisciplinar",
      "Base em SEO e otimização",
      "Mentalidade de resolução rápida de problemas",
    ],
  },
];

export function About() {
  return (
    <Section id="sobre" background="gradient-about">
      <Container>
        {/* Cartão de Boas-vindas */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                <Image
                  src="/frontlogo.png"
                  alt="José Ismael Correia - Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                  priority
                />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Olá! 👋 Sou José Ismael Correia
              </h2>

              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                Sou desenvolvedor front-end em formação com{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  graduação em Análise e Desenvolvimento de Sistemas
                </span>{" "}
                e em andamento em{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Engenharia de Software
                </span>
                .
              </p>

              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Minha trajetória combina sólida base técnica em programação{" "}
                <span className="font-semibold text-gray-800">
                  (JavaScript, React, HTML, CSS, Tailwind)
                </span>{" "}
                com experiência prática em projetos de sites institucionais,
                portfólios e integrações.
              </p>
            </div>

            {/* Destaques em cards pequenos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  SEO Técnico
                </h3>
                <p className="text-sm text-gray-600">
                  Performance e acessibilidade
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Código Limpo
                </h3>
                <p className="text-sm text-gray-600">
                  Boas práticas e qualidade
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🧪</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Testes</h3>
                <p className="text-sm text-gray-600">
                  Automatizados e confiáveis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formações */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Formação Acadêmica
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formations.map((formation, index) => (
              <Card
                key={index}
                hover
                className={`p-6 relative overflow-hidden ${
                  formation.isActive
                    ? "ring-2 ring-indigo-500/50 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/50"
                    : ""
                }`}
              >
                {/* Destaque para cursos em andamento */}
                {formation.isActive && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-indigo-500"></div>
                )}

                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${
                      formation.isActive
                        ? "bg-indigo-100 dark:bg-indigo-900"
                        : "bg-zinc-100 dark:bg-zinc-800"
                    }`}
                  >
                    <formation.icon
                      className={`h-8 w-8 ${
                        formation.isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-zinc-600 dark:text-zinc-400"
                      }`}
                    />
                  </div>

                  <h4
                    className={`text-lg font-semibold mb-2 ${
                      formation.isActive
                        ? "text-indigo-900 dark:text-indigo-100"
                        : "text-zinc-900 dark:text-white"
                    }`}
                  >
                    {formation.title}
                  </h4>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                    {formation.institution}
                  </p>

                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mb-3">
                    {formation.location}
                  </p>

                  <div className="flex flex-col items-center gap-2">
                    <Badge
                      variant={
                        formation.status === "Concluído"
                          ? "success"
                          : formation.isActive
                            ? "default"
                            : "secondary"
                      }
                      size="sm"
                      className={
                        formation.isActive
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : ""
                      }
                    >
                      {formation.status}
                    </Badge>

                    {formation.isActive && (
                      <Badge variant="secondary" size="sm">
                        {formation.semester}
                      </Badge>
                    )}

                    {!formation.isActive && formation.year && (
                      <Badge variant="secondary" size="sm">
                        {formation.year}
                      </Badge>
                    )}

                    <span className="text-xs text-zinc-500 dark:text-zinc-500">
                      {formation.type}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Diferenciais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((differential, index) => (
              <Card key={index} hover className="p-6">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <differential.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {differential.title}
                    </h4>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {differential.description}
                  </p>

                  <ul className="space-y-2">
                    {differential.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-indigo-500 mr-2 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 pb-16 sm:pb-20 lg:pb-24">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tecnologias e Ferramentas
          </h3>

          {/* Carrossel Infinito */}
          <div className="relative overflow-hidden rounded-xl">
            {/* Gradiente esquerdo */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none"></div>

            {/* Gradiente direito */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none"></div>

            {/* Container do carrossel */}
            <div className="flex animate-scroll py-4">
              {/* Primeira linha de tecnologias */}
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-shrink-0">
                {skills.map((skill) => (
                  <div
                    key={`first-${skill}`}
                    className="group relative flex flex-col items-center p-2 sm:p-3 bg-white dark:bg-zinc-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-zinc-200 dark:border-zinc-700 min-w-[60px] sm:min-w-[70px]"
                    title={skill}
                  >
                    <TechIcon
                      name={skill}
                      size={24}
                      className="text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    />
                    <span className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Segunda linha de tecnologias (duplicada para loop infinito) */}
              <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 flex-shrink-0 ml-4 sm:ml-6 lg:ml-8">
                {skills.map((skill) => (
                  <div
                    key={`second-${skill}`}
                    className="group relative flex flex-col items-center p-2 sm:p-3 bg-white dark:bg-zinc-800 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-zinc-200 dark:border-zinc-700 min-w-[60px] sm:min-w-[70px]"
                    title={skill}
                  >
                    <TechIcon
                      name={skill}
                      size={24}
                      className="text-zinc-700 dark:text-zinc-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300"
                    />
                    <span className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
