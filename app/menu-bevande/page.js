import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";
import SeoParagraph from "../components/SeoParagraph";

export const metadata = {
  title: "Menu Bevande - Briseide",
  description:
    "Una selezione di bibite, succhi e bevande per accompagnare i tuoi pasti nel cuore di Balduina, Roma Nord.",
};

export default function Page() {
  return (
    <RestaurantMenu menuType="bevande">
      <SeoParagraph path="menuDescriptions.bevande" />
    </RestaurantMenu>
  );
}
