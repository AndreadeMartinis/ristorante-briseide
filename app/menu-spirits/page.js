import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";

export const metadata = {
  title: "Menu Links",
  description:
    "Distillati pregiati e liquori selezionati per concludere la tua esperienza gastronomica con eleganza.",
};

export default function Page() {
  return <RestaurantMenu menuType={"spirits"} />;
}
