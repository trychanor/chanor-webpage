import Image from "next/image";
import AnimatedMicIcon from "./ui/AnimatedMicIcon";
import { SoundWave } from "./ui/SoundWave";
import { Container } from "./ui/Container";

export default function VoiceBankingSection() {
  return (
    <Container className="py-18.75 md:py-25">
      <p className="text-base text-chanor-orange font-semibold leading-5 -tracking-[0.25px] text-center">
        Real voices. Real moments.
      </p>

      <h2 className="text-2xl md:text-[2.5rem] lg:leading-18.25 -tracking-[0.25px] font-semibold text-neutral-black text-center">
        Banking, the way we actually live.
      </h2>

      <div className="grid md:grid-cols-2 gap-6.25 items-center md:justify-between mt-6.25">
        <div className="text-left order-2 md:order-1 ">
          <span className="text-chanor-orange text-sm font-semibold uppercase tracking-wider mb-1.5 md:mb-[11px] block">
            Voice Banking
          </span>

          <h2 className="text-2xl md:text-[2rem] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-2.5 md:mb-5">
            I sent rent in Hausa, no typing
          </h2>

          <p className="text-neutral-black text-base md:text-xl lg:leading-10 font-medium -tracking-[0.25px] mb-2.5 md:mb-5">
            Send money using just your voice, in any language you speak. Chanor
            understands you, no typing, no stress. Just say it and your rent is
            paid instantly.
          </p>

          <button className="bg-chanor-orange hover:bg-orange-600 text-white leading-6 font-semibold px-6 py-3 rounded-[3.5rem] transition-all duration-300 transform hover:scale-105 cursor-pointer">
            Open an account
          </button>
        </div>

        <div className="relative order-1 md:order-2 flex md:justify-end items-center min-h-75 sm:min-h-100 md:min-h-113">
          <div className="hidden lg:flex absolute top-12 [@media(min-width:1024px)]:-left-20 [@media(min-width:1200px)]:-left-8 bg-white rounded-full rounded-br-none px-3 sm:px-5 py-2 sm:py-3 items-center gap-2 sm:gap-3 z-20 shadow-md">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <AnimatedMicIcon size="sm" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-black/80">
              Chanor, turo min kudin haya
            </span>
          </div>

          <div className="hidden lg:block absolute top-37.5 [@media(min-width:1024px)]:left-20 [@media(min-width:1200px)]:left-40 px-3 z-20">
            <SoundWave
              bars={[15, 21, 17, 22, 19, 12, 23, 17, 21, 15]}
              barWidth={4}
              gap={3}
              containerHeight={40}
            />
          </div>

          <div
            className="
                relative w-full
                h-[280px] sm:h-[350px] 
                md:h-[411px]       
                md:max-w-[482px]      
                rounded-[60px] sm:rounded-[80px] md:rounded-[100px]
                bg-linear-to-b from-orange-50 via-orange-100 to-yellow-50
                overflow-hidden
              "
          >
            <Image
              src="/home/chanor-voice-banking.png"
              alt="Woman using voice banking"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 482px"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
