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
    <div className="flex flex-col justify-center text-center border-b pt-2 pb-4 last-of-type:border-none md:w-3/4">
      <h3 className="font-semibold text-xl md:text-3xl pb-2">{label}</h3>
      {items.map((item, index) => (
        <p key={index} className="text-[.85rem] md:text-base italic pt-2">
          {capitalizeFirstLetter(item)}
        </p>
      ))}
    </div>
  );
}
