import type { Metadata } from "next";
import Image from "next/image";
import Register from "./components/Register";
import Steps from "./components/Steps";
import { Container } from "../components/ui/Container";

export const metadata: Metadata = {
  title: "Become a Chanor Field Agent",

  description:
    "Join Chanor as a Field Agent and earn weekly commissions by helping people in your local community send money and access simple financial services.",

  keywords: [
    "Chanor Field Agent",
    "Become a Chanor Agent",
    "Chanor agent registration",
    "Fintech agent Nigeria",
    "POS agent Nigeria",
    "Earn commissions as an agent",
    "Field agent jobs Nigeria",
    "Chanor agents",
    "Mobile banking agents",
    "Voice banking Nigeria",
  ],

  openGraph: {
    title: "Become a Chanor Field Agent | Earn Weekly Commissions",
    description:
      "Join Chanor’s nationwide network of field agents. Earn commissions, work in your community, and help people access financial services with ease.",
    url: "https://trychanor.com/field-agent",
    siteName: "Chanor",
    images: [
      {
        url: "https://trychanor.com/chanor-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Become a Chanor Field Agent",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Become a Chanor Field Agent",
    description:
      "Earn weekly commissions by joining Chanor as a field agent and helping your local community access financial tools.",
    images: ["https://trychanor.com/chanor-og.jpeg"],
  },

  alternates: {
    canonical: "https://trychanor.com/field-agent",
  },
};

export default function Page() {
  const WHY_CHANOR_AGENT = [
    {
      icon: "/field-agent/icon-earn.svg",
      heading: "Earn Weekly Commissions",
      text: "Get paid for every new user you onboard and every POS transaction you manage",
    },
    {
      icon: "/field-agent/icon-community-location.svg",
      heading: "Work in Your Local Community",
      text: "Help people around you access simple financial tools no bank stress",
    },
    {
      icon: "/field-agent/icon-dashboard.svg",
      heading: "Easy App & Dashboard",
      text: "Track your earnings, customers, and performance directly from your phone",
    },
    {
      icon: "/field-agent/icon-training.svg",
      heading: "Training & Support",
      text: "Every Chanor agent gets onboarding training and ongoing support from our team",
    },
  ];
  const REQUIRMENTS = [
    {
      icon: "/field-agent/icon-rated-18.svg",
      text: "Must be 18 years and above",
    },
    {
      icon: "/field-agent/icon-cellphone.svg",
      text: "Own a smartphone with WhatsApp access",
    },
    {
      icon: "/field-agent/icon-nigeria-map.svg",
      text: "Reside in Nigeria",
    },
    {
      icon: "/field-agent/icon-map-pin.svg",
      text: "Basic Knowledge of your local area",
    },
  ];
  return (
    <>
      <Container className="lg:pt-12.5 pb-18.75 md:pb-25">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[44px] lg:leading-[52px] -tracking-[0.5px] text-neutral-black font-bold max-w-[384px] md:max-w-[600px] mx-auto mb-4">
            Become a Chanor Field Agent
          </h1>
          <p className="text-base md:text-lg leading-6 md:leading-7 -tracking-[0.25px] text-neutral-black/80 max-w-[795px] mx-auto mb-6 md:mb-8">
            Join our nationwide network of Chanor field agents helping people send
            money and grow their business, in their local language and community
          </p>
          <button className="bg-chanor-orange hover:bg-orange-600 text-white text-base md:text-lg leading-6 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-[56px] transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Register as a Field Agent
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-stretch gap-8 lg:gap-12">
          <aside className="flex-1 lg:max-w-[calc(50%-24px)]">
            <h2 className="text-2xl md:text-[32px] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-6 md:mb-8">
              Why Become a Chanor Agent
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 md:gap-4">
              {WHY_CHANOR_AGENT.map((data, index) => (
                <li
                  key={index}
                  className="flex flex-col gap-3 md:gap-4 bg-chanor-orange text-[#FFFFDC] w-full lg:min-h-[300px] py-5 md:py-6 px-3.5 md:px-4 rounded-[10px] hover:scale-[1.02] transition-transform duration-300 shadow-md"
                >
                  <Image
                    src={data.icon}
                    width={53}
                    height={68}
                    alt={data.heading}
                    className="w-[45px] h-auto md:w-[53px]"
                  />
                  <h3 className="text-xl md:text-2xl -tracking-[0.33px] font-semibold">
                    {data.heading}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg -tracking-[0.25px] leading-relaxed">
                    {data.text}
                  </p>
                </li>
              ))}
            </ul>
          </aside>

          <aside className="flex-1 lg:max-w-[calc(50%-24px)] flex flex-col">
            <h2 className="text-2xl md:text-[32px] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-6 md:mb-8 lg:mb-10">
              Agent Requirements
            </h2>
            <ul className="flex flex-col justify-between flex-1 gap-4 md:gap-6 lg:gap-0">
              {REQUIRMENTS.map((requirement, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 md:gap-6 p-4 md:p-[24px]rounded-lg lg:rounded-none"
                >
                  <div className="shrink-0">
                    <Image
                      src={requirement.icon}
                      width={23}
                      height={28}
                      alt={requirement.text}
                      className="w-5 h-auto md:w-[23px]"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-xl -tracking-[0.25px] text-neutral-black leading-relaxed">
                    {requirement.text}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>

      <Steps />
      <Register />
    </>
  );
}
