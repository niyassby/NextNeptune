import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import SmoothScroll from "@/components/Util/scrollSmooth";
import Footer from "@/components/Navbar/Footer";
import ScrollProgress from "@/components/Util/ScrollProgress";
import Preloader from "@/components/Util/Preloder";
import Cursor from "@/components/Util/Cursor";

const redHat = Red_Hat_Display({
  subsets: ["latin"],          // choose subsets you need
  weight: ["300","400", "500","600", "700"], // optional: regular, medium, bold
  variable: "--font-red-hat",  // optional: CSS variable
});



// app/layout.js
export const metadata = {
  title: "Neptune Mark Digital Creators",
  description:
    "Neptune Mark Digital Creators is a Calicut-based tech, marketing, and creative team delivering web development, branding, and digital marketing solutions that drive results.",
  keywords: [
    "Neptune Mark",
    "Digital Creators",
    "Tech Agency Calicut",
    "Digital Marketing Calicut",
    "Creative Agency Kerala",
    "Web Development Company Calicut",
    "Branding Agency Kerala",
    "Social Media Marketing Calicut",
    "Performance Marketing Kerala",
    "Neptune Digital Creators",
    "Neptunemark",
    "Neptune",
    "Web Development",
    "App Development",
    "E-commerce Development",
    "Digital Marketing",
    "Branding",
    "Social Media Marketing",
    "Performance Marketing",
    "Calicut",
    "Kerala",
    "Digital automation",
    "Whatsapp automation",
    "Digital marketing agency",
    "Digital marketing agency Kerala",
    "Digital business solutions",
    "Digital business card",
    "NFC card",
    "NFC business card",
    "NFC digital business card",
  ],
  authors: [{ name: "Neptune Mark Digital Creators" }],
  creator: "Neptune Mark Digital Creators",
  publisher: "Neptune Mark Digital Creators",
  metadataBase: new URL("https://www.neptunemark.com"), // replace with your actual domain
  alternates: {
    canonical: "https://www.neptunemark.com",
  },
  openGraph: {
    title: "Neptune Mark Digital Creators",
    description:
      "A results-driven creative and tech team from Calicut, Kerala — blending technology, performance, and creativity to empower brands online.",
    url: "https://www.neptunemark.com",
    siteName: "Neptune Mark Digital Creators",
    images: [
      {
        url: "https://www.neptunemark.com/Neptune-mark.jpg", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Neptune Mark Digital Creators",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neptune Mark Digital Creators",
    description:
      "We are a tech, marketing, and creative team based in Calicut, Kerala. Empowering brands with digital innovation and strategy.",
    creator: "@neptunemark", // replace with your handle if available
    images: ["https://www.neptunemark.com/Neptune-mark.jpg"], // same as OG image
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body
        className={`${redHat.variable}   antialiased`}
      >
        <Navbar/>
        <ScrollProgress/>
        <SmoothScroll/>
        <Preloader/>
        <Cursor/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
