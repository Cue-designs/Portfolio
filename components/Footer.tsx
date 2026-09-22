"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".footer-text, .footer-link", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, footerRef);

    return () => context.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="border-t border-border/20 bg-ink/60 py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-muted md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-paper">
            Cue <span className="text-accent">dev</span>
          </p>
          <p className="footer-text mt-2 text-sm">
            I build with care from Lagos, Nigeria.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Cue-designs"
            target="_blank"
            rel="noreferrer"
            className="footer-link rounded-full border border-border/30 p-3 transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-cajetan-81a73a308"
            target="_blank"
            rel="noreferrer"
            className="footer-link rounded-full border border-border/30 p-3 transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://x.com/EmmanuelCa64221"
            target="_blank"
            rel="noreferrer"
            className="footer-link rounded-full border border-border/30 p-3 transition-colors hover:border-accent hover:text-accent"
          >
            <span className="text-2xl" aria-label="X">
              𝕏
            </span>
          </a>
          <a
            href="mailto:cajemma122@email.com"
            className="footer-link rounded-full border border-border/30 p-3 transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={28} />
          </a>
          <a
            href="#home"
            className="ml-3 inline-flex items-center gap-2 rounded-full border border-border/30 px-4 py-3 text-xs font-semibold text-paper transition hover:border-accent hover:text-accent"
          >
            Back to top <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
