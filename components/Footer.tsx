"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail } from "lucide-react";

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
    <footer ref={footerRef} className="border-t border-border/40 bg-ink py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-muted md:flex-row">
        <p className="footer-text">
          © {new Date().getFullYear()} Emmanuel Cajetan. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            href="https://github.com/Cue-designs"
            target="_blank"
            rel="noreferrer"
            className="footer-link transition-colors hover:text-accent"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-cajetan-81a73a308"
            target="_blank"
            rel="noreferrer"
            className="footer-link transition-colors hover:text-accent"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://x.com/EmmanuelCa64221"
            target="_blank"
            rel="noreferrer"
            className="footer-link transition-colors hover:text-accent"
          >
            <span className="text-2xl" aria-label="X">
              𝕏
            </span>
          </a>
          <a
            href="mailto:cajemma122@email.com"
            className="footer-link transition-colors hover:text-accent"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}
