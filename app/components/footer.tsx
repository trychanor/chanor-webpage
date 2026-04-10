"use client";

import { Facebook, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import { Container } from "./ui/Container";
import Link from "next/link";
import { useUnavailableToast } from "./ToastProvider";

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Contact us", href: "/contact" },
      { label: "How it works", href: "#" },
      { label: "Legal notice", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of use", href: "#" },
    ],
  },
  {
    title: "Products/Features",
    links: [
      { label: "Virtual cards", href: "#" },
      { label: "Voice Transfers", href: "#" },
      { label: "Airtime & Data Purchase", href: "#" },
      { label: "Subscription & Bill Payments", href: "#" },
      { label: "Merchant Business Wallet", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "User documentation", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Become a Field Agent", href: "/field-agent" },
    ],
  },
];

export default function FooterCTASection() {
  const showUnavailableToast = useUnavailableToast();

  return (
    <>
      <footer className="bg-white py-[75px] md:py-[100px]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 space-y-2">
              {/* Logo */}
              <div>
                <Image
                  src="/chanorlogo.svg"
                  alt="Chanor Logo"
                  width={120}
                  height={40}
                  sizes="120px"
                  className="scale-200"
                />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Say it, Send it, Done.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chanor is Nigerian first voice-powered banking experience — built
                to make everyday money moments effortless. Send money, pay
                bills, and top up; all by speaking.
              </p>
              <p className="text-sm text-gray-600">
                Proudly built in Nigeria, for Nigerians.
              </p>
              <div className="mt-4 flex gap-4">
                <button
                  type="button"
                  onClick={() => showUnavailableToast("google-play")}
                  className="flex items-center gap-1.5 md:gap-3 bg-black text-white py-1 px-1.5 md:py-2 md:px-4 rounded-lg"
                >
                  <Image
                    src="/icon-google-playstore.png"
                    alt="Google Play Logo"
                    width={32}
                    height={32}
                    sizes="32px"
                  />
                  <div className="text-left text-sm leading-tight">
                    <span className="text-xs">GET IT ON</span> <br />
                    <span className="font-medium text-base">Google Play</span>
                  </div>
                </button>
                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {FOOTER_SECTIONS.map((section, index) => (
              <div key={index} className="space-y-2 ">
                <h3 className="font-bold text-gray-900">{section.title}</h3>
                <ul className="space-y-1.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Chanor. All rights reserved
              </p>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Cookies Policy
                </Link>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-6 leading-relaxed">
              Chanor is not a bank. We operate as a Wallet-as-a-Service (WaaS)
              platform, working with licensed financial service partners who
              provide the regulated wallet and payment infrastructure. Chanor
              is operated by a registered brand collaborator, legally
              incorporated in Nigeria, and licensed in partnership with our financial partners.
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
