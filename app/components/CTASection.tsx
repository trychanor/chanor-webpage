"use client";

import Image from "next/image";
import { Container } from "./ui/Container";
import { useUnavailableToast } from "./ToastProvider";

export default function CTASection() {
  const showUnavailableToast = useUnavailableToast();

  return (
    <Container className="bg-[#EC5C28] text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 py-[50px]">
          <h2 className="text-2xl md:text-[32px] font-bold leading-tight">
            This is our time, Banking By Voice in Our Language
          </h2>
          <p className="text-lg text-white">
            Join thousands already sending money, paying bills, and recharging,
            just by speaking.
          </p>
          <div className="flex flex-row max-sm:flex-row  gap-4 w-fit">
            <button
              type="button"
              onClick={() => showUnavailableToast("app-store")}
              className="flex items-center gap-1.5 md:gap-3 bg-black text-white py-1 px-1.5 md:py-2 md:px-4 rounded-lg"
            >
              <Image
                src="/apple.svg"
                alt="Apple Logo"
                width={32}
                height={32}
                sizes="32px"
              />
              <div className="text-left text-sm leading-tight">
                <span className="text-xs">GET IT ON</span> <br />
                <span className="font-medium text-base">APP STORE</span>
              </div>
            </button>
            <button
              type="button"
              onClick={() => showUnavailableToast("google-play")}
              className="flex items-center gap-1.5 md:gap-3 bg-black text-white py-1 px-1.5 md:py-2 md:px-4 rounded-lg"
            >
              <Image
                src="/icon-google-playstore.png"
                alt="Google Play Store"
                width={32}
                height={32}
                sizes="32px"
              />
              <div className="text-left text-sm leading-tight">
                <span className="text-xs">GET IT ON</span> <br />
                <span className="font-medium text-base">Google Play</span>
              </div>
            </button>
          </div>{" "}
        </div>
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* Phone mockups */}
            <div className="relative w-full max-w-[600]">
              <Image
                src="/mobile-device-mockup.svg"
                width={692}
                height={571}
                alt="Chanor App on Phone"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
