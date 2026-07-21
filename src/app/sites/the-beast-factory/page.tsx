"use client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Arvo, Work_Sans } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dumbbell,
  Weight,
  UserCheck,
  TrendingUp,
  Users,
  Wrench,
  Shield,
  Zap,
  Heart,
  Menu,
  X,
  Star,
  Phone,
} from "lucide-react";
import { MapIframe } from "@/components/MapIframe";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const arvo = Arvo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arvo",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Weight,
  UserCheck,
  TrendingUp,
  Users,
  Wrench,
  Shield,
  Zap,
  Heart,
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
  }),
};

const services = [
  {
    title: "Strength Training",
    iconName: "Dumbbell",
    description: "Build raw power with compound lifts and targeted exercises, coached for proper form and steady progress.",
  },
  {
    title: "Heavy Weight Workouts",
    iconName: "Weight",
    description: "Push your limits safely with heavy sets and low reps, under the watchful eye of experienced trainers.",
  },
  {
    title: "Personalized Fitness Guidance",
    iconName: "UserCheck",
    description: "One-on-one attention from our dedicated coaches like Mohit and Uday, who tailor every session to your goals.",
  },
  {
    title: "Muscle Gain Programs",
    iconName: "TrendingUp",
    description: "Structured plans for hypertrophy, combining progressive overload with nutrition advice for maximum growth.",
  },
];

const features = [
  {
    title: "Expert Trainers",
    iconName: "Users",
    description: "Coaches who guide every workout, not just sit around. They're invested in your progress.",
  },
  {
    title: "Well-Maintained Equipment",
    iconName: "Wrench",
    description: "Modern machines and sturdy free weights, cleaned daily and kept in top condition.",
  },
  {
    title: "Unisex & Inclusive",
    iconName: "Shield",
    description: "A comfortable space for both men and women, with zero judgment and full support.",
  },
  {
    title: "Disciplined Atmosphere",
    iconName: "Zap",
    description: "A serious, focused environment where everyone respects the grind. No time-pass crowd.",
  },
  {
    title: "Positive Community",
    iconName: "Heart",
    description: "Members and trainers who push each other up. It's a family of beasts in the making.",
  },
];

const testimonials = [
  {
    title: "Consistency Builder",
    description:
      "“This gym helped me stay regular. Trainers actually guide you during strength training and heavy weights. The crowd is serious, and it's good for both men and women.”",
  },
  {
    title: "Ultimate Fitness Hub",
    description:
      "“Top-notch equipment, expert trainers, and a motivating atmosphere. Perfect for all fitness levels. Highly recommended!”",
  },
  {
    title: "Positive & Disciplined",
    description:
      "“Excellent gym with a very positive environment. Trainers are highly professional and friendly. Perfect for strength training and a healthy lifestyle.”",
  },
  {
    title: "Supportive Weight Training",
    description:
      "“I struggled with consistency until I joined. The trainers helped me adapt during peak hours. Clean, well-maintained, and a motivating unisex space.”",
  },
];

