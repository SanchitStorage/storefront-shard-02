"use client";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  Phone,
  MapPin,
  Star,
  StarHalf,
  ChevronRight,
  Leaf,
  Sparkles,
  ShoppingBag,
  Users,
  Heart,
  Truck,
} from "lucide-react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Custom hook for scroll-triggered animations
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);
  return { ref, controls };
};

// Star rating component
const RatingStars = ({ rating = 4.4 }: { rating?: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={18} fill="#FFFC30" color="#FFFC30" />
      ))}
      {hasHalf && <StarHalf size={18} fill="#FFFC30" color="#FFFC30" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={18} color="#D4D4D4" />
      ))}
    </div>
  );
};

// Wave divider (organic)
const WaveDivider = () => (
  <svg
    viewBox="0 0 1440 120"
    className="absolute top-0 left-0 w-full h-[80px] md:h-[120px] -translate-y-[99%]"
    preserveAspectRatio="none"
  >
    <path
      fill="#4FE0CB"
      fillOpacity="0.1"
      d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
    />
  </svg>
);

// Decorative Leaf stamp
const LeafStamp = ({ className }: { className?: string }) => (
  <Leaf
    size={48}
    strokeWidth={1.5}
    className={`text-[#89F336] opacity-80 ${className}`}
  />
);

