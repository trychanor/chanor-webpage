"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CAROUSEL_IMAGES = [
  {
    id: 1,
    url: "/home/chanor-hero-1.jpg",
    alt: "Person in marketplace",
  },
  {
    id: 2,
    url: "/home/chanor-hero-2.jpg",
    alt: "Business owner",
  },
  {
    id: 3,
    url: "/home/chanor-hero-3.jpg",
    alt: "Market vendor",
  },
];

export default function SmoothImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play: advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
        setTimeout(() => setIsAnimating(false), 800);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);

    setTimeout(() => setIsAnimating(false), 800);
  };

  const tinyBlur =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZWZhZjgiIC8+PC9zdmc+";

  return (
    <div className="w-full overflow-hidden">
      {/* Carousel Container - All 3 images in fixed positions */}
      <div className="relative flex flex-row items-stretch gap-3 sm:gap-4 h-[220px] sm:h-[280px] md:h-[350px] lg:h-[400px]">
        {CAROUSEL_IMAGES.map((image, idx) => {
          const isActive = idx === activeIndex;
          
          return (
            <motion.div
              key={image.id}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
              animate={{
                flex: isActive ? 3 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
              }}
            >
              {/* Image */}
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={tinyBlur}
                priority={true}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 35vw"
              />

              {/* Arrow Button - Only on active image */}
              {isActive && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleNext}
                  disabled={isAnimating}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 lg:bottom-6 lg:right-6 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white p-2 sm:p-3 lg:p-4 rounded-full transition-colors duration-300 disabled:cursor-not-allowed z-10"
                  aria-label="Next image"
                >
                  <ArrowRight
                    className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
                    strokeWidth={2.5}
                  />
                </motion.button>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6 lg:mt-8">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <motion.button
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.4 }}
            onClick={() => {
              if (isAnimating || idx === activeIndex) return;
              setIsAnimating(true);
              setActiveIndex(idx);
              setTimeout(() => setIsAnimating(false), 800);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "w-8 bg-orange-500"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}