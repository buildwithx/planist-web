"use client";

import React, { useState, useEffect } from "react";
import { PlaneIcon } from "../icons";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Calendar", href: "#calendar" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" id="nav-logo">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <PlaneIcon className="text-accent" size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">
            Planist
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-white/4"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cta"
            id="nav-cta-get-started"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          id="nav-mobile-toggle"
        >
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-text-primary transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-xl hover:bg-white/4"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-accent-light"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
