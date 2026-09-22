"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Github } from "lucide-react";
import Blog from "../public/Blog.png";
import devbyte from "../public/devbyte.png";
import commerce from "../public/commerce.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Full Stack Blog App",
    desc: "I built this publishing platform with authentication, comments, and an admin workflow around a clear reading experience.",
    image: Blog,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "Dev Byte Community Project",
    desc: "A community-built platform where I shaped responsive frontend flows and helped create a more useful open-source experience.",
    image: devbyte,
    tags: ["React", "Tailwind", "Community"],
  },
  {
    name: "Responsive E-Commerce Site",
    desc: "I built this early ecommerce project while developing my love for responsive layouts, visual hierarchy, and product-page details.",
    image: commerce,
    tags: ["HTML", "CSS", "Responsive"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-project-card]", {
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
      gsap.from("[data-project-reveal]", {
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
    <section ref={sectionRef} id="projects" className="space-y-8">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div className="space-y-4">
          <p className="section-kicker">Selected work</p>
          <h2 className="font-display text-4xl font-bold text-paper sm:text-5xl">
            Things I&apos;ve built to be useful.
          </h2>
        </div>
        <a
          href="https://github.com/Cue-designs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-border/40 px-5 py-3 text-sm font-semibold text-paper transition hover:border-accent hover:text-accent"
        >
          <Github size={16} /> GitHub profile
        </a>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            data-project-card
            className="card-motion glass-surface group overflow-hidden rounded-2xl"
          >
            <img
              src={project.image.src}
              alt={project.name}
              className="h-56 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
            <div data-project-reveal className="space-y-4 p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/30 px-3 py-1 text-[11px] font-semibold text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-semibold text-paper">
                {project.name}
              </h3>
              <p className="text-sm leading-7 text-muted">{project.desc}</p>
              <a
                href="https://github.com/Cue-designs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-transform group-hover:translate-x-1"
              >
                Explore <ArrowUpRight size={17} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
