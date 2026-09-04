import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <div
      className="min-h-screen overflow-hidden bg-ink text-paper"
      style={{ width: "100%", height: "auto", position: "relative" }}
    >
      <Header />
      <main className="mx-auto max-w-7xl space-y-32 px-6 py-16 pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
