"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".text-reveal, .contact-detail", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
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
      id="contact"
      className="relative space-y-8 border-t border-border/40 py-16 text-center"
    >
      <h2 className="text-reveal text-5xl font-bold text-accent">
        Let&apos;s Collaborate
      </h2>
      <p className="text-reveal mx-auto max-w-3xl text-xl leading-relaxed text-paper">
        Seeking opportunities in NYSC placements, internships, or full-time
        frontend roles. Eager to bring innovative solutions and technical
        expertise to your team.
      </p>
      <p className="text-reveal mx-auto max-w-3xl text-xl leading-relaxed text-paper">
        Feel free to reach out for collaborations, freelance projects, or just
        to connect. I&apos;m always open to discussing new ideas and
        opportunities.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
        <div className="contact-detail card-motion flex w-full items-center gap-4 border border-border/40 bg-surface px-8 py-5 shadow-2xl md:w-auto">
          <Phone size={24} className="text-accent" />
          <span>+234 706 998 2558</span>
        </div>
        <div className="contact-detail card-motion flex w-full items-center gap-4 border border-border/40 bg-surface px-8 py-5 shadow-2xl md:w-auto">
          <Mail size={24} className="text-accent" />
          <span>cajemma122@email.com</span>
        </div>
      </div>
    </section>
  );
}
