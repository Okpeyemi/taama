"use client";

import { useScroll } from "@/hooks/useScroll";
import { navbar } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface props {
  className?: string;
}

const Header: React.FC<props> = ({ className }) => {
  const path = usePathname();
  console.log(path);
  const scrolled = useScroll();

  return (
    <div
      className={`
        ${className} 
        ${
          scrolled
            ? "fixed top-0 left-0 right-0 bg-background text-black shadow-md"
            : "text-white"
        } 
        flex justify-between items-center p-4 transition-all duration-300 z-50 w-full
      `}
    >
      <Link
        href="/"
        className="font-kablammo text-5xl hover:text-pink-800 transition-all duration-300 ease-linear"
      >
        TAAMA
      </Link>
      <nav className="flex space-x-4 font-poppins">
        {navbar.map(({ label, href }, index) => (
          <a
            key={index}
            href={href}
            className={`${
              href === path ? "text-pink-800 border-b-4 border-b-pink-800" : ""
            } uppercase hover:border-b-4 hover:border-b-pink-800 transition-all duration-300 ease-linear hover:text-pink-800`}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex space-x-4">
        <a href="#">
          <Instagram className="transition-all duration-300 ease-linear cursor-pointer hover:text-pink-800" />
        </a>
        <a href="#">
          <Facebook className="transition-all duration-300 ease-linear cursor-pointer hover:text-pink-800" />
        </a>
        <a href="#">
          <Twitter className="transition-all duration-300 ease-linear cursor-pointer hover:text-pink-800" />
        </a>
      </div>
    </div>
  );
};

export default Header;
