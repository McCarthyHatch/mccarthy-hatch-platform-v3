import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ConditionalFooter, ConditionalNavigation } from "@/components/ConditionalChrome";
import "./globals.css";
import "./corporate.css";

export const metadata: Metadata = {
  title: "McCarthy Hatch | Intelligence Begins with Listening",
  description:
    "Advanced artificial intelligence, institutional expertise, and human insight.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConditionalNavigation />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  );
}
