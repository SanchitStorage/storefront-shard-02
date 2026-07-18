"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Neuton, Work_Sans } from "next/font/google";
import { Star, Phone, MapPin } from "lucide-react";

const neuton = Neuton({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-neuton",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const reviews = [
  {
    text: "Good place to purchase clothes for every age at good price. You will find many varieties and fabrics here.Staff is also cooperative.I visited here to purchase kurta for myself. The sales person served me about 25-30 choices with different colours and fabrics. The best part about this shop is their price range is very pocket friendly..",
    time: "4 years ago",
  },
  {
    text: "Very good quality clothes. Nature of staff is very polite as well.Excellent service and also reasonable price.100% recommended for everyone. Don't think much about it just walk in the store and experience it yourself.",
    time: "4 years ago",
  },
  {
    text: "Our go to family wear shop best clothing in reasonable price. We've been a customer for about 15 years now. Best for Grooms complete outfit and Accessories.",
    time: "4 years ago",
  },
  {
    text: "Highly recommend shop for any kind of clothing. Fair prices. And the bestest quality you can get in shahdara. Their clothes never disappoints.",
    time: "4 years ago",
  },
  {
    text: "Amazing shop, the quality of the fabric is really good and the designs are mind blowing. I really suggest visiting the store, you will not regret it trust me on this one!!!",
    time: "4 years ago",
  },
];

const services = [
  "Family Clothing (for all ages)",
  "Men's Wear (Kurtas, Groom's Outfits)",
  "Women's Wear",
  "Kids' Clothing",
  "Wide Variety of Fabrics & Designs",
  "Fashion Accessories",
];

const galleryImages = [
  {
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/d8/011pxx11.xx11.160113191617.m9d8/catalogue/fancy-family-wear-shahdara-delhi-baby-readymade-garment-retailers-bo23b3x6ri.jpg",
    alt: "Baby and kids clothing display",
  },
  {
    src: "https://content3.jdmagicbox.com/v2/comp/delhi/d8/011pxx11.xx11.160113191617.m9d8/catalogue/fancy-family-wear-shahdara-delhi-readymade-garment-retailers-2klr8z6.jpg",
    alt: "Men's wear and accessories section",
  },
  {
    src: "https://img.magicpin.com/7467844_store_images_27.jpg",
    alt: "Women's ethnic and party wear collection",
  },
  {
    src: "https://img.magicpin.com/7467844_store_images_23.jpg",
    alt: "Fabric rolls and design variety",
  },
  {
    src: "https://img.magicpin.com/7467844_store_images_66.jpg",
    alt: "Groom's collection and sherwani display",
  },
];

const Divider = () => (
  <div className="flex items-center w-full my-16 lg:my-24">
    <div className="flex-grow border-t border-[#D6CDC0]" />
    <div className="mx-4 w-2 h-2 bg-[#C5923E] rotate-45" />
    <div className="flex-grow border-t border-[#D6CDC0]" />
  </div>
);

export default function HomePage() {
  return (
    <div
      className={`${neuton.variable} ${workSans.variable} font-[family-name:var(--font-work-sans)] bg-[#F8F5ED] text-[#2D221F]`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F8F5ED]/90 backdrop-blur border-b border-[#D6CDC0]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between h-16">
          <span className={`font-[family-name:var(--font-neuton)] text-xl md:text-2xl font-bold text-[#2D221F]`}>
            Fancy Family Wear
          </span>
          <a
            href="tel:09958843734"
            className="inline-flex items-center gap-2 text-[#6A5E52] hover:text-[#C5923E] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline text-sm md:text-base">099588 43734</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
        <Image
          src={galleryImages[0].src}
          alt="Fancy Family Wear store interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D221F]/80 via-[#2D221F]/30 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="font-[family-name:var(--font-neuton)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Fashion for Every Family Member,
              <br />
              Quality You Can Trust.
            </h1>
            <div className="flex items-center gap-2 text-[#C5923E]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-white/80 text-sm md:text-base ml-2">4.9 (15 reviews)</span>
            </div>
            <a
              href="https://maps.google.com/?q=Shop+No.+127+Chotta+Bazar+Shahdara+Delhi+110032"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5923E] hover:bg-[#A87B2E] text-[#2D221F] font-medium px-6 py-3 rounded-[4px] transition-colors text-sm md:text-base"
            >
              <MapPin className="w-4 h-4" />
              Visit Our Store
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12">
        <Divider />

        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="flex-1 space-y-4 md:space-y-6">
            <h2 className="font-[family-name:var(--font-neuton)] text-3xl md:text-4xl font-bold text-[#2D221F]">
              A Shahdara Legacy Since 2010
            </h2>
            <p className="text-[#6A5E52] leading-relaxed">
              Located in the heart of Chotta Bazar, Fancy Family Wear has dressed generations with
              unmatched fabric quality and pocket‑friendly prices. From a groom’s first sherwani to a
              child’s festive lehnga, we weave trust into every thread. Step inside and experience
              the warmth of 15 years of family styling.
            </p>
            <a
              href="tel:09958843734"
              className="inline-flex items-center gap-2 border border-[#C5923E] text-[#C5923E] hover:bg-[#C5923E] hover:text-[#2D221F] font-medium px-5 py-2.5 rounded-[4px] transition-colors text-sm md:text-base"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
          <div className="flex-1 relative w-full aspect-[4/3] rounded-[8px] overflow-hidden border border-[#D6CDC0] shadow-[0_2px_8px_rgba(45,34,31,0.05)]">
            <Image
              src={galleryImages[4].src}
              alt="Groom collection display"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        <Divider />

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-neuton)] text-3xl md:text-4xl font-bold text-[#2D221F] text-center mb-8 md:mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[8px] border border-[#D6CDC0] shadow-[0_2px_8px_rgba(45,34,31,0.05)] p-6 hover:border-[#C5923E] transition-colors"
              >
                <div className="w-10 h-10 rounded-[4px] bg-[#F8F5ED] flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-[#C5923E] fill-current" />
                </div>
                <p className="text-[#2D221F] font-medium text-lg">{service}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-neuton)] text-3xl md:text-4xl font-bold text-[#2D221F] text-center mb-8 md:mb-12">
            Our Collection
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-[8px] overflow-hidden border border-[#D6CDC0] shadow-[0_2px_8px_rgba(45,34,31,0.05)]"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-neuton)] text-3xl md:text-4xl font-bold text-[#2D221F] text-center mb-8 md:mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[8px] border border-[#D6CDC0] shadow-[0_2px_8px_rgba(45,34,31,0.05)] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C5923E] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2D221F] leading-relaxed text-sm md:text-base">{`"${review.text}"`}</p>
                </div>
                <div className="mt-4 text-xs text-[#6A5E52] text-right">{review.time}</div>
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-12"
        >
          <div className="flex-1 space-y-6">
            <h2 className="font-[family-name:var(--font-neuton)] text-3xl md:text-4xl font-bold text-[#2D221F]">
              Reach Out to Us
            </h2>
            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=Shop+No.+127+Chotta+Bazar+Shahdara+Delhi+110032"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#6A5E52] hover:text-[#C5923E] transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Shop No. 127, छोटा बाजार, Chotta Bazar, Shahdara, Delhi, 110032, India
                </span>
              </a>
              <a
                href="tel:09958843734"
                className="flex items-center gap-3 text-[#6A5E52] hover:text-[#C5923E] transition-colors"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>099588 43734</span>
              </a>
            </div>
          </div>
          <form className="flex-1 bg-white rounded-[8px] border border-[#D6CDC0] shadow-[0_2px_8px_rgba(45,34,31,0.05)] p-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-[4px] border border-[#D6CDC0] px-4 py-2.5 text-[#2D221F] placeholder-[#6A5E52] focus:outline-none focus:ring-2 focus:ring-[#C5923E] focus:ring-offset-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-[4px] border border-[#D6CDC0] px-4 py-2.5 text-[#2D221F] placeholder-[#6A5E52] focus:outline-none focus:ring-2 focus:ring-[#C5923E] focus:ring-offset-2"
            />
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full rounded-[4px] border border-[#D6CDC0] px-4 py-2.5 text-[#2D221F] placeholder-[#6A5E52] focus:outline-none focus:ring-2 focus:ring-[#C5923E] focus:ring-offset-2 resize-none"
            />
            <button
              type="submit"
              disabled
              className="bg-[#C5923E] hover:bg-[#A87B2E] text-[#2D221F] font-medium px-6 py-2.5 rounded-[4px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Message (demo)
            </button>
          </form>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-[#D6CDC0] bg-[#F8F5ED]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6A5E52]">
            © {new Date().getFullYear()} Fancy Family Wear. All rights reserved.
          </p>
          <p className="text-sm text-[#6A5E52]">
            Made with care for Shahdara since 2010.
          </p>
        </div>
      </footer>
    </div>
  );
}