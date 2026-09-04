"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import TextType from "./TextType";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const texts = {
    content: [
      "Frontend Developer with expertise in React,",
      "Dedicated to crafting high-performance,",
      "Scalable applications with a focus on user experience and clean code.",
      "Good with Tailwind CSS, TypeScript and modern web technologies.",
    ],
    style:
      "mx-auto max-w-3xl text-lg font-light leading-relaxed text-muted md:text-2xl",
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-elem", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHover = (target: HTMLElement, scale: number) => {
    gsap.to(target, { scale, duration: 0.25, ease: "power2.out" });
  };

  const handleHoverOut = (target: HTMLElement) => {
    gsap.to(target, { scale: 1, duration: 0.25, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[calc(100vh-6rem)] w-full items-center overflow-hidden border-b border-border/40 px-4 py-16 text-paper antialiased"
    >
      <div className="container relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-center space-y-8 text-center lg:col-span-8 lg:items-start lg:text-left">
          <p className="hero-elem text-reveal text-sm font-bold uppercase tracking-[0.25em] text-accent">
            Frontend developer / creative technologist
          </p>
          <h1 className="hero-elem text-reveal text-5xl font-black tracking-tight text-paper sm:text-7xl xl:text-8xl">
            Hi, I&apos;m <span className="text-accent">Emmanuel</span>
          </h1>

          <div className="hero-elem text-reveal min-h-[140px]">
            <TextType
              text={texts.content}
              typingSpeed={60}
              pauseDuration={2000}
              showCursor
              cursorCharacter="_"
              deletingSpeed={40}
              cursorBlinkDuration={0.5}
              className={texts.style}
            />
          </div>

          <div className="hero-elem text-reveal flex flex-wrap justify-center gap-4 pt-4 lg:justify-start">
            <a
              href="#projects"
              onMouseEnter={(event) => handleHover(event.currentTarget, 1.02)}
              onMouseLeave={(event) => handleHoverOut(event.currentTarget)}
              className="inline-flex items-center gap-2 border border-accent bg-accent px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-sand"
            >
              View Work <span aria-hidden="true">-&gt;</span>
            </a>
            <a
              href="#contact"
              onMouseEnter={(event) => handleHover(event.currentTarget, 1.02)}
              onMouseLeave={(event) => handleHoverOut(event.currentTarget)}
              className="border border-border/70 bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
