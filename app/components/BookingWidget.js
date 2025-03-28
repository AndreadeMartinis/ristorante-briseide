"use client";

import { useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

export default function BookingWidget() {
  const { t } = useTranslation();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3-eu-west-1.amazonaws.com/quandoo-website/widget-builder/quandoo-widget-builder.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      className="quandoo-widget-builder flex items-center justify-center text-white uppercase w-fit bg-black"
      data-config='{"format":"text-button","bgcolor":"","txcolor":"","round":"no","position":"","font":"md","merchant":104128,"txt":"Prenota un tavolo"}'
    ></a>
  );
}
