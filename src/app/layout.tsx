import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PoolQuotesNow - Find Pool Services Near You",
  description:
    "Get quotes from trusted pool professionals for installation, repair, cleaning, resurfacing, and remodeling services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
