"use client";

import { useState, useEffect } from "react";
import { User, Heart } from "lucide-react";
import { Button } from "./Button";

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    // Verificar se já existe um nome salvo no localStorage
    const savedName = localStorage.getItem("userName");
    const hasVisited = localStorage.getItem("hasVisited");

    if (savedName) {
      setIsReturning(true);
      setName(savedName);
    }

    // Mostrar popup apenas se não tiver visitado antes ou se for retorno
    if (!hasVisited || savedName) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // Delay de 1 segundo para melhor UX

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem("userName", name.trim());
      localStorage.setItem("hasVisited", "true");
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasVisited", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            {isReturning ? (
              <Heart className="h-8 w-8 text-white" />
            ) : (
              <User className="h-8 w-8 text-white" />
            )}
          </div>

          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
            {isReturning ? `Que bom que retornou, ${name}!` : "Bem-vindo!"}
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {isReturning
              ? "Ficamos felizes em vê-lo novamente. Como posso ajudá-lo hoje?"
              : "Para personalizar sua experiência, me diga como posso chamá-lo:"}
          </p>

          {!isReturning && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                  autoFocus
                />
              </div>
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Pular
                </Button>
                <Button type="submit" variant="gradient" className="flex-1">
                  Continuar
                </Button>
              </div>
            </form>
          )}

          {isReturning && (
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Fechar
              </Button>
              <Button
                variant="gradient"
                onClick={() => (window.location.href = "#contato")}
                className="flex-1"
              >
                Vamos conversar!
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
