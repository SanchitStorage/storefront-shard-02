"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Rubik, Josefin_Sans } from "next/font/google";
import {
  Phone,
  MapPin,
  Star,
  Users,
  Shirt,
  Baby,
  Palette,
  Gem,
  Quote,
} from "lucide-react";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const FadeInUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const reviews = [
  {
    stars: 5,
    text: "Good place to purchase clothes for every age at good price. You will find many varieties and fabrics here.Staff is also cooperative.I visited here to purchase kurta for myself. The sales person served me about 25-30 choices with different colours and fabrics. The best part about this shop is their price range is very pocket friendly..",
  },
  {
    stars: 5,
    text: "Very good quality clothes. Nature of staff is very polite as well.Excellent service and also reasonable price.100% recommended for everyone. Don't think much about it just walk in the store and experience it yourself.",
  },
  {
    stars: 5,
    text: "Our go to family wear shop best clothing in reasonable price. We've been a customer for about 15 years now. Best for Grooms complete outfit and Accessories.",
  },
  {
    stars: 5,
    text: "Highly recommend shop for any kind of clothing. Fair prices. And the bestest quality you can get in shahdara. Their clothes never disappoints.",
  },
  {
    stars: 5,
    text: "Amazing shop, the quality of the fabric is really good and the designs are mind blowing. I really suggest visiting the store, you will not regret it trust me on this one!!!",
  },
];

