import React from 'react';
import { ArrowLeft, Shield, Server, Cpu, Wifi, Video, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenQuote, lang }) {
  const isAr = lang === 'ar';

  const stats = [
    { number: '150+', label: isAr ? 'مشروع حكومي وخاص' : 'Completed Projects' },
    { number: '99.9%', label: isAr ? 'نسبة استقرار الشبكات' : 'Network Uptime' },
    { number: '10', label: isAr ? 'تخصصات تقنية شائعة' : 'Core IT Services' },
    { number: '24/7', label: isAr ? 'دعم فني استجابة سريعة' : 'Technical Support' },
  ];

  const quickFeatures = [
    { icon: Server, title: isAr ? 'مراكز البيانات' : 'Data Centers', color: 'text-blue-600 bg-blue-50' },
    { icon: Wifi, title: isAr ? 'حلول الشبكات' : 'Networking Solutions', color: 'text-emerald-600 bg-emerald-50' },
    { icon: Video, title: isAr ? 'كاميرات المراقبة' : 'CCTV Surveillance', color: 'text-purple-600 bg-purple-50' },
    { icon: Cpu, title: isAr ? 'الذكاء الاصطناعي' : 'AI Solutions', color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-900 text-white">
      {/* Background Tech Grids & Animated Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 text-xs sm:text-sm font-semibold shadow-inner">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>{isAr ? 'رواق الحداثة — شريكك التقني الموثوق في ليبيا' : 'Rawaq Al-Hadatha — Trusted IT Partner in Libya'}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              {isAr ? (
                <>
                  نربط الحاضر <br />
                  <span className="text-gradient">بمستقبل أفضل</span>
                </>
              ) : (
                <>
                  Connecting Today to a <br />
                  <span className="text-gradient">Better Future</span>
                </>
              )}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {isAr
                ? 'نقدم أحدث الأنظمة المتكاملة في البنية التحتية، حلول الشبكات المتقدمة، الأمن السيبراني، منظومات المراقبة الذكية، مراكز البيانات، وتطوير البرمجيات للشركات والمؤسسات الهامة.'
                : 'We deliver state-of-the-art IT infrastructure, networking, cybersecurity, CCTV surveillance, data centers, and custom software for enterprises and government entities.'}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'عقود صيانة وتأمين 24/7' : '24/7 SLA Maintenance'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'اعتمادات وشراكات عالمية' : 'Certified Engineers'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'تجهيز مراكز البيانات المتكاملة' : 'Turnkey Data Centers'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'حلول ربط سلكي ولاسلكي' : 'Fiber & Microwave Links'}</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="gradient-brand hover:opacity-95 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <span>{isAr ? 'طلب عرض سعر الآن' : 'Get Instant Quote'}</span>
                <ArrowLeft className={`w-5 h-5 ${isAr ? '' : 'rotate-180'}`} />
              </button>

              <a
                href="https://wa.me/218910000000"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-base px-6 py-4 rounded-xl border border-slate-700 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-emerald-400" />
                <span>{isAr ? 'تواصل عبر الواتساب' : 'WhatsApp Us'}</span>
              </a>
            </div>
          </div>

          {/* Feature Showcase Grid Cards */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              {quickFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-md hover:border-emerald-500/50 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feat.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                      {feat.title}
                    </h3>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-5 rounded-2xl bg-slate-800/90 border border-slate-700 backdrop-blur-md flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">{isAr ? 'حالة الشبكات والخدمات' : 'System Status'}</div>
                <div className="text-sm font-bold text-white">{isAr ? 'جميع الأنظمة تعمل بكفاءة 100%' : 'All Systems Operational'}</div>
              </div>
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-mono">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
