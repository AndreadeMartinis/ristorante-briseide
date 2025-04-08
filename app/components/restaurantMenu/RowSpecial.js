import { capitalizeFirstLetter } from "@/app/utils/string";

export default function RowSpecial({ name, details, language }) {
  const label = capitalizeFirstLetter(
    language === "it" ? name : details[language] || name
  );

  // Estrai solo le chiavi tipo item1_it, item2_it... del linguaggio corrente
  const items = Object.keys(details)
    .filter((k) => k.startsWith("item") && k.endsWith(`_${language}`))
    .map((k) => details[k]);

  return (
    <div className="bordered-box flex flex-col justify-center text-center border-b py-8 last-of-type:border-none last-of-type:outline-none w-full md:w-3/4">
      <h3 className="font-semibold text-xl md:text-3xl pb-2 uppercase">
        {label}
      </h3>
      {items.map((item, index) => (
        <p
          key={index}
          className="text-[.85rem] md:text-base pt-2 last-of-type:italic"
        >
          <span>💠</span>
          {capitalizeFirstLetter(item)}
        </p>
      ))}
    </div>
  );
}
