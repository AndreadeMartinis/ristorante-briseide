"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/hooks/useTranslation";
import ROUTES from "@/app/config/routes";
import menuLinks from "@/app/config/restaurantMenuLinks";

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-4 md:gap-6 uppercase text-base md:text-lg tracking-wider ">
        <ListItem>
          <Link href={ROUTES.home}>Home</Link>
        </ListItem>

        <ListItem>
          <Link href={ROUTES.sections.about}>{t("navbar")[0]}</Link>
        </ListItem>

        <ListItem>
          <Link href={ROUTES.sections.reservations}>{t("navbar")[1]}</Link>
        </ListItem>

        <ListItem>
          <Link href={ROUTES.sections.openingHours}>{t("navbar")[2]}</Link>
        </ListItem>

        <li>
          <details className="cursor-pointer group">
            <summary className="list-none hover:text-primary group-open:text-primary">
              {t("navbar")[3]}
            </summary>
            <ul className="flex flex-col mt-2 gap-3 text-sm text-center px-2">
              {menuLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className={`transition-colors italic duration-200 ${
                      pathname === href
                        ? "text-primary font-bold"
                        : "hover:text-primary"
                    }`}
                  >
                    {t(`menu-tree.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
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
