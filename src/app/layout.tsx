import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Planist — Plan Your Perfect Trip",
  description:
    "Planist helps you plan unforgettable trips with smart itineraries, Google Calendar integration, and collaborative tools. Your next adventure starts here.",
  keywords: [
    "trip planner",
    "travel planning",
    "google calendar sync",
    "itinerary",
    "travel app",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

