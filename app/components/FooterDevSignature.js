import { TbWorldCode } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaRegEnvelope } from "react-icons/fa6";
import { useTranslation } from "../hooks/useTranslation";
import siteConfig from "../config/site";

export default function FooterDevSignature() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center gap-3 bordered-box p-5 w-[100%] md:w-[25%] text-textColor">
      <p>
        Made by
        <span className="hover:scale-110 hover:text-primary transition-all">
          <a
            href={siteConfig.developer.website}
            target="_blank"
            className="ml-1"
            rel="noopener noreferrer"
          >
            {siteConfig.developer.name}
          </a>
        </span>
      </p>
      <section className="flex gap-6 justify-center text-xl">
        <span className="hover:scale-110 hover:text-primary transition-all">
          <a
            href={`mailto:${siteConfig.developer.email}`}
            aria-label="Invia un'email"
            title="Invia un'email"
          >
            <FaRegEnvelope />
          </a>
        </span>
        <span className="hover:scale-110 hover:text-primary transition-all">
          <a
            href={siteConfig.developer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo GitHub"
            title="Profilo GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span className="hover:scale-110 hover:text-primary transition-all">
          <a
            href={siteConfig.developer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profilo LinkedIn"
            title="Profilo LinkedIn"
          >
            <FaLinkedin />
          </a>
        </span>
        <span className="hover:scale-110 hover:text-primary transition-all">
          <a
            href={siteConfig.developer.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visita il mio sito web"
            title="Visita il mio sito web"
          >
            <TbWorldCode />
          </a>
        </span>
      </section>
      <p>{t("footer.AdMSignature")}</p>
    </section>
  );
}
