# 🗺️ Planist — Plan Your Perfect Trip

**Planist** is a gorgeous, dark-themed, highly interactive web application designed to make trip planning effortless and collaborative. It allows travelers to build smart itineraries, coordinate schedules, and synchronize everything beautifully with Google Calendar.

---

## ✨ Features

- **Smart Itineraries:** Craft customized, beautiful schedules for your journeys.
- **Google Calendar Integration:** Sync all travel bookings, excursions, and flights directly to Google Calendar.
- **Ultra-Modern UI/UX:** Built with premium dark-mode aesthetics, elegant glassmorphism (`.glass`, `.glass-card`), and gold accent branding.
- **High-Performance Animations:** Custom client-side `<ScrollReveal>` wrapper using native CSS view-driven scroll timeline animations with highly reliable `IntersectionObserver` JS fallback.
- **Lightweight SVG Icons:** Tailored vector graphics exported dynamically from custom component exports for maximum speed.
- **Responsive Layout:** Pixel-perfect adaptive designs for mobile, tablet, and desktop interfaces.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org)
- **Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (using `@tailwindcss/postcss`)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Runtime & Package Manager:** [Bun](https://bun.sh)

---

## 🚀 Getting Started

Ensure you have [Bun installed](https://bun.sh) on your system.

### 1. Clone & Install Dependencies
```bash
# Clone the repository and navigate to directory
cd planist-web

# Install dependencies
bun install
```

### 2. Run the Development Server
```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build & Run in Production Mode
```bash
# Build for production
bun run build

# Start production server
bun run start
```

### 4. Code Quality
```bash
# Run ESLint linter
bun run lint
```

---

## 📂 Project Structure

```text
planist-web/
├── public/                 # Static assets and apple/android site associations
└── src/
    ├── app/                # Next.js App Router (pages, layout, global CSS)
    ├── components/
    │   ├── landing/        # Modular sections (Hero, Features, How It Works, etc.)
    │   ├── layout/         # Core layout components (Navbar, Footer)
    │   ├── icons.tsx       # Custom high-performance SVG icon components
    │   └── ScrollReveal.tsx# Scroll-driven animations engine
    └── proxy.ts            # Local URL proxy / middleware helpers
```

---

## ✍️ Development Conventions

If you are developing or using an AI assistant (like Gemini or others) to implement changes, please refer to the detailed **[GEMINI.md](./GEMINI.md)** guidelines. This document outlines:
1. Exact CSS design tokens for typography, borders, shadows, and glassmorphism.
2. Guidelines on using server vs. client components.
3. Instructions for extending the custom SVG icon pack in `icons.tsx`.
4. Custom animation usage patterns.
