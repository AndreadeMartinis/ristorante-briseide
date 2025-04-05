import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id !== activeId) setActiveId(id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.3,
        ...options,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, options, activeId]);

  return activeId;
}
