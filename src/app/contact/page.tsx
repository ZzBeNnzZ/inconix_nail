import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Lumière Nails",
  description: "Get in touch with Lumière Nails. Find our location, hours, and send us a message.",
};

export default function ContactPage() {
  return <ContactContent />;
}
