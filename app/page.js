import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Tech from "@/components/Techstack";

export default function Home() {
  return (
    <main className="lg:px-40 md:px-28 px-16 mb-20">
      <Hero />
      <Intro />
      <Project />
      <Tech />
      <Contact />
    </main>
  );
}
