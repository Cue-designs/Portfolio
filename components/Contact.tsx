"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from("[data-contact-reveal]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative space-y-8 border-t border-border/20 py-16"
    >
      <div data-contact-reveal className="max-w-2xl space-y-4">
        <p className="section-kicker">Contact</p>
        <h2 className="font-display text-4xl font-bold text-paper sm:text-6xl">
          Have an idea you&apos;d like me to build?
        </h2>
        <p className="text-lg leading-8 text-muted">
          Tell me what you&apos;re working on, where it&apos;s stuck, or what
          you want it to become. I&apos;ll bring curiosity, structure, and a
          sharp eye for the details.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-contact-reveal className="space-y-4">
          <div className="glass-surface rounded-2xl p-6">
            <MapPin className="text-accent" size={20} />
            <p className="mt-5 text-sm font-semibold text-paper">Location</p>
            <p className="mt-1 text-sm text-muted">Ojo, Lagos State, Nigeria</p>
          </div>
          <a
            href="tel:+2347069982558"
            className="glass-surface block rounded-2xl p-6 transition hover:border-accent"
          >
            <Phone className="text-accent" size={20} />
            <p className="mt-5 text-sm font-semibold text-paper">
              Phone / WhatsApp
            </p>
            <p className="mt-1 text-sm text-muted">+234 706 998 2558</p>
          </a>
          <a
            href="mailto:cajemma122@email.com"
            className="glass-surface block rounded-2xl p-6 transition hover:border-accent"
          >
            <Mail className="text-accent" size={20} />
            <p className="mt-5 text-sm font-semibold text-paper">Email</p>
            <p className="mt-1 text-sm text-muted">cajemma122@email.com</p>
          </a>
          <div className="overflow-hidden rounded-2xl border border-border/20">
            <iframe
              title="Map showing Ojo, Lagos"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.955%2C6.455%2C4.15%2C6.62&amp;layer=mapnik"
              className="h-48 w-full border-0 grayscale"
              loading="lazy"
            />
          </div>
        </div>
        <form
          data-contact-reveal
          className="glass-surface grid gap-4 rounded-2xl p-6 sm:grid-cols-2"
          action="mailto:cajemma122@email.com"
          method="post"
          encType="text/plain"
        >
          <label className="space-y-2 text-sm font-semibold text-paper">
            Name
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-border/30 bg-ink/40 px-4 py-3 font-normal text-paper outline-none transition focus:border-accent"
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-paper">
            Email
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-border/30 bg-ink/40 px-4 py-3 font-normal text-paper outline-none transition focus:border-accent"
              placeholder="you@example.com"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-paper">
            Subject
            <input
              name="subject"
              className="mt-1 w-full rounded-xl border border-border/30 bg-ink/40 px-4 py-3 font-normal text-paper outline-none transition focus:border-accent"
              placeholder="A new project"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-paper">
            Phone
            <input
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-xl border border-border/30 bg-ink/40 px-4 py-3 font-normal text-paper outline-none transition focus:border-accent"
              placeholder="+234"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-paper sm:col-span-2">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1 w-full resize-none rounded-xl border border-border/30 bg-ink/40 px-4 py-3 font-normal text-paper outline-none transition focus:border-accent"
              placeholder="Tell me a little about the project..."
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5  text-sm font-bold text-ink transition hover:bg-sand hover:text-amber-900 active:scale-[.98]"
          >
            <Send size={16} /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
