import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import About from "@/components/sections/About";
import WhyMe from "@/components/sections/WhyMe";
import Services from "@/components/sections/Services";
import Sectors from "@/components/sections/Sectors";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <WhyMe />
        <Services />
        <Sectors />
        <Process />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
