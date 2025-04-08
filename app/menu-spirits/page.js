import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";
import SeoParagraph from "../components/SeoParagraph";

export const metadata = {
  title: "Menu Spirits - Briseide",
  description:
    "Distillati pregiati e liquori selezionati per concludere la tua esperienza gastronomica con eleganza da Briseide, il ristorante di Balduina, Roma Nord",
};

export default function Page() {
  return (
    <RestaurantMenu menuType={"spirits"}>
      <SeoParagraph path="menuDescriptions.spirits" />
    </RestaurantMenu>
  );
}
