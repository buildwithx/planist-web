import SignInView from "@/components/sign-in/sign-in-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return <SignInView />;
}
