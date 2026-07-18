"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Josefin_Sans, DM_Sans } from "next/font/google";
import {
  MapPin,
  Phone,
  Star,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// ------ Framer Motion utility component ------
function FadeInSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// -------------------------------------------------
// Reusable Image component using next/image with fill
function GalleryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-64 sm:h-72 lg:h-80 border border-[#D4C5B2] rounded-[2px] overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
    </div>
  );
}

// ------ Data ------
const services = [
  "Trendy T-shirts",
  "Stylish Jeans",
  "Fashionable Shirts",
  "Latest Apparel Collections",
  "Quality Casual Wear",
];

const images = [
  {
    src: "https://content.jdmagicbox.com/v2/comp/delhi/b1/011pxx11.xx11.240330100156.w9b1/catalogue/aarav-fashion-shahdara-delhi-men-readymade-garment-retailers-7go7rpowwl.jpg",
    alt: "Aarav Fashion store entrance",
  },
  {
    src: "https://content.jdmagicbox.com/v2/comp/delhi/b1/011pxx11.xx11.240330100156.w9b1/catalogue/aarav-fashion-shahdara-delhi-men-readymade-garment-retailers-x5sues2t40-250.jpg",
    alt: "Inside Aarav Fashion",
  },
  {
    src: "https://content.jdmagicbox.com/v2/comp/delhi/b1/011pxx11.xx11.240330100156.w9b1/catalogue/aarav-fashion-shahdara-delhi-men-readymade-garment-retailers-skw5qcybep-250.jpg",
    alt: "Apparel display at Aarav Fashion",
  },
  {
    src: "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=412641294222027",
    alt: "Aarav Fashion Facebook image",
  },
  {
    src: "https://img.magicpin.com/8502786_store_images_3.jpg",
    alt: "Collections at Aarav Fashion",
  },
];

const reviews = [
  {
    stars: 5,
    text: "This store is one of the best store on mandoli road and they have so many collections in terms of t shirts jeans shirts etc. Plz Must visit for best quality and price ☺️",
    author: "Customer",
    time: "2 years ago",
  },
  {
    stars: 4,
    text: "Nice collection but expensive also..",
    author: "Customer",
    time: "a year ago",
  },
  {
    stars: 5,
    text: "We have ordered t shirt and we loved it region able price",
    author: "Customer",
    time: "2 weeks ago",
  },
  {
    stars: 5,
    text: "",
    author: "Customer",
    time: "a year ago",
  },
  {
    stars: 5,
    text: "",
    author: "Customer",
    time: "a year ago",
  },
];

