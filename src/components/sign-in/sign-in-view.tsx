"use client";

import { type FormEvent, useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";
import {
  EyeIcon,
  EyeOffIcon,
  MailIcon,
  LockIcon,
  GoogleIcon,
  AppleIcon,
} from "@/components/icons";
import Link from "next/link";

export default function SignInView() {
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const token = turnstileRef.current?.getResponse();

    // UI-only: log captured data
    console.log("Sign-in attempt:", { email, token });

    // Simulate network delay for loading state demo
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    turnstileRef.current?.reset();
  }

  return (
    <div className="glass-card p-8 sm:p-10" style={{ transform: "none" }}>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          Welcome back
        </h1>
        <p className="text-text-secondary text-sm">
          Sign in to continue planning your next adventure
        </p>
      </div>

      {/* Social Login Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          type="button"
          id="sign-in-google"
          className="flex-1 flex items-center justify-center gap-2.5 rounded-xl border border-border bg-white/3 px-4 py-3 text-sm font-medium text-text-primary transition-all hover:border-border-hover hover:bg-white/6 active:scale-[0.98] min-h-[48px]"
        >
          <GoogleIcon size={18} />
          Google
        </button>
        <button
          type="button"
          id="sign-in-apple"
          className="flex-1 flex items-center justify-center gap-2.5 rounded-xl border border-border bg-white/3 px-4 py-3 text-sm font-medium text-text-primary transition-all hover:border-border-hover hover:bg-white/6 active:scale-[0.98] min-h-[48px]"
        >
          <AppleIcon size={18} />
          Apple
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
          or continue with email
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Email Field */}
        <div className="mb-4">
          <label
            htmlFor="sign-in-email"
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            Email address
          </label>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
              <MailIcon size={16} />
            </div>
            <input
              id="sign-in-email"
              name="email"
              type="email"
              autoComplete="username"
              required
              placeholder="you@example.com"
              className="auth-input"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="sign-in-password"
              className="block text-sm font-medium text-text-secondary"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              id="sign-in-forgot-password"
              className="text-xs font-medium text-accent hover:text-accent-light transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
              <LockIcon size={16} />
            </div>
            <input
              id="sign-in-password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              className="auth-input pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-pressed={showPassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
              id="sign-in-toggle-password"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors p-1"
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2.5 mb-6">
          <input
            type="checkbox"
            id="sign-in-remember"
            name="remember"
            className="h-4 w-4 rounded border-border bg-white/4 accent-accent cursor-pointer"
          />
          <label
            htmlFor="sign-in-remember"
            className="text-sm text-text-secondary cursor-pointer select-none"
          >
            Remember me
          </label>
        </div>

        {/* Turnstile */}
        <div className="flex justify-center mb-6">
          <Turnstile
            ref={turnstileRef}
            siteKey={siteKey}
            options={{
              theme: "dark",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          id="sign-in-submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-accent disabled:hover:shadow-none disabled:active:scale-100 min-h-[48px]"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-25"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>
              Signing in…
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Footer link */}
      <p className="text-center text-sm text-text-muted mt-8">
        Don&apos;t have an account?{" "}
        <Link
          href="/sign-up"
          id="sign-in-go-to-sign-up"
          className="font-medium text-accent hover:text-accent-light transition-colors"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
