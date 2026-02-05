import { Container } from "@/app/components/ui/Container";
import ChanorTeamDiscussion from "@/public/about/chanor-team-discussion.jpg";
import Image from "next/image";

export default function WhyChanor() {
  return (
    <Container className="py-18.75 md:py-25 bg-chanor-orange/10">
      <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="w-full max-w-135 mx-auto">
          <Image
            src={ChanorTeamDiscussion}
            width={500}
            height={350}
            placeholder="blur"
            alt="Chanor Team Discussion"
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 1024px) 100vw, 540px"
          />
        </div>
        <div className="lg:max-w-156.25 text-left">
          <h2 className="text-2xl md:text-3xl lg:text-[2rem] leading-tight -tracking-[0.5px] font-semibold text-neutral-black mb-4">
            Why We Built Chanor
          </h2>
          <p className="text-base leading-relaxed -tracking-[0.25px] text-neutral-black/80 mb-4">
            From long steps to confusing interfaces, people were still
            struggling to perform basic actions like sending money, checking
            balances, or paying bills. We believed digital payments should feel
            effortless, not overwhelming.
            <br />
            <br />
            So we created Chanor, a wallet that listens, understands, and helps
            you take action instantly. By combining clean design, secure
            systems, and intelligent tools, we built a platform where modern
            finance feels natural and accessible.
          </p>
          <div className="flex justify-start">
            <button className="mt-2 inline-block text-base md:text-[16px] leading-6 -tracking-[0.25px] text-white bg-chanor-orange px-6 py-3 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
