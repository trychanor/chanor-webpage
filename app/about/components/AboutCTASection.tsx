import { Container } from "@/app/components/ui/Container";
import Image from "next/image";

export default function AboutCTASection() {
  return (
    <Container className="pt-18.75 md:pt-25">
      <div className="flex lg:flex-row flex-col justify-between bg-raba-orange rounded-3xl px-6 md:px-14 pt-[50px] md:pt-[100px]">
        <div className="lg:max-w-[480px] lg:pb-14">
          <h2 className="text-xl md:text-[2rem] -tracking-[0.5px] font-semibold text-white mb-4 md:mb-8">
            Join Chanor Future of digital finance
          </h2>
          <p className="text-base text-white leading-8 -tracking-[0.25px] font-light mb-4">
            We believe the future of payments is natural, fast, intuitive, and
            human-centered. With Chanor Voice Intelligence, we’re
            creating a world where technology works with you, not against you.
            <br />
            <br />
            This is just the beginning.
            <br />
            Join us as we shape the future of smart digital payments.
          </p>
          <button className="text-base -tracking-[0.25px] leading-6 text-black font-semibold bg-white py-3 px-6 rounded-lg">
            Get in Touch
          </button>
        </div>
        <Image
          src="/about/about-device-mockup.png"
          width={500}
          height={500}
          alt="xup"
          className="mx-auto lg:mx-0"
          sizes="(max-width: 1024px) 100vw, 500px"
        />
      </div>
    </Container>
  );
}
