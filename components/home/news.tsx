import { books } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface props {
  className?: string;
}

const News: React.FC<props> = ({ className }) => {
  const displayedBooksOnMobile = books.slice(0, 2);

  return (
    <div
      className={`${className} flex flex-col space-y-10 items-center`}
    >
      <h1 className="uppercase text-6xl max-md:text-3xl text-pink-800 text-center mb-16">
        Les nouveautés
      </h1>
      <div className="flex max-md:hidden justify-center items-center w-full space-x-2">
        {books.map(({ title, description, price, image, href }, index) => (
          <div
            key={index}
            className="relative h-[400px] w-fit group overflow-hidden rounded-2xl"
          >
            <a
              className="cursor-pointer rounded-2xl flex flex-col items-center group-hover:opacity-0 transition-all duration-300 ease-in-out"
              href={href}
            >
              <Image
                src={image}
                alt={title}
                className="w-[200px] h-[300px] rounded-2xl"
                width={200}
                height={300}
              />
              <h2 className="text-xl mt-5 uppercase text-center w-[200px]">{title}</h2>
            </a>
            <a
              href={href}
              className="absolute flex flex-col justify-between inset-0 p-8 bg-primary rounded-2xl opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out space-y-5"
            >
              <div className="flex flex-col space-y-6">
                <h2 className="text-pink-800 text-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-in-out">
                  {title}
                </h2>
                <p className="text-white text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-in-out">
                  {description}
                </p>
              </div>
              <h6 className="text-pink-800 text-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-in-out">
                {price} FCFA
              </h6>
            </a>
          </div>
        ))}
      </div>
      <div className="hidden max-md:flex max-sm:flex-col justify-center items-center w-full space-x-2">
        {displayedBooksOnMobile.map(({ title, description, price, image, href }, index) => (
          <div
            key={index}
            className="relative h-[400px] w-fit group overflow-hidden rounded-2xl"
          >
            <a
              className="cursor-pointer rounded-2xl flex flex-col items-center group-hover:opacity-0 transition-all duration-300 ease-in-out"
              href={href}
            >
              <Image
                src={image}
                alt={title}
                className="w-[200px] h-[300px] rounded-2xl"
                width={200}
                height={300}
              />
              <h2 className="text-xl mt-5 uppercase text-center w-[200px]">{title}</h2>
            </a>
            <a
              href={href}
              className="absolute flex flex-col justify-between inset-0 p-8 bg-primary rounded-2xl opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out space-y-5"
            >
              <div className="flex flex-col space-y-6">
                <h2 className="text-pink-800 text-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-in-out">
                  {title}
                </h2>
                <p className="text-white text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-in-out">
                  {description}
                </p>
              </div>
              <h6 className="text-pink-800 text-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-in-out">
                {price} FCFA
              </h6>
            </a>
          </div>
        ))}
      </div>
      <a href="#" className="uppercase max-sm:text-lg p-5 border-2 border-pink-800 text-pink-800 w-fit cursor-pointer hover:bg-pink-800 hover:text-white transition-all duration-300 ease-linear text-xl">
        Découvrir le catalogue
      </a>
    </div>
  );
};

export default News;
