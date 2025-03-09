"use client";

import { useScroll } from "@/hooks/useScroll";
import { navbar } from "@/lib/utils";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface props {
  className?: string;
}

const Header: React.FC<props> = ({ className }) => {
  const path = usePathname();
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <div className="flex items-center w-full">
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
        <nav className="flex max-md:hidden space-x-4 font-poppins">
          {navbar.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              className={`${
                href === path
                  ? "text-pink-800 border-b-4 border-b-pink-800"
                  : ""
              } uppercase hover:border-b-4 hover:border-b-pink-800 transition-all duration-300 ease-linear hover:text-pink-800`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="flex max-md:hidden space-x-4">
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
          <button
            onClick={() => setOpen(!open)}
            className="hidden max-md:flex transition-all duration-300 ease-linear cursor-pointer hover:text-pink-800"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {open && (
        <nav
          className={`flex flex-col md:hidden bg-white items-center fixed w-full h-screen space-y-6 font-poppins right-0 top-[70px] transform transition-transform duration-300 ease-in-out p-4 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navbar.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              className={`${
                href === path
                  ? "text-pink-800 border-b-4 border-b-pink-800"
                  : ""
              } uppercase hover:border-b-4 hover:border-b-pink-800 transition-all duration-300 ease-linear hover:text-pink-800`}
            >
              {label}
            </a>
          ))}
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
        </nav>
      )}
    </div>
  );
};

export default Header;