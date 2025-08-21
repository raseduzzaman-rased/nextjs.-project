"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/banners/1.jpg",
    title: "Smartphones & Gadgets",
    description: "Discover the latest smartphones, wearables and tech accessories.",
  },
  {
    id: 2,
    image: "/images/banners/2.jpg",
    title: "Innovative Tech",
    description: "Upgrade your life with smart gadgets designed for modern living.",
  },
  {
    id: 3,
    image: "/images/banners/3.jpg",
    title: "Gaming Gear",
    description: "Explore top-notch gaming laptops, consoles, and accessories.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden  shadow-lg">
      {/*  Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } transition-opacity duration-700`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
            <motion.h2
              key={slide.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold mb-4"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              key={slide.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-lg max-w-2xl mb-6"
            >
              {slide.description}
            </motion.p>

            {/*  Button */}
            <button
              onClick={() => router.push("/products")}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg shadow-md"
            >
              Explore Products
            </button>
          </div>
        </motion.div>
      ))}

      {/*  Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
      >
        <ChevronLeft size={28} />
      </button>

      {/*  Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white z-20"
      >
        <ChevronRight size={28} />
      </button>

      {/*  Navigation Dots */}
      <div className="absolute bottom-5 flex justify-center w-full space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
