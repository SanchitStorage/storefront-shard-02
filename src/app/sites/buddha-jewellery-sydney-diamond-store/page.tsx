"use client";

import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lora, DM_Sans } from "next/font/google";
import {
  Diamond,
  Gem,
  PenTool,
  RefreshCw,
  MessageCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const iconMap = {
  Diamond,
  Gem,
  PenTool,
  RefreshCw,
  MessageCircle,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! (demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`${lora.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)] text-[#3B2E2A] bg-[#F9F3F5]`}
    >
      <Header />
      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="https://static.where-e.com/Australia/New_South_Wales/Rockdale/Buddha-Jewellery-Sydney-Diamond-Store_7f3eab48138280da8ba62ef7731d01c2.jpg"
              alt="Buddha Jewellery Sydney hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F9F3F5]/90 via-[#F9F3F5]/60 to-[#F9F3F5]/30" />
          </div>
          <motion.div
            className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24"
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-6">
              Buddha Jewellery Sydney
            </h1>
            <p className="text-lg md:text-xl text-[#3B2E2A]/65 mb-4">
              Your trusted destination for gold, diamonds, and bespoke designs
              in Rockdale.
            </p>
            <p className="text-base md:text-lg text-[#3B2E2A]/80 max-w-2xl mx-auto mb-8">
              Serving the community with honesty and exceptional craftsmanship
              for years.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-[#C49A4A] text-[#3B2E2A] px-6 py-3 rounded-[6px] font-semibold text-lg hover:bg-[#b4883e] transition-all shadow-[0_2px_8px_rgba(59,46,42,0.06)]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-4">
                A Legacy of Trust & Craftsmanship
              </h2>
              <p className="text-lg text-[#D3A029] font-medium mb-6">
                Family-owned and community-focused.
              </p>
              <p className="text-[#3B2E2A]/80 leading-relaxed max-w-prose">
                At Buddha Jewellery Sydney, we combine traditional artisanship
                with modern elegance. Our reputation is built on honest advice,
                patient service, and beautiful pieces that celebrate life’s
                special moments. Whether you&apos;re looking for a timeless gold
                necklace, a sparkling diamond, or a custom creation, we treat
                every customer like family. Walk into our Rockdale store and
                experience the warmth that has made us a favourite in the
                Nepalese community and beyond.
              </p>
            </motion.div>
            <motion.div
              className="relative h-80 md:h-96 rounded-[6px] overflow-hidden shadow-[0_2px_8px_rgba(59,46,42,0.06)]"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <Image
                src="https://static.where-e.com/Australia/New_South_Wales/Rockdale/Buddha-Jewellery-Sydney-Diamond-Store_1288e8ce8122f325854accc4c0fd7a5b.jpg"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 lg:py-28 bg-[#F3E9EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-4">
                Our Services
              </h2>
              <p className="text-lg text-[#3B2E2A]/65 max-w-2xl mx-auto">
                From expert guidance to exquisite craftsmanship, we’re here to
                bring your vision to life.
              </p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Diamond Sales",
                  iconName: "Diamond",
                  description:
                    "Choose from our collection of ethically sourced, certified diamonds. Whether for engagements, gifts, or heirlooms, we help you find the perfect stone.",
                },
                {
                  title: "Gold Jewellery",
                  iconName: "Gem",
                  description:
                    "Beautifully crafted 22k and 24k gold pieces, from traditional designs to modern styles. Necklaces, bangles, earrings, and more.",
                },
                {
                  title: "Custom Jewellery Design",
                  iconName: "PenTool",
                  description:
                    "Bring your dream piece to life with our bespoke design service. Our expert artisans work closely with you to create something truly unique.",
                },
                {
                  title: "Gold Exchange",
                  iconName: "RefreshCw",
                  description:
                    "Trade in your old gold with confidence. We offer fair evaluations and a seamless exchange process, whether you want to upgrade or cash in.",
                },
                {
                  title: "Expert Consultation",
                  iconName: "MessageCircle",
                  description:
                    "Our friendly team, including Sunil, Bikash, and Kusum, takes time to understand your needs and budget, guiding you without any pressure.",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#F9F3F5] rounded-[6px] p-6 shadow-[0_2px_8px_rgba(59,46,42,0.06)] hover:shadow-[0_6px_16px_rgba(59,46,42,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: idx * 0.08 },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#D3A029]/10 text-[#D3A029] mb-4">
                    {React.createElement(
                      iconMap[service.iconName as keyof typeof iconMap],
                      { size: 24 }
                    )}
                  </div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#3B2E2A]/80 text-sm flex-1">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 lg:py-28 relative">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://static.where-e.com/Australia/New_South_Wales/Rockdale/Buddha-Jewellery-Sydney-Diamond-Store_34b506268c86770349a8c1be175a1b17.jpg"
              alt="Background texture"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-[#3B2E2A]/65">
                We’re proud of the trust families place in us.
              </p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "R. Sharma",
                  description:
                    "Buddha Jewellery has been our go-to for years. Sunil was so patient and helpful. We always feel valued, no matter the purchase size. Highly recommended!",
                },
                {
                  title: "M. Thapa",
                  description:
                    "The collection is beautiful and unique. Bikash provided outstanding service—polite, knowledgeable, and made our experience truly enjoyable. Will definitely return.",
                },
                {
                  title: "A. Gurung",
                  description:
                    "We exchanged our old gold seamlessly. Sunil explained everything clearly and made the process smooth. A wonderful, trustworthy store.",
                },
                {
                  title: "S. Rai",
                  description:
                    "Kusum was incredibly helpful and patient. She understood exactly what we wanted and guided us with genuine care. Excellent service and beautiful jewellery.",
                },
                {
                  title: "P. Koirala",
                  description:
                    "I always come here. Bikash is amazing—kind, patient, and never rushes you. The designs are beautiful and high quality. So happy every visit!",
                },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#F3E9EC] p-6 rounded-[6px] shadow-[0_2px_8px_rgba(59,46,42,0.06)]"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, delay: idx * 0.1 },
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <p className="text-[#3B2E2A] italic mb-4">
                    “{testimonial.description}”
                  </p>
                  <p className="font-semibold font-[family-name:var(--font-lora)] text-[#C49A4A]">
                    {testimonial.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CallToAction */}
        <section className="py-20 lg:py-28 bg-[#D3A029]/10 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-4">
                Ready to Find Your Perfect Piece?
              </h2>
              <p className="text-lg text-[#D3A029] font-medium mb-4">
                Visit our Rockdale store or book a personal consultation today.
              </p>
              <p className="text-[#3B2E2A]/80 max-w-2xl mx-auto mb-8">
                Call us on (02) 9599 8890 or drop by. Our team is here to help
                you with any request, whether it&apos;s a custom design, gold
                exchange, or simply finding that special item. We can&apos;t
                wait to welcome you.
              </p>
              <Link
                href="#contact"
                className="inline-block bg-[#C49A4A] text-[#3B2E2A] px-6 py-3 rounded-[6px] font-semibold text-lg hover:bg-[#b4883e] transition-all shadow-[0_2px_8px_rgba(59,46,42,0.06)]"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ContactForm */}
        <section id="contact" className="py-20 lg:py-28 bg-[#F3E9EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-[#3B2E2A]/65 mb-8">
                We’d love to hear from you. Drop us a message or give us a call.
              </p>
              <div className="space-y-4 text-[#3B2E2A]/80">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-[#C49A4A] shrink-0" />
                  <span>(02) 9599 8890</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#C49A4A] shrink-0" />
                  <span>Shop 1/1-5 King St, Rockdale NSW 2216</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#3B2E2A] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-[4px] border border-[#E2D4C0] bg-[#F9F3F5] focus:border-[#C49A4A] focus:ring-2 focus:ring-[#C49A4A]/30 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#3B2E2A] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-[4px] border border-[#E2D4C0] bg-[#F9F3F5] focus:border-[#C49A4A] focus:ring-2 focus:ring-[#C49A4A]/30 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#3B2E2A] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-[4px] border border-[#E2D4C0] bg-[#F9F3F5] focus:border-[#C49A4A] focus:ring-2 focus:ring-[#C49A4A]/30 outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C49A4A] text-[#3B2E2A] px-6 py-3 rounded-[6px] font-semibold hover:bg-[#b4883e] transition-all shadow-[0_2px_8px_rgba(59,46,42,0.06)]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* LocationMap */}
        <section id="map" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A] mb-4">
                Visit Our Store in Rockdale
              </h2>
              <p className="text-lg text-[#3B2E2A]/65">
                Conveniently located in the heart of Rockdale, just a short walk
                from Rockdale Station.
              </p>
            </motion.div>
            <motion.div
              className="rounded-[6px] overflow-hidden shadow-[0_2px_8px_rgba(59,46,42,0.06)]"
              initial="hidden"
              whileInView="visible"
              variants={sectionVariants}
              viewport={{ once: true }}
            >
              <MapIframe
                lat={-33.9525444}
                lng={151.1380098}
                className="w-full h-[400px]"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp
        phoneNumber="+61295998890"
        message="Hi, I’m interested in your jewellery and would love to know more!"
        className="!bottom-6 !right-6"
      />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#F9F3F5]/80 backdrop-blur-md border-b border-[#E2D4C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-bold font-[family-name:var(--font-lora)] text-[#3B2E2A]"
        >
          Buddha Jewellery Sydney
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-[#3B2E2A]/80">
          <Link href="#home" className="hover:text-[#C49A4A] transition-colors">
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#C49A4A] transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-[#C49A4A] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-[#C49A4A] transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#C49A4A] transition-colors"
          >
            Contact
          </Link>
          <Link href="#map" className="hover:text-[#C49A4A] transition-colors">
            Find Us
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="text-[#3B2E2A]" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#3B2E2A] text-[#F9F3F5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xl font-bold font-[family-name:var(--font-lora)] mb-2">
          Buddha Jewellery Sydney
        </h3>
        <p className="mb-1">Phone: (02) 9599 8890</p>
        <p className="text-sm text-[#F9F3F5]/60">
          © {new Date().getFullYear()} Buddha Jewellery Sydney. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}