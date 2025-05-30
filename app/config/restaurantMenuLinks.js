import { BiDish, BiDrink } from "react-icons/bi";
import { LuGlassWater } from "react-icons/lu";
import { PiWine } from "react-icons/pi";
import ROUTES from "./routes";
import { GiEasterEgg } from "react-icons/gi";

const menuLinks = [
  {
    key: "portate",
    icon: BiDish,
    href: ROUTES.menu.portate,
  },
  {
    key: "bevande",
    icon: LuGlassWater,
    href: ROUTES.menu.bevande,
  },
  {
    key: "distillati",
    icon: BiDrink,
    href: ROUTES.menu.spirits,
  },
  {
    key: "vini",
    icon: PiWine,
    href: ROUTES.menu.vini,
  },
  {
    key: "special",
    icon: GiEasterEgg,
    href: ROUTES.menu.special,
  },
];

export default menuLinks;
