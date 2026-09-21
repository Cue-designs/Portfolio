"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageweb from "../public/imageweb.jpg";

gsap.registerPlugin(ScrollTrigger);

const education = [
  "Bachelor's Degree in Computer Science from I-fatoss University, graduated with honors.",
  "2+ years of professional experience in frontend development, including freelance projects.",
  "Contributed to open-source repositories on GitHub.",
  "Experience in agile environments, collaborating with cross-functional teams.",
];

const insights = [
  "Deep knowledge of React ecosystem: Hooks, Context API, and also state management.",
  "Proficient in performance profiling using Chrome DevTools.",
  "Understanding of web accessibility and SEO best practices.",
  "Skilled in unit/integration testing with React Testing Library.",
  "Familiar with CI/CD pipelines using GitHub Actions and deployment on Vercel/Netlify.",
];

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="feature-card card-motion border border-border/40 bg-ink p-6 shadow-xl">
      <h3 className="text-reveal mb-4 text-2xl font-semibold text-accent">
        {title}
      </h3>
      <ul className="list-none space-y-3 text-muted">
        {items.map((item) => (
          <li key={item} className="text-reveal flex items-start gap-2">
            <span className="text-accent">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
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
    <section
      ref={sectionRef}
      id="about"
      className="grid items-center gap-16 md:grid-cols-2"
    >
      <div className="space-y-8">
        <h2 className="text-reveal text-5xl font-bold text-accent">About Me</h2>

        <p className="text-reveal text-lg leading-loose text-paper">
          As a passionate Frontend Developer, I specialize in building dynamic
          and responsive web applications. With a strong background in computer
          science, I excel in translating complex requirements into intuitive
          user interfaces. My approach emphasizes performance optimization,
          accessibility, and cross-browser compatibility.
        </p>
        <InfoCard title="Education & Experience" items={education} />
        <InfoCard title="Interview-Ready Insights" items={insights} />
      </div>
      <div className="hidden md:block relative">
        <img
          src={imageweb.src}
          alt="Futuristic abstract"
          className="h-full w-full rounded-2xl border border-border/40 object-cover opacity-70 shadow-2xl"
        />
      </div>
    </section>
  );
}
