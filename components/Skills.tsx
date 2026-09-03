import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

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

const technologies = [
  [SiReact, "text-blue-500", "React"],
  [SiTailwindcss, "text-cyan-500", "Tailwind CSS"],
  [SiTypescript, "text-blue-600", "TypeScript"],
  [SiJavascript, "text-yellow-500", "JavaScript"],
  [SiHtml5, "text-orange-600", "HTML5"],
  [SiCss3, "text-blue-600", "CSS3"],
  [SiGit, "text-orange-600", "Git"],
] as const;

export default function Skills() {
  return (
    <section id="skills" className="space-y-12">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Skills & Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map(([Icon, color, name]) => (
          <Icon key={name} size={56} className={color} title={name} />
        ))}
      </div>
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
