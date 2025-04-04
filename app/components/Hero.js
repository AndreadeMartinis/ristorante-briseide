"use client";

import { useEffect } from "react";

export default function Hero() {
  /* useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []); */

  return (
    <section
      id="hero"
      className="bg-white flex align-middle z-0 h-[90vh] pb-6 md:h-[unset] md:pb-[unset]"
    >
      <video src="/hero.mp4" autoPlay muted playsInline className="" />
    </section>
  );
}
