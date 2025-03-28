"use client";
import { useTranslation } from "../hooks/useTranslation";
import i18nConfig from "../config/i18n";

export default function LanguageBtns() {
  const { setLanguage, language } = useTranslation();

  return (
    <div className="flex gap-6 mt-16 mb-12">
      {i18nConfig.supportedLanguages.map((lang) => {
        const Icon = i18nConfig.icons[lang];
        return (
          <FlagButton
            key={lang}
            lang={lang}
            Icon={Icon}
            current={language}
            onClick={() => setLanguage(lang)}
          />
        );
      })}
    </div>
  );
}

function FlagButton({ lang, Icon, current, onClick }) {
  const isActive = current === lang;

  return (
    <button
      onClick={onClick}
      aria-label={`Cambia lingua in ${i18nConfig.getLabel(lang)}`}
      title={i18nConfig.getLabel(lang)}
      className="hover:-translate-y-[.1rem] transition-all duration-200 ease-in"
    >
      <Icon
        className={`w-5 md:w-7 transition-all duration-200 ease-in ${
          isActive ? "saturate-[.75] scale-125" : "saturate-[.25]"
        }`}
      />
    </button>
  );
}
