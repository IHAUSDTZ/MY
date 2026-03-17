import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "IHAUS | Integrated Hill Areas Upliftment Society, Manipur",
    template: "%s | IHAUS Manipur"
  },
  description: "Empowering Hill Communities for Sustainable Rural Development in Noney District, Manipur. Established in 2014, IHAUS works for tribal welfare, education, and livelihood.",
  openGraph: {
    title: "IHAUS Manipur",
    description: "Empowering Hill Communities for Sustainable Rural Development",
    url: "https://ihausmanipur.org",
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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
