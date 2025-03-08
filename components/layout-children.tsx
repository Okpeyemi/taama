"use client";

import { navbar } from "@/lib/utils";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { usePathname } from "next/navigation";

interface props {
    children: React.ReactNode;
}

const LayoutChildren:React.FC<props> = ({ children }) => {
    const path = usePathname();
    
  return (
    <div>
      {navbar.map(({ href }, index) => (
        <div key={index} className="flex flex-col">
          <Header
            className={`${
              path === href
                ? "home-container"
                : path === "a-propos"
                ? "about-container"
                : path === "contact"
                ? ""
                : ""
            } px-96 py-4`}
          />
          {children}
          <Footer />
        </div>
      ))}
    </div>
  );
};

export default LayoutChildren;
