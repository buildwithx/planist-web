import React from "react";
import ScrollReveal from "../ScrollReveal";
import { GoogleCalendarIcon, CheckCircleIcon, ShieldIcon } from "../icons";

const calendarFeatures = [
  "Auto-sync flights, hotels, and activities",
  "Smart reminders before each event",
  "Real-time updates on schedule changes",
  "Shared calendars for group trips",
  "Time zone auto-detection",
  "Works with existing calendar events",
];

export default function CalendarSection() {
  return (
    <section id="calendar" className="relative py-28 px-6 overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left — Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Calendar mockup */}
              <div className="glass-card relative overflow-hidden p-6 sm:p-8">
                {/* Calendar header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <GoogleCalendarIcon size={28} />
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        Google Calendar
                      </p>
                      <p className="text-xs text-text-muted">July 2026</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">
                      Synced
                    </span>
                  </div>
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="py-1.5 text-text-muted font-medium"
                      >
                        {day}
                      </div>
                    ),
                  )}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs">
                  {/* Empty cells for offset */}
                  {[...Array(3)].map((_, i) => (
                    <div key={`empty-${i}`} className="py-2" />
                  ))}
                  {/* Calendar days */}
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const isTrip = day >= 10 && day <= 17;
                    const isFlight = day === 10 || day === 17;
                    const isHotel = day >= 10 && day <= 16;
                    return (
                      <div
                        key={day}
                        className={`relative py-2 rounded-lg transition-colors ${
                          isTrip
                            ? "bg-accent/10 text-accent font-semibold"
                            : "text-text-secondary hover:bg-white/3"
                        }`}
                      >
                        {day}
                        {isFlight && (
                          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-blue-400" />
                        )}
                        {isHotel && !isFlight && (
                          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-emerald-400" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Events preview */}
                <div className="mt-6 space-y-2">
                  {[
                    {
                      time: "6:30 AM",
                      event: "✈️ Flight to Tokyo (NRT)",
                      color: "border-blue-400",
                    },
                    {
                      time: "2:00 PM",
                      event: "🏨 Check-in: Park Hyatt Tokyo",
                      color: "border-emerald-400",
                    },
                    {
                      time: "7:00 PM",
                      event: "🍣 Dinner at Sukiyabashi Jiro",
                      color: "border-accent",
                    },
                  ].map((item) => (
                    <div
                      key={item.event}
                      className={`flex items-center gap-3 rounded-lg border-l-2 ${item.color} bg-white/2 px-3 py-2`}
                    >
                      <span className="text-xs text-text-muted font-mono shrink-0">
                        {item.time}
                      </span>
                      <span className="text-xs text-text-primary truncate">
                        {item.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-2xl px-4 py-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <ShieldIcon className="text-emerald-400" size={16} />
                  <span className="text-xs font-medium text-text-primary">
                    Secure OAuth2
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal direction="right">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">
                Calendar Integration
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl mb-6">
                Seamlessly synced with{" "}
                <span className="text-accent">Google Calendar</span>
              </h2>
              <p className="text-lg leading-relaxed text-text-secondary mb-8">
                Your trip lives in your calendar. Every booking, activity, and
                transfer is automatically synced with smart reminders, so you
                never miss a moment.
              </p>

              {/* Feature list */}
              <ul className="space-y-4">
                {calendarFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon
                      className="text-accent shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
