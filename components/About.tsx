import imageweb from "../public/imageweb.jpg";

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
    <div className="bg-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-800/50">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{title}</h3>
      <ul className="list-none space-y-3 text-gray-400">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-loose">
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
          className="w-full h-full object-cover rounded-3xl opacity-50 shadow-2xl"
        />
      </div>
    </section>
  );
}
