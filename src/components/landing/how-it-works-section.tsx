import React from "react";
import ScrollReveal from "../ScrollReveal";
import { MapIcon, CalendarIcon, PlaneIcon } from "../icons";

const steps = [
  {
    number: "01",
    icon: MapIcon,
    title: "Plan Your Trip",
    description:
      "Search destinations, add activities, hotels, and flights. Drag and drop to build your perfect day-by-day itinerary.",
  },
  {
    number: "02",
    icon: CalendarIcon,
    title: "Sync with Calendar",
    description:
      "One tap to sync your entire trip to Google Calendar. Every event gets a smart reminder so you never miss a flight or reservation.",
  },
  {
    number: "03",
    icon: PlaneIcon,
    title: "Travel with Confidence",
    description:
      "Access your itinerary offline, get real-time alerts for changes, and enjoy your trip knowing everything is organized.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(28,28,28,0.5) 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            How It Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Three simple steps to your
            <br />
            <span className="text-accent">dream trip</span>
          </h2>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-24 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent) 20%, var(--accent) 80%, transparent)",
              opacity: 0.2,
            }}
          />

          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.number} delay={index * 150}>
                <div className="flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative mb-8">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/20 bg-accent/5 transition-all hover:bg-accent/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10">
                      <step.icon className="text-accent" size={32} />
                    </div>
                    <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
