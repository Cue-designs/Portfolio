import { motion } from "framer-motion";
import { Github, Mail, Phone, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Emmanuel Cajetan
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Frontend Developer specializing in React, Tailwind CSS, and
            TypeScript. Passionate about building responsive, scalable, and
            user-friendly web applications.
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Cue-designs"
              target="_blank"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-2xl shadow-lg transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-2xl shadow-lg transition"
            >
              <Mail size={18} /> Contact
            </a>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              desc: "Building interactive UIs using React and TypeScript with scalable architecture.",
            },
            {
              title: "Responsive Design",
              desc: "Creating mobile-first layouts with Tailwind CSS and modern UI principles.",
            },
            {
              title: "Version Control",
              desc: "Collaborating effectively using Git & GitHub workflows.",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="space-y-10">
          <h2 className="text-3xl font-bold text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Full Stack Blog App",
                desc: "A blog platform with CRUD functionality demonstrating frontend-backend integration.",
                link: "https://github.com/Cue-designs",
              },
              {
                name: "Responsive Web Project",
                desc: "Mobile-first responsive layout showcasing modern CSS techniques.",
                link: "https://github.com/Cue-designs",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 p-6 rounded-2xl shadow-xl space-y-4"
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-400">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

      
        <section className="text-center space-y-3">
          <h2 className="text-3xl font-bold">Let’s Work Together</h2>
          <p className="text-gray-400">
            Open to NYSC placement opportunities, internships, and frontend
            development roles.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400 justify-end" /> <span>+234 706 998 2558</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400 justify-end" /> <span>cajemma122@email.com</span>
            </div>
          </div>
        </section>
        <footer className="text-center py-6 text-gray-500">
          <hr className="text-gray-500"/>
          {<p>© {new Date().getFullYear()} Emmanuel Cajetan. All rights reserved.</p>}
        </footer>
      </div>
    </div>
  );
}
