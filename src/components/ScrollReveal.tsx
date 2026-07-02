"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
}

const directionClassMap = {
  up: "scroll-reveal",
  left: "scroll-reveal-left",
  right: "scroll-reveal-right",
  scale: "scroll-reveal-scale",
} as const;

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if native CSS scroll-driven animations are supported
    const supportsScrollTimeline = CSS.supports(
      "(animation-timeline: view()) and (animation-range: 0% 100%)"
    );

    // If CSS handles it natively, no JS needed
    if (supportsScrollTimeline) return;

    // IntersectionObserver fallback
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay via setTimeout if provided
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("is-visible");
              }, delay);
            } else {
              entry.target.classList.add("is-visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [delay]);

  const animationClass = directionClassMap[direction];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delay > 0 ? { animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
