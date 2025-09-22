import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
                <span className="block">Desenvolvimento Front-end</span>
                <span className="block">com foco em performance</span>
                <span className="block">e conversão</span>
              </h1>

              {/* Subheadline */}
              <div className="text-lg sm:text-xl lg:text-2xl text-zinc-200 mb-12 leading-relaxed animate-fade-in-up">
                <p className="mb-6">
                  Sou{" "}
                  <strong className="text-white">José Ismael Correia</strong>,
                  desenvolvedor Front-end.
                </p>
                <p className="mb-6">
                  Trabalho com{" "}
                  <strong className="text-amber-400">JavaScript</strong>,{" "}
                  <strong className="text-amber-400">TypeScript</strong>,{" "}
                  <strong className="text-amber-400">Next.js</strong>,{" "}
                  <strong className="text-amber-400">React</strong>,{" "}
                  <strong className="text-amber-400">Node.js</strong>,{" "}
                  <strong className="text-amber-400">HTML/CSS</strong> e{" "}
                  <strong className="text-amber-400">MongoDB</strong>.
                </p>
                <p>
                  Código limpo com{" "}
                  <strong className="text-sky-400">Prettier</strong>, qualidade
                  com <strong className="text-sky-400">ESLint</strong> e testes.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-20 animate-fade-in-up">
                <Button
                  variant="gradient"
                  size="lg"
                  className="text-lg px-8 py-4 group w-full sm:w-auto"
                  asChild
                >
                  <a href="#contato">
                    Solicitar Orçamento
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-zinc-900 w-full sm:w-auto"
                  asChild
                >
                  <a href="#projetos">Ver Projetos</a>
                </Button>

                {/* Scroll Indicator */}
                <div className="hidden lg:flex items-center ml-8 animate-bounce">
                  <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src="/Foto_perfil.jpg"
                    alt="José Ismael Correia - Desenvolvedor Front-end"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto animate-fade-in-up">
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-3">
                5+
              </div>
              <div className="text-sm sm:text-base text-zinc-300">
                Projetos Entregues
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-3">
                95+
              </div>
              <div className="text-sm sm:text-base text-zinc-300">
                Performance Score
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-3">
                100%
              </div>
              <div className="text-sm sm:text-base text-zinc-300">
                Satisfação do Cliente
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
