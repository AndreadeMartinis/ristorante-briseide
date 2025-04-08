import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";

export const metadata = {
  title: "Menu Portate - Briseide",
  description:
    "Consulta il nostro menu pranzo e cena: piatti a base di pesce del giorno, carne selezionata di altissima qualità e proposte vegetariane a Balduina, Roma nord.",
};

export default function Page() {
  return <RestaurantMenu menuType={"portate"} />;
}
