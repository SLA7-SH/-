import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const LOGOS = [
  {
    name: 'Procure',
    src: 'https://svgl.app/library/procure.svg',
    gradient: 'from-blue-500 to-blue-700',
    gradientStyle: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
  },
  {
    name: 'Shopify',
    src: 'https://svgl.app/library/shopify.svg',
    gradient: 'from-amber-400 to-yellow-600',
    gradientStyle: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
  },
  {
    name: 'Blender',
    src: 'https://svgl.app/library/blender.svg',
    gradient: 'from-sky-500 to-blue-600',
    gradientStyle: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)'
  },
  {
    name: 'Figma',
    src: 'https://svgl.app/library/figma.svg',
    gradient: 'from-purple-500 to-indigo-600',
    gradientStyle: 'linear-gradient(135deg, #a855f7 0%, #4f46e5 100%)'
  },
  {
    name: 'Spotify',
    src: 'https://svgl.app/library/spotify.svg',
    gradient: 'from-pink-500 to-rose-600',
    gradientStyle: 'linear-gradient(135deg, #ec4899 0%, #e11d48 100%)'
  },
  {
    name: 'Lottielab',
    src: 'https://svgl.app/library/lottielab.svg',
    gradient: 'from-lime-400 to-amber-500',
    gradientStyle: 'linear-gradient(135deg, #84cc16 0%, #f59e0b 100%)'
  },
  {
    name: 'Google Cloud',
    src: 'https://svgl.app/library/google-cloud.svg',
    gradient: 'from-sky-400 to-blue-500',
    gradientStyle: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 100%)'
  },
  {
    name: 'Bing',
    src: 'https://svgl.app/library/bing.svg',
    gradient: 'from-cyan-400 to-teal-600',
    gradientStyle: 'linear-gradient(135deg, #22d3ee 0%, #0d9488 100%)'
  }
];

export default function HeroLanding() {
  const marqueeLogos = [...LOGOS, ...LOGOS];

  return (
    <div className="w-full min-h-screen bg-[#f9fafb] py-10 px-4 flex flex-col items-center justify-center font-sans">
      {/* 2. Main Hero Container & Video Background */}
      <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
        
        {/* Underlying Video Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />
        </div>

        {/* 3. Hero Text Content Wrapper */}
        <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-5"
          >
            {/* Headline */}
            <h1
              className="font-display text-[42px] md:text-[56px] font-medium tracking-tight leading-[1.08] text-[#0a1b33]"
              dangerouslySetInnerHTML={{
                __html: "Foundation of the<br />new digital epoch"
              }}
            />

            {/* Subheadline */}
            <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-[#64748b] max-w-lg">
              Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike.
            </p>

            {/* Contact Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0a152d] text-white px-7 py-3 rounded-full text-[14px] font-medium shadow-md hover:shadow-lg transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 4. Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.nav
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            {/* Logo Placeholder */}
            <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-slate-800 font-bold text-xs select-none">
              ✦
            </div>

            {/* Nav Links */}
            <div className="flex items-center gap-6 px-2">
              <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">
                Products
              </button>
              <button className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] transition-colors">
                Docs
              </button>
            </div>

            {/* Get in Touch Button */}
            <button className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1 group">
              <span>Get in touch</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#0a1b33] group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.nav>
        </div>
      </div>

      {/* 5. Seamless Marquee Logo Scroller Component */}
      <div className="w-full max-w-[1400px] mx-auto mt-10 overflow-hidden marquee-mask relative">
        <div className="animate-marquee flex items-center gap-5 py-2">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
            >
              {/* Hover Gradient Glow Background */}
              <div
                className="absolute inset-0 transition-all duration-500 scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                style={{ background: logo.gradientStyle }}
              />

              {/* Logo Image */}
              <img
                src={logo.src}
                alt={logo.name}
                className="relative z-10 h-8 w-auto object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
