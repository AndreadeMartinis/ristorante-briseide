import Link from "next/link";
import menuLinks from "@/app/config/restaurantMenuLinks";

export default function MenuLinksList({ pathname, t }) {
  return (
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
  );
}
