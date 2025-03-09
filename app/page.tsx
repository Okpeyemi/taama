import Footer from "@/components/footer";
import Header from "@/components/header";
import About from "@/components/home/apropos";
import Hero from "@/components/home/hero";
import News from "@/components/home/news";

export default function Home() {  
    
  return (
    <div>
      <div>
      <Header className="px-[10%] max-lg:px-[3%] py-3" />
      </div>
      <Hero className="w-[80%] max-lg:w-[95%] mx-auto py-54 max-lg:py-40" />
      <div className="w-full bg-background">
        <News className="w-[80%] max-lg:w-[95%] mx-auto py-20" />
        <About className="xl:w-[80%] lg:w-[95%] mx-auto py-20" />
      </div>
      <Footer />
    </div>
  );
}
