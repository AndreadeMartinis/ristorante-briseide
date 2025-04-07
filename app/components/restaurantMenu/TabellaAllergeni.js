import { data, header } from "@/app/data/allergens.js";
import { useTranslation } from "@/app/hooks/useTranslation";

export default function TabellaAllergeni() {
  const { language } = useTranslation();

  return (
    <section className="flex flex-col justify-center items-center p-4 bg-secondary text-textColor md:px-20">
      <h2 className="uppercase tracking-widest text-2xl md:text-4xl md:mb-2 font-bold text-center">
        {header[`title_${language}`] || header.title}
      </h2>
      <h3 className="text-[.75rem] md:text-lg md:mb-6 border-b text-center">
        {header[`subtitle_${language}`] || header.subtitle}
      </h3>

      <div className="w-full max-w-4xl">
        {data.map((item, index) => (
          <Row
            key={index}
            icon={item.icon}
            title={item[`title_${language}`] || item.title}
            subtitle={item[`subtitle_${language}`] || item.subtitle}
            description={item[`description_${language}`] || item.description}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}

function Row({ icon: Icon, title, subtitle, description, reverse }) {
  return (
    <div
      className={`flex items-center gap-2 py-4 border-b border-gray-300 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Icon className="text-3xl text-textColor" />
      <div className="flex-1">
        <h4 className="font-bold text-sm">{title}</h4>
        {subtitle && <h5 className="text-[.7rem] italic">{subtitle}</h5>}
        <p className="text-[.75rem]">{description}</p>
      </div>
    </div>
  );
}
