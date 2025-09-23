import Link from "next/link";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-600">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Página não encontrada
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              A página que você está procurando não existe ou foi movida.
            </p>
          </div>

          <div className="space-y-4">
            <Button variant="gradient" asChild>
              <Link href="/">Voltar ao início</Link>
            </Button>
            <div>
              <Button variant="outline" asChild>
                <Link href="#contato">Entrar em contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
