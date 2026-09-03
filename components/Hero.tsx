import { Github, Mail } from "lucide-react";
import profile from "../public/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="text-center space-y-8 relative">
      <img
        src={profile.src}
        alt="Emmanuel Cajetan"
        className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-blue-500/30"
      />
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Emmanuel Cajetan
      </h1>
      <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Frontend Developer with expertise in React, Tailwind CSS, TypeScript,
        and modern web technologies. Dedicated to crafting high-performance,
        scalable applications with a focus on user experience and clean code
        architecture.
      </p>
      <div className="flex justify-center gap-8 py-4 px-4 lg:px-8">
        <a
          href="https://github.com/Cue-designs"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 px-4 py-5 rounded-full shadow-xl z-50 lg:px-10 text-xl"
        >
          <Github size={24} /> GitHub
        </a>
        <a
          href="mailto:cajemma122@email.com"
          className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-500 px-4 py-5 rounded-full shadow-xl z-50 lg:px-10 text-xl"
        >
          <Mail size={24} /> Contact
        </a>
      </div>
    </section>
  );
}
