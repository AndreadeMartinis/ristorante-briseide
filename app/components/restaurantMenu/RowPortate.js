import { capitalizeFirstLetter } from "@/app/utils/string";

export default function RowPortate({ name, details, language }) {
  const translatedName = details?.[language] || name; // fallback a name se non c'è traduzione
  const description = details[`descr_${language}`];
  const price = details.prezzo;
  const allergeni = details.allergeni;

  return (
    <section className="flex justify-between">
      <span className="mr-1">
        {description ? (
          <>
            <h3>
              {name && <span className="md:text-sm text-[.75rem]">💠 </span>}
              {capitalizeFirstLetter(translatedName)}
            </h3>
            <p className="text-sm italic">
              {capitalizeFirstLetter(description)}
              {allergeni && <sup className="ml-2">{allergeni}</sup>}
            </p>
          </>
        ) : (
          <p>
            <span className="md:text-sm text-[.75rem]">💠 </span>
            {capitalizeFirstLetter(translatedName)}
            <span className="text-sm italic">
              {allergeni && <sup className="ml-2">{allergeni}</sup>}
            </span>
          </p>
        )}
      </span>
      <p>{price}</p>
    </section>
  );
}
