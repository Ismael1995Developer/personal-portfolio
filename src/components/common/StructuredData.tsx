"use client";

import { useEffect } from "react";
import { structuredData } from "@/lib/seo";

export function StructuredData() {
  useEffect(() => {
    // Criar o script apenas no cliente para evitar erros de hidratação
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    script.id = "structured-data";

    // Remover script anterior se existir
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Adicionar o novo script
    document.head.appendChild(script);

    // Cleanup
    return () => {
      const scriptToRemove = document.getElementById("structured-data");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
