import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="text-center space-y-8 relative">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Let&apos;s Collaborate
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Seeking opportunities in NYSC placements, internships, or full-time
        frontend roles. Eager to bring innovative solutions and technical
        expertise to your team.
      </p>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Feel free to reach out for collaborations, freelance projects, or just
        to connect. I&apos;m always open to discussing new ideas and
        opportunities.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-4 bg-gray-900/50 px-8 py-5 rounded-full shadow-2xl border border-gray-800/50 w-full md:w-auto">
          <Phone size={24} className="text-blue-400" />
          <span>+234 706 998 2558</span>
        </div>
        <div className="flex items-center gap-4 bg-gray-900/50 px-8 py-5 rounded-full shadow-2xl border border-gray-800/50 w-full md:w-auto">
          <Mail size={24} className="text-blue-400" />
          <span>cajemma122@email.com</span>
        </div>
      </div>
    </section>
  );
}
