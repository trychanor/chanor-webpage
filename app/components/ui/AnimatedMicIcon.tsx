import { Mic } from "lucide-react";

interface AnimatedMicIconProps {
  size?: "sm" | "md" | "lg";
}

export default function AnimatedMicIcon({ size = "md" }: AnimatedMicIconProps) {
  const sizeClasses = {
    sm: { container: "w-[24px] h-[24px]", icon: "w-4 h-4" },
    md: { container: "w-[32px] h-[32px]", icon: "w-5 h-5" },
    lg: { container: "w-[40px] h-[40px]", icon: "w-6 h-6" },
  };

  const { container, icon } = sizeClasses[size];

  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-chanor-orange/10 animate-waveform" />

        <div
          className={`relative flex items-center justify-center ${container} bg-chanor-orange rounded-full`}
        >
          <Mic className={`${icon} text-white`} />
        </div>
      </div>
    </>
  );
}
