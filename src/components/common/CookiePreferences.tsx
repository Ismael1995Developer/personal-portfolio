"use client";

import { useState } from "react";
import { Settings, Cookie } from "lucide-react";
import { Button } from "./Button";
import { useCookieConsent } from "@/hooks/useCookieConsent";

export function CookiePreferences() {
  const [isOpen, setIsOpen] = useState(false);
  const { preferences, updatePreferences, hasConsent } = useCookieConsent();

  const handleAcceptAll = () => {
    updatePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    setIsOpen(false);
  };

  const handleRejectAll = () => {
    updatePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setIsOpen(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return; // Não pode ser desabilitado

    updatePreferences({
      ...preferences,
      [key]: !preferences[key],
    });
  };

  if (!hasConsent) return null;

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-xs"
      >
        <Cookie className="h-3 w-3" />
        Cookies
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 max-w-2xl w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configurações de Cookies
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </Button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Cookies Necessários */}
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Cookies Necessários
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Essenciais para o funcionamento básico do site.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Sempre Ativo
                  </span>
                </div>
              </div>

              {/* Cookies de Analytics */}
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Cookies de Analytics
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Nos ajudam a entender como você usa o site.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference("analytics")}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                    preferences.analytics
                      ? "bg-blue-500 justify-end"
                      : "bg-zinc-300 dark:bg-zinc-600 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                </button>
              </div>

              {/* Cookies de Marketing */}
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Cookies de Marketing
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Usados para personalizar anúncios e campanhas.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference("marketing")}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                    preferences.marketing
                      ? "bg-blue-500 justify-end"
                      : "bg-zinc-300 dark:bg-zinc-600 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                </button>
              </div>

              {/* Cookies Funcionais */}
              <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-zinc-900 dark:text-white">
                    Cookies Funcionais
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Permitem funcionalidades avançadas e personalização.
                  </p>
                </div>
                <button
                  onClick={() => togglePreference("functional")}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors ${
                    preferences.functional
                      ? "bg-blue-500 justify-end"
                      : "bg-zinc-300 dark:bg-zinc-600 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-700">
              <Button
                variant="outline"
                onClick={handleRejectAll}
                className="flex-1"
              >
                Rejeitar Todos
              </Button>
              <Button
                variant="gradient"
                onClick={handleAcceptAll}
                className="flex-1"
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
