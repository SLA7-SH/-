import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';
import { ChevronLeft, ChevronRight, ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Footer({ lang, onOpenQuote }) {
  const isAr = lang === 'ar';
  const arr  = isAr ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />;

  const links = [
    { id: 'hero',     label: isAr ? 'الرئيسية'  : 'Home'     },
    { id: 'about',    label: isAr ? 'من نحن'    : 'About'    },
    { id: 'services', label: isAr ? 'خدماتنا'   : 'Services' },
    { id: 'projects', label: isAr ? 'مشاريعنا'  : 'Projects' },
    { id: 'contact',  label: isAr ? 'اتصل بنا'  : 'Contact'  },
  ];

  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#080f1e] text-white border-t border-white/[0.06]">
      {/* ── UPPER STRIP ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: brand */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-5">
          <Logo size="normal" showText showSubtitle />
          <p className="text-[13px] text-white/50 leading-relaxed">
            {isAr
              ? 'الشركة الليبية الرائدة في حلول تقنية المعلومات، الشبكات، الأمن السيبراني، ومراكز البيانات.'
              : 'Libya\'s leading provider of IT solutions, networking, cybersecurity, and data center infrastructure.'}
          </p>
          <button
            onClick={onOpenQuote}
            className="gradient-brand text-white text-[12px] font-bold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:opacity-90 transition-opacity"
          >
            {isAr ? 'طلب عرض سعر' : 'Get a Quote'} {arr}
          </button>
        </div>

        {/* Col 2: nav */}
        <div className="space-y-4">
          <h4 className="text-[13px] font-bold text-white/80 uppercase tracking-widest">
            {isAr ? 'روابط سريعة' : 'Navigation'}
          </h4>
          <ul className="space-y-2.5">
            {links.map(l => (
              <li key={l.id}>
                <button
                  onClick={() => scroll(l.id)}
                  className="text-[13px] text-white/50 hover:text-white transition-colors flex items-center gap-1"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: services snapshot */}
        <div className="space-y-4">
          <h4 className="text-[13px] font-bold text-white/80 uppercase tracking-widest">
            {isAr ? 'أهم الخدمات' : 'Key Services'}
          </h4>
          <ul className="space-y-2.5 text-[13px] text-white/50">
            {(isAr
              ? ['الأمن السيبراني', 'كاميرات 4K CCTV', 'مراكز البيانات', 'المباني الذكية', 'دعم فني 24/7']
              : ['Cybersecurity', 'CCTV Surveillance', 'Data Centers', 'Smart Offices', '24/7 SLA Support']
            ).map(s => <li key={s} className="hover:text-white transition-colors cursor-default">{s}</li>)}
          </ul>
        </div>

        {/* Col 4: contact */}
        <div className="space-y-4">
          <h4 className="text-[13px] font-bold text-white/80 uppercase tracking-widest">
            {isAr ? 'تواصل معنا' : 'Contact'}
          </h4>
          <ul className="space-y-3 text-[13px] text-white/50">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#0B5ED7] shrink-0 mt-0.5" />{isAr ? 'طرابلس / بنغازي — ليبيا' : 'Tripoli / Benghazi — Libya'}</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-400 shrink-0" /><a href="tel:+218910000000" dir="ltr" className="hover:text-white transition-colors">+218 91 000 0000</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-purple-400 shrink-0" /><a href="mailto:info@rawaq.ly" className="hover:text-white transition-colors">info@rawaq.ly</a></li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400 shrink-0" /><span>{isAr ? 'أحد–خميس | 8ص–5م (طوارئ 24/7)' : 'Sun–Thu 8AM–5PM (24/7 Emergency)'}</span></li>
          </ul>
          <a
            href="https://wa.me/218910000000"
            target="_blank" rel="noreferrer"
            className="mt-2 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-bold px-4 py-2.5 rounded-full transition-colors w-fit"
          >
            <MessageCircle className="w-4 h-4" />
            {isAr ? 'واتساب المباشر' : 'Chat on WhatsApp'}
          </a>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/[0.06] py-5 px-4 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/30">
          <span>© {new Date().getFullYear()} {isAr ? 'رواق الحداثة. جميع الحقوق محفوظة.' : 'Rawaq Al-Hadatha. All rights reserved.'}</span>
          <span className="italic text-white/20">{isAr ? '"نربط الحاضر بمستقبل أفضل"' : '"Linking the Present to a Better Future"'}</span>
        </div>
      </div>
    </footer>
  );
}
