"use client";

import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiNextdotjs,
  SiSupabase,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  { node: <SiGit />, title: "Github", href: "https://github.com/Cue-designs" },
  {
    node: <SiSupabase />,
    title: "Supabase",
    href: "https://supabase.com",
  },
  {
    node: <SiHtml5 />,
    title: "Html",
    href: "https://w3schools.com",
  },
  {
    node: <SiJavascript />,
    title: "Javascript",
    href: "https://w3schools.com",
  },
  {
    node: <SiCss3 />,
    title: "Css",
    href: "https://w3schools.com",
  },
];

const skills = [
  {
    title: "Frontend Development",
    desc: "Developing robust UIs with React and TypeScript, focusing on component reusability and state management.",
  },
  {
    title: "Responsive & UI/UX Design",
    desc: "Designing adaptive layouts using Tailwind CSS, ensuring optimal performance on all devices with modern design patterns.",
  },
  {
    title: "Testing & Deployment",
    desc: "Implementing Git workflows and deployments for reliable, scalable applications.",
  },
];

export default function Skills() {
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
    <section ref={sectionRef} id="skills" className="space-y-12">
      <h2 className="text-reveal text-center text-5xl font-bold text-accent">
        Skills & Tech Stack
      </h2>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={40}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="feature-card card-motion border border-border/40 bg-surface p-8 shadow-xl"
          >
            <h3 className="text-reveal mb-4 text-2xl font-semibold text-accent">
              {skill.title}
            </h3>
            <p className="text-reveal text-paper">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
