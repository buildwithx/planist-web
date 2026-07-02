"use client";

import React from "react";
import { ArrowRightIcon, ChevronDownIcon } from "../icons";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Gradient orb top */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] animate-gradient"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Floating orb left */}
        <div
          className="absolute top-1/3 left-[10%] w-72 h-72 rounded-full animate-float opacity-30"
          style={{ background: "var(--gradient-orb)" }}
        />
        {/* Floating orb right */}
        <div
          className="absolute bottom-1/4 right-[8%] w-96 h-96 rounded-full animate-float opacity-20"
          style={{
            background: "var(--gradient-orb)",
            animationDelay: "3s",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent-light animate-pulse-glow">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Now with Google Calendar integration
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          Plan Your Perfect
          <br />
          <span className="bg-linear-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent animate-gradient">
            Adventure
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
          Planist makes trip planning effortless. Build smart itineraries, sync
          everything to Google Calendar, and collaborate with your travel crew —
          all in one beautiful app.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#cta"
            id="hero-cta-start"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary shadow-lg shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Planning Free
            <ArrowRightIcon
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#how-it-works"
            id="hero-cta-learn"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-text-secondary transition-all hover:border-border-hover hover:text-text-primary hover:bg-white/3"
          >
            See How It Works
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {[
              "bg-gradient-to-br from-rose-400 to-rose-600",
              "bg-gradient-to-br from-sky-400 to-sky-600",
              "bg-gradient-to-br from-emerald-400 to-emerald-600",
              "bg-gradient-to-br from-violet-400 to-violet-600",
              "bg-gradient-to-br from-amber-400 to-amber-600",
            ].map((bg, i) => (
              <div
                key={i}
                className={`h-9 w-9 rounded-full border-2 border-surface ${bg} flex items-center justify-center text-xs font-bold text-white`}
              >
                {["A", "M", "S", "K", "J"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-text-muted">
            Trusted by{" "}
            <span className="font-semibold text-text-secondary">10,000+</span>{" "}
            travelers worldwide
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#features" aria-label="Scroll to features">
          <ChevronDownIcon className="text-text-muted" size={28} />
        </a>
      </div>
    </section>
  );
}
