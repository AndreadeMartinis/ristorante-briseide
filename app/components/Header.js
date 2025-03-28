// components/Header.js
"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useHeaderVisibility } from "@/app/hooks/useHeaderVisibility";
import Navbar from "./Navbar";
import LogoLink from "./LogoLink";
import SocialLinks from "./SocialsLinks";
import LanguageBtns from "./LanguageBtns";
import Sidebar from "./Sidebar";
import siteConfig from "../config/site";

export default function Header() {
  const showHeader = useHeaderVisibility();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const headerClass =
    "fixed top-0 flex justify-between items-center h-14 md:h-16 px-2 md:px-6 w-full z-50 bg-white/85 shadow-md";

  const animatedProps = {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: showHeader ? "0%" : "-100%", opacity: showHeader ? 1 : 0 },
    transition: { duration: 1, ease: "easeInOut" },
  };

  return isHome ? (
    <motion.header
      {...animatedProps}
      className={headerClass}
      aria-label={`Header - ${siteConfig.name}`}
    >
      <SocialLinks />
      <LogoLink dimension={50} />
      <Sidebar>
        <LanguageBtns />
        <Navbar />
      </Sidebar>
    </motion.header>
  ) : (
    <header className={headerClass} aria-label={`Header - ${siteConfig.name}`}>
      <SocialLinks />
      <LogoLink dimension={50} />
      <Sidebar>
        <LanguageBtns />
        <Navbar />
      </Sidebar>
    </header>
  );
}
