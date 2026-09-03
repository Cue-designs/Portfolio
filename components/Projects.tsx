import { ExternalLink } from "lucide-react";
import Blog from "../public/Blog.png";
import devbyte from "../public/devbyte.png";
import commerce from "../public/commerce.png";

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
  return (
    <section id="projects" className="space-y-12">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-16">
        {projects.map((project) => (
          <article
            key={project.name}
            className="bg-gray-900/50 p-8 rounded-3xl shadow-2xl border border-gray-800/50 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
          >
            <img
              src={project.image.src}
              alt={project.name}
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-cyan-400">
                {project.name}
              </h3>
              <p className="text-gray-300">{project.desc}</p>
              <a
                href="https://github.com/Cue-designs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
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
