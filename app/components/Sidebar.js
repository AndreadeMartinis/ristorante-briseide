import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiKnifeFork } from "react-icons/gi";

const sidebarIconAnimation = {
  animate: {
    open: { rotate: [0, 315] },
    closed: { rotate: [315, 0] },
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const sidebarOverlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 0.5 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 },
};
const sidebarPanelAnimation = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { type: "tween", duration: 0.8 },
};

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Chiudi al click esterno
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Chiudi al click sui link
  useEffect(() => {
    const links = menuRef.current?.querySelectorAll("a");
    if (!links) return;
    links.forEach((link) => {
      link.addEventListener("click", () => setIsOpen(false));
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => setIsOpen(false));
      });
    };
  }, [isOpen]);

  // Icona hamburger customizzata
  const ForkAndKnife = () => (
    <motion.button
      onClick={() => setIsOpen(!isOpen)}
      className="z-50 flex items-center justify-center w-12 h-12 relative"
      aria-label="Toggle menu"
      initial={false}
    >
      <motion.div
        animate={
          isOpen
            ? sidebarIconAnimation.animate.open
            : sidebarIconAnimation.animate.closed
        }
        transition={sidebarIconAnimation.animate.transition}
        className="absolute px-4"
      >
        <GiKnifeFork className="text-3xl text-primary" />
      </motion.div>
    </motion.button>
  );

  return (
    <>
      <ForkAndKnife />

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay scuro */}
            <motion.div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-30"
              {...sidebarOverlayAnimation}
            />

            <motion.aside
              ref={menuRef}
              className="fixed top-0 right-0 h-screen w-36 md:w-52 bg-white shadow-lg z-40 flex flex-col items-center justify-start p-2 gap-2 text-secondary text-center overflow-auto "
              {...sidebarPanelAnimation}
            >
              {children}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
