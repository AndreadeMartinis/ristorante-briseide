const currentYear = new Date().getFullYear();

const siteConfig = {
  name: "Ristorante Briseide",
  slogan: "Food and wine experience Balduina",
  locale: "it-IT",
  defaultLanguage: "it",
  supportedLanguages: ["it", "en", "es"],
  domain: "https://www.ristorantebriseide.it",

  description:
    "Vieni a trovarci nel nostro nuovo ristorante a Balduina in piazza delle Medaglie d'oro 22. Per un pranzo veloce ma di classe durante la pausa lavoro o per una cena romantica, il nostro ristorante propone una scelta di pesce freschissimo e carni pregiate. Briseide, il nuovo ristorante epico a Roma nord!",

  openGraph: {
    image: "/icon.png",
    url: "https://www.ristorantebriseide.it",
    type: "website",
  },

  address: {
    street: "Piazzale delle Medaglie d’Oro 22/23",
    city: "Roma",
    zip: "00136",
    country: "IT",
    full: "Piazzale delle Medaglie d’Oro 22/23, 00136 Roma (RM)",
  },

  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2968.5414123412534!2d12.4437367!3d41.9242161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f610072db699f%3A0xa88ef079251cd7c2!2sRistorante%20Briseide!5e0!3m2!1sit!2sit!4v1744197880850!5m2!1sit!2sit",
    linkUrl:
      "https://www.google.com/maps/place/Ristorante+Briseide/@41.9242161,12.4437367,17z/data=!4m7!3m6!1s0x132f610072db699f:0xa88ef079251cd7c2!4b1!8m2!3d41.9236461!4d12.446728!16s%2Fg%2F11w3yks2gl?entry=ttu",
  },

  contact: {
    phone: "+390622538933",
    mobile: "+393335333070",
    email: "info@ristorantebriseide.it",
    whatsapp: "https://wa.me/393335333070",
  },

  social: {
    instagram: "https://www.instagram.com/briseide_ristorante/?hl=it",
  },

  menu: {
    mainMenuUrl: "/menu-tree",
  },

  openingHours: {
    lunch: "12:30–15:30",
    dinner: "19:00–23:00",
    closed: "Domenica chiuso a cena",
  },

  legal: {
    copyright: `© ${currentYear} Briseide`,
    piva: "P.I. 17400311001",
  },

  developer: {
    name: "Andrea de Martinis",
    github: "https://github.com/AndreadeMartinis",
    website: "https://andreademartinis.it",
    linkedin: "https://www.linkedin.com/in/andrea-de-martinis/",
    email: "andreademartinisdev@gmail.com",
  },
};

export default siteConfig;
