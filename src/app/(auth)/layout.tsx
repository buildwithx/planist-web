import { PlaneIcon } from "@/components/icons";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Animated background orbs */}
      <div
        className="auth-bg-orb"
        style={{
          width: 320,
          height: 320,
          top: "10%",
          left: "15%",
          background: "radial-gradient(circle, rgba(232,185,74,0.12), transparent 70%)",
        }}
      />
      <div
        className="auth-bg-orb"
        style={{
          width: 240,
          height: 240,
          bottom: "10%",
          right: "10%",
          background: "radial-gradient(circle, rgba(232,185,74,0.08), transparent 70%)",
          animationDelay: "-4s",
        }}
      />

      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2.5 group mb-8 relative z-10"
        id="auth-logo"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
          <PlaneIcon className="text-accent" size={20} />
        </div>
        <span className="text-2xl font-bold tracking-tight text-text-primary">
          Planist
        </span>
      </Link>

      {/* Page content */}
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
