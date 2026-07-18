"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MapPin, Star, Scissors, Shirt, Sparkles, Tag, Heart, TrendingUp } from "lucide-react";
import { Lora, Work_Sans } from "next/font/google";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-work-sans" });

const reviews = [
  {
    rating: 5,
    text: "The collection is very nice and latest. Fabric is very comfortable Must buy",
    date: "a year ago",
  },
  {
    rating: 4,
    text: "Whenever I've gone, I've bought something. Best place for shopping. It has a cooperative Staff,helped me in everything and provided me everything that I was looking for. Nd They also provide good offer,Must Go.",
    date: "5 years ago",
  },
  {
    rating: 5,
    text: "All dresses available over here are of reasonable price.. And you will b guided for the dresses which will b suitable for you.. Best Services",
    date: "5 years ago",
  },
  {
    rating: 5,
    text: "Very nice and latest collection with good stuff. I'm a regular customer and I can say everytime they attend the customer very politely and all the staff is also well behaved.",
    date: "5 years ago",
  },
  {
    rating: 5,
    text: "I always buy ethnic and western wear from jain sales... quality, variety and price everything is just superb..",
    date: "2 years ago",
  },
];

const services = [
  {
    icon: TrendingUp,
    title: "Latest Fashion Collections",
    desc: "Stay ahead with our freshly curated arrivals blending tradition and trend.",
  },
  {
    icon: Shirt,
    title: "Ethnic & Western Wear",
    desc: "From elegant suits to chic western styles, find everything under one roof.",
  },
  {
    icon: Heart,
    title: "Comfortable & Quality Fabrics",
    desc: "Every piece is chosen for its feel, drape, and lasting comfort.",
  },
  {
    icon: Scissors,
    title: "Personalized Styling Assistance",
    desc: "Our attentive staff helps you find the perfect outfit for any occasion.",
  },
  {
    icon: Tag,
    title: "Seasonal Offers & Discounts",
    desc: "Enjoy great value with regular promotions and festive deals.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "#D4AF37" : "none"}
          color={i < rating ? "#D4AF37" : "#C8B171"}
        />
      ))}
    </div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Page() {
  return (
    <div className={`${workSans.className} bg-[#E8EFE9] text-[#2C3A35] min-h-screen`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F5FAF6] border-b border-[#C8B171] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0 h-16 flex items-center justify-between">
          <span className={`${lora.className} text-2xl md:text-3xl text-[#7A1C2B] font-bold`}>
            Jain Sales
          </span>
          <a
            href="tel:08802692420"
            className="flex items-center gap-2 text-[#7A1C2B] hover:text-[#5f1522] transition-colors font-medium"
          >
            <Phone size={18} />
            <span className="hidden sm:inline">088026 92420</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/SuMqXYuVPyZm7eNpzVOpD6fQ-20Bh9vJKCRd_Yrh3NUXV2njF9S4za9Xb-AMKnKAO6_uTSflWFr53yaR4LxywlXbEV_H=w300-rw"
            alt="Jain Sales latest fashion collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7A1C2B]/70 to-[#7A1C2B]/20" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-4 md:px-8 xl:px-0 text-white"
          >
            <h1 className={`${lora.className} text-4xl md:text-6xl xl:text-7xl font-bold leading-tight max-w-2xl`}>
              Discover the Latest Trends in Women's Fashion & Ethnic Wear
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#D4AF37] max-w-xl">
              Curated elegance with Banarasi soul — right in Shahdara.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="tel:08802692420"
                className="inline-flex items-center gap-2 bg-[#7A1C2B] text-white px-6 py-3 rounded-sm font-medium tracking-wide hover:bg-[#6B1925] transition-colors shadow-md"
              >
                <Phone size={18} /> Call Now
              </a>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-sm font-medium tracking-wide hover:bg-[#D4AF37]/10 transition-colors"
              >
                Explore Collection
              </a>
            </div>
          </motion.div>
        </section>

        {/* Collection Swatch Book Grid */}
        <section id="collection" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className={`${lora.className} text-4xl md:text-5xl text-[#7A1C2B]`}>
                The Swatch Room
              </h2>
              <p className="mt-3 text-[#6E6259] text-lg max-w-2xl mx-auto">
                A tactile edit of our most beloved silhouettes — like a tailor's swatch book come to life.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-3 md:gap-6"
            >
              <motion.div
                variants={itemVariants}
                className="col-span-4 md:col-span-4 xl:col-span-6 row-span-2 relative group bg-[#F5FAF6] border border-[#C8B171] rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-150"
              >
                <div className="relative w-full h-80 md:h-96">
                  <Image
                    src="https://d1k13df5m14swc.cloudfront.net/7e89f2ac-a394-4980-92c5-1da969614dd3zoom.jpg"
                    alt="Ethnic wear collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#7A1C2B]/80 to-transparent p-4">
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">Ethnic Suits</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="col-span-2 md:col-span-4 xl:col-span-3 relative group bg-[#F5FAF6] border border-[#C8B171] rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-150"
              >
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src="https://www.philipdavidcompany.com/wp-content/uploads/2026/JILZARAH-2026%20Outlet%20Catalog-cover.jpg"
                    alt="Western wear collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#7A1C2B]/80 to-transparent p-3">
                  <span className="text-white font-medium text-sm">Western Wear</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="col-span-2 md:col-span-4 xl:col-span-3 relative group bg-[#F5FAF6] border border-[#C8B171] rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-150"
              >
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src="https://images.squarespace-cdn.com/content/v1/5c3e86153e2d094cd36322ab/86c3b40b-fb1e-469f-9430-715f6a3a8ee3/Sharanya-Chola-AACA.jpg"
                    alt="Dress collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#7A1C2B]/80 to-transparent p-3">
                  <span className="text-white font-medium text-sm">Dresses</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="col-span-2 md:col-span-4 xl:col-span-3 relative group bg-[#F5FAF6] border border-[#C8B171] rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-150"
              >
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src="https://www.zangcenter.com/wp-content/uploads/2024/04/ZCC_Hiral-Shah_Headshot_231019-640x800.jpg"
                    alt="Accessories and styling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#7A1C2B]/80 to-transparent p-3">
                  <span className="text-white font-medium text-sm">Accessories</span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="col-span-2 md:col-span-4 xl:col-span-3 relative group bg-[#F5FAF6] border border-[#C8B171] rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-150"
              >
                <div className="relative w-full h-60 md:h-72">
                  <Image
                    src="https://d1k13df5m14swc.cloudfront.net/7e89f2ac-a394-4980-92c5-1da969614dd3zoom.jpg"
                    alt="Bridal collection"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#7A1C2B]/80 to-transparent p-3">
                  <span className="text-white font-medium text-sm">Bridal</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24 bg-[#F5FAF6]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className={`${lora.className} text-4xl md:text-5xl text-[#7A1C2B]`}>
                The Jain Promise
              </h2>
              <p className="mt-3 text-[#6E6259] text-lg max-w-xl mx-auto">
                From fabric to fit, we craft the experience around you.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((svc) => {
                const Icon = svc.icon;
                return (
                  <motion.div
                    key={svc.title}
                    variants={itemVariants}
                    className="bg-[#E8EFE9] border border-[#C8B171] rounded-sm p-6 flex flex-col items-start gap-3 hover:shadow-md transition-shadow duration-150"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-[#7A1C2B] text-[#D4AF37]">
                      <Icon size={20} />
                    </div>
                    <h3 className={`${lora.className} text-xl text-[#2C3A35]`}>{svc.title}</h3>
                    <p className="text-[#6E6259] leading-relaxed text-sm md:text-base">{svc.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className={`${lora.className} text-4xl md:text-5xl text-[#7A1C2B]`}>
                Loved by Shahdara
              </h2>
              <div className="flex items-center justify-center mt-3 gap-2">
                <span className={`${lora.className} text-3xl text-[#D4AF37] font-bold`}>4.8</span>
                <StarRating rating={5} />
                <span className="text-[#6E6259] text-sm">(42 reviews)</span>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {reviews.map((r, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-[#F5FAF6] border border-[#C8B171] rounded-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-150"
                >
                  <StarRating rating={r.rating} />
                  <p className="text-[#2C3A35] leading-relaxed italic text-sm md:text-base">
                    “{r.text}”
                  </p>
                  <span className="text-[#6E6259] text-xs mt-auto">{r.date}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 md:py-24 bg-[#F5FAF6] border-t border-[#C8B171]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className={`${lora.className} text-4xl md:text-5xl text-[#7A1C2B]`}>
                Visit Us
              </h2>
              <div className="mt-8 space-y-6 text-[#2C3A35]">
                <div className="flex items-start justify-center gap-3">
                  <MapPin size={20} className="text-[#D4AF37] mt-1 shrink-0" />
                  <p className="text-left">
                    Swami Amardev Marg, Bhola Nath Nagar, Pathan Pura,<br />
                    Shahdara, Delhi, 110032, India
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Phone size={20} className="text-[#D4AF37] shrink-0" />
                  <a
                    href="tel:08802692420"
                    className="hover:text-[#7A1C2B] underline underline-offset-4 transition-colors"
                  >
                    088026 92420
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
                  <StarRating rating={5} />
                  <span className="text-[#6E6259] text-sm ml-1">4.8 (42 reviews)</span>
                </div>
              </div>
              <motion.a
                href="tel:08802692420"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center gap-2 bg-[#7A1C2B] text-white px-6 py-3 rounded-sm font-medium tracking-wide hover:bg-[#6B1925] transition-colors shadow-md"
              >
                <Phone size={18} /> Call Now
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#7A1C2B] text-[#E8EFE9] py-6 text-center text-sm">
        <p className="tracking-wide">
          &copy; {new Date().getFullYear()} Jain Sales. All rights reserved.
        </p>
        <p className="mt-1 text-[#C8B171]">
          Crafted with care in Shahdara, Delhi
        </p>
      </footer>
    </div>
  );
}