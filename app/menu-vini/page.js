import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";

export const metadata = {
  title: "Menu Links",
  description:
    "Scopri la nostra selezione di vini rossi, bianchi e bollicine provenienti da cantine italiane e internazionali.",
};

export default function Page() {
  return <RestaurantMenu menuType={"vini"} />;
}
