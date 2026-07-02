import React from "react";
import ScrollReveal from "../ScrollReveal";
import { ArrowRightIcon, PlaneIcon } from "../icons";

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-28 px-6 overflow-hidden">
      <ScrollReveal direction="scale">
        <div className="relative mx-auto max-w-4xl">
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-accent/10 p-12 sm:p-16 text-center">
            {/* Gradient background */}
            <div
              className="absolute inset-0 animate-gradient"
              style={{
                background:
                  "linear-gradient(135deg, rgba(232,185,74,0.06) 0%, rgba(28,28,28,0.8) 40%, rgba(232,185,74,0.04) 100%)",
                backgroundSize: "200% 200%",
              }}
              aria-hidden="true"
            />
            {/* Orb */}
            <div
              className="absolute top-0 right-0 w-96 h-96 translate-x-1/3 -translate-y-1/3 rounded-full opacity-20"
              style={{ background: "var(--gradient-orb)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                <PlaneIcon className="text-accent" size={28} />
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl mb-4">
                Ready for your next
                <br />
                <span className="text-accent">adventure?</span>
              </h2>
              <p className="mx-auto max-w-xl text-lg text-text-secondary mb-10">
                Join thousands of travelers who plan smarter with Planist. Start
                for free — no credit card required.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#"
                  id="cta-start-free"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-primary shadow-lg shadow-accent/20 transition-all hover:bg-accent-light hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Start Planning Free
                  <ArrowRightIcon
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#"
                  id="cta-app-store"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-text-secondary transition-all hover:border-border-hover hover:text-text-primary hover:bg-white/3"
                >
                  Download the App
                </a>
              </div>
              <p className="mt-6 text-xs text-text-muted">
                Free forever for personal use. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
