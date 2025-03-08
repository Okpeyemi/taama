"use client";

import { navbar } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const path = usePathname();

  return (
    <div className="bg-pink-800 flex flex-col items-center w-full">
      <h1 className="text-8xl uppercase pt-20 text-white">Suivez-nous</h1>
      <div className="w-full mt-[-20px] flex flex-col items-center p-10 max-lg:p-[3%]">
        <div className="flex space-x-4 w-[25%] max-lg:w-[50%] justify-between items-center text-white py-10">
          <a
            href="#"
            className="flex flex-col items-center space-y-3 hover:text-primary transition-all duration-300 ease-linear cursor-pointer"
          >
            <Instagram className="w-20 h-20 max-lg:w-10 max-lg:h-10" />
            <h6 className="uppercase">Instagram</h6>
          </a>
          <a
            href="#"
            className="flex flex-col items-center space-y-3 hover:text-primary transition-all duration-300 ease-linear cursor-pointer"
          >
            <Facebook className="w-20 h-20 max-lg:w-10 max-lg:h-10" />
            <h6 className="uppercase">Instagram</h6>
          </a>
          <a
            href="#"
            className="flex flex-col items-center space-y-3 hover:text-primary transition-all duration-300 ease-linear cursor-pointer"
          >
            <Twitter className="w-20 h-20 max-lg:w-10 max-lg:h-10" />
            <h6 className="uppercase">Instagram</h6>
          </a>
        </div>
      </div>
      <div className="bg-primary w-full flex flex-col items-center justify-center">
        <a href="#" className="font-kablammo text-9xl text-white pt-10 pb-5">
          TAAMA
        </a>
        <nav className="flex space-x-4 font-poppins text-white py-5">
          {navbar.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              className={`${
                label === path ? "text-pink-800" : ""
              } uppercase hover:border-b-4 hover:border-b-pink-800 transition-all duration-300 ease-linear hover:text-pink-800`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="text-white flex py-5 space-x-5">
          <a
            href="#"
            className="space-y-3 hover:text-pink-800 transition-all duration-300 ease-linear cursor-pointer"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="space-y-3 hover:text-pink-800 transition-all duration-300 ease-linear cursor-pointer"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="space-y-3 hover:text-pink-800 transition-all duration-300 ease-linear cursor-pointer"
          >
            <Twitter className="w-8 h-8" />
          </a>
        </div>
        <div className="uppercase text-white pt-5 pb-10">
            <a href="#" className="hover:text-pink-800 transition-all duration-300 ease-linear cursor-pointer">Mentions légales</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
