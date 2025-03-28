import {
  GiCorn,
  GiSadCrab,
  GiPeanut,
  GiAlmond,
  GiMapleLeaf,
  GiKetchup,
  GiSesame,
  GiStandingPotion,
  GiOysterPearl,
} from "react-icons/gi";
import { TbEggs, TbFish } from "react-icons/tb";
import { LuBean, LuMilk } from "react-icons/lu";
import { RiFlowerLine } from "react-icons/ri";

export const header = {
  title: "Allergeni alimentari",
  title_en: "food allergens",
  title_es: "alérgenos alimentarios",
  subtitle: "Precauzioni da adottare in caso di intolleranza o allergia",
  subtitle_en: "Precautions to take in case of intolerance or allergy",
  subtitle_es: "Precauciones a tomar en caso de intolerancia o alergia",
};

export const data = [
  {
    title: "1. Cereali contenenti glutine",
    title_en: "1. Cereals containing gluten",
    title_es: "1. Cereales que contienen gluten",
    subtitle:
      "grano, orzo, segale, avena, farro, kamut o i loro ceppi ibridati",
    subtitle_en:
      "wheat, barley, rye, oats, spelt, kamut or their hybridized strains",
    subtitle_es:
      "trigo, cebada, centeno, avena, espelta, kamut o sus variedades hibridadas",
    description:
      "Le persone che presantano intolleranza al glutine (celiaci) devono evitare frumento, pasta, grano, ecc. Attenzione anche a cibi impanati, salse emulsionate con farina, pasticcini e torte",
    description_en:
      "People who are gluten intolerant (celiacs) should avoid wheat, pasta, corn, etc. Also be careful with breaded foods, sauces emulsified with flour, pastries and cakes",
    description_es:
      "Las personas que tienen intolerancia al gluten (celíaca) deben evitar el trigo, las pastas, el trigo, etc. También prestar atención a los alimentos empanizados, salsas emulsionadas con harina, bollería y tartas",
    icon: GiCorn,
  },
  {
    title: "2. Crostacei e derivati",
    title_en: "2. Crustaceans and products thereof",
    title_es: "2. Crustáceos y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Per gli allergici vanno evitati tutti gli alimenti contenenti crostacei ed i prodotti derivati come le salse a base degli stessi",
    description_en:
      "People with allergies should avoid all foods containing crustaceans and related products such as crustacean-based sauces.",
    description_es:
      "Las personas alérgicas deben evitar todos los alimentos que contengan crustáceos y productos derivados como salsas a base de crustáceos.",
    icon: GiSadCrab,
  },
  {
    title: "3. Uova e derivati",
    title_en: "3. Eggs and products thereof",
    title_es: "3. Huevos y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Le uova rientrano in moltissime preparazioni, vengono uste come emulsionante o nella preparazione di salse (maionese)",
    description_en:
      "Eggs are used in many preparations, often as an emulsifier or in sauces (like mayonnaise).",
    description_es:
      "Los huevos se utilizan en muchas preparaciones, a menudo como emulsionante o en salsas (como la mayonesa).",
    icon: TbEggs,
  },
  {
    title: "4. Pesce e derivati",
    title_en: "4. Fish and products thereof",
    title_es: "4. Pescado y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Per gli allergici vanno evitati tutti gli alimenti contenenti pesci ed i prodotti derivati come salse, sughi, ecc.",
    description_en:
      "People with allergies should avoid all foods containing fish and related products such as sauces and gravies.",
    description_es:
      "Las personas alérgicas deben evitar todos los alimentos que contengan pescado y productos derivados como salsas y guisos.",
    icon: TbFish,
  },
  {
    title: "5. Arachidi e derivati",
    title_en: "5. Peanuts and products thereof",
    title_es: "5. Cacahuetes y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Fare attenzione anche ai prodotti a base di arachidi, come olio e burro",
    description_en:
      "Be careful with peanut-based products such as peanut oil and butter.",
    description_es:
      "Preste atención a los productos a base de cacahuetes, como el aceite y la mantequilla de cacahuete.",
    icon: GiPeanut,
  },
  {
    title: "6. Soia e derivati",
    title_en: "6. Soybeans and products thereof",
    title_es: "6. Soja y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Presente in diversi alimenti, inclusi i gelati, salse, dessert, prodotti a base di carne e prodotti vegetariani (hamburger di soia)",
    description_en:
      "Found in many foods including ice creams, sauces, desserts, meat-based products, and vegetarian foods (like soy burgers).",
    description_es:
      "Presente en muchos alimentos, incluidos helados, salsas, postres, productos cárnicos y alimentos vegetarianos (como hamburguesas de soja).",
    icon: LuBean,
  },
  {
    title: "7. Latte e derivati",
    title_en: "7. Milk and products thereof",
    title_es: "7. Leche y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Per gli allergici vanno evitati tutti gli alimenti contenenti yogurt, panna, latte in polvere, burro, formaggi, salumi (alcuni contengono latte in polvere)",
    description_en:
      "Avoid foods containing yogurt, cream, powdered milk, butter, cheese, and even some cured meats (as they may contain milk powder).",
    description_es:
      "Evite los alimentos que contengan yogur, nata, leche en polvo, mantequilla, queso e incluso algunos embutidos (pueden contener leche en polvo).",
    icon: LuMilk,
  },
  {
    title: "8. Frutta con guscio",
    title_en: "8. Nuts",
    title_es: "8. Frutos de cáscara",
    subtitle: "mandorle, nocciole, noci, anacardi, pistacchi",
    subtitle_en: "almonds, hazelnuts, walnuts, cashews, pistachios",
    subtitle_es: "almendras, avellanas, nueces, anacardos, pistachos",
    description:
      "Le allergie riguardano noci, nocciole, mandorle, ecc. Attenzione a pani alle noci, biscotti, gelati, oli e marzapane",
    description_en:
      "Allergies include walnuts, hazelnuts, almonds, etc. Be cautious with walnut bread, cookies, ice creams, oils, and marzipan.",
    description_es:
      "Las alergias incluyen nueces, avellanas, almendras, etc. Preste atención al pan de nueces, galletas, helados, aceites y mazapán.",
    icon: GiAlmond,
  },
  {
    title: "9. Sedano e derivati",
    title_en: "9. Celery and products thereof",
    title_es: "9. Apio y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Viene utilizzato come insaporitore di cibi e come ingrediente in alcune insalate",
    description_en:
      "Used as a flavor enhancer and as an ingredient in some salads.",
    description_es:
      "Se utiliza como potenciador del sabor y como ingrediente en algunas ensaladas.",
    icon: GiMapleLeaf,
  },
  {
    title: "10. Senape e derivati",
    title_en: "10. Mustard and products thereof",
    title_es: "10. Mostaza y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Considerare sia i semi della pianta che i prodotti derivati (senape e mostarda)",
    description_en:
      "Includes mustard seeds and derived products such as mustard and mustard-based sauces.",
    description_es:
      "Incluye semillas de mostaza y productos derivados como la mostaza y las salsas a base de mostaza.",
    icon: GiKetchup,
  },
  {
    title: "11. Sesamo e derivati",
    title_en: "11. Sesame seeds and products thereof",
    title_es: "11. Sésamo y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Sono utilizzati come olio o nella preparazione di grissini e pane; spesso usati nella cucina turca e greca",
    description_en:
      "Used as oil or in making breadsticks and bread; common in Turkish and Greek cuisine.",
    description_es:
      "Se utiliza como aceite o en la elaboración de palitos de pan y pan; común en la cocina turca y griega.",
    icon: GiSesame,
  },
  {
    title: "12. Anidride solforosa e solfiti",
    title_en: "12. Sulphur dioxide and sulphites",
    title_es: "12. Dióxido de azufre y sulfitos",
    subtitle: "in concentrazione superiore a 10 mg/kg o mg/l",
    subtitle_en: "in concentrations above 10 mg/kg or 10 mg/l",
    subtitle_es: "en concentraciones superiores a 10 mg/kg o 10 mg/l",
    description:
      "Ampiamente utilizzata per conservare cibi, vini, bevande, limita lo sviluppo du batteri e lieviti, bloccando le fermentazioni",
    description_en:
      "Widely used to preserve food, wine, and beverages. Limits the growth of bacteria and yeasts, stopping fermentation.",
    description_es:
      "Ampliamente utilizado para conservar alimentos, vinos y bebidas. Limita el crecimiento de bacterias y levaduras, deteniendo la fermentación.",
    icon: GiStandingPotion,
  },
  {
    title: "13. Lupini e derivati",
    title_en: "13. Lupin and products thereof",
    title_es: "13. Altramuces y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description: "Vengono utilizzati come antipasti, già in salamoia",
    description_en: "Used as appetizers, typically already in brine.",
    description_es: "Se utilizan como aperitivos, normalmente ya en salmuera.",
    icon: RiFlowerLine,
  },
  {
    title: "14. Molluschi e derivati",
    title_en: "14. Molluscs and products thereof",
    title_es: "14. Moluscos y productos derivados",
    subtitle: "",
    subtitle_en: "",
    subtitle_es: "",
    description:
      "Per gli allergici vanno evitati tutti gli alimenti contenenti molluschi ed i prodotti derivati, come la salsa alle ostriche",
    description_en:
      "Avoid all foods containing molluscs and related products, such as oyster sauce.",
    description_es:
      "Evite todos los alimentos que contengan moluscos y productos derivados, como la salsa de ostras.",
    icon: GiOysterPearl,
  },
];
