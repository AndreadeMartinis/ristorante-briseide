"use client";
import Link from "next/link";
import menuLinks from "@/app/config/restaurantMenuLinks";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function MenuLinksContent() {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col justify-center items-center gap-8 pt-24 pb-12 md:pt-32 md:pb-20 text-secondary">
      {menuLinks.map(({ icon: Icon, href, key }) => (
        <MenuButton key={href} href={href}>
          <Icon className="absolute left-1 text-xl" />
          {t(`menu-tree.${key}`)}
        </MenuButton>
      ))}
    </main>
  );
}

function MenuButton({ href, children }) {
  return (
    <Link
      href={href}
      className="relative flex justify-center items-center w-40 pl-4 py-2 border-2 border-primary outline outline-secondary bg-secondary text-textColor uppercase font-semibold tracking-widest shadow-md hover:scale-105"
    >
      {children}
    </Link>
  );
}
