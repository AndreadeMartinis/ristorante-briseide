"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useMenuData } from "@/app/hooks/useMenuData";
import { PiWine, PiBeerBottle, PiCalendar } from "react-icons/pi";
import RowPortate from "./RowPortate";
import RowDrink from "./RowDrink";
import RowWine from "./RowWine";
import NavbarMenuCategories from "./NavbarMenuCategories";
import Modal from "../Modal";
import TabellaAllergeni from "./TabellaAllergeni";

export default function RestaurantMenu({ menuType }) {
  const { t, language } = useTranslation();
  const { menuData, error } = useMenuData(menuType, language);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllergensModal, setShowAllergensModal] = useState(false);

  const RowComponent = {
    portate: RowPortate,
    drinks: RowDrink,
    vini: RowWine,
  }[getMenuType(menuType)];

  useEffect(() => {
    if (menuData.length > 0 && !selectedCategory) {
      setSelectedCategory(menuData[0].name);
    }
  }, [menuData, selectedCategory]);

  const handleSelectCategory = (name) => {
    setSelectedCategory(name);

    const section = document.getElementById(`menu-section-${name}`);
    if (section) {
      const offset = 115; // altezza della navbar
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="bg-[url('/img/bg-marble-white.jpg')] bg-contain md:bg-none">
      <NavbarMenuCategories
        categories={menuData}
        selectedCategory={selectedCategory}
        onSelect={handleSelectCategory}
        onAllergeniClick={() => setShowAllergensModal(true)}
      />
      <Modal
        isOpen={showAllergensModal}
        onClose={() => setShowAllergensModal(false)}
      >
        <TabellaAllergeni />
      </Modal>
      <div className="min-h-screen flex flex-col items-center px-2 pt-28 md:pt-32 pb-6 gap-8 overflow-hidden ">
        {menuData.map(({ name, translation, items }) => (
          <MenuCategoryBox
            key={name}
            id={`menu-section-${name}`}
            role="tabpanel"
            category={translation}
            items={items}
            language={language}
            Row={RowComponent}
            menuType={menuType}
          />
        ))}
      </div>
      {menuType === "portate" && (
        <p className="text-blue-950 italic text-sm text-center pb-5">
          {t("disclaimer-surgelati")}
        </p>
      )}
    </main>
  );
}

function MenuCategoryBox({
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
      <div className="w-full md:w-2/3 md:text-xl p-3 border-2 border-white outline outline-primary bg-secondary">
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

function getMenuType(menuType) {
  // Mappa per distinguere tipi che usano la stessa struttura
  if (menuType === "spirits" || menuType === "bevande") return "drinks";
  return menuType;
}
