"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/hooks/useTranslation";
import ROUTES from "@/app/config/routes";
import MenuLinksList from "./restaurantMenu/MenuLinksList";

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-4 md:gap-6 uppercase text-base md:text-lg tracking-wider ">
        <ListItem>
          <Link href={ROUTES.home}>Home</Link>
        </ListItem>

        {pathname === "/" && (
          <>
            <ListItem>
              <Link href={ROUTES.sections.about}>{t("navbar")[0]}</Link>
            </ListItem>

            <ListItem>
              <Link href={ROUTES.sections.reservations}>{t("navbar")[1]}</Link>
            </ListItem>

            <ListItem>
              <Link href={ROUTES.sections.openingHours}>{t("navbar")[2]}</Link>
            </ListItem>
          </>
        )}
        <MenuLinksList pathname={pathname} t={t} />
      </ul>
    </nav>
  );
}

function ListItem({ children }) {
  return (
    <li className="hover:text-primary transition-colors duration-200 ease-in">
      {children}
    </li>
  );
}
