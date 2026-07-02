import React from "react";
import ScrollReveal from "../ScrollReveal";
import { StarIcon } from "../icons";

const testimonials = [
  {
    quote:
      "Planist completely changed how I plan trips. The Google Calendar sync is magic — I never miss a flight or reservation anymore.",
    name: "Sarah Chen",
    role: "Frequent Traveler",
    initial: "S",
    gradient: "from-rose-400 to-rose-600",
    stars: 5,
  },
  {
    quote:
      "The collaborative planning feature saved our group trip to Japan. Everyone could add activities and we voted on what to do each day.",
    name: "Marcus Johnson",
    role: "Adventure Photographer",
    initial: "M",
    gradient: "from-sky-400 to-sky-600",
    stars: 5,
  },
  {
    quote:
      "I love the budget tracker. Splitting costs in different currencies used to be a nightmare, but Planist handles it automatically.",
    name: "Priya Sharma",
    role: "Digital Nomad",
    initial: "P",
    gradient: "from-violet-400 to-violet-600",
    stars: 5,
  },
  {
    quote:
      "The offline access was a lifesaver during our trek in Patagonia. All our maps and itinerary were available without a signal.",
    name: "Liam O'Brien",
    role: "Travel Blogger",
    initial: "L",
    gradient: "from-emerald-400 to-emerald-600",
    stars: 5,
  },
  {
    quote:
      "As a travel agent, I now plan all my clients' trips on Planist. The calendar sync alone saves me hours every week.",
    name: "Akiko Tanaka",
    role: "Travel Agent",
    initial: "A",
    gradient: "from-amber-400 to-amber-600",
    stars: 5,
  },
  {
    quote:
      "Real-time flight updates gave me enough time to rebook when my connection got cancelled. Worth it for that feature alone.",
    name: "Daniel Torres",
    role: "Business Traveler",
    initial: "D",
    gradient: "from-teal-400 to-teal-600",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(232,185,74,0.03), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Loved by travelers
            <br />
            <span className="text-accent">around the world</span>
          </h2>
        </ScrollReveal>

        {/* Testimonial Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 80}>
              <div className="glass-card relative p-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <StarIcon key={i} className="text-accent" size={14} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 text-sm leading-relaxed text-text-secondary mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`h-10 w-10 rounded-full bg-linear-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white shrink-0`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
