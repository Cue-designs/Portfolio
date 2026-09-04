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
  return (
    <section
      id="skills"
      className="space-y-12"
      style={{ height: "200px", position: "relative", overflow: "hidden" }}
    >
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Skills & Tech Stack
      </h2>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={70}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-900/50 p-8 rounded-3xl shadow-xl border border-gray-800/50"
          >
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              {skill.title}
            </h3>
            <p className="text-gray-300">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
