import CalendarSection from "../components/landing/calendar-section";
import CtaSection from "../components/landing/cta-section";
import FeaturesSection from "../components/landing/features-section";
import HeroSection from "../components/landing/hero-section";
import HowItWorksSection from "../components/landing/how-it-works-section";
import TestimonialsSection from "../components/landing/testimonials-section";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CalendarSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
