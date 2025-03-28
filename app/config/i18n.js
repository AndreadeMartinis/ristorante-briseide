import { IT, GB, ES, RU } from "country-flag-icons/react/3x2";

const i18nConfig = {
  defaultLanguage: "it",
  supportedLanguages: ["it", "en", "es"],

  languageLabels: {
    it: "Italiano",
    en: "English",
    es: "Español",
  },

  localeNames: {
    it: "it-IT",
    en: "en-US",
    es: "es-ES",
  },

  icons: {
    it: IT,
    en: GB,
    es: ES,
  },

  getLabel(langCode) {
    return i18nConfig.languageLabels[langCode] || langCode;
  },

  isSupported(langCode) {
    return i18nConfig.supportedLanguages.includes(langCode);
  },

  getValidLanguage(langCode) {
    return i18nConfig.isSupported(langCode)
      ? langCode
      : i18nConfig.defaultLanguage;
  },
};

export default i18nConfig;
