import Footer from "@/components/footer";
import Header from "@/components/header";
import { Mail, Phone } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <Header className="px-[10%] max-lg:px-[3%] py-3" />
      </div>
      <div className="w-full flex flex-col px-[10%] max-lg:px-[3%] py-20 gap-10">
        <h1 className="font-poppins text-7xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-md:text-start text-white">
          Contact
        </h1>
        <div className="flex flex-col space-y-5 text-white">
          <div className="flex items-center space-x-4">
            <Phone /> <span>XXXXXXXXXX</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail /> <span>john.doe@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="bg-background px-[10%] max-lg:px-[3%] py-20 space-y-10">
        <h1 className="font-poppins text-5xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-md:text-start text-foreground">
          Nous écrire
        </h1>
        <form className="flex flex-col space-y-5 text-foreground">
          <input
            type="text"
            placeholder="Nom"
            className="bg-transparent font-montserrat border-b-2 border-pink-800 text-foreground outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent font-montserrat border-b-2 border-pink-800 text-foreground outline-none"
          />
          <textarea
            placeholder="Message"
            className="bg-transparent font-montserrat border-b-2 border-pink-800 text-foreground outline-none"
          ></textarea>
          <button className="bg-pink-800 text-white py-2 px-5 rounded-lg cursor-pointer">
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default page;
