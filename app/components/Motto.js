"use client";

import { useTranslation } from "../hooks/useTranslation";

export default function Motto() {
  const { t } = useTranslation();
  return (
    <section
      id="motto"
      className="h-screen w-full bg-[url('/img/bg-gray-blue.jpg')] bg-cover bg-center bg-fixed flex flex-col justify-center items-center font-cursive text-5xl md:text-[8rem] text-secondary text-center"
    >
      <h2>{t("homepage.motto1")}</h2>
      <h2>{t("homepage.motto2")}</h2>
    </section>
  );
}
