import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface navItem {
  label: string;
  href: string;
}

interface booksItem {
  title: string;
  description: string;
  price: string;
  image: string;
  href: string;
}

export const navbar: navItem[] = [
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const books: booksItem[] = [
  {
    title: "Héritage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    price: "20000",
    image: "/images/home/book/couv_heritage.png",
    href: "#",
  },
  {
    title: "Le vent contre le temps",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    price: "20000",
    image: "/images/home/book/couv_le_vent_contre_le_temps.jpeg",
    href: "#",
  },
  {
    title: "Mboka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    price: "20000",
    image: "/images/home/book/couv_mboka.png",
    href: "#",
  },
  {
    title: "Taama",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    price: "20000",
    image: "/images/home/book/couv_taama.png",
    href: "#",
  },
  {
    title: "Raglan",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    price: "20000",
    image: "/images/home/book/couv_raglan.png",
    href: "#",
  },
];
