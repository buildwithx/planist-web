"use client";

import { SubmitEvent, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

export default function SignInView() {
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const token = turnstileRef.current?.getResponse();
    // Send token to your server...
    turnstileRef.current?.reset(); // Reset after submission
  }

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <p>Sign In</p>
        <Turnstile ref={turnstileRef} siteKey={siteKey} />
      </form>
    </div>
  );
}
