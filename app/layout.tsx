import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer, Navigation } from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "McCarthy Hatch Platform",
  description:
    "Enterprise AI platform for financial intelligence, product discovery, and secure client delivery.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
