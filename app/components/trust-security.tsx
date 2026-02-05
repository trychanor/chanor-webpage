import Image from "next/image";
import { Container } from "./ui/Container";
export default function TrustSecuritySection() {
  return (
    <Container className="pb-18.75 md:pb-25">
      <div className="grid md:grid-cols-2 gap-6.25 items-center md:justify-between">
        <div className="space-y-6 text-left order-2 md:order-1">
          <span className="text-chanor-orange text-sm font-semibold uppercase tracking-wider block mb-1.5 md:mb-[11px]">
            Trust & Security
          </span>

          <h2 className="text-2xl md:text-[2rem] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-2.5 md:mb-5">
            I sabi use bank app now, no stress again
          </h2>

          <p className="text-neutral-black text-base md:text-xl lg:leading-10 font-medium -tracking-[0.25px] mb-2.5 md:mb-5">
            No more worrying about fraud or fake apps. Your voice is your
            password, safe, unique, and protected. With Chanor, your money and
            your peace of mind stay secure.
          </p>

          <button className="bg-chanor-orange hover:bg-orange-600 text-white leading-6 font-semibold px-6 py-3 rounded-[56px] transition-all duration-300 transform hover:scale-105">
            Open an account
          </button>
        </div>

        <div className="relative flex md:justify-end order-1 md:order-2">
          <div
            className="
                relative w-full 
                h-[300px] sm:h-[380px] 
                md:h-[411px]
                md:max-w-[482px]
                rounded-[40px] sm:rounded-[60px] md:rounded-[80px]
                bg-linear-to-br from-orange-50 via-orange-100 to-yellow-50
                overflow-hidden
              "
          >
            <Image
              src="/home/chanor-trust-and-security.png"
              alt="Woman using banking app securely"
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 482px"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
