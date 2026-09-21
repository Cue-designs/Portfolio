"use client";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journey = [
  {
    period: "2025 - Present",
    role: "Frontend Developer",
    organization: "Product teams and freelance collaborations",
    type: "Professional",
    description:
      "Building polished React and Next.js experiences, shaping reusable UI systems, and translating product ideas into accessible interfaces.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    period: "2024 - Present",
    role: "Frontend Team Contributor",
    organization: "DevByte Community",
    type: "Community",
    description:
      "Collaborating with developers on community projects, reviewing frontend work, and helping early-career builders turn ideas into shipped products.",
    tags: ["Leadership", "Code Review", "Tailwind"],
  },
  {
    period: "2023 - Present",
    role: "Web Development Mentor",
    organization: "Independent workshops",
    type: "Education",
    description:
      "Teaching practical web development through project-based sessions covering HTML, CSS, JavaScript, Git, and responsive UI architecture.",
    tags: ["Mentorship", "JavaScript", "Workshops"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-journey-item]", {
        x: -28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
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
    <section ref={sectionRef} id="experience" className="space-y-8">
      <div className="max-w-2xl space-y-4">
        <p className="section-kicker">Experience & journey</p>
        <h2 className="font-display text-4xl font-bold text-paper sm:text-5xl">
          Growing through the work, one useful release at a time.
        </h2>
      </div>
      <div className="relative ml-3 border-l border-border/30 pl-8 sm:ml-6 sm:pl-12">
        {journey.map((item, index) => (
          <article
            key={item.role}
            data-journey-item
            className="relative mb-6 rounded-2xl border border-border/20 bg-ink/50 p-6 last:mb-0 sm:p-8"
          >
            <div className="absolute -left-[2.7rem] top-8 flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-ink text-accent sm:-left-[3.55rem]">
              {index === journey.length - 1 ? (
                <GraduationCap size={16} />
              ) : (
                <BriefcaseBusiness size={16} />
              )}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-paper">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.organization}</p>
              </div>
              <span className="w-fit rounded-full border border-border/30 px-3 py-1 text-xs text-muted">
                {item.type}
              </span>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-paper/80">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/30 bg-ink/60 px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
