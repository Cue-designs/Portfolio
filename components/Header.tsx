"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-ink shadow-lg lg:py-5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold text-accent">
          Emmanuel Cajetan
        </a>
        <ul className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-xl text-muted transition-colors hover:text-accent"
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
          className="inline-flex h-11 w-11 items-center justify-center border border-border/70 bg-ink text-paper transition hover:border-accent hover:text-accent lg:hidden"
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
            className="fixed inset-0 top-[73px] bg-black/50 lg:hidden"
          />
          <div
            id="mobile-navigation"
            className="fixed right-0 top-[73px] flex min-h-[calc(100vh-73px)] w-72 max-w-[85vw] flex-col border-l border-border/40 bg-ink px-8 py-10 shadow-2xl lg:hidden"
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
