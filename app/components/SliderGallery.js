import { useTranslation } from "../hooks/useTranslation";
import img1 from "@/public/img/gallery1.jpg";
import img2 from "@/public/img/gallery2.jpeg";
import img3 from "@/public/img/gallery3.jpg";
import img4 from "@/public/img/gallery4.jpg";
import Slider from "./Slider";
import Image from "next/image";

export default function SliderGallery() {
  const { t } = useTranslation();

  const slides = [
    { text: t("homepage.gallery1"), img: img1, label: "img1" },
    { text: t("homepage.gallery2"), img: img2, label: "img2" },
    { text: t("homepage.gallery3"), img: img3, label: "img3" },
    { text: t("homepage.gallery4"), img: img4, label: "img4" },
  ];
  return <Slider></Slider>;
}
