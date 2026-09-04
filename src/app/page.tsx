import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import PixelSnow from "@/components/PixelSnow";
export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden"
      style={{ width: "100%", height: "auto", position: "relative" }}
    >
      <PixelSnow
        color="#ffffff"
        flakeSize={0.004}
        minFlakeSize={1.25}
        pixelResolution={700}
        speed={1.6}
        density={0.3}
        direction={125}
        brightness={1.5}
        depthFade={6.5}
        farPlane={27}
        gamma={0.4545}
        variant="round"
      />
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32 pt-24">
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
