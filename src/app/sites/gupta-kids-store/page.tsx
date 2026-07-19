"use client";

import { Josefin_Sans, Work_Sans } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shirt,
  Baby,
  ShoppingBag,
  Tag,
  Smile,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

// Icon mapping for services
const iconMap: Record<string, React.ElementType> = {
  Shirt,
  Baby,
  ShoppingBag,
  Tag,
  Smile,
};

// Animation config (using `as const` to narrow the `ease` literal type)
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const;

export default function Home() {
  return (
    <main className={`${josefinSans.variable} ${workSans.variable}`}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://content.jdmagicbox.com/v2/comp/delhi/a3/011pxx11.xx11.180630225545.g5a3/catalogue/gupta-kids-store-shahdara-delhi-kids-readymade-garment-retailers-gt1589100u-250.jpg"
            alt="Gupta Kids Store exterior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#1C2E4A]/75" />
        <motion.div
          className="relative z-10 max-w-[1200px] mx-auto px-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-[family-name:var(--font-josefin)] font-semibold text-5xl md:text-7xl leading-tight max-w-3xl">
            Affordable Fashion for Your Family
          </h1>
          <p className="text-[#E3EDF5] text-lg md:text-xl mt-4 max-w-2xl font-[family-name:var(--font-work-sans)]">
            Discover genuine kids&apos; and men&apos;s wear at the best prices in
            Shahdara.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block bg-[#F5B800] text-[#1A2E40] font-medium py-3 px-8 rounded-[2px] hover:bg-[#E0A800] transition-colors font-[family-name:var(--font-work-sans)]"
          >
            Explore Collection
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-[#E3EDF5]"
      >
        <motion.div
          className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center"
          {...fadeUp}
        >
          <div>
            <h2 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-4xl md:text-5xl">
              About Gupta Kids Store
            </h2>
            <p className="text-[#5E5E5E] text-lg mt-2 font-[family-name:var(--font-work-sans)]">
              Your trusted local clothing store
            </p>
            <p className="text-[#1A2E40] mt-6 leading-relaxed font-[family-name:var(--font-work-sans)]">
              Located in the heart of Shahdara, we offer a wide range of
              clothing for children and men. Our customers love our genuine
              products, reasonable prices, and friendly service.
            </p>
            <a
              href="#location"
              className="mt-6 inline-block border-2 border-[#F5B800] text-[#1A2E40] font-medium py-3 px-8 rounded-[2px] hover:bg-[#F5B800] hover:text-[#1A2E40] transition-colors font-[family-name:var(--font-work-sans)]"
            >
              Visit Us
            </a>
          </div>
          <div className="relative h-[400px] w-full rounded-[4px] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <Image
              src="https://content3.jdmagicbox.com/v2/comp/delhi/a3/011pxx11.xx11.180630225545.g5a3/catalogue/gupta-kids-store-shahdara-delhi-kids-readymade-garment-retailers-1lkiss76h5.jpg"
              alt="Inside Gupta Kids Store"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-white"
      >
        <motion.div className="max-w-[1200px] mx-auto" {...fadeUp}>
          <h2 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-4xl md:text-5xl text-center">
            What We Offer
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                iconName: "Shirt",
                title: "Kids' Daily Wear",
                description:
                  "Comfortable and stylish everyday clothes for boys and girls.",
              },
              {
                iconName: "Baby",
                title: "Baby Clothing",
                description:
                  "Soft, safe, and adorable outfits for your little ones.",
              },
              {
                iconName: "ShoppingBag",
                title: "Men's Apparel",
                description:
                  "Trendy shirts, trousers, and fashion for men.",
              },
              {
                iconName: "Tag",
                title: "Reasonable Prices",
                description: "Quality clothing that fits your budget.",
              },
              {
                iconName: "Smile",
                title: "Friendly Service",
                description:
                  "Our staff is always ready to help you find what you need.",
              },
            ].map((service, idx) => {
              const Icon = iconMap[service.iconName];
              return (
                <motion.div
                  key={idx}
                  className="p-6 bg-white border border-[#D9D0B6] rounded-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.06)] flex flex-col items-center text-center hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-shadow"
                  whileHover={{ y: -4 }}
                >
                  {Icon && (
                    <Icon
                      className="w-10 h-10 text-[#F5B800] mb-4"
                      strokeWidth={1.5}
                    />
                  )}
                  <h3 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-xl">
                    {service.title}
                  </h3>
                  <p className="text-[#5E5E5E] mt-2 font-[family-name:var(--font-work-sans)]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-[#E3EDF5]">
        <motion.div className="max-w-[1200px] mx-auto" {...fadeUp}>
          <h2 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-4xl md:text-5xl text-center">
            What Our Customers Say
          </h2>
          <p className="text-[#5E5E5E] text-lg mt-2 text-center font-[family-name:var(--font-work-sans)]">
            Real reviews from happy shoppers
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Wear Variety",
                description:
                  "So many options for daily wear and good staff behaviour.",
              },
              {
                title: "Genuine Products",
                description:
                  "The store products are genuine and all the varieties are available for baby and adults.",
              },
              {
                title: "Awesome Collection",
                description:
                  "Kids and mens wear collection is very awesome.",
              },
              {
                title: "Reasonable and Humble",
                description:
                  "Very nice clothes in the store, reasonable price and humble staff. Thank you.",
              },
              {
                title: "Good Collection and Price",
                description:
                  "Reasonable price and good collection for kids and mens.",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white border border-[#D9D0B6] rounded-[4px] shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
                whileHover={{ y: -4 }}
              >
                <Smile className="w-8 h-8 text-[#F5B800] mb-4" />
                <h3 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-lg">
                  {testimonial.title}
                </h3>
                <p className="text-[#5E5E5E] mt-2 font-[family-name:var(--font-work-sans)]">
                  {testimonial.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Location Section */}
      <section
        id="location"
        className="py-24 px-6 bg-white"
      >
        <motion.div
          className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center"
          {...fadeUp}
        >
          <div className="relative h-[400px] w-full rounded-[4px] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <Image
              src="https://content.jdmagicbox.com/v2/comp/delhi/a3/011pxx11.xx11.180630225545.g5a3/catalogue/gupta-kids-store-shahdara-delhi-kids-readymade-garment-retailers-shektqaa2a.jpg"
              alt="Store front"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-4xl md:text-5xl">
              Visit Our Store
            </h2>
            <p className="text-[#5E5E5E] text-lg mt-2 font-[family-name:var(--font-work-sans)]">
              Find us in Shahdara, Delhi
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5B800] mt-1 flex-shrink-0" />
                <span className="text-[#1A2E40] font-[family-name:var(--font-work-sans)]">
                  1/9295, Babarpur Main Rd, Mohan Park, West Rohtash Nagar,
                  Shahdara, Delhi, 110032
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5B800] mt-1 flex-shrink-0" />
                <span className="text-[#1A2E40] font-[family-name:var(--font-work-sans)]">
                  095821 26605
                </span>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Shahdara+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border-2 border-[#F5B800] text-[#1A2E40] font-medium py-3 px-8 rounded-[2px] hover:bg-[#F5B800] hover:text-[#1A2E40] transition-colors font-[family-name:var(--font-work-sans)]"
            >
              Get Directions
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-6 bg-[#E3EDF5]">
        <motion.div
          className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center"
          {...fadeUp}
        >
          <div>
            <h2 className="text-[#1A2E40] font-[family-name:var(--font-josefin)] font-semibold text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="text-[#5E5E5E] text-lg mt-2 font-[family-name:var(--font-work-sans)]">
              Have questions? We&apos;re here to help.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-[#D9D0B6] rounded-[4px] bg-white text-[#1A2E40] placeholder-[#5E5E5E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-[3px] focus:ring-[#F5B800] font-[family-name:var(--font-work-sans)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-[#D9D0B6] rounded-[4px] bg-white text-[#1A2E40] placeholder-[#5E5E5E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-[3px] focus:ring-[#F5B800] font-[family-name:var(--font-work-sans)]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-[#D9D0B6] rounded-[4px] bg-white text-[#1A2E40] placeholder-[#5E5E5E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-[3px] focus:ring-[#F5B800] font-[family-name:var(--font-work-sans)]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 border border-[#D9D0B6] rounded-[4px] bg-white text-[#1A2E40] placeholder-[#5E5E5E] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-[3px] focus:ring-[#F5B800] font-[family-name:var(--font-work-sans)]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#F5B800] text-[#1A2E40] font-medium py-3 px-8 rounded-[2px] hover:bg-[#E0A800] transition-colors font-[family-name:var(--font-work-sans)]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          <div className="relative h-[500px] w-full rounded-[4px] overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
            <Image
              src="https://content3.jdmagicbox.com/v2/comp/delhi/a3/011pxx11.xx11.180630225545.g5a3/catalogue/gupta-kids-store-shahdara-delhi-kids-readymade-garment-retailers-uabzthstpc.jpg"
              alt="Clothing collection"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-[#1C2E4A]">
        <motion.div
          className="max-w-[1200px] mx-auto text-center"
          {...fadeUp}
        >
          <h2 className="text-white font-[family-name:var(--font-josefin)] font-semibold text-4xl md:text-5xl">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-[#E3EDF5] text-lg mt-4 font-[family-name:var(--font-work-sans)]">
            Visit Gupta Kids Store today and explore our amazing collection.
          </p>
          <a
            href="#location"
            className="mt-8 inline-block bg-[#F5B800] text-[#1A2E40] font-medium py-3 px-8 rounded-[2px] hover:bg-[#E0A800] transition-colors font-[family-name:var(--font-work-sans)]"
          >
            Visit Us Now
          </a>
        </motion.div>
      </section>
    </main>
  );
}