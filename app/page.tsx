import Hero from "@/components/hero/Hero";
import Stats from "@/components/sections/Stats";
import Arsenal from "@/components/sections/Arsenal";
import Capabilities from "@/components/sections/Capabilities";
import Loadout from "@/components/sections/Loadout";
import Certs from "@/components/sections/Certs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CursorTrail from "@/components/motion/CursorTrail";

export default function Home() {
  return (
    <>
      <CursorTrail />
      <main>
        <Hero />
        <Stats />
        <Arsenal />
        <Capabilities />
        <Loadout />
        <Certs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
