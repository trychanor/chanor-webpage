import { Container } from "@/app/components/ui/Container";
import { Lightbulb, Shield, ShieldPlus } from "lucide-react";

export default function ChanorFoundation() {
  return (
    <Container className="bg-chanor-orange/10 py-[75px] md:py-[100px]">
      <h2 className="text-2xl md:text-[2rem] md:leading-6 -tracking-[0.5px] font-semibold text-neutral-black text-center mb-8">
        The Foundation of Chanor
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 items-start">
        <li className="w-full md:max-w-87.5 bg-white rounded-2xl p-5 md:py-6 md:px-3">
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex justify-center items-center w-12 h-12 bg-chanor-orange/10 rounded-full">
              <Lightbulb className="w-8 h-8 text-neutral-black" />
            </div>
          </div>
          <h2 className="text-xl leading-6 -tracking-[0.5px] font-semibold text-neutral-black py-4 text-center md:text-start">
            Innovation
          </h2>
          <p className="text-base leading-6 -tracking-[0.5px] text-neutral-black/80 text-center md:text-start">
            Bringing modern technology like voice intelligence into everyday
            finance.
          </p>
        </li>
        <li className="w-full md:max-w-87.5 bg-white rounded-2xl p-5 md:py-6 md:px-3">
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex justify-center items-center w-12 h-12 bg-chanor-orange/10 rounded-full">
              <Shield className="w-8 h-8 text-neutral-black" />
            </div>
          </div>
          <h2 className="text-xl leading-6 -tracking-[0.5px] font-semibold text-neutral-black py-4 text-center md:text-start">
            Trust
          </h2>
          <p className="text-base leading-6 -tracking-[0.5px] text-neutral-black/80 text-center md:text-start">
            Providing transparent and reliable financial services.
          </p>
        </li>
        <li className="w-full md:max-w-87.5 bg-white rounded-2xl p-5 md:py-6 md:px-3">
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex justify-center items-center w-12 h-12 bg-chanor-orange/10 rounded-full">
              <ShieldPlus className="w-8 h-8 text-neutral-black" />
            </div>
          </div>
          <h2 className="text-xl leading-6 -tracking-[0.5px] font-semibold text-neutral-black py-4 text-center md:text-start">
            Security
          </h2>
          <p className="text-base leading-6 -tracking-[0.5px] text-neutral-black/80 text-center md:text-start">
            Protecting your money and data with advanced systems.
          </p>
        </li>
      </ul>
    </Container>
  );
}
