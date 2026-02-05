import Image from "next/image";
import HeroImage1 from "@/public/about/about-hero-1.webp";
import HeroImage2 from "@/public/about/about-hero-2.webp";
import HeroImage3 from "@/public/about/about-hero-3.webp";
import { Container } from "@/app/components/ui/Container";

export default function AboutHero() {
  return (
    <Container className="pb-18.75 pt-12.5 lg:pb-25">
      <div className="text-center">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#EF5A22]/10 rounded-2xl mb-8">
          <span className="bg-white p-2 rounded-lg text-base leading-6 -tracking-[0.25px] text-neutral-black cursor-pointer">
            Chanor
          </span>
          <span className="text-base leading-6 -tracking-[0.25px] text-neutral-black cursor-pointer">
            About Us
          </span>
        </div>

        <h1 className="text-[2rem] lg:text-[44px] leading-8 lg:leading-12 -tracking-[0.5px] text-neutral-black font-bold max-w-[828px] mx-auto mb-6">
          Empowering Africa With Fast, Secure, & Intelligent Payment
        </h1>

        <p className="text-base leading-6 -tracking-[0.25px] text-neutral-black/80 max-w-[450px] mx-auto">
          Chanor is a secure digital wallet that makes payments effortless with
          voice-powered convenience.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex lg:justify-between lg:items-center mb-12">
        <div className="relative w-full sm:max-w-94.5 h-75 md:h-100 rounded-3xl overflow-hidden">
          <Image
            src={HeroImage2}
            fill
            placeholder="blur"
            className="object-cover"
            alt="Chanor Hero Image"
            sizes="(max-width: 640px) 100vw, 378px"
          />
        </div>

        <div className="relative w-full sm:max-w-94.5 h-75 md:h-100 lg:h-112.5 rounded-3xl overflow-hidden">
          <Image
            src={HeroImage3}
            fill
            placeholder="blur"
            className="object-cover"
            alt="Chanor Hero Image"
            sizes="(max-width: 640px) 100vw, 378px"
            priority
          />
        </div>

        <div className="relative w-full sm:col-span-2 sm:mx-auto sm:max-w-94.5 h-75 md:h-100 rounded-3xl overflow-hidden">
          <Image
            src={HeroImage1}
            fill
            placeholder="blur"
            className="object-cover"
            alt="Chanor Hero Image"
            sizes="(max-width: 640px) 100vw, 378px"
          />
        </div>
      </div>

      <ul className="flex flex-wrap justify-between gap-y-10 text-center">
        {[
          { value: "500k+", label: "Active Users" },
          { value: "1M+", label: "Transactions Processed" },
          { value: "120M+", label: "Total Transaction Value" },
          { value: "99%", label: "Customer Satisfaction" },
        ].map((stat, index) => (
          <li key={index} className="w-[48%] md:w-[23%]">
            <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-chanor-orange ">
              {stat.value}
            </h2>
            <p className="text-sm md:text-base text-neutral-black/80">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
