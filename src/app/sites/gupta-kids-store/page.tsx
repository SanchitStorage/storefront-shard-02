"use client";

import { Arvo } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shirt, Baby, ShoppingBag } from "lucide-react";
import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardShadow =
  "shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.08)]";
const cardHoverShadow = "hover:shadow-[0_2px_6px_rgba(0,0,0,0.1)]";

export default function Page() {
  return (
    <div
      className={`${arvo.variable} ${dmSans.variable} font-[var(--font-dm-sans)] bg-[#FDFBF7] text-[#2C2A28] min-h-screen antialiased`}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-28 lg:py-36 flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 space-y-6"
          >
            <h1 className="font-[var(--font-arvo)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Gupta Kids Store
            </h1>
            <p className="text-xl md:text-2xl text-[#7D7062] font-medium">
              Affordable Kids & Men&apos;s Wear in Shahdara
            </p>
            <p className="text-lg text-[#2C2A28]/80 max-w-2xl">
              Discover a wide range of genuine clothing for children and adults at the best prices.
            </p>
            <Link
              href="#services"
              className="inline-block bg-[#E85D3E] text-white font-semibold px-8 py-3 rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.12)] hover:bg-[#d14b2e] transition-colors duration-200"
            >
              Explore Collections
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-[2px] overflow-hidden"
          >
            <Image
              src="https://content.jdmagicbox.com/v2/comp/delhi/a3/011pxx11.xx11.180630225545.g5a3/catalogue/gupta-kids-store-shahdara-delhi-kids-readymade-garment-retailers-gt1589100u-250.jpg"
              alt="Gupta Kids Store collection"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex-1 space-y-6"
          >
            <h2 className="font-[var(--font-arvo)] text-3xl md:text-4xl font-bold">
              About Our Store
            </h2>
            <p className="text-lg text-[#7D7062] font-medium">
              Serving Shahdara families with quality clothing
            </p>
            <p className="text-base text-[#2C2A28]/80 leading-relaxed max-w-xl">
              We offer a wide range of kids&apos; daily wear, baby clothing, and men&apos;s fashion at reasonable prices. Our friendly team is dedicated to helping you find exactly what you need, with genuine products and excellent service every visit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full h-[350px] md:h-[400px] rounded-[2px] overflow-hidden"
          >
            <Image
              src="https://content3.jdmagicbox.com/v2/comp/delhi/a3/011pxx11.xx11.180630225545.g5a3/catalogue/gupta-kids-store-shahdara-delhi-kids-readymade-garment-retailers-1lkiss76h5.jpg"
              alt="Store interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center space-y-3"
          >
            <h2 className="font-[var(--font-arvo)] text-3xl md:text-4xl font-bold">
              What We Offer
            </h2>
            <p className="text-lg text-[#7D7062] font-medium">
              Explore our collections
            </p>
            <p className="text-base text-[#2C2A28]/70 max-w-2xl mx-auto">
              From everyday essentials to stylish outfits, we have something for everyone in the family.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Kids Daily Wear",
                icon: Shirt,
                desc: "Colorful and comfortable daily wear for kids of all ages.",
              },
              {
                title: "Baby Clothing",
                icon: Baby,
                desc: "Soft and gentle baby clothing collection.",
              },
              {
                title: "Men's Apparel",
                icon: ShoppingBag,
                desc: "Stylish men's apparel for everyday wear.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-[#FDFBF7] rounded-[2px] border border-[#D9CBB8] p-8 ${cardShadow} ${cardHoverShadow} transition-shadow duration-300 flex flex-col items-center text-center space-y-4`}
              >
                <div className="p-3 rounded-[2px] bg-[#E85D3E]/10">
                  <item.icon className="w-8 h-8 text-[#E85D3E]" />
                </div>
                <h3 className="font-[var(--font-arvo)] text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[#2C2A28]/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center space-y-3"
          >
            <h2 className="font-[var(--font-arvo)] text-3xl md:text-4xl font-bold">
              What Our Customers Say
            </h2>
            <p className="text-lg text-[#7D7062] font-medium">
              Real reviews from local families
            </p>
            <p className="text-base text-[#2C2A28]/70 max-w-2xl mx-auto">
              We&apos;re proud to be a trusted part of the community.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Great Variety",
                desc: "So many options for daily wear and good staff behaviour.",
              },
              {
                title: "Genuine Products",
                desc: "The store products are genuine and all the varieties are available baby and adults.",
              },
              {
                title: "Awesome Collection",
                desc: "kids nd mens wear collection is very awesome.",
              },
              {
                title: "Reasonable & Humble",
                desc: "Very nice clothes in the store, reasonable price and humble staff thank you ❤️",
              },
              {
                title: "Good Value",
                desc: "Reasonable price and good collection for kids and mens.",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`bg-white rounded-[2px] border border-[#D9CBB8] p-6 ${cardShadow} ${cardHoverShadow} flex flex-col space-y-3`}
              >
                <h4 className="font-[var(--font-arvo)] text-lg font-bold text-[#E85D3E]">
                  {testimonial.title}
                </h4>
                <p className="text-[#2C2A28]/80 leading-relaxed italic">
                  &ldquo;{testimonial.desc}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Map */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center space-y-3"
          >
            <h2 className="font-[var(--font-arvo)] text-3xl md:text-4xl font-bold">
              Find Us
            </h2>
            <p className="text-lg text-[#7D7062] font-medium">
              Visit our store in Shahdara
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2px] overflow-hidden border border-[#D9CBB8]"
          >
            <MapIframe lat={28.6804622} lng={77.2867017} className="w-full h-[400px]" />
          </motion.div>
          <div className="text-center">
            <Link
              href="https://maps.google.com/?q=28.6804622,77.2867017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E85D3E] text-white font-semibold px-8 py-3 rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.12)] hover:bg-[#d14b2e] transition-colors duration-200"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center space-y-3"
          >
            <h2 className="font-[var(--font-arvo)] text-3xl md:text-4xl font-bold">
              Get in Touch
            </h2>
            <p className="text-lg text-[#7D7062] font-medium">
              Have questions? Drop us a message
            </p>
            <p className="text-base text-[#2C2A28]/70">
              We&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 bg-white rounded-[2px] border border-[#D9CBB8] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-[#D9CBB8] rounded-[2px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E85D3E] focus:ring-offset-4 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-[#D9CBB8] rounded-[2px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E85D3E] focus:ring-offset-4 transition-shadow"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2C2A28] mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-[#D9CBB8] rounded-[2px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#E85D3E] focus:ring-offset-4 transition-shadow"
                  placeholder="How can we help you?"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#E85D3E] text-white font-semibold py-3 px-8 rounded-[2px] shadow-[0_2px_0_rgba(0,0,0,0.12)] hover:bg-[#d14b2e] transition-colors duration-200"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp phoneNumber="919582126605" />
    </div>
  );
}