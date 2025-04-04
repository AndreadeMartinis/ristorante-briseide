import Image from "next/image";
import Link from "next/link";
import icon from "../../public/icon.png";
import siteConfig from "../config/site";
import ROUTES from "../config/routes";

export default function LogoLink({ dimension = 50 }) {
  return (
    <Link
      href={ROUTES.home}
      aria-label={`Logo ${siteConfig.name} - Home Page Link`}
      title="Homepage"
    >
      <Image
        src={icon}
        alt={`Logo ${siteConfig.name}`}
        width={dimension}
        height={dimension}
        priority
      />
    </Link>
  );
}
