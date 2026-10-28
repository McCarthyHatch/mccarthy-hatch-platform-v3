"use client";

import { usePathname } from "next/navigation";
import { Footer, Navigation } from "@/components/SiteChrome";

export function ConditionalNavigation() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Navigation />;
}

export function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <Footer />;
}
