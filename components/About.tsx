"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageweb from "../public/imageweb.png";

gsap.registerPlugin(ScrollTrigger);

const skillGroups = {
  Languages: ["JavaScript", "TypeScript", "Python"],
  Frameworks: ["React", "Next.js", "Tailwind CSS"],
  "CMS & DB": ["Supabase", "WordPress", "PostgreSQL"],
  Tooling: ["Git", "Figma", "Vercel"],
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-about-card]", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
      gsap.from("[data-about-reveal]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="grid items-center lg: items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="space-y-6 ">
        <p className="section-kicker">About me</p>
        <h2
          data-about-reveal
          className="font-display text-4xl font-bold text-paper sm:text-5xl"
        >
          A frontend developer with a product mindset.
        </h2>

        <p data-about-reveal className="text-lg leading-8 text-muted">
          I care about the part between a rough idea and a delightful product:
          the structure, the small interactions, the readable code, and the
          moment everything starts to feel inevitable.
        </p>
        <div data-about-card className="glass-surface rounded-2xl p-6">
          <p className="text-sm leading-7 text-paper/80">
            Currently focused on frontend engineering, scalable UI systems, and
            collaborative teams where craft and momentum can coexist.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/20 pt-5 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl font-bold text-accent">2+</p>
              <p className="mt-1 text-xs text-muted">Years building</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">20+</p>
              <p className="mt-1 text-xs text-muted">Projects shipped</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">
                24/7
              </p>
              <p className="mt-1 text-xs text-muted">Curiosity</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-accent">NG</p>
              <p className="mt-1 text-xs text-muted">Based in Lagos</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <div className="relative hidden aspect-[5/4] overflow-hidden rounded-3xl border border-border/20 md:block">
          <img
            src={imageweb.src}
            alt="Futuristic abstract"
            className="h-full w-full object-cover  object-right opacity-70"
          />
        </div>
        <div data-about-card className="glass-surface rounded-2xl p-6">
          <p className="section-kicker">Tech stack matrix</p>
          <div className="mt-5 space-y-5">
            {Object.entries(skillGroups).map(([group, items]) => (
              <div
                key={group}
                className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:items-center"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/30 px-3 py-1.5 text-xs font-semibold text-paper/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
