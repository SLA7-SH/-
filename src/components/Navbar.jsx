import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Phone, Globe, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenQuote, lang, setLang, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isAr = lang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: isAr ? 'الرئيسية' : 'Home' },
    { id: 'about', label: isAr ? 'من نحن' : 'About Us' },
    { id: 'services', label: isAr ? 'خدماتنا' : 'Services' },
    { id: 'projects', label: isAr ? 'مشاريعنا' : 'Projects' },
    { id: 'contact', label: isAr ? 'اتصل بنا' : 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Line */}
      <div className="bg-[#080f1e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {isAr ? 'الشركة الرائدة في الحلول التقنية والشبكات في ليبيا' : 'Leading IT & Telecom Solutions Provider in Libya'}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+218910000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span dir="ltr" className="font-mono text-slate-200">+218 91 000 0000</span>
            </a>
            <button
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-0.5 rounded-full font-bold text-[11px] transition-colors border border-slate-700"
            >
              <Globe className="w-3 h-3 text-emerald-400" />
              {isAr ? 'English' : 'عربي'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`bg-white/90 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300 ${isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={() => scrollTo('hero')} className="cursor-pointer">
            <Logo size="normal" showSubtitle={false} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-bold transition-colors relative py-1 ${
                  activeSection === link.id
                    ? 'text-[#0B5ED7]'
                    : 'text-slate-700 hover:text-[#0B5ED7]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 gradient-brand rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="gradient-brand hover:opacity-95 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>{isAr ? 'طلب عرض سعر' : 'Request a Quote'}</span>
              <ChevronRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="gradient-brand text-white text-xs font-bold px-3 py-2 rounded-lg shadow"
            >
              {isAr ? 'طلب عرض' : 'Quote'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-right py-2 px-3 text-base font-bold rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-blue-50 text-[#0B5ED7]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full gradient-brand text-white text-center font-bold py-3 rounded-xl shadow"
              >
                {isAr ? 'طلب عرض سعر مجاني' : 'Request Free Quote'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
