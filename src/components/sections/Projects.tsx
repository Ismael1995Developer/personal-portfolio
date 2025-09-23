import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Card, CardContent, CardHeader } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { projects } from "@/content/projects";
import { ExternalLink, Github, Zap } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <Section id="projetos">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
            Meus Projetos
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Projetos desenvolvidos com foco em performance, acessibilidade e
            experiência do usuário
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card
              key={project.slug}
              hover
              className="overflow-hidden flex flex-col h-full"
            >
              <CardHeader className="pb-4">
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  {project.imagem ? (
                    <Image
                      src={project.imagem}
                      alt={project.titulo}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-white">
                      <Zap className="h-12 w-12 mb-2" />
                      <span className="text-sm font-medium">
                        Projeto {project.titulo}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {project.titulo}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {project.resumo}
                </p>
              </CardHeader>

              <CardContent className="pt-0 flex flex-col flex-grow">
                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Resultado */}
                {project.resultado && (
                  <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                    <p className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                      📈 {project.resultado}
                    </p>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="primary"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gradient" size="lg" asChild>
            <a
              href="https://github.com/Ismael1995Developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Mais no GitHub
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
