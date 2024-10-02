import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "Netflix",
  description: "netflix clone developed on next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
