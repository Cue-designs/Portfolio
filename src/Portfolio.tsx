import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "framer-motion";
import { Github, Mail, Phone, ExternalLink, Linkedin } from "lucide-react";
import { SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit } from "react-icons/si";
import { useEffect, useRef } from "react";
import imageweb from "./assets/imageweb.jpg";
import profile from "./assets/profile.jpg";
import Blog from "./assets/Blog.png";
import devbyte from "./assets/devbyte.png";
import commerce from "./assets/commerce.png";
export default function Portfolio() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const heroRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "backOut" } },
    hover: { scale: 1.2, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/70 backdrop-blur-lg z-50 shadow-lg border-b border-gray-800/50 lg:py-5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Emmanuel Cajetan</a>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="text-gray-300 text-xl hover:text-white transition-all hover:glow-text"
                  whileHover={{ scale: 1.1, color: "#00FFFF" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-32 pt-24">
        {/* Hero Section */}
        <motion.section
          id="home"
          ref={heroRef}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-8 relative"
        >
          <motion.div style={{ opacity, scale }} className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
          <motion.img
            src={profile}
            alt="Emmanuel Cajetan"
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-blue-500/30"
            variants={itemVariants}
            whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(0, 255, 255, 0.5)" }}
          />
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Emmanuel Cajetan
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Frontend Developer with expertise in React, Tailwind CSS, TypeScript, and modern web technologies. Dedicated to crafting high-performance, scalable applications with a focus on user experience and clean code architecture.
          </motion.p>
          <motion.div
            className="flex justify-center gap-8 pt-6 "
            variants={containerVariants}
          >
            <motion.a
              href="https://github.com/Cue-designs"
              target="_blank"
              className="flex items-center gap-2 bg-gray-800/80 hover:bg-gray-700 px-8 py-4 rounded-full shadow-xl transition-all z-50"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" }}
            >
              <Github size={24} /> GitHub
            </motion.a>
            <motion.a
              href="mailto:cajemma122@email.com"
              className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-500 px-8 py-4 rounded-full shadow-xl transition-all z-50"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)" }}
            >
              <Mail size={24} /> Contact
            </motion.a>
          </motion.div>
        </motion.section>

        {/* About Section - Grid Layout with Image/Empty Space */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-lg text-gray-300 leading-loose"
              variants={itemVariants}
            >
              As a passionate Frontend Developer, I specialize in building dynamic and responsive web applications. With a strong background in computer science, I excel in translating complex requirements into intuitive user interfaces. My approach emphasizes performance optimization, accessibility, and cross-browser compatibility.
            </motion.p>
            <motion.div
              className="bg-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-800/50"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Education & Experience</h3>
              <ul className="list-none space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Bachelor's Degree in Computer Science from I-fatoss University, graduated with honors.</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> 2+ years of professional experience in frontend development, including freelance projects.</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Contributed to open-source repositories  on GitHub.</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Experience in agile environments, collaborating with cross-functional teams.</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-gray-900/50 p-6 rounded-2xl shadow-2xl border border-gray-800/50"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Interview-Ready Insights</h3>
              <ul className="list-none space-y-3 text-gray-400">
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Deep knowledge of React ecosystem: Hooks, Context API, and also state management.</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Proficient in performance profiling using Chrome DevTools .</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Understanding of web accessibility  and SEO best practices.</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Skilled in unit/integration testing with, React Testing Library.</li>
                <li className="flex items-start gap-2"><span className="text-blue-400">•</span> Familiar with CI/CD pipelines using GitHub Actions and deployment on Vercel/Netlify.</li>
              </ul>
            </motion.div>
          </motion.div>
          {/* Empty space or placeholder image for futuristic asymmetry */}
          <motion.div
            className="hidden md:block relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-950/50 blur-3xl"
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <img
              src={imageweb}
              alt="Futuristic Abstract"
              className="w-full h-full object-cover rounded-3xl opacity-50 shadow-2xl"
            />
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-10"
            variants={containerVariants}
          >
            <AnimatePresence>
              <motion.div variants={iconVariants} whileHover="hover"><SiReact size={56} className="text-blue-500" title="React" /></motion.div>
              <motion.div variants={iconVariants} whileHover="hover"><SiTailwindcss size={56} className="text-cyan-500" title="Tailwind CSS" /></motion.div>
              <motion.div variants={iconVariants} whileHover="hover"><SiTypescript size={56} className="text-blue-600" title="TypeScript" /></motion.div>
              <motion.div variants={iconVariants} whileHover="hover"><SiJavascript size={56} className="text-yellow-500" title="JavaScript" /></motion.div>
              <motion.div variants={iconVariants} whileHover="hover"><SiHtml5 size={56} className="text-orange-600" title="HTML5" /></motion.div>
              <motion.div variants={iconVariants} whileHover="hover"><SiCss3 size={56} className="text-blue-600" title="CSS3" /></motion.div>
              <motion.div variants={iconVariants} whileHover="hover"><SiGit size={56} className="text-orange-600" title="Git" /></motion.div>
             
            </AnimatePresence>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
            {[
              {
                title: "Frontend Development",
                desc: "Developing robust UIs with React, and TypeScript, focusing on component reusability and state management.",
              },
              {
                title: "Responsive & UI/UX Design",
                desc: "Designing adaptive layouts using Tailwind CSS, ensuring optimal performance on all devices with modern design patterns.",
              },
              {
                title: "Testing & Deployment",
                desc: "Implementing Git workflows, and deployments for reliable, scalable applications.",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.25)" }}
                className="bg-gray-900/50 p-8 rounded-3xl shadow-xl border border-gray-800/50"
              >
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">{skill.title}</h3>
                <p className="text-gray-300">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section - Grid Layout with Images */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Projects
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 gap-16" variants={containerVariants}>
            {[
              {
                name: "Full Stack Blog App",
                desc: "A feature-rich blog platform with user authentication, real-time comments, and admin dashboard. Integrated frontend with Node.js/Express backend, using MongoDB for data persistence. Demonstrates API consumption, error handling, and secure authentication flows.",
                link: "https://github.com/Cue-designs",
                image: Blog,
              },
              {
                name: "Dev Byte Community Project",
                desc: "A feature-rich blog platform made by the community for the community. This project was a collaborative effort where I contributed to the frontend development using React and Tailwind CSS. The project serves as a testament to my commitment to open-source contributions and community-driven development.",
                link: "https://github.com/Cue-designs",
                image: devbyte,
              },
              {
                name: "Responsive E-Commerce Site",
                desc: "A modern e-commerce platform with product catalogs. This was my First project using HTML and CSS. Just a site with my humble beginnings. Although it lacks interactivity, it showcases my early passion for web design and development. It serves as a nostalgic reminder of my journey and growth in the field.",
                link: "https://github.com/Cue-designs",
                image: commerce,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0, 255, 255, 0.2)" }}
                className="bg-gray-900/50 p-8 rounded-3xl shadow-2xl border border-gray-800/50 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
              >
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="space-y-4">
                  <h3 className="text-3xl font-semibold text-cyan-400">{project.name}</h3>
                  <p className="text-gray-300">{project.desc}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="text-center space-y-8 relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50 blur-3xl pointer-events-none"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Let’s Collaborate
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Seeking opportunities in NYSC placements, internships, or full-time frontend roles. Eager to bring innovative solutions and technical expertise to your team.
          </motion.p>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Feel free to reach out for collaborations, freelance projects, or just to connect. I’m always open to discussing new ideas and opportunities.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            <motion.div
              className="flex items-center gap-4 bg-gray-900/50 px-8 py-5 rounded-full shadow-2xl border border-gray-800/50 w-full md:w-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
            >
              <Phone size={24} className="text-blue-400" />
              <span>+234 706 998 2558</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-4 bg-gray-900/50 px-8 py-5 rounded-full shadow-2xl border border-gray-800/50 w-full md:w-auto"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)" }}
            >
              <Mail size={24} className="text-blue-400" />
              <span>cajemma122@email.com</span>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950/70 backdrop-blur-md py-10 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
          <p>© {new Date().getFullYear()} Emmanuel Cajetan. All rights reserved.</p>
          <div className="flex gap-8">
            <motion.a
              href="https://github.com/Cue-designs"
              target="_blank"
              className="hover:text-gray-300 transition-all"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/emmanuel-cajetan-81a73a308"
              target="_blank"
              className="hover:text-gray-300 transition-all"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="https://x.com/EmmanuelCa64221"
              target="_blank"
              className="hover:text-gray-300 transition-all"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </motion.a>
            <motion.a
              href="mailto:cajemma122@email.com"
              className="hover:text-gray-300 transition-all"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              <Mail size={28} />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}