import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { GoogleAnalytics } from "../components/GoogleAnalytics";
import JsonLd from "../components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ihausmanipur.org";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "IHAUS | Integrated Hill Areas Upliftment Society, Manipur",
    template: "%s | IHAUS Manipur"
  },
  description: "Empowering Hill Communities for Sustainable Rural Development in Noney District, Manipur. Established in 2014, IHAUS works for tribal welfare, education, and livelihood.",
  openGraph: {
    title: "IHAUS Manipur",
    description: "Empowering Hill Communities for Sustainable Rural Development",
    url: baseUrl,
    siteName: "IHAUS Manipur",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IHAUS Manipur Community Upliftment"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ErrorBoundary>
          <GoogleAnalytics />
          <JsonLd />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
