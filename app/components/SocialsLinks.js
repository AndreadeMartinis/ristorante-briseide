import { FaInstagram } from "react-icons/fa6";

export default function SocialIcons() {
  return (
    <div className="social-icons text-secondary hover:text-primary transition-all  w-12 h-12 flex justify-center items-center">
      <a
        href="https://www.instagram.com/briseide_ristorante/?hl=it"
        target="_blank"
        aria-label="Link Profilo Instagram"
        title="Seguici su Instagram!"
        className="text-3xl md:text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
