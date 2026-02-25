import { motion } from "framer-motion";
import { Github, Mail, Phone, ExternalLink, Linkedin } from "lucide-react";
import { SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit, SiNodedotjs } from "react-icons/si";

export default function Portfolio() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/80 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold">Emmanuel Cajetan</a>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-white transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24 pt-24">
        {/* Hero Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <img
            src="/profile-placeholder.png"
            alt="Emmanuel Cajetan"
            className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl"
          />
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Emmanuel Cajetan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Frontend Developer specializing in React, Tailwind CSS, and TypeScript. Passionate about crafting responsive, scalable, and user-centric web applications.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Cue-designs"
              target="_blank"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Github size={20} /> GitHub
            </a>
            <a
              href="mailto:cajemma122@email.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <Mail size={20} /> Contact
            </a>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-center">About Me</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            As a dedicated Frontend Developer, I bring a strong foundation in modern web technologies to create seamless user experiences. With hands-on experience in building full-stack applications, I focus on writing clean, maintainable code and solving complex problems efficiently.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Education & Experience</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Bachelor's in Computer Science (or relevant field)</li>
                <li>1+ years of experience in frontend development</li>
                <li>Contributed to open-source projects on GitHub</li>
                <li>Built and deployed multiple web applications</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-4">Key Strengths for Interviews</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Proficient in React hooks, state management, and component lifecycle</li>
                <li>Expert in responsive design principles and CSS frameworks like Tailwind</li>
                <li>Strong understanding of TypeScript for type-safe development</li>
                <li>Experience with version control, CI/CD pipelines, and agile methodologies</li>
                <li>Problem-solving skills demonstrated through algorithmic challenges and project optimizations</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-bold text-center">Skills & Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <SiReact size={48} className="text-blue-500 hover:scale-110 transition" title="React" />
            <SiTailwindcss size={48} className="text-cyan-500 hover:scale-110 transition" title="Tailwind CSS" />
            <SiTypescript size={48} className="text-blue-600 hover:scale-110 transition" title="TypeScript" />
            <SiJavascript size={48} className="text-yellow-500 hover:scale-110 transition" title="JavaScript" />
            <SiHtml5 size={48} className="text-orange-600 hover:scale-110 transition" title="HTML5" />
            <SiCss3 size={48} className="text-blue-600 hover:scale-110 transition" title="CSS3" />
            <SiGit size={48} className="text-orange-600 hover:scale-110 transition" title="Git" />
            <SiNodedotjs size={48} className="text-green-600 hover:scale-110 transition" title="Node.js" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                desc: "Crafting interactive UIs with React and TypeScript, ensuring scalable and maintainable codebases.",
              },
              {
                title: "Responsive Design",
                desc: "Implementing mobile-first approaches using Tailwind CSS and modern layout techniques.",
              },
              {
                title: "Version Control & Collaboration",
                desc: "Utilizing Git and GitHub for efficient team workflows and code management.",
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
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Full Stack Blog App",
                desc: "A comprehensive blog platform featuring CRUD operations, user authentication, and real-time updates. Built with React frontend and Node.js backend, demonstrating seamless integration and state management.",
                link: "https://github.com/Cue-designs",
              },
              {
                name: "Responsive Web Project",
                desc: "A fully responsive website showcasing advanced CSS techniques, including flexbox, grid, and animations. Optimized for performance across all devices.",
                link: "https://github.com/Cue-designs",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900 p-6 rounded-2xl shadow-xl space-y-4"
              >
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-gray-400">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold">Let’s Work Together</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Open to NYSC placement opportunities, internships, and frontend development roles. Let's discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-900 px-6 py-4 rounded-2xl shadow-xl w-full md:w-auto">
              <Phone size={20} className="text-blue-400" />
              <span>+234 706 998 2558</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-900 px-6 py-4 rounded-2xl shadow-xl w-full md:w-auto">
              <Mail size={20} className="text-blue-400" />
              <span>cajemma122@email.com</span>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-gray-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Emmanuel Cajetan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/Cue-designs" target="_blank" className="hover:text-gray-300 transition">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/emmanuel-cajetan" target="_blank" className="hover:text-gray-300 transition">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cajemma122@email.com" className="hover:text-gray-300 transition">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}