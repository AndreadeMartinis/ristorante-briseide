import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";

export const metadata = {
  title: "Menu Bevande - Briseide",
  description:
    "Una selezione di bibite, succhi e bevande per accompagnare i tuoi pasti nel cuore di Balduina, Roma Nord.",
};

export default function Page() {
  return <RestaurantMenu menuType={"bevande"} />;
}
