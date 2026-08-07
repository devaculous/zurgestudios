import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GameShowcase from "@/components/GameShowcase";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <GameShowcase />
      <Contact />
      
      <footer className="py-8 border-t border-white/5 text-center text-xs font-bold tracking-widest text-white/30 uppercase bg-[#050505]">
        © {new Date().getFullYear()} Zurge Studios. All Rights Reserved.
      </footer>
    </>
  );
}