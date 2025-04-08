import MenuLinksContent from "../components/restaurantMenu/MenuLinksContent";
import SeoParagraph from "../components/SeoParagraph";

export const metadata = {
  title: "I nostri menu – Briseide",
  description:
    "Scopri tutti i nostri menu: pranzo, cena, bevande, spirits e vini. Scegli cosa gustare al Ristorante Briseide.",
};

export default function Page() {
  return (
    <MenuLinksContent>
      <SeoParagraph path="menuTreeDescription" />
    </MenuLinksContent>
  );
}
