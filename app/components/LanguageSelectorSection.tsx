"use client";
import React, { useState } from "react";
import AnimatedMicIcon from "@/app/components/ui/AnimatedMicIcon";
import { SoundWave } from "./ui/SoundWave";
const LANGUAGES = [
  { id: "hausa", label: "Hausa", text: "Chanor, aika N5,000 ga Aisha." },
  { id: "igbo", label: "Igbo", text: "Chanor, ziga N5,000 nye Aisha." },
  { id: "yoruba", label: "Yoruba", text: "Chanor, fi N5,000 ranṣẹ si Aisha." },
  { id: "pidgin", label: "Pidgin", text: "Chanor, send N5,000 give Aisha." },
];

// const SoundWave = () => (
//   <div className="flex gap-1 items-center justify-center">
//     {[12, 18, 14, 22, 16, 12, 20, 14, 18, 12].map((height, i) => (
//       <div
//         key={i}
//         className="w-1 bg-orange-500 rounded-full animate-pulse"
//         style={{
//           height: `${height}px`,
//           animationDelay: `${i * 0.1}s`,
//         }}
//       />
//     ))}
//   </div>
// );

export default function Features() {
  const [selectedLanguage, setSelectedLanguage] = useState("hausa");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageChange = (languageId: string) => {
    if (languageId === selectedLanguage) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSelectedLanguage(languageId);
      setIsAnimating(false);
    }, 300);
  };

  const currentLanguage = LANGUAGES.find(
    (lang) => lang.id === selectedLanguage
  );

  return (
    <section className="w-full px-6 md:px-10 pb-[75px] md:pb-[100px]">
      <div className="max-w-[1200px] mx-auto text-center mb-[25px] md:mb-[45px] lg:mb-[65px]">
        <div className="flex items-center justify-center gap-2 mb-[25px]">
          <AnimatedMicIcon size="md" />
          <span className="text-base text-chanor-orange font-semibold leading-5 -tracking-[0.25px]">
            SPEAK MONEY YOUR WAY
          </span>
        </div>

        <h2 className="text-2xl md:text-[40px] -tracking-[0.25px] font-semibold text-neutral-black">
          Bank in <span className="text-chanor-orange">Your Own Language.</span>
        </h2>
      </div>

      {/* Language Selector */}
      <div className="flex justify-center gap-2 md:gap-3 lg:gap-4 mb-12 flex-wrap px-4">
        {LANGUAGES.map((language) => (
          <button
            key={language.id}
            onClick={() => handleLanguageChange(language.id)}
            className={`px-3 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-sm md:text-base rounded-md font-semibold transition-all duration-300 cursor-pointer ${
              selectedLanguage === language.id
                ? "bg-chanor-orange text-white scale-105"
                : "bg-white text-neutral-black border border-chanor-orange hover:border-chanor-orange hover:text-chanor-orange"
            }`}
          >
            {language.label}
          </button>
        ))}
      </div>

      {/* Voice Command Display */}
      <div className="max-w-2xl mx-auto ">
        <div className="bg-white rounded-2xl  p-8 text-center overflow-hidden">
          <div
            className={`transition-all duration-300 ${
              isAnimating
                ? "opacity-0 translate-x-full"
                : "opacity-100 translate-x-0"
            }`}
          >
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              &quot;{currentLanguage?.text}&quot;
            </p>
            <div className="flex justify-center items-center gap-4">
              <hr className="w-[70px] md:w-[104px] border-5 border-b border-[#D9D9D9]" />
              <SoundWave
                bars={[15, 21, 17, 22, 19, 12, 23, 17, 21, 15]}
                barWidth={4}
                gap={3}
                containerHeight={40}
              />
              <hr className="w-[70px] md:w-[104px] border-5 border-b border-[#D9D9D9]" />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes waveform {
          0% {
            box-shadow: 0 0 0 0 rgba(239, 90, 34, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(239, 90, 34, 0.2);
          }
          100% {
            box-shadow: 0 0 0 16px rgba(239, 90, 34, 0);
          }
        }

        :global(.animate-waveform) {
          animation: waveform 2s infinite;
        }
      `}</style>
    </section>
  );
}
