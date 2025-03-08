import React from "react";

interface props {
  className?: string;
}

const About: React.FC<props> = ({ className }) => {
  return (
    <div
      className={`${className} flex space-x-10 justify-center`}
    >
      <div className="flex space-x-20 w-[90%] items-center">
        <div className="w-1/2 flex flex-col space-y-10">
          <h5 className="text-4xl uppercase font-montserrat bg-pink-900 text-white p-3 w-fit">
            À propos
          </h5>
          <h1 className="text-7xl uppercase">L&apos;histoire de Taama</h1>
          <a href="#" className="uppercase p-5 border-2 border-pink-800 text-pink-800 w-fit cursor-pointer hover:bg-pink-800 hover:text-white transition-all duration-300 ease-linear text-xl">
            En savoir plus
          </a>
        </div>
        <div className="w-1/2 text-primary/60">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            sapiente mollitia doloribus, culpa assumenda sequi ad. Ea eaque
            voluptatum assumenda exercitationem fugiat labore id doloremque
            praesentium recusandae, consequatur laudantium ullam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
