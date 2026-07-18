"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Raleway, Work_Sans } from "next/font/google";
import { Star, Phone, MapPin, Sparkles, ShoppingBag, Tag, Heart, Scissors } from "lucide-react";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

// Utility components
const FadeInOnScroll = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "text-[#C2726A] fill-[#C2726A]" : "text-[#E9E2DC]"}
        />
      ))}
    </div>
  );
};

// Reusable button style
const buttonClasses = `inline-flex items-center justify-center bg-[#C2726A] hover:bg-[#A35F4D] text-[#FDF8F2] font-bold rounded-[4px] py-3 px-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#C2726A] focus:ring-offset-2`;

const services = [
  { icon: Sparkles, title: "Latest Fashion Collections" },
  { icon: ShoppingBag, title: "Ethnic & Western Wear" },
  { icon: Scissors, title: "Personalized Styling Assistance" },
  { icon: Heart, title: "Comfortable & Quality Fabrics" },
  { icon: Tag, title: "Seasonal Offers & Discounts" },
];

const reviews = [
  {
    rating: 5,
    text: "The collection is very nice and latest. Fabric is very comfortable Must buy",
    time: "a year ago",
  },
  {
    rating: 4,
    text: "Whenever I've gone, I've bought something. Best place for shopping. It has a cooperative Staff,helped me in everything and provided me everything that I was looking for. Nd They also provide good offer,Must Go.",
    time: "5 years ago",
  },
  {
    rating: 5,
    text: "All dresses available over here are of reasonable price.. And you will b guided for the dresses which will b suitable for you.. Best Services",
    time: "5 years ago",
  },
  {
    rating: 5,
    text: "Very nice and latest collection with good stuff. I'm a regular customer and I can say everytime they attend the customer very politely and all the staff is also well behaved.",
    time: "5 years ago",
  },
  {
    rating: 5,
    text: "I always buy ethnic and western wear from jain sales... quality, variety and price everything is just superb..",
    time: "2 years ago",
  },
];

const images = [
  "https://lh3.googleusercontent.com/SuMqXYuVPyZm7eNpzVOpD6fQ-20Bh9vJKCRd_Yrh3NUXV2njF9S4za9Xb-AMKnKAO6_uTSflWFr53yaR4LxywlXbEV_H=w300-rw",
  "https://d1k13df5m14swc.cloudfront.net/7e89f2ac-a394-4980-92c5-1da969614dd3zoom.jpg",
  "https://www.philipdavidcompany.com/wp-content/uploads/2026/JILZARAH-2026%20Outlet%20Catalog-cover.jpg",
  "https://images.squarespace-cdn.com/content/v1/5c3e86153e2d094cd36322ab/86c3b40b-fb1e-469f-9430-715f6a3a8ee3/Sharanya-Chola-AACA.jpg",
  "https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Hiral-Shah_Headshot_231019-640x800.jpg",
];

