import RestaurantMenu from "../components/restaurantMenu/RestaurantMenu";

export const metadata = {
  title: "Menu Pasquale - Briseide",
  description:
    "A Pasqua vivi un’esperienza gastronomica unica con il menu speciale di Briseide, nel cuore di Balduina, tra tradizione e raffinatezza.",
};

export default function Page() {
  return <RestaurantMenu menuType={"special"} />;
}
