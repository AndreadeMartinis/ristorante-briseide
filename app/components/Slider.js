"use client";
import { useEffect, useRef, useState } from "react";
import { motion, px, usemotio } from "framer-motion";
import img1 from "@/public/img/gallery1.jpg";
import img2 from "@/public/img/gallery2.jpeg";
import img3 from "@/public/img/gallery3.jpg";
import img4 from "@/public/img/gallery4.jpg";
import { useTranslation } from "../hooks/useTranslation";
import Image from "next/image";

export default function Slider({ children }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const { t } = useTranslation();

  const slides = [
    { text: t("homepage.gallery1"), img: img1, label: "img1" },
    { text: t("homepage.gallery2"), img: img2, label: "img2" },
    { text: t("homepage.gallery3"), img: img3, label: "img3" },
    { text: t("homepage.gallery4"), img: img4, label: "img4" },
  ];

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section ref={carousel} className="relative min-h-screen overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        className="flex items-center cursor-grab active:cursor-grabbing p-32 bg-secondary"
      ></motion.div>
    </section>
  );
}
