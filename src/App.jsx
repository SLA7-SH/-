import React, { useState, useEffect } from 'react';
import CreativeHero   from './components/CreativeHero';
import PartnerMarquee from './components/PartnerMarquee';
import About          from './components/About';
import Services       from './components/Services';
import Projects       from './components/Projects';
import Contact        from './components/Contact';
import Footer         from './components/Footer';
import QuoteModal     from './components/QuoteModal';
import { motion }     from 'motion/react';

const STATS = (isAr) => [
  { value: '150+', label: isAr ? 'مشروع منجز'       : 'Completed Projects',  color: 'text-[#0B5ED7]' },
  { value: '99.9%', label: isAr ? 'استقرار الشبكات' : 'Network Uptime SLA',  color: 'text-[#16A34A]' },
  { value: '10',    label: isAr ? 'خدمة تقنية متخصصة' : 'Specialist Services', color: 'text-purple-600' },
  { value: '24/7',  label: isAr ? 'دعم فني مستمر'    : 'Ongoing Support',     color: 'text-slate-800'  },
];

export default function App() {
  const [lang,    setLang]    = useState('ar');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteService, setQuoteService] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  const isAr = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      const ids = ['hero', 'about', 'services', 'projects', 'contact'];
      const y = window.scrollY + 240;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openQuote = (svc = '') => { setQuoteService(svc); setQuoteOpen(true); };

  return (
    <div className={`min-h-screen bg-[#e8ecf4] ${isAr ? '' : 'tracking-tight'}`}>

      {/* ── HERO ── */}
      <CreativeHero
        onOpenQuote={() => openQuote()}
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
      />

      {/* ── PARTNER MARQUEE ── */}
      <PartnerMarquee />

      {/* ── STATS BAR ── */}
      <section className="py-10 px-4 sm:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS(isAr).map(({ value, label, color }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16,1,0.3,1] }}
              className="bg-[#f0f3f9] rounded-3xl p-6 text-center border border-slate-300/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`text-[34px] sm:text-[40px] font-black font-display ${color} leading-none`}>{value}</div>
              <div className="text-[12px] sm:text-[13px] font-semibold text-slate-600 mt-2">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MAIN SECTIONS ── */}
      <main>
        <About    lang={lang} />
        <Services onSelectService={openQuote} lang={lang} />
        <Projects lang={lang} onOpenQuote={() => openQuote()} />
        <Contact  lang={lang} />
      </main>

      <Footer lang={lang} onOpenQuote={() => openQuote()} />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        initialService={quoteService}
        lang={lang}
      />
    </div>
  );
}