export default function Page() {
  return (
    <div className={`${rubik.variable} ${josefin.variable} bg-[#9C9A9A] min-h-screen`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#9C9A9A]/90 backdrop-blur-md border-b border-[#464646]/20">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 h-16 flex items-center justify-between">
          <div className={`text-2xl font-semibold text-[#000] ${rubik.className}`}>
            Fancy Family Wear
          </div>
          <a
            href="tel:09958843734"
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#A35E47] text-white rounded-md font-medium text-sm ${rubik.className} hover:bg-[#8D4F3B] transition-colors`}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-16 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <FadeInUp>
            <div className="space-y-6">
              <h1
                className={`text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.2] text-[#000] ${rubik.className}`}
              >
                Fashion for Every Family Member, Quality You Can Trust.
              </h1>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#A35E47"
                      stroke="#A35E47"
                      className="drop-shadow-sm"
                    />
                  ))}
                </div>
                <span className={`text-sm text-[#464646] ${josefin.className}`}>
                  4.9 (15 reviews)
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:09958843734"
                  className={`px-5 py-3 bg-[#A35E47] text-white rounded-md font-medium ${rubik.className} hover:bg-[#8D4F3B] transition-colors inline-flex items-center gap-2`}
                >
                  <Phone size={18} />
                  <span>099588 43734</span>
                </a>
                <a
                  href="#visit"
                  className={`px-5 py-3 border-2 border-[#464646] text-[#464646] rounded-md font-medium ${rubik.className} hover:bg-[#464646]/10 transition-colors inline-flex items-center gap-2`}
                >
                  <MapPin size={18} />
                  <span>Visit Us</span>
                </a>
              </div>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-[#464646]/20 shadow-lg">
              <Image
                src="https://content3.jdmagicbox.com/v2/comp/delhi/d8/011pxx11.xx11.160113191617.m9d8/catalogue/fancy-family-wear-shahdara-delhi-baby-readymade-garment-retailers-bo23b3x6ri.jpg"
                alt="Fancy Family Wear store front"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </FadeInUp>
        </section>

        {/* Trust badge + Address */}
        <section className="bg-[#9C9A9A] border-t border-b border-[#464646]/10 py-12">
          <div className="max-w-[720px] mx-auto px-4 md:px-6 text-center space-y-4">
            <FadeInUp>
              <span
                className={`inline-block px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-[#A35E47] border border-[#A35E47]/30 rounded-full ${rubik.className}`}
              >
                Trusted for 15+ Years
              </span>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className={`text-lg text-[#000] leading-relaxed ${josefin.className}`}>
                We’ve been dressing families in Shahdara since 2009, offering
                quality fabrics, honest prices, and a personal touch that makes
                every visit special.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-16 lg:py-24">
          <FadeInUp>
            <h2
              className={`text-3xl md:text-4xl font-semibold text-[#000] mb-12 text-center ${rubik.className}`}
            >
              What We Offer
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users size={24} />,
                title: "Family Clothing",
                desc: "Complete wardrobe for every generation — together.",
              },
              {
                icon: <Shirt size={24} />,
                title: "Men’s Wear",
                desc: "Kurtas, groom’s outfits & timeless classics.",
              },
              {
                icon: <Shirt size={24} className="rotate-45" />,
                title: "Women’s Wear",
                desc: "Elegant styles for daily wear & special occasions.",
              },
              {
                icon: <Baby size={24} />,
                title: "Kids’ Clothing",
                desc: "Comfortable, playful designs they’ll love.",
              },
              {
                icon: <Palette size={24} />,
                title: "Wide Variety",
                desc: "Fabrics, colours, and designs to suit every taste.",
              },
              {
                icon: <Gem size={24} />,
                title: "Accessories",
                desc: "Fashion accents to complete the look.",
              },
            ].map((service, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="group bg-[#9C9A9A] border border-[#464646]/20 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#A35E47]/10 text-[#A35E47] mb-4">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-medium text-[#000] mb-2 ${rubik.className}`}>
                    {service.title}
                  </h3>
                  <p className={`text-[#464646] text-sm leading-relaxed ${josefin.className}`}>
                    {service.desc}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Groom's Highlight */}
        <section className="bg-[#9C9A9A] border-t border-b border-[#464646]/10 py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <FadeInUp>
              <div className="relative w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-lg border border-[#464646]/20">
                <Image
                  src="https://content3.jdmagicbox.com/v2/comp/delhi/d8/011pxx11.xx11.160113191617.m9d8/catalogue/fancy-family-wear-shahdara-delhi-readymade-garment-retailers-2klr8z6.jpg"
                  alt="Groom's outfit display"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="lg:w-1/2 space-y-6">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#A35E47] border border-[#A35E47]/30 rounded-full ${rubik.className}`}
                >
                  Groom’s Outfit Special
                </span>
                <blockquote className={`relative text-xl md:text-2xl text-[#000] leading-relaxed ${josefin.className}`}>
                  <span className="absolute left-0 top-0 -translate-x-2 -translate-y-4 text-[#A35E47] text-5xl leading-none">
                    “
                  </span>
                  <p className="pl-6">
                    {reviews[2].text}
                  </p>
                </blockquote>
                <p className={`text-sm text-[#464646] ${josefin.className}`}>
                  — Loyal customer for 15 years
                </p>
                <a
                  href="tel:09958843734"
                  className={`inline-flex items-center gap-2 px-5 py-3 bg-[#A35E47] text-white rounded-md font-medium ${rubik.className} hover:bg-[#8D4F3B] transition-colors`}
                >
                  <Phone size={18} />
                  <span>Enquire Now</span>
                </a>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Product Showcase with Images */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-16 lg:py-24">
          <FadeInUp>
            <h2
              className={`text-3xl md:text-4xl font-semibold text-[#000] mb-12 text-center ${rubik.className}`}
            >
              A Glimpse Inside
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "https://img.magicpin.com/7467844_store_images_27.jpg",
                alt: "Colourful fabric selection",
              },
              {
                src: "https://img.magicpin.com/7467844_store_images_23.jpg",
                alt: "Men's traditional collection",
              },
              {
                src: "https://img.magicpin.com/7467844_store_images_66.jpg",
                alt: "Kids' clothing range",
              },
            ].map((img, idx) => (
              <FadeInUp key={idx} delay={idx * 0.15}>
                <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-[#464646]/20 group hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </FadeInUp>
            ))}
          </div>
        </section>

        {/* Testimonials Carousel (all 5) */}
        <section className="bg-[#9C9A9A] border-t border-b border-[#464646]/10 py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
            <FadeInUp>
              <h2
                className={`text-3xl md:text-4xl font-semibold text-[#000] mb-12 text-center ${rubik.className}`}
              >
                What Our Customers Say
              </h2>
            </FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="bg-[#9C9A9A] border border-[#464646]/20 rounded-lg p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex mb-3">
                        {[...Array(review.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            fill="#A35E47"
                            stroke="#A35E47"
                          />
                        ))}
                      </div>
                      <p className={`text-[#000] text-base leading-relaxed italic ${josefin.className}`}>
                        “{review.text}”
                      </p>
                    </div>
                    <div className={`mt-4 text-xs text-[#464646] ${josefin.className}`}>
                      Verified Customer • 4 years ago
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Visit / Contact Section */}
        <section id="visit" className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 py-16 lg:py-24 text-center">
          <FadeInUp>
            <div className="flex flex-col items-center space-y-6">
              <MapPin
                size={48}
                className="text-[#A35E47]"
                strokeWidth={1.5}
              />
              <h2
                className={`text-3xl md:text-4xl font-semibold text-[#000] ${rubik.className}`}
              >
                Visit Us Today
              </h2>
              <address className={`text-lg text-[#000] not-italic leading-relaxed ${josefin.className}`}>
                Shop No. 127, छोटा बाजार, Chotta Bazar, Shahdara,<br />
                Delhi, 110032, India
              </address>
              <a
                href="tel:09958843734"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-[#A35E47] text-white rounded-md font-medium ${rubik.className} hover:bg-[#8D4F3B] transition-colors`}
              >
                <Phone size={20} />
                <span className="text-lg">099588 43734</span>
              </a>
              <p className={`text-sm text-[#464646] ${josefin.className}`}>
                Walk in or call — we’d love to help you find the perfect outfit.
              </p>
            </div>
          </FadeInUp>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#464646]/20 py-8">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 text-center">
            <p className={`text-sm text-[#464646] ${josefin.className}`}>
              © {new Date().getFullYear()} Fancy Family Wear. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}