export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Ristorante Briseide",
    image: "https://www.ristorantebriseide.it/icon.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Piazzale delle Medaglie d’Oro 22/23",
      addressLocality: "Roma",
      postalCode: "00136",
      addressCountry: "IT",
    },
    telephone: "+39 06 2253 8933",
    url: "https://www.ristorantebriseide.it",
    servesCuisine: ["Italiana", "Pesce", "Carne"],
    priceRange: "€€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "12:30",
        closes: "15:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "19:00",
        closes: "23:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
