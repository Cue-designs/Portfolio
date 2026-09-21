"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Journey", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="glass-surface mx-auto flex max-w-7xl items-center justify-between rounded-full px-5 py-6">
        <a href="#home" className="font-display text-xl font-bold text-paper">
          Cue <span className="text-accent">dev</span>
        </a>
        <ul className="hidden gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-semibold text-muted transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-ink/60 text-paper transition hover:border-accent hover:text-accent lg:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 top-20 bg-black/50 backdrop-blur-sm lg:hidden"
          />
          <div
            id="mobile-navigation"
            className="fixed right-4 top-20 flex min-h-[calc(100vh-5rem)] w-72 max-w-[85vw] flex-col rounded-2xl border border-border/30 bg-ink/95 px-8 py-10 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block border-b border-border/40 py-4 text-lg text-muted transition hover:border-accent hover:text-accent"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
