import { Container } from "@/app/components/ui/Container";
import Image from "next/image";

export default function Steps() {
  const HOW_IT_WORKS = [
    {
      illustration: "/field-agent/chanor-agent-step-1.jpg",
      heading: "Apply Online",
      description: "Fill the form and upload your ID",
    },
    {
      illustration: "/field-agent/chanor-agent-step-2.jpg",
      heading: "Get Verified",
      description: "Our team reviews and approves your profile",
    },
    {
      illustration: "/field-agent/chanor-agent-step-3.jpg",
      heading: "Start Earning",
      description:
        "Begin onboarding customers and managing POS stands in your area",
    },
  ];

  return (
    <Container className="lg:pt-12.5 pb-18.75 md:pb-25">
      <div className="text-center">
        <h2 className="text-2xl md:text-[32px] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-10 md:mb-16">
          How It Works (Simple 3-Step Process)
        </h2>

        <ul className="flex flex-col gap-[75px] md:gap-[100px]">
          {HOW_IT_WORKS.map((step, index) => (
            <li
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 ${
                index % 2 === 1 ? "md:justify-between md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`flex-1 ${
                  index % 2 === 1 ? "lg:pl-12" : "lg:pr-12"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {index + 1}. {step.heading}
                </h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>

              <div
                className={`flex-1 w-full ${
                  index % 2 === 1 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <div className="relative w-full h-[420px] overflow-hidden rounded-lg">
                  <Image
                    src={step.illustration}
                    alt={step.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
