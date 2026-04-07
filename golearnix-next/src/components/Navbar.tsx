"use client";

import { useState, useEffect } from "react";
import { Icons } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Subjects", href: "#subjects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-heading font-bold text-xl tracking-tight"
        >
          <span className="text-medical">Go</span>
          <span className="text-teal">Learnix</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/login"
            className="text-sm text-text-secondary hover:text-medical transition-colors"
          >
            Login
          </a>
          <a
            href="/signup"
            className="ml-2 px-5 py-2 btn-primary text-white text-sm font-medium rounded-full"
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <Icons.Close /> : <Icons.Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden nav-blur border-t border-black/5 px-6 py-6 flex flex-col gap-4"
          style={{ animation: "slide-up 0.3s ease-out" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-secondary hover:text-text-primary py-2 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/login"
            className="text-text-secondary hover:text-medical py-2 text-base"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-5 py-2.5 btn-primary text-white text-sm font-medium rounded-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
