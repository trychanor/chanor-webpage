"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "./ui/Container";
import { X } from "lucide-react";
import Link from "next/link";
import { useUnavailableToast } from "./ToastProvider";

const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  { label: "Company", href: "#" },
  { label: "Community", href: "#" },
  { label: "Support", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const showUnavailableToast = useUnavailableToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-30 px-6 md:px-10 transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="flex lg:h-23 max-w-298.75 mx-auto items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/chanorlogo.svg"
            alt="Chanor"
            className="scale-200 pb-3"
            width={120}
            height={40}
            sizes="144px"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 lg:gap-16 text-[#4D4D4E] font-semibold">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-lg hover:text-[#EC5C28] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button
          type="button"
          onClick={() => showUnavailableToast("join")}
          className="text-base leading-5 -tracking-[0.25px] hidden lg:block px-6 py-3 bg-[#EC5C28] text-white rounded-full hover:bg-[#d94f1f] transition-colors duration-200"
        >
          Join Chanor
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700 hover:text-[#EC5C28] transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Image
              src="/menu-right.svg"
              alt="Menu"
              width={28}
              height={28}
              sizes="28px"
            />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Container className="py-4 border-t border-gray-100">
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 font-bold py-2 hover:text-[#EC5C28] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                showUnavailableToast("join");
                setIsMenuOpen(false);
              }}
              className="mt-2 w-full px-5 py-3 bg-[#EC5C28] text-white rounded-full font-semibold hover:bg-[#d94f1f] transition-colors duration-300 cursor-pointer"
            >
              Join Chanor
            </button>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Header;
