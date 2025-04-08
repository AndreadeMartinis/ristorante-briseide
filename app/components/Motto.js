"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function Motto() {
  const { t } = useTranslation();
  return (
    <section
      id="motto"
      className="h-[70vh] md:h-screen w-full bg-[url('/bg-gray-blue.jpg')] md:bg-fixed bg-cover bg-center flex flex-col justify-center items-center font-cursive text-5xl md:text-[8rem] text-secondary text-center"
    >
      <h2>{t("homepage.motto1")}</h2>
      <h2>{t("homepage.motto2")}</h2>
    </section>
  );
}
