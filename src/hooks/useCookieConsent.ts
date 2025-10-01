"use client";

import { useState, useEffect } from "react";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Verificar se estamos no cliente antes de acessar localStorage
    if (typeof window !== "undefined") {
      // Carregar preferências salvas
      const savedConsent = localStorage.getItem("cookieConsent");
      if (savedConsent) {
        try {
          const parsedPreferences = JSON.parse(savedConsent);
          setPreferences(parsedPreferences);
          setHasConsent(true);
        } catch (error) {
          console.error("Erro ao carregar preferências de cookies:", error);
        }
      }
    }
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookieConsent", JSON.stringify(newPreferences));
      localStorage.setItem("cookieConsentDate", new Date().toISOString());
    }
    setHasConsent(true);
  };

  const clearConsent = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cookieConsent");
      localStorage.removeItem("cookieConsentDate");
    }
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setHasConsent(false);
  };

  const hasAnalyticsConsent = () => {
    return preferences.analytics;
  };

  const hasMarketingConsent = () => {
    return preferences.marketing;
  };

  const hasFunctionalConsent = () => {
    return preferences.functional;
  };

  return {
    preferences,
    hasConsent,
    updatePreferences,
    clearConsent,
    hasAnalyticsConsent,
    hasMarketingConsent,
    hasFunctionalConsent,
  };
}
