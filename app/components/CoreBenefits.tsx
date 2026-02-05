import { Mic, LockKeyhole, FileText } from "lucide-react";
import { Container } from "./ui/Container";

const SECURITY_FEATURES = [
  {
    icon: Mic,
    title: "One Voice, One phone",
    description: "Your unique voice signature keeps your account secure.",
  },
  {
    icon: LockKeyhole,
    title: "Voice PIN Security",
    description: "Set up your secure voice PIN to keep your account safe",
  },
  {
    icon: FileText,
    title: "Licensed & Protected",
    description: "Your unique voice signature keeps your account secure.",
  },
];

export default function CoreBenefits() {
  return (
    <Container className="pb-18.75 md:pb-25">
      <div className="text-center">
        <h2 className="text-2xl md:text-[40px] -tracking-[0.25px] font-semibold text-neutral-black">
          Your Money. Your Voice.{" "}
          <span className="text-chanor-orange">Protected</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-6.25">
        {SECURITY_FEATURES.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="space-y-4 md:space-y-5 border border-[#F3F2F2] rounded-2xl p-4 md:p-5 lg:py-5 lg:px-6 shadow-[0px_4px_4px_0px_rgba(239,239,239,0.25)]"
          >
            <div className="flex justify-center">
              <div className="w-14 md:w-16 h-14 md:h-16 bg-chanor-orange/10 rounded-full flex items-center justify-center">
                <Icon className="w-7 md:w-8 lg:w-10 h-7 md:h-8 lg:h-10 text-chanor-orange" />
              </div>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-center md:text-start text-neutral-black">
              {title}
            </h2>
            <p className="text-[#8E8E93] text-center md:text-start text-sm md:text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
