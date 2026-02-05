"use client";
import { Mic } from "lucide-react";
import Image from "next/image";
import AnimatedMicIcon from "./ui/AnimatedMicIcon";
import { SoundWave } from "./ui/SoundWave";
import { Container } from "./ui/Container";

const USE_CASES = [
  {
    image: "/home/chanor-bills-and-subscriptions.jpg",
    title: "Bills & Subscriptions",
    description: "Electricity, TV, Internet — done in seconds",
    voiceCommand: "Iddo, pay my IKEYA bill",
    color: "orange",
    Icon: Mic,
    isWave: false,
  },
  {
    image: "/home/chanor-airtime-topup.jpg",
    title: "Top UP Airtime / Data",
    description: "stay connected, hassle free.",
    voiceCommand: "Ebit, recharge ₦2000  MTN",
    color: "orange",
    Icon: Mic,
    isWave: false,
  },
  {
    image: "/home/chanor-send-money.jpg",
    title: "Send Money",
    description: "Send money to any bank instantly. No stress.",
    voiceCommand: "Chanor send ₦2000 to James",
    color: "orange",
    Icon: "/wave.svg",
    isWave: true,
  },
];

export default function VoiceFeaturesSection() {
  return (
    <Container className="pb-18.75 md:pb-25">
      <div className="text-center">
        <p className="text-base text-chanor-orange font-semibold leading-5 -tracking-[0.25px]">
          Everyday Money Tools
        </p>

        <h2 className="text-2xl md:text-[40px] lg:leading-[73px] -tracking-[0.25px] font-semibold text-neutral-black">
          Do It All With Just Your Voice
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-[25px]">
        {USE_CASES.map((useCase, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-[0px_4px_4px_0px_rgba(139,139,139,0.1)] hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={useCase.image}
                width={331}
                height={181}
                alt={useCase.title}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 331px"
              />
            </div>
            <div className="px-4 pb-4 pt-3 flex flex-col flex-1 justify-between">
              <h2 className="text-xl font-semibold text-neutral-black -tracking-[0.25px]">
                {useCase.title}
              </h2>
              <p className="text-[#8E8E93] text-[15px] mt-2 mb-6">
                {useCase.description}
              </p>
              <div className="inline-flex items-center gap-2 text-sm bg-[#FEFAF8] p-4 rounded-full rounded-br-none flex-nowrap overflow-hidden">
                <div className="shrink-0 rounded-full flex items-center justify-center pr-2">
                  {useCase.Icon === Mic ? (
                    <AnimatedMicIcon size="md" />
                  ) : (
                    <SoundWave />
                  )}
                </div>
                <span className="text-neutral-black text-left font-medium truncate">
                  {useCase.voiceCommand}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
