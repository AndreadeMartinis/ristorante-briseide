import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export function useHeaderVisibility() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(pathname !== "/");
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY.current) {
      setVisible(true);
    }
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const timer = setTimeout(() => setVisible(true), 3000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, handleScroll]);

  return visible;
}
