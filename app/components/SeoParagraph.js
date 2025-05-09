"use client";
import { useTranslation } from "../hooks/useTranslation";

export default function SeoParagraph({ path }) {
  const { t } = useTranslation();
  return <p className="sr-only">{t(path)}</p>;
}
