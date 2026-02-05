import Image from "next/image";
import { Container } from "@/app/components/ui/Container";
import { Search } from "lucide-react";


export default function BlogCTA() {
  return (
    <Container className="pb-12 md:pb-16">
      <section className="bg-chanor-orange py-12 md:py-16 rounded-lg">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get More Stories Like This
              </h2>
              <p className="text-white/90 mb-6">
                Subscribe to our newsletter and stay updated with the latest
                news and guides.
              </p>

              {/* Email Input - Visual Only */}
              <div className="relative max-w-md ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full px-5 py-5 pl-12  rounded-xl border border-white bg-chanor-orange text-neutral-black placeholder:text-gray-200 focus:outline-none focus:ring-2 focus:ring-chanor-orange/20 focus:border-chanor-orange transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-chanor-orange text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors">
                  Enter Email
                </button>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/mobile-device-mockup.svg"
                alt="Newsletter illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>
    </Container>
  );
}
