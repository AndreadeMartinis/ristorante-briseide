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
    <div className="bordered-box rowspecial flex flex-col justify-center text-center border-b py-8 last-of-type:border-none last-of-type:outline-none w-full md:w-3/4">
      <h3 className="font-medium text-2xl md:text-3xl  uppercase mb-2 tracking-widest border-b border-primary w-fit m-auto">
        {label}
      </h3>
      {items.map((item, index) => (
        <p key={index} className="text-[.85rem] md:text-base pt-2">
          <span>💠</span>
          {capitalizeFirstLetter(item)}
        </p>
      ))}
    </div>
  );
}
