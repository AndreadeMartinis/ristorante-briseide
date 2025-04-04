"use client";
import { useEffect } from "react";

export default function MainHome({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // leggero delay per attendere il render
      }
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
