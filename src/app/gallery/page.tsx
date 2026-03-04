import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery — Lumière Nails",
  description: "Browse our nail art gallery. From classic elegance to bold nail art — see what we create.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
