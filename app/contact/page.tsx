import type { Metadata } from "next";
import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import CTASection from "../components/CTASection";
import { ChevronRight } from "lucide-react";
import { Container } from "../components/ui/Container";

// FIXME: CHANOR CONTACT INFO AND SOCIAL LINKS

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Contact Chanor for customer support, business inquiries, feedback or help with your account. We’re always ready to assist you with fast, reliable support.",

  keywords: [
    "Contact Chanor",
    "Chanor support",
    "Chanor customer service",
    "Fintech support Nigeria",
    "Contact fintech company",
    "Chanor help",
    "Digital banking support",
    "Voice banking support",
  ],

  openGraph: {
    title: "Contact Chanor | Customer Support & Help",
    description:
      "Need help or have questions? Contact Chanor for fast customer support, business inquiries, and assistance with your digital banking needs.",
    url: "https://trychanor.com/contact",
    siteName: "Chanor",
    images: [
      {
        url: "https://trychanor.com/chanor-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Chanor Support",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Chanor | Customer Support",
    description:
      "Get in touch with Chanor for support, feedback, or business inquiries.",
    images: ["https://trychanor.com/chanor-og.jpeg"],
  },

  alternates: {
    canonical: "https://trychanor.com/contact",
  },
};

export default function page() {
  return (
    <>
      <Container className="lg:pt-12.5 pb-18.75 lg:pb-25">
        <div className="flex flex-col justify-center items-center text-center mb-[61px]">
          <h1 className="text-[2rem] lg:text-[44px] lg:leading-12 -tracking-[0.5px] text-neutral-black font-bold max-w-[828px] mx-auto mb-6">
            Contact us
          </h1>
          <p className="text-base md:text-xl leading-6 -tracking-[0.25px] text-neutral-black/80 max-w-[906px] mx-auto mb-6">
            Even though everything we do lives in the app, our customers are
            never left on their own. You’ll always find what you need right at
            your fingertips, and whenever you need support or just feel like
            reaching out, we’re here and ready to help.
          </p>
          <Image
            src="/contact/contact-us-illustration.png"
            width={551}
            height={311}
            alt="Contact Us illustration"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-start">
          <form className="grid gap-3 w-full md:w-[65%]">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-base leading-6 -tracking-[0.25px] text-neutral-black"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                placeholder="Enter Your Email"
                className="w-full md:max-w-[550px] text-[#838799] bg-[#F6F7F9] px-4 py-3 placeholder:text-[#838799] placeholder:font-light outline-none rounded-sm disabled:cursor-not-allowed"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="feedback"
                className="text-base leading-6 -tracking-[0.25px] text-neutral-black"
              >
                Enter your feedback
              </label>
              <textarea
                name="feedback"
                id="feedback"
                disabled={true}
                placeholder="Enter Message"
                className="w-full md:max-w-[550px] h-[120px] text-[#838799] px-4 py-3 bg-[#F6F7F9] placeholder:text-[#838799] placeholder:font-light outline-none rounded-sm disabled:cursor-not-allowed"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={true}
              className="max-w-[550px] w-full md:w-auto h-12 bg-chanor-orange text-white rounded-2xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out disabled:cursor-not-allowed"
            >
              Send Feedback
            </button>
          </form>

          <div className="mt-6 md:mt-0 md:ml-6 flex flex-col max-w-[297px] mx-auto text-chanor-orange items-center  md:items-start text-center md:text-left gap-8">
            <a
              href="tel:+"
              className="inline-flex items-center gap-1 underline"
            >
              Call: 09015759875 <ChevronRight className="inline" />
            </a>
            <a
              href="mailto:support@chanor.ng"
              className="inline-flex items-center gap-1 underline mt-2"
            >
              Support: support@chanor.ng <ChevronRight className="inline" />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline mt-2"
            >
              Legal: legal@chanor.com <ChevronRight className="inline" />
            </a>
            <div className="flex justify-between w-full">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chanor-orange hover:text-orange-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chanor-orange hover:text-orange-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chanor-orange hover:text-orange-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chanor-orange hover:text-orange-600 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <CTASection />
    </>
  );
}
