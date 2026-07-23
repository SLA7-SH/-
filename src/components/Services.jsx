import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Server, ShieldCheck, Wifi, Video, Cpu,
  Code2, Bot, Database, Globe, Wrench,
  CheckCircle2, ChevronLeft, ChevronRight, Sparkles
} from 'lucide-react';

const CATEGORIES = (isAr) => [
  { id: 'all',      label: isAr ? 'جميع الخدمات'          : 'All Services'         },
  { id: 'infra',    label: isAr ? 'شبكات ومراكز البيانات' : 'Networks & Data'       },
  { id: 'security', label: isAr ? 'الأمن والحماية'        : 'Security'              },
  { id: 'software', label: isAr ? 'البرمجيات والذكاء'     : 'Software & AI'         },
];

const SERVICES = (isAr) => [
  {
    id: 'it', cat: 'infra', icon: Server,
    gradient: 'from-blue-500 to-indigo-600',
    title: isAr ? 'حلول تقنية المعلومات' : 'IT Infrastructure',
    desc:  isAr ? 'تصميم وتنفيذ البنى التحتية، إعداد السيرفرات، وتكامل الأنظمة للمؤسسات.' : 'Enterprise architecture, server deployment, virtualization, and system integration.',
    feats: isAr ? ['إدارة السيرفرات والأنظمة', 'تراخيص البرامج الرسمية', 'النسخ الاحتياطي والاسترداد'] : ['Server & System Management', 'Official Software Licensing', 'Backup & Disaster Recovery'],
  },
  {
    id: 'cyber', cat: 'security', icon: ShieldCheck,
    gradient: 'from-emerald-500 to-teal-600',
    title: isAr ? 'الأمن السيبراني' : 'Cybersecurity',
    desc:  isAr ? 'تأمين الشبكات والبيانات، الجدران النارية، وفحص الثغرات الأمنية.' : 'Threat protection, next-gen firewalls, pen testing, and compliance.',
    feats: isAr ? ['جدران حماية Fortinet / Cisco', 'فحص واكتشاف الثغرات', 'تشفير البيانات والشبكات'] : ['Fortinet / Cisco Firewalls', 'Vulnerability Assessments', 'Data & Network Encryption'],
  },
  {
    id: 'net', cat: 'infra', icon: Wifi,
    gradient: 'from-cyan-500 to-blue-600',
    title: isAr ? 'حلول الشبكات' : 'Enterprise Networking',
    desc:  isAr ? 'تصميم شبكات سلكية ولاسلكية وألياف بصرية للمباني والفروع.' : 'Fiber optic, wireless mesh, Cisco & MikroTik structured cabling.',
    feats: isAr ? ['ربط الفروع VPN / Microwave', 'معدات Cisco & MikroTik', 'تمديدات الكوابل والألياف'] : ['Site-to-Site VPN & Microwave', 'Cisco & MikroTik Hardware', 'Structured Fiber Cabling'],
  },
  {
    id: 'cctv', cat: 'security', icon: Video,
    gradient: 'from-purple-500 to-violet-600',
    title: isAr ? 'منظومات المراقبة والأمن' : 'CCTV & Surveillance',
    desc:  isAr ? 'كاميرات IP فائقة الدقة مع تحليل ذكي وأنظمة التحكم بالدخول.' : 'High-definition IP cameras, NVR, facial recognition & access control.',
    feats: isAr ? ['كاميرات Hikvision / Dahua 4K', 'مراقبة مباشرة عبر الجوال', 'أنظمة بصمة الدخول'] : ['Hikvision / Dahua 4K Cameras', 'Remote Mobile Monitoring', 'Biometric Access Control'],
  },
  {
    id: 'iot', cat: 'software', icon: Cpu,
    gradient: 'from-amber-400 to-orange-500',
    title: isAr ? 'المباني والمكاتب الذكية' : 'Smart Building & IoT',
    desc:  isAr ? 'أتمتة الإضاءة والتكييف والطاقة مع حساسات ذكية وأنظمة إنذار.' : 'Automated lighting, climate, energy management, and IoT sensors.',
    feats: isAr ? ['تحكم مركزي بالإضاءة والتكييف', 'حساسات حركة وإنذار', 'إدارة الطاقة'] : ['Centralized Climate & Lighting', 'Motion & Alarm Sensors', 'Energy Monitoring'],
  },
  {
    id: 'dev', cat: 'software', icon: Code2,
    gradient: 'from-pink-500 to-rose-600',
    title: isAr ? 'تطوير البرمجيات' : 'Software Development',
    desc:  isAr ? 'مواقع ويب، تطبيقات جوال، وأنظمة ERP/CRM مخصصة للشركات.' : 'Web portals, mobile apps (iOS/Android), and bespoke ERP/CRM systems.',
    feats: isAr ? ['منصات الويب الاحترافية', 'تطبيقات الجوال الحديثة', 'أنظمة ERP مخصصة'] : ['Professional Web Platforms', 'Native Mobile Apps', 'Custom Enterprise ERP/CRM'],
  },
  {
    id: 'ai', cat: 'software', icon: Bot,
    gradient: 'from-violet-500 to-purple-600',
    title: isAr ? 'حلول الذكاء الاصطناعي' : 'AI & Analytics',
    desc:  isAr ? 'أتمتة العمليات، لوحات تحليل البيانات، والنماذج التنبؤية.' : 'ML workflows, BI dashboards, and predictive business analytics.',
    feats: isAr ? ['أتمتة خدمة العملاء بالذكاء الاصطناعي', 'لوحات قيادة البيانات', 'نماذج تنبؤية'] : ['AI Customer Automation', 'Executive BI Dashboards', 'Predictive Analytics'],
  },
  {
    id: 'dc', cat: 'infra', icon: Database,
    gradient: 'from-slate-600 to-blue-900',
    title: isAr ? 'مراكز البيانات' : 'Data Centers',
    desc:  isAr ? 'تجهيز غرف السيرفرات المتكاملة مع تبريد وكبائن وإطفاء تلقائي.' : 'Turnkey server rooms, precision cooling, UPS backup, FM200 suppression.',
    feats: isAr ? ['أنظمة UPS وتوزيع الطاقة', 'تبريد مراكز البيانات', 'إطفاء الحريق التلقائي'] : ['UPS & Power Distribution', 'Precision Cooling', 'FM200 Fire Suppression'],
  },
  {
    id: 'net2', cat: 'infra', icon: Globe,
    gradient: 'from-teal-500 to-emerald-700',
    title: isAr ? 'خدمات الإنترنت' : 'Internet Services',
    desc:  isAr ? 'نطاق عريض مخصص وربط الفضائي والسلكي للمؤسسات والفروع.' : 'Dedicated bandwidth, leased lines, satellite connectivity, and SD-WAN.',
    feats: isAr ? ['سرعات مخصصة Dedicated', 'ربط الفروع النائية', 'إدارة النطاق الترددي'] : ['Dedicated High-Speed Access', 'Remote Branch Connectivity', 'QoS Bandwidth Management'],
  },
  {
    id: 'maint', cat: 'security', icon: Wrench,
    gradient: 'from-slate-500 to-slate-700',
    title: isAr ? 'الصيانة والدعم 24/7' : 'Maintenance & SLA',
    desc:  isAr ? 'عقود صيانة دورية مع فريق استجابة سريعة على مدار الساعة.' : 'Preventive SLA contracts, emergency dispatch, and remote helpdesk.',
    feats: isAr ? ['زيارات دورية للتدقيق', 'استجابة طوارئ سريعة', 'مهندسون معتمدون مختصون'] : ['Routine Audit Visits', 'Emergency On-Site Response', 'Certified Specialist Engineers'],
  },
];

