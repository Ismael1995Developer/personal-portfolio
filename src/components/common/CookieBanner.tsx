"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Settings, Check } from "lucide-react";
import { Button } from "./Button";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Sempre true, não pode ser desabilitado
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Verificar se o usuário já fez uma escolha
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };

    setPreferences(allPreferences);
    savePreferences(allPreferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };

    setPreferences(minimalPreferences);
    savePreferences(minimalPreferences);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookieConsent", JSON.stringify(prefs));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());

    // Aqui você pode implementar a lógica para ativar/desativar cookies
    // baseado nas preferências do usuário
    if (prefs.analytics) {
      // Ativar Google Analytics
      console.log("Analytics cookies ativados");
    }

    if (prefs.marketing) {
      // Ativar cookies de marketing
      console.log("Marketing cookies ativados");
    }

    if (prefs.functional) {
      // Ativar cookies funcionais
      console.log("Functional cookies ativados");
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Não pode ser desabilitado

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 p-6">
          {!showPreferences ? (
            // Banner principal
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                    🍪 Usamos cookies para melhorar sua experiência
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Utilizamos cookies essenciais e opcionais para personalizar
                    conteúdo, analisar tráfego e melhorar nossos serviços. Você
                    pode escolher quais tipos de cookies aceitar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowPreferences(true)}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Personalizar
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="text-zinc-600 dark:text-zinc-400"
                >
                  Rejeitar Todos
                </Button>
                <Button
                  variant="gradient"
                  onClick={handleAcceptAll}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Aceitar Todos
                </Button>
              </div>
            </div>
          ) : (
            // Painel de preferências
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Configurações de Cookies
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPreferences(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                {/* Cookies Necessários */}
                <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Cookies Necessários
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Essenciais para o funcionamento básico do site. Não podem
                      ser desabilitados.
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
                <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Cookies de Analytics
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Nos ajudam a entender como você usa o site para melhorar a
                      experiência.
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
                <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Cookies de Marketing
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Usados para personalizar anúncios e medir a eficácia de
                      campanhas.
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
                <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-zinc-900 dark:text-white">
                      Cookies Funcionais
                    </h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      Permitem funcionalidades avançadas e personalização da
                      experiência.
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
                  onClick={handleSavePreferences}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
