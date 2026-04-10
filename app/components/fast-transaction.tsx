"use client";

import Image from "next/image";
import { Container } from "./ui/Container";
import { useUnavailableToast } from "./ToastProvider";

export default function FastTransaction() {
  const showUnavailableToast = useUnavailableToast();

  return (
    <Container className="pb-18.75 md:pb-25">
      <div className="grid md:grid-cols-2 gap-[25px] items-center">
        <div className="relative flex ">
          <div
            className="
                relative w-full 
                h-[280px] sm:h-[350px] 
                md:h-[411px]        
                md:max-w-[482px]   
                rounded-[60px] sm:rounded-[80px] md:rounded-[100px]
                bg-linear-to-br from-orange-50 via-orange-100 to-yellow-50
                overflow-hidden
              "
          >
            <Image
              src="/home/chanor-login-mockup.png"
              alt="Phone showing fast transaction"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-6 text-left">
          <span className="text-chanor-orange text-sm font-semibold uppercase tracking-wider block mb-1.5 md:mb-[11px]">
            Fast Transaction
          </span>

          <h2 className="text-2xl md:text-[2rem] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-2.5 md:mb-5">
            I sent money to Papa Taiwo on the bus.
          </h2>

          <p className="text-neutral-black text-base md:text-xl lg:leading-10 font-medium -tracking-[0.25px] mb-2.5 md:mb-5">
            Even on the go, Chanor ensures fast, reliable transfers. No network
            interruptions, no waiting, just open the app or speak, and your
            transaction is complete.
          </p>

          <button
            type="button"
            onClick={() => showUnavailableToast("open-account")}
            className="bg-chanor-orange hover:bg-orange-600 text-white leading-6 font-semibold px-6 py-3 rounded-[56px] transition-all duration-300 transform hover:scale-105"
          >
            Open an account
          </button>
        </div>
      </div>
    </Container>
  );
}
