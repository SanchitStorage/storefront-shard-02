"use client";

import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Lora, DM_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shirt,
  Heart,
  Sun,
  Gem,
  Watch,
  Calendar,
  Menu,
  X,
  Star,
} from "lucide-react";
import { useState } from "react";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const iconMap: Record<string, React.ComponentType<any>> = {
  Shirt,
  Heart,
  Sun,
  Gem,
  Watch,
  Calendar,
};

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // simple front-end only alert
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const faqs = [
    {
      title: "What are your store timings?",
      description:
        "We are open Monday to Saturday, 11 AM to 9 PM, and on Sundays from 12 PM to 8 PM. You can also call us to confirm before visiting.",
    },
    {
      title: "Do you offer returns or exchanges?",
      description:
        "We stand by the quality of our clothes. If you find a manufacturing defect, we will happily exchange the item within 3 days of purchase with the original bill. For sizing or color preference, exchanges are allowed within 2 days. Please check the garment carefully at the time of buying as we do not provide cash refunds.",
    },
    {
      title: "What is the price range of your clothes?",
      description:
        "We have something for every budget. Our casual wear starts from Rs. 299, and ethnic or party wear can range from Rs. 999 to Rs. 4,999. We guarantee value for money.",
    },
    {
      title: "Do you have a tailoring service?",
      description:
        "Currently, we do not have in-house tailoring. However, we can recommend a skilled tailor nearby for alterations.",
    },
    {
      title: "Can I order over the phone?",
      description:
        "Yes! You can call us on 075037 80911 or WhatsApp us to enquire about specific items. We'll be happy to assist you.",
    },
  ];

  return (
    <div
      className={`${lora.variable} ${dmSans.variable} font-[family-name:var(--font-dm-sans)]`}
    >
      {/* Header */}
      <header className="bg-[#F2ECE4] border-b border-[#C4B6A6] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center py-4">
            <a
              href="#"
              className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#2D2C28]"
            >
              Harish Garments
            </a>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-[#2D2C28]">
              <a href="#services" className="hover:text-[#3D5A80] transition">
                Collection
              </a>
              <a href="#about" className="hover:text-[#3D5A80] transition">
                About
              </a>
              <a href="#testimonials" className="hover:text-[#3D5A80] transition">
                Testimonials
              </a>
              <a href="#location" className="hover:text-[#3D5A80] transition">
                Visit Us
              </a>
              <a href="#contact" className="hover:text-[#3D5A80] transition">
                Contact
              </a>
            </nav>
            <button
              className="md:hidden p-2 text-[#2D2C28]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a
                href="#services"
                className="block text-[#2D2C28]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collection
              </a>
              <a
                href="#about"
                className="block text-[#2D2C28]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block text-[#2D2C28]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#location"
                className="block text-[#2D2C28]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visit Us
              </a>
              <a
                href="#contact"
                className="block text-[#2D2C28]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </header>

      <main className="bg-[#E7DDD0] text-[#2D2C28]">
        {/* Hero */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.jdmagicbox.com/v2/comp/delhi/94/011p101094/catalogue/harish-garments-naraina-vihar-delhi-readymade-garment-retailers-z888g.jpg"
              alt="Harish Garments storefront"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#2D2C28]/40" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 sm:px-8 max-w-3xl"
          >
            <h1 className="font-[family-name:var(--font-lora)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
              Harish Garments
            </h1>
            <p className="mt-4 font-[family-name:var(--font-lora)] text-xl sm:text-2xl text-[#F2ECE4] italic">
              Affordable & Stylish Clothing for the Whole Family
            </p>
            <p className="mt-6 text-base sm:text-lg text-[#F9F6F3]">
              Discover the latest trends in men&apos;s and women&apos;s fashion
              right here in Shahdara. From daily casuals to wedding ethnic wear,
              we bring quality garments at prices you&apos;ll love.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block px-8 py-3 bg-[#3D5A80] text-[#F9F6F3] rounded-[2px] font-semibold hover:bg-[#2C4662] transition-colors"
            >
              Explore Our Collection
            </a>
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold text-[#2D2C28]">
                Welcome to Harish Garments
              </h2>
              <p className="text-[#6B5E53] text-base sm:text-lg mt-2">
                Shahdara&apos;s Trusted Fashion Destination
              </p>
              <p className="mt-6 text-[#2D2C28] leading-relaxed">
                We are a family-run clothing store that has been serving the local
                community for over two decades. Our shelves are stacked with a wide
                range of clothes — from comfortable everyday wear to elegant outfits
                for special occasions. We take pride in offering our customers good
                quality fabrics and a friendly shopping experience. When you step
                into our shop, we want you to feel at home and leave with a smile.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 sm:h-96"
            >
              <Image
                src="https://content.jdmagicbox.com/v2/comp/delhi/c2/011pxx11.xx11.110317132335.f4c2/catalogue/harish-garments-shahdara-delhi-kids-readymade-garment-retailers-jtw78w88ep-250.jpg"
                alt="Inside Harish Garments"
                fill
                className="object-cover rounded-[2px] shadow-[0_2px_4px_rgba(45,43,40,0.06)]"
              />
            </motion.div>
          </div>
        </section>

        {/* Services / Collection */}
        <section id="services" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold text-center">
              Our Collection
            </h2>
            <p className="text-[#6B5E53] text-center mt-2 text-sm sm:text-base">
              Everything you need under one roof
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Men's Apparel",
                iconName: "Shirt",
                description:
                  "Shirts, trousers, kurtas, and more — stylish and comfortable.",
              },
              {
                title: "Women's Apparel",
                iconName: "Heart",
                description:
                  "Sarees, salwar suits, kurtis, and western wear designed for grace.",
              },
              {
                title: "Casual Wear",
                iconName: "Sun",
                description:
                  "T-shirts, jeans, and relaxed outfits for your daily routine.",
              },
              {
                title: "Ethnic Wear",
                iconName: "Gem",
                description:
                  "Festival-ready lehengas, sherwanis, and traditional ensembles.",
              },
              {
                title: "Fashion Accessories",
                iconName: "Watch",
                description:
                  "Dupattas, stoles, belts, and more to complete your look.",
              },
              {
                title: "Seasonal Collections",
                iconName: "Calendar",
                description:
                  "Stay updated with the latest summer prints and winter fabrics.",
              },
            ].map((item, idx) => {
              const Icon = iconMap[item.iconName] || Shirt;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#F2ECE4] rounded-[2px] p-6 shadow-[0_2px_4px_rgba(45,43,40,0.06)] border border-[#C4B6A6]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-[2px] bg-[#3D5A80]/10 text-[#3D5A80]">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-[family-name:var(--font-lora)] text-xl font-semibold text-[#2D2C28]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#6B5E53] text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold text-center">
              Loved by Our Customers
            </h2>
            <p className="text-[#6B5E53] text-center mt-2 text-sm sm:text-base">
              Here&apos;s what they have to say
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Rohit S.",
                description:
                  "I recently bought clothes from Harish Garments and the quality is excellent. The fabric is soft and the colours are bright. Staff was helpful in suggesting the right size. Definitely coming back!",
              },
              {
                title: "Anita M.",
                description:
                  "Great variety at reasonable prices. I found a beautiful lehenga for a wedding and everyone complimented me. The collection is quite impressive for a local shop.",
              },
              {
                title: "Vijay K.",
                description:
                  "My go-to shop for festive wear. The kurtas are well-finished and fit perfectly. They always have the latest designs. Highly recommended for family shopping.",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#F2ECE4] rounded-[2px] p-6 shadow-[0_2px_4px_rgba(45,43,40,0.06)] border border-[#C4B6A6] flex flex-col"
              >
                <div className="flex gap-1 text-[#B76E4A] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[#2D2C28] text-sm leading-relaxed flex-grow">
                  &quot;{testimonial.description}&quot;
                </p>
                <p className="mt-4 font-[family-name:var(--font-lora)] font-semibold text-[#3D5A80]">
                  {testimonial.title}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location + Store Images + Map */}
        <section id="location" className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold">
              Visit Our Store
            </h2>
            <p className="text-[#6B5E53] mt-2">
              Come, feel the fabric, and find your style.
            </p>
          </motion.div>

          {/* Small store gallery */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://content.jdmagicbox.com/v2/comp/delhi/c2/011pxx11.xx11.110317132335.f4c2/catalogue/harish-garments-shahdara-delhi-kids-readymade-garment-retailers-jtw78w88ep-250.jpg",
              "https://content.jdmagicbox.com/v2/comp/delhi/c2/011pxx11.xx11.110317132335.f4c2/catalogue/harish-garments-shahdara-delhi-kids-readymade-garment-retailers-gm98f5kisc-250.jpg",
              "https://content.jdmagicbox.com/v2/comp/delhi/c2/011pxx11.xx11.110317132335.f4c2/catalogue/harish-garments-shahdara-delhi-kids-readymade-garment-retailers-k2t02dlhcx-250.jpg",
              "https://content.jdmagicbox.com/v2/comp/delhi/c2/011pxx11.xx11.110317132335.f4c2/catalogue/harish-garments-shahdara-delhi-kids-readymade-garment-retailers-fx0gh3rsbm-250.jpg",
            ].map((src, i) => (
              <div key={i} className="relative h-48 w-full">
                <Image
                  src={src}
                  alt={`Harish Garments interior ${i + 1}`}
                  fill
                  className="object-cover rounded-[2px] shadow-[0_2px_4px_rgba(45,43,40,0.06)]"
                />
              </div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-[2px] overflow-hidden border border-[#C4B6A6] shadow-[0_2px_4px_rgba(45,43,40,0.06)]"
          >
            <MapIframe
              lat={28.676635}
              lng={77.28980419999999}
              className="w-full h-72 sm:h-96"
            />
          </motion.div>

          <div className="mt-8 text-center">
            <a
              href={`https://maps.google.com/?q=28.676635,77.289804`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-[#B76E4A] text-[#B76E4A] rounded-[2px] font-semibold hover:bg-[#B76E4A]/10 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 px-4 sm:px-8 lg:px-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold text-center">
              We&apos;re Here to Help
            </h2>
            <p className="text-[#6B5E53] text-center mt-2">
              Send us a message and we&apos;ll get back to you shortly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#2D2C28] mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#C4B6A6] rounded-[2px] bg-white text-[#2D2C28] focus:outline-none focus:border-[#B76E4A] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#2D2C28] mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#C4B6A6] rounded-[2px] bg-white text-[#2D2C28] focus:outline-none focus:border-[#B76E4A] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#2D2C28] mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#C4B6A6] rounded-[2px] bg-white text-[#2D2C28] focus:outline-none focus:border-[#B76E4A] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#3D5A80] text-[#F9F6F3] rounded-[2px] font-semibold hover:bg-[#2C4662] transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl font-bold text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6B5E53] text-center mt-2">
              Quick answers for a smooth shopping experience
            </p>
          </motion.div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, idx) => (
              <FAQItem key={idx} faq={faq} idx={idx} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2C28] text-[#F2ECE4] py-10 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-[family-name:var(--font-lora)] text-xl font-semibold">
              Harish Garments
            </p>
            <p className="text-sm mt-1 text-[#C4B6A6]">
              <a href="tel:07503780911" className="hover:text-[#B76E4A] transition">
                075037 80911
              </a>
              <span className="mx-2">|</span>
              <span>East Rohtas Nagar, West Rohtash Nagar, Shahdara, Delhi, 110032, India</span>
            </p>
          </div>
          <p className="text-xs text-[#6B5E53]">
            &copy; {new Date().getFullYear()} Harish Garments. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp phoneNumber="07503780911" message="Hi! I'm interested in your collection." />
    </div>
  );
}

function FAQItem({ faq, idx }: { faq: { title: string; description: string }; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="border border-[#C4B6A6] rounded-[2px] overflow-hidden bg-[#F2ECE4]"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-[#2D2C28] hover:bg-[#E7DDD0] transition-colors"
      >
        <span className="font-[family-name:var(--font-lora)] text-base">
          {faq.title}
        </span>
        <span className="ml-4 text-[#3D5A80] transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm text-[#2D2C28] leading-relaxed">
          {faq.description}
        </div>
      )}
    </motion.div>
  );
}