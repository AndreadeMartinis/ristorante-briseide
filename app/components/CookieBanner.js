"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import { FaCookieBite } from "react-icons/fa6";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieAccepted")) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookieAccepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondaryTransparent text-textColor px-4 py-3 text-sm flex flex-col md:flex-row justify-between items-center z-50 shadow-md backdrop-blur border-t border-textColor">
      <p className="mb-2 md:mb-0">{t("cookieBanner.text")}</p>
      <button
        onClick={acceptCookies}
        className="bg-[white] text-secondary px-3 py-1 tracking-wider  hover:text-primary transition outline outline-primary hover:-translate-y-1"
      >
        {t("cookieBanner.button")}
        <FaCookieBite className="inline ml-1" />
      </button>
    </div>
  );
}
