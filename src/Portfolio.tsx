import { motion, useScroll, useTransform,  useAnimation } from "framer-motion";
import { Github, Mail,  Linkedin, Instagram } from "lucide-react";
import { SiReact, SiTailwindcss,  SiNextdotjs,  } from "react-icons/si";
import { useEffect, useRef } from "react";

export default function Portfolio() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
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
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 text-gray-100 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-indigo-950/50 backdrop-blur-md z-50 shadow-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-semibold text-gray-300">Emmanuel Cajetan</a>
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="text-blue-300 hover:text-blue-100 transition-all"
                  whileHover={{ scale: 1.1, color: "#60A5FA" }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
          <img
            src="/profile-placeholder.png"
            alt="Emmanuel Cajetan"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/50"
          />
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24 pt-24">
        {/* Hero Section */}
        <motion.section
          id="home"
          ref={heroRef}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-6 relative"
        >
          <motion.div style={{ opacity, scale }} className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent pointer-events-none" />
          <motion.h1
            className="text-7xl md:text-9xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]"
            variants={itemVariants}
          >
            Emmanuel Cajetan
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Nigerian Frontend Developer specializing in React, Tailwind CSS, and modern web technologies.
          </motion.p>
        </motion.section>

        {/* Featured Projects Section */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            className="text-3xl font-bold text-gray-300"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="bg-indigo-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
            >
              <img
                src="/project1-placeholder.png"
                alt="Project Image"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <p className="text-gray-400">We use mural functional features solely, enhancing user experience in a minimalistic approach.</p>
            </motion.div>
            <div className="space-y-6">
              <motion.div
                className="bg-indigo-900/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
              >
                <img
                  src="/profile-placeholder.png"
                  alt="Emmanuel Cajetan"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-300">Emmanuel Cajetan</h3>
                  <p className="text-sm text-gray-500">Nigerian frontend developer.</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-indigo-900/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
              >
                <SiReact size={32} className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-gray-300">Heelt Dojuod</h3>
                  <p className="text-sm text-gray-500">Liske fagfasfalty eill edqazand in comborata vanctuhd valtim.</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-indigo-900/30 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
              >
                <SiNextdotjs size={32} className="text-cyan-400" />
                <div>
                  <h3 className="font-semibold text-gray-300">NewVlatn</h3>
                  <p className="text-sm text-gray-500">May oul brafjesta a projed ouxit are dent.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.h2
            className="text-3xl font-bold text-gray-300"
            variants={itemVariants}
          >
            Technologies
          </motion.h2>
          <div className="flex flex-wrap gap-6 justify-start">
            <motion.div
              className="bg-indigo-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg flex items-center gap-2"
              variants={iconVariants}
              whileHover="hover"
            >
              <SiReact size={24} className="text-cyan-400" />
              <span className="text-gray-300">React</span>
            </motion.div>
            <motion.div
              className="bg-indigo-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg flex items-center gap-2"
              variants={iconVariants}
              whileHover="hover"
            >
              <SiTailwindcss size={24} className="text-cyan-400" />
              <span className="text-gray-300">Tailwind CSS</span>
            </motion.div>
            <motion.div
              className="bg-indigo-900/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 shadow-lg flex items-center gap-2"
              variants={iconVariants}
              whileHover="hover"
            >
              <SiNextdotjs size={24} className="text-cyan-400" />
              <span className="text-gray-300">Next.js</span>
            </motion.div>
            {/* Add more as needed */}
          </div>
        </motion.section>

        {/* About and Contact Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* About Me */}
          <motion.section
            id="about"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="bg-indigo-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-300 mb-4"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-gray-400"
              variants={itemVariants}
            >
              West agullia in ket to full ritytex aes strcalling company tu line null lpe cublan down Uva U lre blling to en daa earaye cublan. Big ewasl end omlortan or felods.
            </motion.p>
          </motion.section>

          {/* Contact */}
          <motion.section
            id="contact"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="bg-indigo-900/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-300 mb-4"
              variants={itemVariants}
            >
              Contact
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-4"
              variants={itemVariants}
            >
              You arawail yoj agefi alo yut jafetal aject
            </motion.p>
            <div className="flex gap-4">
              <motion.a
                href="mailto:cajemma122@email.com"
                className="text-blue-400 hover:text-blue-300"
                whileHover={{ scale: 1.2 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/emmanuel-cajetan"
                className="text-blue-400 hover:text-blue-300"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-950/50 backdrop-blur-md py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-8 text-gray-500">
          <motion.a
            href="https://github.com/Cue-designs"
            target="_blank"
            className="hover:text-gray-300 transition-all"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://x.com/EmmanuelCa64221"
            target="_blank"
            className="hover:text-gray-300 transition-all"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://instagram.com/emmanuelcajetan"
            target="_blank"
            className="hover:text-gray-300 transition-all"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Instagram size={28} />
          </motion.a>
        </div>
      </footer>
    </div>
  );
}