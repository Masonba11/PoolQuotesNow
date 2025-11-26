import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PoolQuotesNow - Find Pool Services Near You",
  description:
    "Get quotes from trusted pool professionals for installation, repair, cleaning, resurfacing, and remodeling services.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en" className="bg-white">
      <head>
        <JSONLDScript data={organizationSchema} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
