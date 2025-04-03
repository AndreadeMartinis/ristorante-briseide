"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "@/public/img/gallery1.jpg";
import img2 from "@/public/img/gallery2.jpg";
import img3 from "@/public/img/gallery3.jpg";
import img4 from "@/public/img/gallery4.jpg";
import { useTranslation } from "../hooks/useTranslation";

export default function Gallery() {
  const { t } = useTranslation();

  const sections = [
    { text: t("homepage.gallery1"), img: img1, reverse: false },
    { text: t("homepage.gallery2"), img: img2, reverse: true },
    { text: t("homepage.gallery3"), img: img3, reverse: false },
    { text: t("homepage.gallery4"), img: img4, reverse: true },
  ];

  return (
    <>
      {sections.map(({ text, img, reverse }, index) => (
        <div
          key={index}
          className={`overflow-hidden bg-secondary flex flex-col md:flex-row w-full md:h-[80vh] items-center ${
            reverse ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="relative w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <Image
              fill
              className="object-cover"
              src={img}
              alt={`piatto_${index + 1}`}
            />
          </div>
          <motion.p
            initial={{ opacity: 0, x: reverse ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className={`md:w-1/2 h-full py-10 px-6 md:py-12 md:px-12 text-textColor text-[.9rem] md:text-[1.3rem] content-center border-y-4 md:border-y-0 my-12 mx-8 md:my-0 md:mx-0 ${
              reverse ? "md:border-r-8" : "md:border-l-8"
            } border-primary`}
          >
            {text}
          </motion.p>
        </div>
      ))}
    </>
  );
}
