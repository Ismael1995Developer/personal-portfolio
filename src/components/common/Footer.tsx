import Link from "next/link";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  servicos: [
    { name: "Landing Pages", href: "#desenvolvimento" },
    { name: "Manutenção de Sites", href: "#desenvolvimento" },
    { name: "Marketing Digital", href: "#marketing" },
    { name: "Projetos Fotovoltaicos", href: "#engenharia" },
    { name: "Projetos Elétricos", href: "#engenharia" },
  ],
  links: [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ],
  legal: [
    { name: "Política de Privacidade", href: "/politica-privacidade" },
    { name: "Termos de Uso", href: "/termos-de-uso" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">José Ismael</span>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-sm">
              Desenvolvedor Front-end em JavaScript, TypeScript, React e
              Next.js. Também atuo com Marketing Digital e Projetos
              Fotovoltaicos/Elétricos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ismael1995Developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/joseismaelcorreia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ismael1995internacional@gmail.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vamos conversar?</h3>
            <p className="text-zinc-400 mb-6">
              Pronto para começar seu projeto? Entre em contato agora mesmo!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-zinc-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} José Ismael Correia. Todos os
              direitos reservados.
            </div>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
