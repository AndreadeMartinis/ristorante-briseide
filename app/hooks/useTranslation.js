"use client";
import { useState, createContext, useContext } from "react";
import translations from "@/public/index.json";
import i18nConfig from "../config/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(i18nConfig.defaultLanguage);

  /**
   * t() - funzione di traduzione
   * @param {string} key - chiave nel file JSON (es. "menu-tree.bevande")
   * @param {string|null} fallback - testo di fallback personalizzato
   * @returns {string}
   */
  const t = (key, fallback = null) => {
    const keys = key.split(".");
    const value = keys.reduce((obj, k) => (obj ? obj[k] : null), translations);

    // Traduzione trovata nella lingua corrente
    if (value?.[language]) return value[language];

    // Fallback su lingua di default
    if (value?.[i18nConfig.defaultLanguage])
      return value[i18nConfig.defaultLanguage];

    // Fallback personalizzato o chiave esplicita
    return fallback ?? `[${key}]`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
