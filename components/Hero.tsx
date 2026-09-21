"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative flex min-h-[calc(100vh-5rem)] w-full items-center overflow-hidden px-4 pb-12 pt-24 text-paper antialiased"
    >
      <div className="container relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-8">
        <div className="order-1 flex min-w-0 flex-col items-center space-y-6 text-center lg:col-span-7 lg:items-start lg:text-left">
          <div className="overflow-hidden">
            <p
              data-hero-reveal
              className="hero-elem section-kicker inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2"
            >
              <Sparkles size={14} /> ENGINEER{" "}
              <span className="text-muted">•</span> Full Stack Developer
            </p>
          </div>
          <div className="overflow-hidden ">
            <h1
              data-hero-reveal
              className="hero-elem font-display max-w-5xl text-5xl font-bold leading-[0.98] text-paper sm:text-7xl xl:text-8xl"
            >
              I build digital products that feel{" "}
              <span className="text-accent">clear, capable,</span> and alive.
            </h1>
          </div>

          <div className="overflow-hidden">
            <div data-hero-reveal className="hero-elem text-reveal">
              <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                I&apos;m Emmanuel Cajetan, a frontend-focused developer working
                with React, Next.js, Supabase, and TypeScript to turn complex
                ideas into calm, high-performing interfaces.
              </p>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              data-hero-reveal
              className="hero-elem flex flex-wrap justify-center gap-3 pt-2 lg:justify-start"
            >
              <a
                href="#projects"
                onMouseEnter={(event) => handleHover(event.currentTarget, 1.02)}
                onMouseLeave={(event) => handleHoverOut(event.currentTarget)}
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-6 py-3.5 text-sm font-bold text-ink transition-colors hover:bg-sand active:scale-[.98]"
              >
                Say Hello <ArrowUpRight size={17} />
              </a>
              <a
                href="#contact"
                onMouseEnter={(event) => handleHover(event.currentTarget, 1.02)}
                onMouseLeave={(event) => handleHoverOut(event.currentTarget)}
                className="rounded-full border border-border/50 bg-ink/40 px-6 py-3.5 text-sm font-bold text-paper transition-colors hover:border-accent hover:text-accent active:scale-[.98]"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        <div className="order-2 min-w-0 w-full lg:col-span-5">
          <div className="glass-surface relative mx-auto aspect-[4/5] w-full max-w-xl overflow-hidden rounded-3xl p-4 sm:aspect-[16/12] lg:aspect-[4/5] xl:aspect-[3/4]">
            <img
              src="/profile.png"
              alt="Emmanuel Cajetan"
              className="h-full w-full rounded-2xl object-cover opacity-85"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-paper/15 bg-ink/70 p-4 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
              <p className="font-display text-lg font-semibold text-paper sm:text-xl">
                Emmanuel Cajetan
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">
                Frontend Engineer · Lagos, NG
              </p>
            </div>
          </div>
        </div>
        <div className="order-3 flex min-w-0 flex-wrap justify-center gap-3 lg:col-span-12 lg:justify-start">
          {[
            { label: "Ojo, Lagos, Nigeria", icon: <MapPin size={15} /> },
            { label: "2 years experience" },
            { label: "React · Supabase · Next.js" },
          ].map((chip) => (
            <span
              key={chip.label}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-border/30 bg-ink/30 px-4 py-2 text-xs font-semibold text-muted"
            >
              {chip.icon}
              <span className="truncate">{chip.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
