"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import Blog from "../public/Blog.png";
import devbyte from "../public/devbyte.png";
import commerce from "../public/commerce.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Full Stack Blog App",
    desc: "A feature-rich blog platform with user authentication, real-time comments, and admin dashboard. Integrated frontend with Node.js/Express backend, using MongoDB for data persistence. Demonstrates API consumption, error handling, and secure authentication flows.",
    image: Blog,
  },
  {
    name: "Dev Byte Community Project",
    desc: "A feature-rich blog platform made by the community for the community. This project was a collaborative effort where I contributed to the frontend development using React and Tailwind CSS. The project serves as a testament to my commitment to open-source contributions and community-driven development.",
    image: devbyte,
  },
  {
    name: "Responsive E-Commerce Site",
    desc: "A modern e-commerce platform with product catalogs. This was my first project using HTML and CSS. Although it lacks interactivity, it showcases my early passion for web design and development.",
    image: commerce,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".feature-card", {
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
      gsap.from(".text-reveal", {
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
    <section ref={sectionRef} id="projects" className="space-y-12">
      <h2 className="text-reveal text-center text-5xl font-bold text-accent">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <article
            key={project.name}
            className="feature-card card-motion grid grid-cols-1 items-center gap-6 border border-border/40 bg-surface p-8 shadow-2xl md:grid-cols-2"
          >
            <img
              src={project.image.src}
              alt={project.name}
              className="h-64 w-full border border-border/30 object-cover shadow-xl"
            />
            <div className="space-y-4">
              <h3 className="text-reveal text-3xl font-semibold text-accent">
                {project.name}
              </h3>
              <p className="text-reveal text-paper">{project.desc}</p>
              <a
                href="https://github.com/Cue-designs"
                target="_blank"
                rel="noreferrer"
                className="text-reveal inline-flex items-center gap-2 text-accent transition-colors hover:text-sand"
              >
                View Project <ExternalLink size={18} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
