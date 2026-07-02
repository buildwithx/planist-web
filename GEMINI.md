# Planist Web — Gemini Instruction Context

This instructions file outlines the design system, development patterns, commands, and project conventions for the **Planist Web** application. Always consult this file before making modifications or implementing new features.

---

## 🚀 Project Overview

**Planist** is a modern, dark-themed, highly interactive web application designed to help users plan trips, organize itineraries, collaborate, and synchronize everything with Google Calendar.

### Architecture & Key Technologies
- **Framework:** Next.js 16.2.10 (utilizing the React 19 App Router paradigm under `src/app`).
- **Language:** TypeScript 5.x with strict type-checking enabled.
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) using CSS design tokens for colors, shadows, and spacing.
- **Package Manager:** Bun (`bun.lock` exists in workspace root).
- **Environment Support:** Designed with strict adherence to modern web standards, server/client component boundaries, and native CSS-native scroll-driven animations with custom fallbacks.

---

## 🛠️ Building and Running

Since this project utilizes **Bun** as its package manager, prefer `bun` for script executions:

| Command | Action | Description |
| :--- | :--- | :--- |
| `bun run dev` | Start Development | Launches the local development server at `http://localhost:3000`. |
| `bun run build` | Build Production | Prepares a production-ready build under the `.next/` directory. |
| `bun run start` | Start Production | Runs the pre-built application locally in production mode. |
| `bun run lint` | Lint Codebase | Runs the ESLint checker based on the custom `eslint.config.mjs`. |
| *N/A* | Run Tests | No test suite is currently configured. If implementing new modules, verify them via local component rendering. |

---

## 🎨 Design Tokens & Theme

Planist is built with a gorgeous, high-contrast dark visual system. Do not hardcode colors, border-radii, transitions, or shadows. Instead, use the custom CSS design tokens defined in `src/app/globals.css`.

### Theme Properties

| Token | CSS Variable | Value | Description |
| :--- | :--- | :--- | :--- |
| **Primary** | `--primary` | `#1C1C1C` | Deep background tone for headers/modals. |
| **Surface** | `--surface` | `#141414` | Main screen background. |
| **Accent** | `--accent` | `#E8B94A` | Gold highlight color for buttons/actions. |
| **Accent Light** | `--accent-light` | `#F0CC6E` | Lighter gold variant for hovered states. |
| **Text Primary** | `--text-primary` | `#F5F5F5` | Off-white main text. |
| **Text Secondary** | `--text-secondary`| `#A0A0A0` | Soft gray text. |
| **Text Muted** | `--text-muted` | `#6B6B6B` | Low-contrast text for captions/footers. |
| **Border** | `--border` | `rgba(255, 255, 255, 0.06)` | Subtle dividing borders. |
| **Border Hover** | `--border-hover` | `rgba(255, 255, 255, 0.12)` | Brightened border on focus/hover. |

### Tailwind CSS v4 Configuration
Tailwind variables are mapped in `src/app/globals.css` using the `@theme inline` rule:
- `color-primary`: mapped to `var(--primary)`
- `color-surface`: mapped to `var(--surface)`
- `color-accent`: mapped to `var(--accent)`
- `color-accent-light`: mapped to `var(--accent-light)`
- `color-text-primary`: mapped to `var(--text-primary)`
- `color-text-secondary`: mapped to `var(--text-secondary)`
- `font-sans`: mapped to `var(--font-inter)` (Inter font)

---

## 📐 Development Conventions & Guidelines

### 1. Component Boundaries & Modern Rendering
- **Server Components by Default:** Keep components under `src/app/` as Server Components unless interactivity is required.
- **Client Components ("use client"):** Add `"use client"` *only* when utilizing React state/hooks (`useState`, `useEffect`, `useRef`, etc.) or event handlers.
- **Folder Conventions:**
  - `src/app/`: Next.js layouts, globals, and pages.
  - `src/components/layout/`: Global layout elements (`navbar.tsx`, `footer.tsx`).
  - `src/components/landing/`: Modular landing sections (`hero-section.tsx`, `features-section.tsx`, `how-it-works-section.tsx`, `calendar-section.tsx`, `testimonials-section.tsx`, `cta-section.tsx`).
  - `src/components/`: Reusable interface elements (e.g., `ScrollReveal.tsx`).

### 2. High-Performance Icons
- **No Heavy Libraries:** Never import large icon packages (e.g., Lucide, FontAwesome).
- **Custom SVG Icons:** Always use the high-performance SVG icon exports from `src/components/icons.tsx`. Standard layout:
  ```tsx
  import { ArrowRightIcon } from "@/components/icons";
  ```
- If a new icon is required, implement it as a lightweight SVG functional component within `src/components/icons.tsx` using `stroke="currentColor"` and `strokeWidth={1.5}` to match the existing icon design.

### 3. Scroll & Float Animations
- **CSS-Driven Reveal Animations:** Planist utilizes native view-driven scroll timeline animations (Chrome/Edge/Safari support) with a fallback.
- **ScrollReveal Component:** Wrap components that need entrance effects in the custom client-side `<ScrollReveal>` helper from `src/components/ScrollReveal.tsx`:
  ```tsx
  import ScrollReveal from "@/components/ScrollReveal";

  <ScrollReveal direction="up" delay={100}>
    <div>Your content here</div>
  </ScrollReveal>
  ```
- **Utility Animations:** Prefer custom keyframes configured in `src/app/globals.css`:
  - `animate-float`: Subtle up/down floating for orbs or illustrations.
  - `animate-pulse-glow`: Gentle pulsing box-shadow glow.
  - `animate-shimmer`: Classic shimmer loader background-position shift.
  - `animate-gradient`: Multi-colored background-position shift.

### 4. Glassmorphic Styling
- To create premium, futuristic UI sections, leverage the custom glass classes in your Tailwind layout:
  - **`glass`**: backdrop blur with a semitransparent dark overlay.
  - **`glass-card`**: high-quality cards with hover transitions, border glows, and vertical lift.

### 5. Code Quality & Formatting
- **Path Aliases:** Always use absolute-style path mapping `@/*` referencing `src/*` (e.g., `@/components/layout/footer`) unless making an adjacent relative import within landing pages.
- **Typing Strictness:** Avoid utilizing `any` or disabling type-checks with `@ts-ignore`. Declare exact prop structures.
- **Linting Compliance:** Make sure changes comply with ESLint configuration (defined in `eslint.config.mjs`) by running `bun run lint`.
