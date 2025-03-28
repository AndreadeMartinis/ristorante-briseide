"use client";
import { useEffect, useState } from "react";
import { MENU_CATEGORIES } from "../config/restaurantMenuCategories";

export function useMenuData(menuType, language) {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      const config = MENU_CATEGORIES[menuType];
      if (!config) {
        setError(`Tipo di menu non supportato: "${menuType}"`);
        return;
      }

      try {
        const results = await Promise.all(
          config.categories.map(async (category) => {
            const { categoryTranslation, data } = await import(
              `@/app/data/${config.path}/${category}.js`
            );

            return {
              name: category,
              translation: categoryTranslation?.[language] || category,
              type: config.type,
              items: data || {},
            };
          })
        );

        setMenuData(results);
        setError(null);
      } catch (err) {
        console.error("❌ Errore durante il caricamento:", err);
        setError("Errore durante il caricamento del menù.");
      }
    }

    loadData();
  }, [menuType, language]);

  return { menuData, error };
}