export default function Page() {
  return (
    <div
      className={`${workSans.className} bg-[#FCFAF8] text-[#2A2118]`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5EFE8] border-b border-[#E9E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between h-16">
          <Link href="/" className={`${raleway.className} text-xl font-bold text-[#2D3B5A]`}>
            Jain Sales
          </Link>
          <a href="tel:+918802692420" className={buttonClasses}>
            <Phone size={18} className="mr-2" /> 088026 92420
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <FadeInOnScroll className="lg:col-span-5 relative aspect-[4/5] rounded-[4px] overflow-hidden border border-[#E9E2DC] shadow-[0_1px_3px_rgba(45,35,21,0.05)]">
          <Image
            src={images[0]}
            alt="Latest fashion collection display"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          {/* Decorative pleat fold border */}
          <div className="absolute inset-0 border-2 border-[#2D3B5A] opacity-10 rounded-[4px] pointer-events-none" />
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1} className="lg:col-span-7 lg:pl-8">
          <h1 className={`${raleway.className} text-4xl md:text-5xl font-bold text-[#2D3B5A] leading-tight mb-4`}>
            Discover the Latest Trends in Women&apos;s Fashion & Ethnic Wear
          </h1>
          <p className="text-lg text-[#7A6D6A] max-w-prose mb-8">
            At Jain Sales, we bring you carefully curated collections that blend modern styles with timeless ethnic elegance. 
            Step into our Shahdara store or explore our range online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className={buttonClasses}>
              Explore Collections
            </a>
            <a
              href="https://maps.google.com/?q=Jain+Sales+Swami+Amardev+Marg+Bhola+Nath+Nagar+Pathan+Pura+Shahdara+Delhi+110032"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#2D3B5A] text-[#2D3B5A] hover:bg-[#2D3B5A] hover:text-[#FCFAF8] font-bold rounded-[4px] py-3 px-4 transition-colors"
            >
              <MapPin size={18} className="mr-2" /> Visit Store
            </a>
          </div>
        </FadeInOnScroll>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-[#F5EFE8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className={`${raleway.className} text-3xl md:text-4xl font-bold text-[#2D3B5A]`}>
              What We Offer
            </h2>
            <p className="text-[#7A6D6A] mt-3 max-w-xl mx-auto">
              From daily wear to festive collections, we ensure quality, comfort, and style.
            </p>
          </FadeInOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <FadeInOnScroll key={index} delay={index * 0.05}>
                <div className="bg-[#FCFAF8] border border-[#E9E2DC] rounded-[4px] p-4 shadow-[0_1px_3px_rgba(45,35,21,0.05)] hover:shadow-[0_4px_12px_rgba(45,35,21,0.08)] transition-shadow text-center flex flex-col items-center gap-3">
                  <service.icon size={28} className="text-[#C2726A]" />
                  <span className="text-sm font-medium text-[#2A2118] leading-snug">{service.title}</span>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
        <FadeInOnScroll className="text-center mb-12">
          <h2 className={`${raleway.className} text-3xl md:text-4xl font-bold text-[#2D3B5A]`}>
            Our Collection
          </h2>
          <p className="text-[#7A6D6A] mt-3 max-w-lg mx-auto">
            A glimpse of what awaits you at Jain Sales — fresh arrivals and timeless staples.
          </p>
        </FadeInOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.slice(1, 5).map((src, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="relative aspect-[3/4] rounded-[4px] overflow-hidden border border-[#E9E2DC] shadow-[0_2px_6px_rgba(45,35,21,0.04)] hover:shadow-[0_4px_12px_rgba(45,35,21,0.08)] transition-shadow bg-[#F5EFE8]">
                <Image
                  src={src}
                  alt={`Collection item ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-[#2D3B5A] py-16 text-[#FCFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <FadeInOnScroll className="text-center mb-12">
            <h2 className={`${raleway.className} text-3xl md:text-4xl font-bold text-white`}>
              What Our Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <StarRating rating={5} />
              <span className="text-sm text-[#F5EFE8]">4.8 (42 reviews)</span>
            </div>
          </FadeInOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <FadeInOnScroll key={idx} delay={idx * 0.05}>
                <blockquote className="bg-[#F5EFE8] text-[#2A2118] rounded-[4px] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.08)] flex flex-col h-full">
                  <StarRating rating={review.rating} />
                  <p className="mt-3 text-sm leading-relaxed flex-1">{review.text}</p>
                  <footer className="mt-4 text-xs text-[#7A6D6A] border-t border-[#E9E2DC] pt-3">
                    — Customer, {review.time}
                  </footer>
                </blockquote>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="bg-[#F5EFE8] border-t border-[#E9E2DC] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeInOnScroll>
            <h3 className={`${raleway.className} text-xl font-bold text-[#2D3B5A] mb-3`}>Jain Sales</h3>
            <p className="text-sm text-[#7A6D6A]">
              Discover the latest women’s fashion and ethnic wear in Shahdara, Delhi. Quality fabrics, comfortable styles, 
              and personalized assistance.
            </p>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.1}>
            <h4 className={`${raleway.className} font-semibold text-[#2A2118] mb-2`}>Visit Us</h4>
            <address className="not-italic text-sm text-[#7A6D6A] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[#C2726A] flex-shrink-0" />
                Swami Amardev Marg, Bhola Nath Nagar, Pathan Pura, Shahdara, Delhi, 110032
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-[#C2726A]" />
                <a href="tel:+918802692420" className="hover:text-[#C2726A] underline underline-offset-2">
                  088026 92420
                </a>
              </p>
            </address>
          </FadeInOnScroll>
          <FadeInOnScroll delay={0.2}>
            <h4 className={`${raleway.className} font-semibold text-[#2A2118] mb-2`}>Store Hours</h4>
            <p className="text-sm text-[#7A6D6A]">
              Mon – Sat: 10:30 AM – 8:30 PM<br />
              Sun: 11:00 AM – 7:00 PM
            </p>
            <div className="mt-4">
              <a href="#services" className={buttonClasses}>
                View Collections
              </a>
            </div>
          </FadeInOnScroll>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 mt-8 pt-6 border-t border-[#E9E2DC] text-center text-xs text-[#7A6D6A]">
          © {new Date().getFullYear()} Jain Sales. All rights reserved.
        </div>
      </footer>
    </div>
  );
}