import Image from "next/image";
import icon from "../../../public/icon.png";

export default function MenuLoader() {
  return (
    <div className="min-h-screen pt-20 md:pt-0 flex flex-col justify-center items-center gap-4 animate-pulse">
      <Image
        src={icon}
        alt="Logo ristorante"
        width={80}
        height={80}
        className="opacity-80"
        priority
      />
      <p className="text-secondary text-sm uppercase tracking-widest">
        Caricamento menu...
      </p>
    </div>
  );
}
