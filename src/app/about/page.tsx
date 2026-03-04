import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Lumière Nails",
  description: "Learn about Lumière Nails — our philosophy, our team, and what makes our salon different.",
};

export default function AboutPage() {
  return <AboutContent />;
}
