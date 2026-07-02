import React from "react";
import ScrollReveal from "../ScrollReveal";
import {
  SparklesIcon,
  CalendarIcon,
  UsersIcon,
  WifiOffIcon,
  WalletIcon,
  RefreshIcon,
} from "../icons";

const features = [
  {
    icon: SparklesIcon,
    title: "Smart Itinerary Planning",
    description:
      "AI-powered suggestions for optimal routes, timings, and hidden gems. Build your perfect day in minutes.",
    accentColor: "from-amber-400 to-orange-500",
  },
  {
    icon: CalendarIcon,
    title: "Google Calendar Sync",
    description:
      "Every flight, hotel, and activity auto-syncs to Google Calendar with smart reminders before each event.",
    accentColor: "from-blue-400 to-cyan-500",
  },
  {
    icon: UsersIcon,
    title: "Collaborative Planning",
    description:
      "Invite your travel crew to co-edit itineraries in real time. Vote on activities and split decisions easily.",
    accentColor: "from-violet-400 to-purple-500",
  },
  {
    icon: WifiOffIcon,
    title: "Offline Access",
    description:
      "Download your entire itinerary, maps, and boarding passes. Stay on track even without internet.",
    accentColor: "from-emerald-400 to-teal-500",
  },
  {
    icon: WalletIcon,
    title: "Budget Tracker",
    description:
      "Set budgets per trip or per day. Track expenses in any currency and split costs with friends automatically.",
    accentColor: "from-rose-400 to-pink-500",
  },
  {
    icon: RefreshIcon,
    title: "Real-time Updates",
    description:
      "Get instant notifications for flight delays, gate changes, and weather alerts. Stay ahead of disruptions.",
    accentColor: "from-sky-400 to-indigo-500",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-28 px-6">
      {/* Section background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(232,185,74,0.04), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Everything you need for the
            <br />
            <span className="text-accent">perfect trip</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
            From planning to packing to exploring — Planist covers every step of
            your journey with powerful, intuitive tools.
          </p>
        </ScrollReveal>

        {/* Feature Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 80}>
              <div className="glass-card group relative overflow-hidden p-8 h-full">
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${feature.accentColor} bg-opacity-10 transition-transform duration-300 group-hover:scale-110`}
                  style={{
                    background: `linear-gradient(135deg, rgba(232,185,74,0.1), rgba(232,185,74,0.02))`,
                  }}
                >
                  <feature.icon className="text-accent" size={22} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div
                  className="pointer-events-none absolute -right-8 -bottom-8 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "var(--gradient-orb)" }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