export default function Home() {
  const phoneNumber = "08851362300";
  const address =
    "Main Mandoli Rd, opposite ADARSH UPBHOKTA BHANDAR, Ram Nagar, Shahdara, Delhi, 110032, India";

  return (
    <main
      className={`${dmSans.className} min-h-screen bg-[#F7F3EE] text-[#1A2C4A]`}
    >
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://content.jdmagicbox.com/v2/comp/delhi/b1/011pxx11.xx11.240330100156.w9b1/catalogue/aarav-fashion-shahdara-delhi-men-readymade-garment-retailers-7go7rpowwl.jpg"
            alt="Aarav Fashion store"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay - dark indigo with chalky warmth */}
          <div className="absolute inset-0 bg-[#1A2C4A]/80 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${josefin.className} text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white drop-shadow-lg`}
          >
            Aarav Fashion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-[#D4C5B2] max-w-xl"
          >
            Your Destination for Trendy Fashion & Quality Apparel
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          >
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-[#F2C94C] text-[#1A2C4A] font-semibold px-6 py-3 rounded-[2px] shadow-[0_1px_4px_rgba(26,44,74,0.08)] hover:brightness-105 transition-all duration-200"
            >
              <Phone size={18} />
              Call Now
            </a>
            <div className="flex items-center gap-1 text-[#F7F3EE] bg-black/20 px-3 py-1 rounded-[2px]">
              <Star size={16} fill="#F2C94C" stroke="none" />
              <span className="font-medium">4.9</span>
              <span className="text-sm opacity-80">(7 reviews)</span>
            </div>
          </motion.div>
        </div>

        {/* Measuring tape accent ribbon at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#F2C94C] opacity-90"></div>
      </section>

      {/* ---------- ABOUT / SERVICES ---------- */}
      <FadeInSection className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2
            className={`${josefin.className} text-3xl md:text-4xl font-light text-[#1A2C4A]`}
          >
            What We Offer
          </h2>
          <p className="mt-3 text-[#5A6275] max-w-lg mx-auto">
            Step into our store and discover the latest trends in casual wear,
            tailored for everyday comfort and style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-5 border border-[#D4C5B2] rounded-[2px] bg-white shadow-[0_1px_4px_rgba(26,44,74,0.06)]"
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#F2C94C]/20 rounded-[2px]">
                <CheckCircle size={20} className="text-[#C2956B]" />
              </div>
              <span className="text-[#1A2C4A] font-medium text-sm md:text-base">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
      </FadeInSection>

      {/* ---------- GALLERY ---------- */}
      <FadeInSection className="py-16 md:py-24 bg-white/50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2
            className={`${josefin.className} text-3xl md:text-4xl font-light text-center text-[#1A2C4A] mb-12`}
          >
            Inside Our Shop
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <GalleryImage key={idx} src={img.src} alt={img.alt} />
            ))}
          </div>

          {/* Small indicator: tailor’s chalk marks */}
          <div className="mt-8 flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-2 h-2 bg-[#F2C94C] rounded-full opacity-50"
              ></span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ---------- CUSTOMER REVIEWS ---------- */}
      <FadeInSection className="py-16 md:py-24 px-6 md:px-12 max-w-6xl mx-auto">
        <h2
          className={`${josefin.className} text-3xl md:text-4xl font-light text-center text-[#1A2C4A] mb-12`}
        >
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-[#D4C5B2] rounded-[2px] p-6 bg-white shadow-[0_1px_4px_rgba(26,44,74,0.06)] flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.stars ? "#F2C94C" : "none"}
                    stroke={i < review.stars ? "#F2C94C" : "#D4C5B2"}
                    className="opacity-90"
                  />
                ))}
              </div>

              {/* Review text */}
              {review.text ? (
                <p className="text-[#1A2C4A] text-sm md:text-base leading-relaxed flex-grow italic border-l-2 border-[#F2C94C] pl-3">
                  “{review.text}”
                </p>
              ) : (
                <div className="flex-grow flex items-center text-[#5A6275] text-sm italic">
                  No written review, but happy with our service.
                </div>
              )}

              {/* Author and time */}
              <div className="mt-4 flex justify-between items-center text-xs text-[#5A6275]">
                <span className="font-medium text-[#1A2C4A]">
                  {review.author}
                </span>
                <span>{review.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show total rating */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-sm text-[#5A6275]">
          <span className="bg-[#1A2C4A] text-white px-2 py-0.5 rounded-[2px] text-xs font-bold">
            Google
          </span>
          <span>4.9 out of 5 stars</span>
          <span>·</span>
          <span>7 reviews</span>
        </div>
      </FadeInSection>

      {/* ---------- CONTACT & LOCATION ---------- */}
      <FadeInSection className="py-16 md:py-24 bg-[#1A2C4A] text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2
            className={`${josefin.className} text-3xl md:text-4xl font-light text-center mb-12`}
          >
            Visit Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Map placeholder / something fun? We'll just use address card */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-[#F2C94C] mt-1" />
                <div>
                  <p className="font-medium text-[#F7F3EE]">Address</p>
                  <p className="text-sm text-[#D4C5B2] mt-1 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={20} className="text-[#F2C94C]" />
                <div>
                  <p className="font-medium text-[#F7F3EE]">Phone</p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-sm text-[#D4C5B2] hover:text-[#F2C94C] transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-[#F2C94C] text-[#1A2C4A] font-semibold px-6 py-3 rounded-[2px] shadow-[0_1px_4px_rgba(0,0,0,0.2)] hover:brightness-105 transition-all"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* A image from gallery to show location */}
            <div className="relative h-64 sm:h-80 border border-[#D4C5B2] rounded-[2px] overflow-hidden">
              <Image
                src="https://content.jdmagicbox.com/v2/comp/delhi/b1/011pxx11.xx11.240330100156.w9b1/catalogue/aarav-fashion-shahdara-delhi-men-readymade-garment-retailers-x5sues2t40-250.jpg"
                alt="Aarav Fashion store view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-[#D4C5B2] bg-[#F7F3EE] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#5A6275]">
          <p>
            &copy; {new Date().getFullYear()} Aarav Fashion. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Designed with the warmth of Shahdara</span>
            <span className="text-[#F2C94C]">✦</span>
          </div>
        </div>
      </footer>
    </main>
  );
}