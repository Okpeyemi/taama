import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header className="px-[10%] max-lg:px-[3%] py-3" />
      <div className="w-full flex flex-col md:flex-row items-center px-[10%] max-lg:px-[3%] py-20 gap-10">
        <div className="relative w-full lg:w-1/2 max-md:hidden">
          <Image
            src="/images/apropos/a_propos.jpg"
            alt="A propos"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-[400px]"
            priority
          />
        </div>
        <p className="text-3xl lg:text-xl max-md:text-lg font-montserrat text-white md:w-1/2">
          Des falaises du Fouta aux plaines du Serengeti, de l&apos;Aïr brûlant au
          cœur des pyramides de Gizeh, se dessinent les histoires des Afriques.
          L&apos;âme du continent se reflète à travers nos récits, épiques, tragiques
          et modernes. Le chant des Djeli du Manden et l&apos;appel codé des pygmées
          de la forêt équatoriale laissent place aux planches du recueil de
          TAAMA.
        </p>
      </div>
      <div className="bg-background px-[10%] max-lg:px-[3%] py-20 space-y-10">
        <h3 className="text-3xl lg:text-5xl font-poppins">
          Pourquoi ce recueil de BD ?
        </h3>
        <div className="flex flex-col space-y-5 text-xl max-xl:text-lg font-montserrat">
          <p>
            La bande dessinée est le médium le plus souple et le plus libre pour
            un artiste souhaitant développer son imaginaire, tout en racontant
            des histoires de manière percutante ! C’est une pierre angulaire de
            la pop culture mondiale qui a contribué à rendre certaines cultures
            &quot;cool&quot; aux yeux de la planète entière.
          </p>
          <p>
            Les Européens nous l&apos;ont montré à travers la BD franco-belge, les
            Japonais avec leurs mangas, les Américains avec leurs comics. Il est
            grand temps que les Africains montrent à quel point leurs
            différentes cultures sont riches et peuvent être &quot;cool&quot; !
          </p>
          <p>
            TAAMA, c’est un recueil de bandes dessinées hybrides qui casse les
            codes de l&apos;ancienne BD franco-belge ! Avec un sens de lecture
            occidental, certes, mais en incorporant les styles du manga et des
            comics dans nos pages. Nous n&apos;oublions pas notre héritage graphique
            africain : nous nous inspirons de nos créateurs et de nos
            prédécesseurs pour faire briller notre voix. Prêts à reprendre le
            flambeau et à raconter nos histoires ! Notre objectif, c’est de
            raconter des histoires captivantes tout en mettant en avant les
            cultures des Afriques !
          </p>
        </div>
      </div>
      <div className="bg-pink-800 flex flex-col md:flex-row px-[10%] max-lg:px-[3%] py-20 gap-10">
        <div className="relative w-full md:w-1/2">
          <Image
            src="/images/apropos/image2.jpg"
            alt="A propos"
            width={900}
            height={300}
            className="rounded-xl object-cover w-full h-[400px]"
            priority
          />
        </div>
        <div className="flex flex-col space-y-5 text-background md:w-1/2">
          <h4 className="text-3xl lg:text-5xl font-poppins">Des Afriques ?</h4>
          <div className="flex flex-col space-y-2 font-montserrat">
            <p className="text-lg md:text-xl">
              L&apos;Afrique est le continent le plus riche à bien des égards : ses
              populations, ses ressources naturelles, sa diversité géographique,
              mais surtout ses cultures ! Cette pluralité, c’est ce qui fait sa
              force, et nous voulons l’exprimer et la représenter en parlant des
              “Afriques”, comme le dit Joëlle Épée Mandengue.
            </p>
            <span className="text-sm">Auteure de BD camerounaise</span>
          </div>
        </div>
      </div>
      <div className="bg-background flex flex-col-reverse lg:flex-row items-center px-[10%] max-lg:px-[3%] py-20 gap-10">
        <div className="flex flex-col space-y-5 lg:w-1/2">
          <h4 className="text-3xl lg:text-5xl">
            À qui est destiné ce recueil !
          </h4>
          <div className="flex flex-col space-y-2">
            <p className="text-lg md:text-xl font-montserrat">
              Pour tous les africains du continent comme de la diaspora comme
              nous qui depuis tant d&apos;années voulons voir leurs différentes
              cultures mises à l&apos;honneur à travers des créateurs africains qui
              méritent reconnaissance.
            </p>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 max-md:hidden">
          <Image
            src="/images/apropos/image3.png"
            alt="A propos"
            width={800}
            height={300}
            className="rounded-xl object-cover w-full h-[400px]"
            priority
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
