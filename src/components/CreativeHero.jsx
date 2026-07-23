import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Globe, PhoneCall, Sparkles, Video, Code2, Wifi, Shield } from 'lucide-react';
import Logo from './Logo';

const PILLARS = (isAr) => [
  { icon: Wifi,    label: isAr ? 'حلول شبكية'        : 'Networking'    },
  { icon: Video,   label: isAr ? 'تركيب الكاميرات'   : 'CCTV'          },
  { icon: Code2,   label: isAr ? 'تقنية المعلومات'   : 'IT Services'   },
  { icon: Shield,  label: isAr ? 'أمن سيبراني'        : 'Cybersecurity' },
];

export default function CreativeHero({ onOpenQuote, lang, setLang, activeSection }) {
  const isAr = lang === 'ar';
  const dir  = isAr ? 'rtl' : 'ltr';

  const navLinks = [
    { id: 'about',    label: isAr ? 'من نحن'    : 'About'    },
    { id: 'services', label: isAr ? 'خدماتنا'   : 'Services' },
    { id: 'projects', label: isAr ? 'مشاريعنا'  : 'Projects' },
    { id: 'contact',  label: isAr ? 'اتصل بنا'  : 'Contact'  },
  ];

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="w-full px-4 pt-5 pb-8">
      {/* ═══════════════════ HERO CARD ═══════════════════ */}
      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-[44px] bg-[#080f1e] h-[640px] sm:h-[680px] flex flex-col
                      shadow-[0_48px_120px_-24px_rgba(0,0,0,0.55)] border border-white/[0.04]">

        {/* ─── VIDEO ─── */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <video
            autoPlay loop muted playsInline
            className="w-full h-full object-cover scale-[1.06] transition-transform duration-1000 opacity-40 mix-blend-lighten"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          />
          {/* subtle dark vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080f1e]/40 via-transparent to-[#080f1e]/90" />
        </div>

        {/* ─── TOP BAR ─── */}
        <div className="relative z-20 flex items-center justify-between px-7 sm:px-10 pt-7">
          {/* Logo pill */}
          <div className="glass rounded-2xl px-4 py-2.5 shadow-lg">
            <Logo size="normal" showText showSubtitle={false} />
          </div>

          {/* Phone + Lang */}
          <div className="flex items-center gap-2.5">
            <a
              href="tel:+218910000000"
              dir="ltr"
              className="hidden sm:flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-extrabold text-[#0B5ED7] shadow-sm hover:shadow-md transition-shadow"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              +218 91 000 0000
            </a>
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="glass rounded-full px-3.5 py-2 text-[11px] font-bold text-slate-700 hover:text-[#0B5ED7] flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              {isAr ? 'EN' : 'عربي'}
            </button>
          </div>
        </div>

        {/* ─── MAIN CONTENT ─── */}
        <div className="relative z-20 flex-1 px-7 sm:px-14 pt-8 flex flex-col justify-center" dir={dir}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[660px] space-y-5"
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 glass-dark rounded-full px-3.5 py-1.5 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] shadow-[0_0_8px_#16A34A] animate-pulse" />
              <span className="text-[11px] font-bold text-emerald-300 tracking-wide">
                {isAr ? 'الشريك التقني الأول في ليبيا' : 'Premier Tech Partner in Libya'}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1.07] text-white"
                style={{ fontSize: 'clamp(32px, 5vw, 58px)' }}>
              {isAr
                ? <>صناعة الحقبة الرقمية<br /><span className="text-gradient-brand">الجديدة في ليبيا</span></>
                : <>Foundation of the<br /><span className="text-gradient-brand">New Digital Epoch</span></>
              }
            </h1>

            {/* Sub */}
            <p className="text-[15px] text-white/60 leading-relaxed max-w-[520px]">
              {isAr
                ? 'نقدم الشبكات المتقدمة، الأمن السيبراني، مراكز البيانات، منظومات المراقبة، والبرمجيات المخصصة للمؤسسات والشركات الكبرى.'
                : "Enterprise networking, cybersecurity, data centers, CCTV surveillance systems, and custom software for Libya's leading organisations."}
            </p>

            {/* 4 Pillars */}
            <div className="flex flex-wrap gap-2">
              {PILLARS(isAr).map(({ icon: Icon, label }, i) => (
                <div key={i} className="glass-dark rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-white/80">
                  <Icon className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  {label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuote}
                className="gradient-brand text-white px-7 py-3.5 rounded-full text-[14px] font-bold shadow-xl shadow-blue-900/40 hover:shadow-blue-700/40 transition-shadow flex items-center gap-2"
              >
                {isAr ? 'طلب عرض سعر' : 'Get a Quote'}
                <ChevronRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </motion.button>

              <a
                href="https://wa.me/218910000000"
                target="_blank" rel="noreferrer"
                className="glass rounded-full px-6 py-3.5 text-[14px] font-bold text-white flex items-center gap-2 hover:bg-white/20 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#16A34A]" />
                {isAr ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </motion.div>
        </div>

        {/* ─── FLOATING BOTTOM NAV ─── */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 w-full px-4 flex justify-center">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1 sm:gap-2.5 bg-white/95 backdrop-blur-2xl rounded-full shadow-[0_16px_48px_rgba(0,0,0,0.14)] border border-slate-200/50 px-3 py-2"
          >
            {/* Logo mark */}
            <button onClick={() => scrollTo('hero')} className="px-1.5">
              <Logo size="small" showText={false} />
            </button>

            <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" />

            {/* Nav links */}
            <div className="hidden sm:flex items-center gap-5 px-1">
              {navLinks.map(({ id, label }) => (
                <button key={id} onClick={() => scrollTo(id)}
                  className={`text-[12px] font-semibold transition-colors ${
                    activeSection === id ? 'text-[#0B5ED7] font-extrabold' : 'text-slate-600 hover:text-[#0a1b33]'
                  }`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-slate-200 mx-1 hidden sm:block" />

            {/* CTA */}
            <button
              onClick={onOpenQuote}
              className="gradient-brand text-white text-[12px] font-bold px-5 py-2 rounded-full flex items-center gap-1.5 shadow-md"
            >
              {isAr ? 'طلب عرض سعر' : 'Get in touch'}
              <ChevronRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
