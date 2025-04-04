"use client";

import { useEffect, useState } from "react";
import { BiKnife } from "react-icons/bi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primaryTransparent text-white hover:bg-primary hover:-translate-y-1 transition-all"
      aria-label="Torna su"
      title="Torna su"
    >
      <BiKnife className="w-5 h-5 -rotate-45" />
    </button>
  );
}
