import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OpeningLoader from "@/components/ClientOpeningLoader";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
export default function HomePage() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-ink text-paper"
      style={{ width: "100%", height: "auto", position: "relative" }}
    >
      <OpeningLoader />
      <Header />
      <main className="mx-auto max-w-7xl space-y-20 px-6 py-10 pt-24 lg:space-y-24">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
