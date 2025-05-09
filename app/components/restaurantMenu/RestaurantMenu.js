"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "@/app/hooks/useTranslation";
import { useMenuData } from "@/app/hooks/useMenuData";
import { useDelayedLoader } from "@/app/hooks/useDelayedLoader";
import { scrollToMenuSection } from "@/app/hooks/useScrollToMenuSection";
import { getMenuType } from "@/app/utils/menu";
import RowPortate from "./RowPortate";
import RowDrink from "./RowDrink";
import RowWine from "./RowWine";
import NavbarMenuCategories from "./NavbarMenuCategories";
import Modal from "../Modal";
import TabellaAllergeni from "./TabellaAllergeni";
import MenuLoader from "./MenuLoader";
import MenuCategoryBox from "./MenuCategoryBox";
import { motion } from "framer-motion";
import RowSpecial from "./RowSpecial";

export default function RestaurantMenu({ menuType }) {
  const { t, language } = useTranslation();
  const { menuData, error } = useMenuData(menuType, language);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllergensModal, setShowAllergensModal] = useState(false);

  const isLoading = useDelayedLoader(menuData.length > 0, 700);

  const RowComponent = {
    portate: RowPortate,
    drinks: RowDrink,
    vini: RowWine,
    special: RowSpecial,
  }[getMenuType(menuType)];

  useEffect(() => {
    if (menuData.length > 0 && !selectedCategory) {
      setSelectedCategory(menuData[0].name);
    }
  }, [menuData, selectedCategory]);

  const handleSelectCategory = (name) => {
    setSelectedCategory(name);
    scrollToMenuSection(name);
  };

  if (error) return <p className="text-red-500">{error}</p>;
  if (isLoading) return <MenuLoader />;

  return (
    <main
      className={`bg-[url('/bg-marble-white.jpg')] bg-contain md:bg-none ${
        menuType === "special" ? "mt-12" : "mt-24"
      }`}
    >
      {menuType !== "special" && (
        <NavbarMenuCategories
          categories={menuData}
          selectedCategory={selectedCategory}
          onSelect={handleSelectCategory}
          onAllergeniClick={() => setShowAllergensModal(true)}
          t={t}
        />
      )}
      <Modal
        isOpen={showAllergensModal}
        onClose={() => setShowAllergensModal(false)}
      >
        <TabellaAllergeni />
      </Modal>
      <motion.div
        className="min-h-screen flex flex-col gap-8 items-center px-2 pt-4 md:pt-7 pb-6 overflow-hidden bg-black/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {menuData.map(({ name, translation, items }) => (
          <MenuCategoryBox
            key={name}
            id={`menu-section-${name}`}
            role="tabpanel"
            category={translation.replace("-", " ")}
            items={items}
            language={language}
            Row={RowComponent}
            menuType={menuType}
          />
        ))}
      </motion.div>
      {menuType === "portate" && (
        <p className="text-blue-950 italic text-[.75rem] text-center pb-5 bg-black/5 font-medium">
          {t("disclaimer-surgelati")}
        </p>
      )}
    </main>
  );
}
