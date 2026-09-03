import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950/70 backdrop-blur-md py-10 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
        <p>
          © {new Date().getFullYear()} Emmanuel Cajetan. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/Cue-designs"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-cajetan-81a73a308"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://x.com/EmmanuelCa64221"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300"
          >
            <span className="text-2xl" aria-label="X">
              𝕏
            </span>
          </a>
          <a href="mailto:cajemma122@email.com" className="hover:text-gray-300">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
