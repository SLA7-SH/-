import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Award, ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-react';
import Logo from './Logo';

const PARTNERS = [
  { name: 'Cisco Systems',     role: 'Gold Networking Partner'       },
  { name: 'MikroTik',          role: 'Routing & Wireless Solutions'  },
  { name: 'Fortinet',          role: 'Next-Gen Firewall Leader'       },
  { name: 'Hikvision / Dahua', role: 'Surveillance & Access Control' },
  { name: 'Dell Technologies', role: 'Enterprise Server Hardware'    },
  { name: 'APC Schneider',     role: 'Data Center Power & UPS'       },
];

const CERTS = [
  'CCNA / CCNP Cisco', 'MikroTik MTCNA', 'Fortinet NSE', 'MCSA / CompTIA',
];

const STRENGTHS = (isAr) => [
  { icon: ShieldCheck, color: 'text-blue-600 bg-blue-50', title: isAr ? 'اعتمادية عالية' : 'High Reliability', desc: isAr ? 'أنظمة بوقت تشغيل 99.9% مضمون.' : 'Guaranteed 99.9% system uptime.' },
  { icon: Zap,         color: 'text-emerald-600 bg-emerald-50', title: isAr ? 'ابتكار مستمر' : 'Continuous Innovation', desc: isAr ? 'أحدث تقنيات AI والأمن السيبراني.' : 'Latest AI & cybersecurity tech.' },
  { icon: Users,       color: 'text-purple-600 bg-purple-50', title: isAr ? 'فريق معتمد' : 'Certified Team', desc: isAr ? 'مهندسون معتمدون دولياً داخل ليبيا.' : 'Internationally certified Libyan engineers.' },
];

export default function About({ lang }) {
  const isAr = lang === 'ar';

  return (
    <section id="about" className="py-24 bg-[#dde3ef]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* ═══ TOP: Text + Dark Card ═══ */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5" />
              {isAr ? 'عن رواق الحداثة' : 'About Rawaq Al-Hadatha'}
            </div>

            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0a1b33] leading-tight tracking-tight font-display">
              {isAr ? <>رائدون في <span className="text-gradient-brand">الحلول التقنية<br />المتكاملة في ليبيا</span></> : <>Pioneering <span className="text-gradient-brand">Integrated IT Solutions<br />Across Libya</span></>}
            </h2>

            <p className="text-slate-600 text-[15px] leading-relaxed">
              {isAr
                ? 'تأسست "رواق الحداثة" لتكون الشريك التقني الأول للمؤسسات في ليبيا. نسد الفجوة الرقمية من خلال الشبكات المتقدمة، الأمن السيبراني، مراكز البيانات، وتطوير البرمجيات وفق أعلى المعايير الدولية.'
                : 'Rawaq Al-Hadatha bridges Libya\'s digital divide through advanced networking, cybersecurity, data center buildouts, and bespoke software — all to international quality standards.'}
            </p>

            {/* Mission / Vision mini cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#eef1f8] border border-slate-200/70 space-y-2 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 text-[#0B5ED7] font-bold text-sm">
                  <Target className="w-4 h-4" />
                  {isAr ? 'رؤيتنا' : 'Our Vision'}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isAr ? 'أن نكون الخيار الأول في تنفيذ البنى التحتية التقنية في ليبيا والمنطقة.' : 'To be the premier IT infrastructure company across Libya and the MENA region.'}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#eef1f8] border border-slate-200/70 space-y-2 hover:border-emerald-300 transition-colors">
                <div className="flex items-center gap-2 text-[#16A34A] font-bold text-sm">
                  <Compass className="w-4 h-4" />
                  {isAr ? 'رسالتنا' : 'Our Mission'}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isAr ? 'توفير أنظمة آمنة وسريعة وموثوقة تضمن نمو واستقرار أعمال عملائنا.' : 'Delivering secure, high-uptime systems that empower our clients\' continuous growth.'}
                </p>
              </div>
            </div>

            {/* Strengths */}
            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              {STRENGTHS(isAr).map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="p-4 rounded-2xl border border-slate-100 bg-[#f0f3f9] hover:shadow-md transition-shadow space-y-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="text-[12px] font-bold text-slate-800">{title}</div>
                  <div className="text-[11px] text-slate-500">{desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: dark credential card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
          >
            <div className="gradient-dark-card rounded-3xl p-8 text-white shadow-2xl space-y-6">
              {/* Logo in card */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <Logo size="normal" showText showSubtitle={false} />
                <div className="text-right">
                  <div className="text-xs text-white/40">{isAr ? 'شركة مسجلة ومعتمدة' : 'Registered Enterprise'}</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{isAr ? 'ليبيا — طرابلس / بنغازي' : 'Libya — Tripoli / Benghazi'}</div>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                {[
                  { color: 'text-emerald-400', title: isAr ? 'مهندسون معتمدون دولياً' : 'Certified Engineers', sub: CERTS.join(' • ') },
                  { color: 'text-blue-400',    title: isAr ? 'معدات أصلية مع ضمان كامل' : 'Original Hardware & Warranty', sub: isAr ? 'جميع المعدات بضمان استبدال رسمي من الموردين.' : 'Full replacement warranties from official vendors.' },
                  { color: 'text-purple-400',  title: isAr ? 'تغطية وطنية شاملة' : 'Nationwide Coverage', sub: isAr ? 'طرابلس، بنغازي، مصراتة، الزاوية والمدن الأخرى.' : 'Tripoli, Benghazi, Misrata, Al-Zawiya & beyond.' },
                ].map(({ color, title, sub }) => (
                  <div key={title} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${color} shrink-0 mt-0.5`} />
                    <div>
                      <strong className="block text-white text-[13px]">{title}</strong>
                      <span className="text-[11px] text-white/50 leading-relaxed">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ═══ PARTNERS ROW ═══ */}
        <div className="border-t border-slate-100 pt-12">
          <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-7">
            {isAr ? 'شركاء التقنية والأنظمة العالمية' : 'Global Tech Vendors & Partners'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.map((p) => (
              <div key={p.name} className="p-4 rounded-2xl bg-[#eef1f8] border border-slate-200 text-center hover:border-[#0B5ED7] hover:bg-blue-50/70 transition-colors group">
                <div className="font-bold text-slate-800 text-sm group-hover:text-[#0B5ED7] transition-colors">{p.name}</div>
                <div className="text-[10px] text-slate-400 mt-1">{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
