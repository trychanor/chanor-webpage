import Image from "next/image";
import ChanorBusinessWaltlistIllustration from "@/public/home/chanor-business-waitlist.jpg";
import { Container } from "./ui/Container";
export default function ComingSoon() {
  return (
    <Container className="pb-18.75 md:pb-25">
      <div className="bg-white rounded-[5px] border border-[#F3F2F2] overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="p-4 space-y-6">
            <span className="text-chanor-orange text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <div className="w-12 h-1.5 bg-chanor-orange" />
              Coming Soon
            </span>
            <h2 className="text-2xl md:text-[2rem] -tracking-[0.25px] font-semibold text-neutral-black">
              Chanor For Business is Coming to You. <br /> Get Notify When We
              Launched
            </h2>
            <p className="text-[#8E8E93] leading-6">
              For shop, for salon, and merchants everywhere . Accept payment
              with just your voice . No POS, No Stress
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:flex-1 px-4 md:px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent placeholder:text-gray-500 placeholder:font-semibold"
              />
              <button className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="h-full">
            <Image
              src={ChanorBusinessWaltlistIllustration}
              placeholder="blur"
              alt="Business owner"
              className="w-full h-full object-cover"
              width={535}
              height={440}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 535px"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
