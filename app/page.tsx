import type { Metadata } from "next";
import Hero from "@/app/components/hero";
import VoiceFeaturesSection from "@/app/components/features";
import VoiceBankingSection from "./components/voice-banking";
import FastTransaction from "./components/fast-transaction";
import TrustSecuritySection from "./components/trust-security";
import Howitworks from "./components/Howitworks";
import LanguageSelectorSection from "./components/LanguageSelectorSection";
import CoreBenefits from "./components/CoreBenefits";
import ComingSoon from "./components/ComingSoon";
import CTASection from "./components/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Chanor is a fast, secure African fintech app for sending money, paying bills, topping up airtime and data, managing business accounts, and using voice banking for hands-free transactions.",

  keywords: [
    "Chanor",
    "African fintech app",
    "Send money in Nigeria",
    "Voice banking app",
    "Digital wallet Nigeria",
    "Pay bills online Nigeria",
    "Airtime and data top up",
    "Business banking app Africa",
    "Secure money transfer",
    "Mobile banking Africa",
  ],

  openGraph: {
    title: "Chanor | Voice-First Digital Banking for Africa",
    description:
      "Send money, pay bills, top up airtime & data, and manage business finances with Chanor — Africa’s voice-first digital banking app.",
    url: "https://trychanor.com",
    siteName: "Chanor",
    images: [
      {
        url: "https://trychanor.com/chanor-og.jpg",
        width: 1200,
        height: 630,
        alt: "Chanor – Voice-First Digital Banking App",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Chanor | Voice-First Digital Banking for Africa",
    description:
      "Africa’s voice-first fintech app for fast payments, airtime, data, and business banking.",
    images: ["https://trychanor.com/chanor-og.jpeg"],
  },

  alternates: {
    canonical: "https://trychanor.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <VoiceBankingSection />
      <FastTransaction />
      <TrustSecuritySection />
      <Howitworks />
      <VoiceFeaturesSection />
      <LanguageSelectorSection />
      <CoreBenefits />
      <ComingSoon />
      <CTASection />
    </>
  );
}
