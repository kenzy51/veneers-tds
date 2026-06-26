"use client";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface HeroProps {
  dict: {
    badge: string;       // e.g., "The Art of the Smile"
    title_main: string;  // e.g., "Bespoke Porcelain"
    title_italic: string;// e.g., "Veneers"
    cta: string;         // e.g., "Begin Smile Assessment"
    studio_name: string; // e.g., "Tribeca Dental Studio"
  };
}

export default function Hero({ dict }: HeroProps) {
  const scrollToId = useSmoothScroll();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col md:flex-row">
      
      {/* LEFT SIDE: Luxury Video Window */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-screen bg-neutral-900 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/veneers-thumbnail.jpg"
          className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-[20%] contrast-[110%]"
        >
          <source src="/veneers.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40 z-10" />
      </div>

      {/* RIGHT SIDE: High-End Editorial Typography */}
      <div className="relative w-full md:w-1/2 min-h-[55vh] md:h-screen flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-16 bg-[#0B0B0B] text-white z-20">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/40 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-30 max-w-xl">
          {/* Luxury Minimalist Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex items-center gap-3 mb-6 lg:mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] font-medium">
              {dict.badge}
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]/50" />
          </motion.div>

          {/* Premium Serif Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light tracking-tight leading-[1.15] mb-10"
          >
            {dict.title_main} <br />
            <span className="italic font-extralight text-neutral-300 block mt-2">
              {dict.title_italic}
            </span>
          </motion.h1>

          {/* Interactive Luxury CTA Button */}
          <div className="flex flex-col items-start gap-6">
            <motion.button
              onClick={() => scrollToId("leadForm")} // Matches your lead contact form component's id attribute
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="group relative px-10 py-5 overflow-hidden border border-white/10 hover:border-[#C5A059] transition-all duration-700 bg-white/[0.02] backdrop-blur-md"
            >
              <span className="relative z-10 text-[11px] uppercase tracking-[0.5em] font-medium text-white group-hover:text-black transition-colors duration-700 cursor-pointer">
                {dict.cta}
              </span>
              <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
            </motion.button>

            {/* Signature Studio Branding */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-[11px] uppercase tracking-[0.4em] text-white/30 font-light pl-1"
            >
              {dict.studio_name}
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}