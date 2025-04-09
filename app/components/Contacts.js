"use client";

import GoogleMap from "./GoogleMap";
import BookingWidget from "./BookingWidget";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { RiSmartphoneFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { useTranslation } from "../hooks/useTranslation";
import siteConfig from "../config/site";
import SeoParagraph from "./SeoParagraph";

export default function Contacts() {
  const { t } = useTranslation();

  const googleMapSrc = siteConfig.map.embedUrl;

  return (
    <section
      id="contacts"
      className="w-full py-12 px-4 bg-[url('/bg-gray-blue.jpg')] md:bg-fixed bg-cover bg-center text-center"
    >
      <div className="p-6 w-fit mx-auto bordered-box text-textColor">
        <h2 className="font-cursive text-2xl md:text-4xl tracking-[.15em] text-primary">
          {siteConfig.name.split(" ")[0]}
        </h2>
        <h1 className="md:text-8xl text-3xl tracking-widest uppercase">
          {siteConfig.name.split(" ")[1]}
        </h1>
        <h2 className="font-cursive text-2xl md:text-5xl md:my-8 my-3 tracking-[.15em] text-primary">
          {siteConfig.slogan}
        </h2>
        <SeoParagraph path="homepage.seoDescription" />

        <p className="address text-sm md:text-2xl uppercase tracking-wider">
          {siteConfig.address.full}
        </p>
      </div>

      <div
        id="reservations"
        className="flex flex-col justify-center items-center gap-8 my-12 text-xl md:text-2xl font-semibold text-secondary"
      >
        <p className="telNumber flex items-center gap-4  hover:text-primary">
          <BsFillTelephoneOutboundFill />
          <a href={`tel:${siteConfig.contact.phone}`}>
            {siteConfig.contact.phone.replace("+39", "")}
          </a>
        </p>
        <p className="telNumber flex items-center gap-4 hover:text-primary">
          <RiSmartphoneFill />
          <a href={`tel:${siteConfig.contact.mobile}`}>
            {siteConfig.contact.mobile.replace("+39", "")}
          </a>
        </p>
      </div>

      <div className="my-6 flex justify-center">
        <BookingWidget />
      </div>

      <div className="flex justify-center mb-6 ">
        <a
          className="whatsapp-button"
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="md:text-3xl inline mr-3" />
          {t("homepage.whatsappBtn")}
        </a>
      </div>

      {/* Orari di apertura */}
      <div
        id="opening-hours"
        className="bordered-box p-4 my-6 inline-block font-semibold text-textColor"
      >
        <h5 className="md:text-3xl mb-4">{t("homepage.openingHours")[0]}</h5>
        <div className="orari flex justify-center md:text-2xl">
          <div className="pt-[1rem] pr-[2rem] md:pr-[5rem] pb-[1rem] pl-[1rem] md:pl-[3rem]">
            <h5>{t("homepage.openingHours")[1]}</h5>
            <p>{siteConfig.openingHours.lunch}</p>
          </div>
          <div className="pt-[1rem] md:pr-[3rem] pr-[1rem] pb-[1rem] md:pl-[5rem] pl-[2rem] border-l-4 border-primary">
            <h5>{t("homepage.openingHours")[2]}</h5>
            <p>{siteConfig.openingHours.dinner}</p>
          </div>
        </div>
        <p className="md:text-xl mt-4 font-bold">
          {t("homepage.openingHours")[3]}
        </p>
      </div>

      {/* Mappa di Google */}
      <div className="my-6 w-full flex justify-center">
        <GoogleMap
          src={googleMapSrc}
          title="Mappa del Ristorante Briseide"
          height="300"
        />
      </div>
    </section>
  );
}
