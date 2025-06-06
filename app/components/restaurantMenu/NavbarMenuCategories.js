"use client";
import { capitalizeFirstLetter } from "@/app/utils/string";

export default function NavbarMenuCategories({
  categories,
  selectedCategory,
  onSelect,
  onAllergeniClick,
  t,
}) {
  if (!categories || categories.length === 0) return null;
  return (
    <nav
      className="fixed top-14 md:top-16 z-20 w-full flex md:justify-center gap-2 px-2 py-2 bg-secondary overflow-x-auto whitespace-nowrap border-t-2 border-primary border-b-2 border-b-gray-300 text-textColor"
      role="tablist"
      aria-label="Navigazione menu ristorante"
    >
      {categories.map(({ name, translation }) => (
        <button
          key={name}
          role="tab"
          aria-selected={name === selectedCategory}
          aria-label={`Vai alla sezione ${translation}`}
          aria-controls={`menu-section-${name}`}
          tabIndex={name === selectedCategory ? 0 : -1}
          onClick={() => onSelect(name)}
          className={`px-2 py-1 text-sm font-semibold tracking-wider transition-colors duration-200 ${
            name === selectedCategory
              ? "bg-primary text-textColor"
              : "bg-white text-secondary hover:text-primary"
          }`}
        >
          {capitalizeFirstLetter(translation).replace("-", " ")}
        </button>
      ))}
      {categories[0].type === "portate" && (
        <button
          onClick={onAllergeniClick}
          className="uppercase px-2 py-1 text-sm font-semibold tracking-wider transition-colors duration-200 text-textColor hover:text-secondary bg-primary hover:bg-white"
        >
          {t("allergeni")}
        </button>
      )}
    </nav>
  );
}
