import { AudioLines, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";

export default function Howitworks() {
  const FEATURES = [
  {
    icon: AudioLines,
    title: "Tap the mic and speak naturally",
    description:
      'Say it the way you talk. "Mehn, send ₦65,000 to Abba." Your voice is your command',
  },
  {
    icon: ShieldCheck,
    title: "We Confirm it's you",
    description: "Chanor understands your voice and confirms your identity",
  },
  {
    icon: Zap,
    title: "Money moves instantly",
    description:
      "Once confirmed, your transaction is completed instantly, fast and secure.",
  },
];

  return (
    <Container className="pb-[75px] md:pb-[100px]">
      <div className="text-center">
        <h2 className="text-2xl md:text-[40px] -tracking-[0.25px] font-semibold text-neutral-black">
          Banking was built for screens. <br /> We built it for voices
        </h2>
      </div>
      <div className="flex justify-between items-center flex-col gap-4 md:flex-row mt-[25px]">
        {FEATURES.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="max-w-[311px] text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Icon className="text-2xl text-raba-orange" />
            </div>
            <h3 className="text-xl font-semibold -tracking-[0.25px] text-neutral-black mt-[15px]">
              {title}
            </h3>
            <p className="text-[#8E8E93] text-[15px] max-w-xs -tracking-[0.25px] mx-auto mb-[11px]">
              {description}
            </p>
          </div>
        ))}
      </div>

      <button className="flex items-center justify-center gap-2 bg-chanor-orange hover:bg-orange-600 text-white leading-6 font-semibold px-6 py-3 rounded-[56px] transition-all duration-300 transform hover:scale-105 mx-auto mt-[50px] cursor-pointer">
        Try Chanor today
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </Container>
  );
}
