import React from "react";
import { PlaneIcon, TwitterIcon, InstagramIcon, LinkedInIcon } from "../icons";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Calendar Sync", href: "#calendar" },
    { label: "Pricing", href: "#" },
    { label: "Download", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                <PlaneIcon className="text-accent" size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary">
                Planist
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-text-secondary mb-6">
              Plan your perfect trip with smart itineraries, Google Calendar
              sync, and collaborative tools. Your next adventure starts here.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-muted transition-all hover:border-border-hover hover:text-text-primary hover:bg-white/3"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-text-primary mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Planist. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Made with ☀️ for travelers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
