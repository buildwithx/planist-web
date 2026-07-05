import SignInView from "@/components/sign-in/sign-in-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — Planist",
  description:
    "Sign in to your Planist account to manage trips, itineraries, and sync with Google Calendar.",
};

export default function SignInPage() {
  return <SignInView />;
}
