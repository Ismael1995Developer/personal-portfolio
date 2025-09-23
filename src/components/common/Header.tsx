"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2, MessageCircle, Mail } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Projetos", href: "#projetos" },
  { name: "Loja", href: "#loja" },
  { name: "Marketing", href: "#marketing" },
  { name: "Engenharia", href: "#engenharia" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-700 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white">
                José Ismael
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://wa.me/555499961487"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Link>
            </Button>
            <Button variant="gradient" size="sm" asChild>
              <Link href="#contato">
                <Mail className="h-4 w-4 mr-2" />
                Solicitar Orçamento
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Abrir menu principal</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center"
                asChild
              >
                <Link
                  href="https://wa.me/555499961487"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Link>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="w-full justify-center"
                asChild
              >
                <Link href="#contato">
                  <Mail className="h-4 w-4 mr-2" />
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
