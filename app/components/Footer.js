"use client";

import { TbWorldCode } from "react-icons/tb";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa6";
import LogoLink from "./LogoLink";
import { useTranslation } from "../hooks/useTranslation";
import siteConfig from "../config/site";
import FooterDevSignature from "./FooterDevSignature";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center py-4 px-6 text-sm text-textColor bg-secondary border-t-2 outline outline-white border-primary">
      {/* Sezione sinistra: contatti */}
      <section className="bordered-box p-5 relative w-[100%] md:w-[25%] text-textColor">
        <div className="social-icons absolute top-4 right-4 hover:scale-110 hover:text-primary transition-all">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            aria-label="Link Profilo Instagram"
            title="Seguici su Instagram!"
            className="text-2xl"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <p>{siteConfig.legal.copyright}</p>
        <p className="my-2">
          {siteConfig.address.street}, {siteConfig.address.city}
        </p>
        <p>
          Tel. {siteConfig.contact.phone.replace("+39", "")}
          <span className="ml-10">{siteConfig.legal.piva}</span>
        </p>
      </section>

      {/* Centro: logo */}
      <section className="flex justify-center w-[40%] md:w-[unset] scale-75 md:absolute md:right-[45%] bg-white px-1 py-2 md:p-5 border-2 md:border-2 border-primary">
        <LogoLink dimension={80} />
      </section>

      <FooterDevSignature />
    </footer>
  );
}
