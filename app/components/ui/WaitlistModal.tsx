"use client";
import { X } from "lucide-react";
import { useState } from "react";

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 md:p-10 relative">
          <button
            className="absolute top-4 right-4 text-neutral-black text-lg font-bold cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X />
          </button>

          {/* Modal Content */}
          <h2 className="text-2xl md:text-[32px] font-semibold text-neutral-black leading-tight -tracking-[0.25px] mb-2.5 md:mb-5">
            Be one of Chanor&apos;s Earliest Supporters
          </h2>
          <p className="text-neutral-black/80 text-base font-medium -tracking-[0.25px] mb-2.5 md:mb-5">
            Chanor is building a smarter fintech experience, and we&apos;re
            launching very soon.
            <br />
            Some features on this page are still in progress, but you can secure
            your spot early.
            <br /> <br />
            Join our waitlist and be the first to know when Chanor goes live.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full text-neutral-black px-4 py-3 rounded-md border border-neutral-black/20 outline-none"
            />
            <button
              type="submit"
              className="bg-chanor-orange hover:bg-orange-600 text-white leading-6 font-semibold px-6 py-3 rounded-[56px] transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Join Chanor Early
            </button>
          </form>
          <span
            className="block text-sm text-chanor-orange underline text-center mt-2 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Continue to view website
          </span>
        </div>
      </div>
    </>
  );
}
