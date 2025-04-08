"use client";
import { useState, useEffect, createContext, useContext } from "react";
import translations from "@/public/index.json";
import i18nConfig from "../config/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(i18nConfig.defaultLanguage);

  // Recupera la lingua salvata in localStorage al primo montaggio
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && i18nConfig.isSupported(storedLang)) {
      setLanguageState(storedLang);
    }
  }, []);

  // Quando cambia la lingua, salvala in localStorage
  const setLanguage = (lang) => {
    if (i18nConfig.isSupported(lang)) {
      localStorage.setItem("lang", lang);
      setLanguageState(lang);
    }
  };

  /**
   * t() - funzione di traduzione
   * @param {string} key - chiave nel file JSON (es. "menu-tree.bevande")
   * @param {string|null} fallback - testo di fallback personalizzato
   * @returns {string}
   */
  const t = (key, fallback = null) => {
    const keys = key.split(".");
    const value = keys.reduce((obj, k) => (obj ? obj[k] : null), translations);

    if (value?.[language]) return value[language];
    if (value?.[i18nConfig.defaultLanguage])
      return value[i18nConfig.defaultLanguage];
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
