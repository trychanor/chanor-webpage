import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import WhyChanor from "./components/WhyChanor";
import MissionVisionSection from "./components/MissionVisionSection";
import ChanorFoundation from "./components/ChanorFoundation";
import AboutCTASection from "./components/AboutCTASection";
import Teams from "./components/teams";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Chanor, Africa’s voice-first digital banking app. Discover our mission, vision, and commitment to empowering customers with fast, secure, and convenient financial services.",
  keywords: [
    "Chanor",
    "About Chanor",
    "African fintech app",
    "Voice banking Africa",
    "Digital banking app Nigeria",
    "Financial services Africa",
    "Secure money transfer",
    "Business banking Africa",
  ],
  openGraph: {
    title: "About Chanor | Africa’s Voice-First Digital Banking App",
    description:
      "Discover Chanor’s mission, vision, and dedication to providing fast, secure, and innovative financial solutions for individuals and businesses in Africa.",
    url: "https://trychanor.com/about",
    siteName: "Chanor",
    images: [
      {
        url: "https://trychanor.com/chanor-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Chanor About Us",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Chanor | Africa’s Voice-First Digital Banking App",
    description:
      "Learn about Chanor’s mission and vision. Fast, secure, and innovative financial services for Africa.",
    images: ["https://tryraba.com/chanor-og.jpeg"],
  },
  alternates: {
    canonical: "https://trychanor.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyChanor />
      <MissionVisionSection />
      <ChanorFoundation />
      <Teams />
      <AboutCTASection />
    </>
  );
}