export default function LandingPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // In a real app, you would send the form data to an API
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className={`${arvo.variable} ${workSans.variable} min-h-screen bg-[#E4DED6] text-[#1A1816] font-[family-name:var(--font-work-sans)]`}
    >
      <style jsx>{`
        :root {
          --color-secondary: #B43C29;
          --color-surface: #EFE8E0;
        }

        .button-factory {
          border: 2px solid var(--color-secondary);
          box-shadow: 2px 2px 0 0 var(--color-secondary);
          border-radius: 2px;
          background-color: var(--color-secondary);
          color: white;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.75rem 2rem;
          transition: box-shadow 0.2s ease, background-color 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .button-factory:hover {
          box-shadow: 1px 1px 0 0 var(--color-secondary);
          background-color: #9a3323;
        }

        .card-factory {
          background-color: var(--color-surface);
          border: 1.5px solid #C8C0B4;
          border-radius: 4px;
          box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.06);
        }
      `}</style>

      <FloatingWhatsApp
        phoneNumber="09958395912"
        message="Hello, I'd like to know more about The Beast Factory."
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#E4DED6] border-b border-[#C8C0B4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-arvo)] text-2xl font-bold text-[#2E2925] tracking-tight"
          >
            The Beast Factory
          </Link>
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#2E2925]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <nav
            className={`lg:flex space-x-8 ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:relative top-full left-0 w-full lg:w-auto bg-[#E4DED6] lg:bg-transparent lg:mt-0 p-4 lg:p-0 border-b lg:border-none border-[#C8C0B4]`}
          >
            <Link
              href="#about"
              className="block lg:inline-block py-2 lg:py-0 hover:text-[#B43C29] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="block lg:inline-block py-2 lg:py-0 hover:text-[#B43C29] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#features"
              className="block lg:inline-block py-2 lg:py-0 hover:text-[#B43C29] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="block lg:inline-block py-2 lg:py-0 hover:text-[#B43C29] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#find-us"
              className="block lg:inline-block py-2 lg:py-0 hover:text-[#B43C29] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Find Us
            </Link>
            <Link
              href="#contact"
              className="block lg:inline-block py-2 lg:py-0 hover:text-[#B43C29] transition-colors font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="hero"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <Image
            src="https://content3.jdmagicbox.com/v2/comp/delhi/l4/011pxx11.xx11.220315171105.m9l4/catalogue/the-beast-factory-acharya-niketan-mayur-vihar-phase-1-delhi-gyms-1cez9841jp.jpg"
            alt="The Beast Factory gym"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#1A1816]/60" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
            <h1 className="font-[family-name:var(--font-arvo)] text-5xl sm:text-6xl font-bold mb-6 leading-tight">
              Forge Your Strength at The Beast Factory
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-[#EFE8E0]/80">
              A disciplined gym in Mayur Vihar Phase 1 for serious muscle gain, heavy weight training,
              and guided fitness.
            </p>
            <Link
              href="#contact"
              className="button-factory"
            >
              Join Now
            </Link>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="about"
          className="py-24 px-6"
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-[family-name:var(--font-arvo)] text-4xl sm:text-5xl font-bold text-[#2E2925]">
                Welcome to The Beast Factory
              </h2>
              <p className="text-[#7A7268] text-lg italic font-[family-name:var(--font-arvo)]">
                Where iron meets discipline.
              </p>
              <p className="text-lg leading-relaxed text-[#1A1816]/90">
                We are a no-nonsense gym in Mayur Vihar Phase 1, built for those who take fitness
                seriously. Our space is designed for heavy lifting, muscle gain, and strength training,
                with expert coaches who guide every rep. Whether you&rsquo;re just starting or
                you&rsquo;re already lifting heavy, you&rsquo;ll find a supportive, motivating
                environment with top-tier equipment. No gimmicks, just results.
              </p>
            </div>
            <div className="relative w-full h-96">
              <Image
                src="https://content.jdmagicbox.com/v2/comp/delhi/l4/011pxx11.xx11.220315171105.m9l4/catalogue/the-beast-factory-acharya-niketan-mayur-vihar-phase-1-delhi-gyms-xc8bsia4hz.jpg"
                alt="The Beast Factory interior"
                fill
                className="object-cover rounded-[4px] border-[1.5px] border-[#C8C0B4] shadow-[inset_0_1px_0_0_rgba(0,0,0,0.06)]"
              />
            </div>
          </div>
        </motion.section>

        {/* Services Section – Redesign with grounded headers */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="services"
          className="py-24 px-6 bg-[#EFE8E0]"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-arvo)] text-4xl sm:text-5xl font-bold text-[#2E2925] mb-4">
              Our Training Specialties
            </h2>
            <p className="text-lg text-[#7A7268] mb-12">
              Expert-guided programs for real progress.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => {
                const Icon = iconMap[service.iconName];
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={itemVariants}
                    className="card-factory overflow-hidden"
                  >
                    <div className="bg-[#B43C29] text-white px-6 pt-6 pb-4 flex items-center gap-3">
                      {Icon && <Icon className="w-8 h-8 flex-shrink-0" />}
                      <h3 className="font-[family-name:var(--font-arvo)] text-xl font-bold leading-tight">
                        {service.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-[#1A1816]/80">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="features"
          className="py-24 px-6 relative overflow-hidden"
        >
          <Image
            src="https://f005.backblazeb2.com/file/bmpcdn90/academy/41594/the-beast-factory-gym---3-.jpeg"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-arvo)] text-4xl sm:text-5xl font-bold text-[#2E2925] mb-4">
              Why Our Members Choose Us
            </h2>
            <p className="text-lg text-[#7A7268] mb-12">
              What makes The Beast Factory different.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => {
                const Icon = iconMap[feature.iconName];
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={itemVariants}
                    className="card-factory p-8 text-left"
                  >
                    {Icon && <Icon className="w-10 h-10 mb-4 text-[#B43C29]" />}
                    <h3 className="font-[family-name:var(--font-arvo)] text-xl font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#1A1816]/80">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="testimonials"
          className="py-24 px-6 relative overflow-hidden bg-[#E4DED6]"
        >
          <Image
            src="https://f005.backblazeb2.com/file/bmpcdn90/academy/41594/the-beast-factory-gym---18-.jpeg"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-arvo)] text-4xl sm:text-5xl font-bold text-[#2E2925] mb-4">
              What Our Members Say
            </h2>
            <p className="text-lg text-[#7A7268] mb-12">
              Real reviews from local fitness enthusiasts.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={itemVariants}
                  className="card-factory p-8 text-left"
                >
                  <div className="flex mb-4 text-[#B43C29]">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#1A1816]/80 italic">{t.description}</p>
                  <p className="mt-4 font-[family-name:var(--font-arvo)] font-bold text-[#2E2925]">
                    {t.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Location Map Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="find-us"
          className="py-24 px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-arvo)] text-4xl sm:text-5xl font-bold text-[#2E2925] mb-12">
              Find Us
            </h2>
            <MapIframe
              lat={28.6076952}
              lng={77.2940421}
              className="w-full h-96 rounded-[4px] border-[1.5px] border-[#C8C0B4] shadow-[inset_0_1px_0_0_rgba(0,0,0,0.06)]"
            />
          </div>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          id="contact"
          className="py-24 px-6 relative overflow-hidden bg-[#EFE8E0]"
        >
          <Image
            src="https://f005.backblazeb2.com/file/bmpcdn90/academy/41594/the-beast-factory-gym---13-.jpeg"
            alt=""
            fill
            className="object-cover opacity-10"
          />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-arvo)] text-4xl sm:text-5xl font-bold text-[#2E2925] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-[#7A7268] mb-12">
              Ready to start your transformation? Reach out and we&rsquo;ll get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#E4DED6] border-b-2 border-[#2E2925] px-4 py-3 focus:outline-none focus:border-[#B43C29] transition-colors rounded-[2px] placeholder:text-[#7A7268]"
                />
              </div>
              <div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  placeholder="Email Address"
                  className="w-full bg-[#E4DED6] border-b-2 border-[#2E2925] px-4 py-3 focus:outline-none focus:border-[#B43C29] transition-colors rounded-[2px] placeholder:text-[#7A7268]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="Phone (optional)"
                  className="w-full bg-[#E4DED6] border-b-2 border-[#2E2925] px-4 py-3 focus:outline-none focus:border-[#B43C29] transition-colors rounded-[2px] placeholder:text-[#7A7268]"
                />
              </div>
              <div>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-[#E4DED6] border-b-2 border-[#2E2925] px-4 py-3 focus:outline-none focus:border-[#B43C29] transition-colors rounded-[2px] placeholder:text-[#7A7268] resize-none"
                />
              </div>
              <button
                type="submit"
                className="button-factory w-full sm:w-auto"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-[#B43C29] font-medium mt-4">
                  Thank you! We&rsquo;ll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#2E2925] text-[#E4DED6]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <span className="font-[family-name:var(--font-arvo)] text-2xl font-bold">
              The Beast Factory
            </span>
            <p className="text-[#C8C0B4] mt-2 flex items-center">
              <Phone className="inline w-4 h-4 mr-1" /> 099583 95912
            </p>
            <p className="text-[#C8C0B4] text-sm">
              Second Floor, A-11, Block B, Acharya Niketan, Mayur Vihar, New Delhi, Delhi, 110091,
              India
            </p>
          </div>
          <p className="text-sm text-[#C8C0B4]">
            &copy; {new Date().getFullYear()} The Beast Factory. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}