import React from "react";

interface props {
  className?: string;
}

const Hero: React.FC<props> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col text-white space-y-10 max-lg:text-center`}>
      <div className="flex lg:flex-col max-lg:space-x-5 lg:w-2/3">
        <span className="font-poppins text-7xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-md:text-start">Receuil de</span>
        <span className="font-kablammo text-7xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-md:text-start">BD Africain</span>
      </div>
      <p className="lg:w-1/2 max-md:text-sm text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        quibusdam ipsum doloribus, adipisci vitae ipsa repudiandae amet
        molestiae. Alias, atque expedita ad harum esse vero dolorem ipsam
        debitis porro molestiae?
      </p>
    </div>
  );
};

export default Hero;
