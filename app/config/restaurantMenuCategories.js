// config/menuConfig.js
export const MENU_CATEGORIES = {
  portate: {
    path: "portate",
    type: "portate",
    categories: [
      "experience",
      "crudites",
      "antipasti",
      "primi",
      "secondi",
      "contorni",
      "dessert",
    ],
  },
  bevande: {
    path: "bevande",
    type: "drinks",
    categories: ["soft-drinks", "birre", "caffetteria"],
  },
  spirits: {
    path: "spirits",
    type: "drinks",
    categories: ["gin-tonics", "liquori", "distillati"],
  },
  vini: {
    path: "vini",
    type: "vini",
    categories: [
      "spumanti-italiani",
      "champagne",
      "bianchi-italiani",
      "bianchi-esteri",
      "rossi-italiani",
      "rossi-esteri",
      "rosati",
      "dolci",
    ],
  },
};
