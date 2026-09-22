"use client";

import { Code2, Database, LayoutTemplate, Users } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: LayoutTemplate,
    title: "Frontend Engineering",
    description:
      "I build responsive, accessible interfaces with React, Next.js, TypeScript, and thoughtful component systems.",
  },
  {
    icon: Code2,
    title: "Full Stack Products",
    description:
      "I take products from the first user flow to production, building reliable applications that feel clear and fast.",
  },
  {
    icon: Database,
    title: "CMS & Data Systems",
    description:
      "I use WordPress, Supabase, and structured content systems to help teams move quickly.",
  },
  {
    icon: Users,
    title: "Team Enablement",
    description:
      "I support teams with clean reviews, useful documentation, and collaborative delivery that helps us ship with confidence.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-service-card]", {
        y: 36,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <p className="section-kicker">What I do</p>
        <h2 className="font-display text-4xl font-bold text-paper sm:text-5xl">
          I turn ambitious ideas into practical digital products.
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            data-service-card
            className="card-motion glass-surface group flex min-h-72 flex-col p-6"
          >
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent">
              <Icon size={22} strokeWidth={1.8} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-paper">
              {title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">
              {description}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1"
            >
              Discuss Project <span aria-hidden="true">-&gt;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
