import { Container } from "@/app/components/ui/Container";
import { Search } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="">
      <Container className="pt-8 md:pt-12 pb-12 md:pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#EF5A22]/10 rounded-2xl mb-8">
            <span className="bg-white p-2 rounded-lg text-base leading-6 -tracking-[0.25px] text-neutral-black cursor-pointer">
              Chanor
            </span>
            <span className="text-base leading-6 -tracking-[0.25px] text-neutral-black cursor-pointer">
              Blog
            </span>
          </div>{" "}
          <h1 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-neutral-black leading-tight mb-4">
            Insights, Guides & Updates.
          </h1>
          <p className="text-neutral-black/70 text-base md:text-lg mb-8">
           Stay updated with the latest in payments, and digital <br /> finance.
          </p>
          {/* Search Bar - Visual Only */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-5 pl-12 pr-24 rounded-xl border border-gray-200 bg-white text-neutral-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-chanor-orange/20 focus:border-chanor-orange transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-3 bg-chanor-orange text-white text-sm font-medium rounded-md hover:bg-orange-600 transition-colors cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