export default function HomePage() {
  const headerReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const galleryReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();

  return (
    <div className="min-h-screen bg-white text-[#171717] overflow-x-hidden font-poppins">
      {/* Inject Google Fonts because next/font is removed */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');
          .font-lato { font-family: 'Lato', sans-serif; }
          .font-poppins { font-family: 'Poppins', sans-serif; }
        `
      }} />

      {/* ---- HEADER / NAV ---- */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[#E5E5E5] px-4 md:px-8"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1224px] mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <LeafStamp className="w-6 h-6" />
            <span className="font-lato text-lg md:text-xl font-bold tracking-tight">
              Singh Garments
            </span>
          </div>
          <a
            href="tel:08826969410"
            className="flex items-center gap-2 bg-[#89F336] text-[#171717] rounded-[10px] px-4 py-2 font-semibold text-sm shadow-[0_2px_8px_rgba(137,243,54,0.25)] hover:scale-[1.02] transition-transform focus:ring-2 ring-[#4FE0CB]"
          >
            <Phone size={16} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>
      </motion.header>

      {/* ---- HERO ---- */}
      <section className="relative h-[90vh] min-h-[600px] w-full mt-16">
        <img
          src="https://content.jdmagicbox.com/v2/comp/delhi/62/011p1740462/catalogue/singh-garments-shahdara-delhi-readymade-garment-retailers-1emd4xm.jpg"
          alt="Singh Garments storefront"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8">
          <div className="max-w-[1224px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Location badge */}
              <span className="font-lato inline-block bg-[#FFFC30] text-[#171717] text-sm font-bold px-4 py-1.5 rounded-full mb-4 shadow-sm">
                Shahdara since 1982
              </span>

              <h1 className="font-lato text-5xl md:text-7xl lg:text-[80px] font-bold text-white mb-3 leading-[1.1]">
                Singh Garments
              </h1>
              <p className="font-lato text-xl md:text-2xl lg:text-3xl font-normal text-white/90 mb-6 max-w-2xl">
                Quality Fashion for Your Family, Since Childhood.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <RatingStars rating={4.4} />
                <span className="text-white/80 text-sm font-medium">
                  4.4 (16 Reviews)
                </span>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:08826969410"
                  className="inline-flex items-center gap-2 bg-[#89F336] text-[#171717] rounded-[10px] px-6 py-3 font-semibold text-base shadow-[0_2px_8px_rgba(137,243,54,0.25)] hover:scale-[1.02] transition-transform focus:ring-2 ring-[#4FE0CB]"
                >
                  <Phone size={20} /> 088269 69410
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=beside+panna+wali+gali,+Maharam+Mohalla,+Shahdara,+New+Delhi,+Delhi,+110032"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#4FE0CB] text-white rounded-[10px] px-6 py-3 font-semibold text-base hover:bg-[#F0FDFA]/20 transition-colors"
                >
                  <MapPin size={20} /> Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---- SERVICES ---- */}
      <section
        ref={servicesReveal.ref}
        className="py-16 md:py-24 bg-white px-4 md:px-8"
      >
        <motion.div
          className="max-w-[1224px] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={servicesReveal.controls}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-lato text-3xl md:text-[36px] font-bold mb-3">
              What We Offer
            </h2>
            <p className="text-[#737373] max-w-xl mx-auto text-base">
              Three decades of dressing families with honest quality and
              friendly service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShoppingBag,
                title: "Men's Casual Wear",
                desc: "Trendy yet comfortable casuals for every day.",
              },
              {
                icon: Users,
                title: "Family Outfits",
                desc: "Coordinated looks for the entire family.",
              },
              {
                icon: Heart,
                title: "Quality Apparel",
                desc: "Fabrics that breathe and last long.",
              },
              {
                icon: Truck,
                title: "Affordable Fashion",
                desc: "Style that doesn't break the bank.",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[14px] p-6 flex flex-col items-start gap-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:border-[#D4D4D4] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#4FE0CB]/20 flex items-center justify-center">
                  <service.icon size={24} className="text-[#171717]" />
                </div>
                <h3 className="font-lato text-[22px] font-bold text-[#171717]">
                  {service.title}
                </h3>
                <p className="text-[#737373] text-base">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---- GALLERY ---- */}
      <section
        ref={galleryReveal.ref}
        className="py-16 md:py-24 bg-[#FAFAFA] px-4 md:px-8"
      >
        <motion.div
          className="max-w-[1224px] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={galleryReveal.controls}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-lato text-3xl md:text-[36px] font-bold mb-3">
              Inside Our Shop
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "https://img.magicpin.com/130987_store_images_0.jpg",
              "https://img.magicpin.com/130987_store_images_1.jpg",
              "https://content.jdmagicbox.com/comp/chandigarh/q7/0172px172.x172.101031141017.p6q7/catalogue/singh-garments-mani-majra-chandigarh-readymade-garment-retailers-2u2vxgs.jpg",
              "https://img.magicpin.com/130987_store_images_3.jpg",
            ].map((src, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative aspect-square rounded-[14px] overflow-hidden bg-white border border-[#E5E5E5] shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---- TESTIMONIALS (Dark Surface) ---- */}
      <section
        ref={testimonialsReveal.ref}
        className="relative py-20 md:py-28 bg-[#00BF33]"
      >
        {/* Wave divider top */}
        <WaveDivider />

        <motion.div
          className="max-w-[1224px] mx-auto px-4 md:px-8 relative z-10"
          variants={staggerContainer}
          initial="hidden"
          animate={testimonialsReveal.controls}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <h2 className="font-lato text-3xl md:text-[36px] font-bold text-[#171717] mb-2">
              Loved by Families
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#171717] mt-2">
              <RatingStars rating={4.4} />
              <span className="font-medium text-sm">4.4 (16 reviews)</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stars: 5,
                text: "Best Shop everr❤️ I bought clothes here since I was child!! SINGH GARMENTS 🥳",
                meta: "5 ★ · 4 months ago",
              },
              {
                stars: 4,
                text: "This shop is one of the cheapest shop for shopping of men wear. The teammates are polite and good in nature. You can buy a good quality casual T-shirt @ just 290 rupees... Nd trust me I'm there regular customer from past 5-6 years.",
                meta: "4 ★ · 5 years ago",
              },
              {
                stars: 3,
                text: "It's price high but you get a quality products",
                meta: "3 ★ · 6 years ago",
              },
            ].map((review, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="relative bg-[#00BF33] border border-[#171717]/10 rounded-[16px] p-8 shadow-lg text-[#171717]"
              >
                {/* Yellow arc decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    className="absolute -top-4 -right-4"
                  >
                    <path
                      d="M100 0C100 50 50 100 0 100"
                      stroke="#FFFC30"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < review.stars ? "#FFFC30" : "none"}
                      color={i < review.stars ? "#FFFC30" : "#D4D4D4"}
                    />
                  ))}
                </div>
                <p className="text-[#171717] text-base leading-relaxed mb-4 font-medium">
                  “{review.text}”
                </p>
                <p className="text-sm text-[#171717]/70">{review.meta}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional simple reviews */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {[
              { stars: 5, text: "A family outfits", meta: "5 ★ · 4 months ago" },
              {
                stars: 5,
                text: "Best shop for clothes",
                meta: "5 ★ · a year ago",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-[#00BF33]/80 backdrop-blur border border-[#171717]/10 rounded-full px-6 py-2 text-sm text-[#171717] flex items-center gap-2"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#FFFC30" color="#FFFC30" />
                  ))}
                </div>
                <span className="italic">“{r.text}”</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="bg-[#00BF33] pt-8 pb-6 border-t border-[#171717]/10 px-4 md:px-8">
        <div className="max-w-[1224px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#171717]">
          <div className="flex items-center gap-2">
            <LeafStamp className="w-5 h-5" />
            <span className="font-lato text-lg font-bold">Singh Garments</span>
            <span className="text-sm ml-2 opacity-70">Since 1982</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center text-sm">
            <span className="flex items-center gap-1">
              <MapPin size={16} />{" "}
              <span>
                beside panna wali gali, Maharam Mohalla, Shahdara, New Delhi,
                110032
              </span>
            </span>
            <a
              href="tel:08826969410"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone size={16} /> 088269 69410
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://maps.google.com/?q=beside+panna+wali+gali,+Maharam+Mohalla,+Shahdara,+New+Delhi,+Delhi,+110032"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#89F336] text-[#171717] rounded-[10px] px-4 py-2 text-sm font-semibold shadow-[0_2px_8px_rgba(137,243,54,0.25)] hover:scale-[1.02] transition-transform"
            >
              <MapPin size={16} className="inline mr-1" />
              Open in Maps
            </a>
            <a
              href="tel:08826969410"
              className="bg-[#FFFC30] text-[#171717] rounded-[10px] px-4 py-2 text-sm font-semibold hover:scale-[1.02] transition-transform"
            >
              <Phone size={16} className="inline mr-1" />
              Call Now
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-[#171717]/60">
          Quality Fashion for Your Family. Trusted since childhood.
        </div>
      </footer>
    </div>
  );
}