export default function Services({ onSelectService, lang }) {
  const isAr = lang === 'ar';
  const [cat, setCat] = useState('all');

  const services  = SERVICES(isAr);
  const cats      = CATEGORIES(isAr);
  const displayed = cat === 'all' ? services : services.filter(s => s.cat === cat);

  return (
    <section id="services" className="py-24 bg-[#e8ecf4]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            {isAr ? 'حلول تقنية متكاملة تحت سقف واحد' : 'Comprehensive Tech Spectrum'}
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0a1b33] tracking-tight leading-tight font-display">
            {isAr ? 'خدماتنا التقنية المتخصصة' : 'Our Professional Services'}
          </h2>
          <p className="text-slate-500 text-[15px] leading-relaxed">
            {isAr
              ? 'نساعد المؤسسات الحكومية والشركات الخاصة في ليبيا على بناء وتأمين وتطوير بنيتها الرقمية.'
              : "Empowering Libya's enterprises with world-class digital infrastructure and security."}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {cats.map(c => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  cat === c.id
                    ? 'gradient-brand text-white shadow-md'
                    : 'bg-[#f0f3f9] text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16,1,0.3,1] }}
                className="service-card p-6 flex flex-col gap-5 group"
              >
                {/* Icon + category */}
                <div className="flex items-start justify-between">
                  <div className={`w-[52px] h-[52px] rounded-2xl bg-gradient-to-br ${s.gradient} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-1">
                    {s.cat}
                  </span>
                </div>

                {/* Text */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-[18px] font-bold text-[#0a1b33] group-hover:text-[#0B5ED7] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{s.desc}</p>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 border-t border-slate-100 pt-4">
                  {s.feats.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-[12px] font-semibold text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => onSelectService(s.title)}
                  className="mt-2 w-full bg-slate-50 group-hover:gradient-brand group-hover:text-white text-slate-700 text-[12px] font-bold py-3 rounded-2xl border border-slate-200 group-hover:border-transparent transition-all flex items-center justify-center gap-1.5"
                >
                  {isAr ? 'طلب عرض سعر لهذه الخدمة' : 'Request Service Quote'}
                  {isAr
                    ? <ChevronLeft className="w-3.5 h-3.5" />
                    : <ChevronRight className="w-3.5 h-3.5" />
                  }
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
