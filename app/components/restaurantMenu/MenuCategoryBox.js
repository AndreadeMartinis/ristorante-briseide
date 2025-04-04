import { PiWine, PiBeerBottle, PiCalendar } from "react-icons/pi";

export default function MenuCategoryBox({
  id,
  role,
  category,
  items,
  language,
  Row,
  menuType,
}) {
  return (
    <section
      id={id}
      role={role}
      className="shrink-0 w-full flex justify-center"
    >
      <div className="w-full md:w-2/3 md:text-xl p-3 border-2 border-white outline outline-primary bg-secondary text-textColor">
        <h2 className="text-2xl md:text-4xl tracking-wider uppercase mb-4">
          {category}
        </h2>
        <div className="p-2 md:p-8 flex flex-col gap-4">
          {menuType === "vini" && (
            <div className="flex">
              <div className="w-3/5"></div>
              <div className="flex justify-between pl-2 w-2/5 md:text-lg">
                <PiCalendar />
                <PiWine />
                <PiBeerBottle />
              </div>
            </div>
          )}
          {Object.entries(items).map(([name, details]) => (
            <Row key={name} name={name} details={details} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
