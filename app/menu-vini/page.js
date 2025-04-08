import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";

export const metadata = {
  title: "Menu Vini - Briseide",
  description:
    "Scopri la nostra selezione di vini rossi, bianchi e bollicine provenienti da cantine italiane e internazionali. Ristorande Brisedide, Food and Wine Experience a Balduina, Roma Nord",
};

export default function Page() {
  return <RestaurantMenu menuType={"vini"} />;
}
