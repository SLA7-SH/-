import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, MapPin, Calendar, CheckCircle } from 'lucide-react';

export default function Projects({ lang, onOpenQuote }) {
  const isAr = lang === 'ar';
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      category: 'cctv',
      title: isAr ? 'تركيب منظومة مراقبة متكاملة (120 كاميرا IP)' : 'Enterprise 120 IP Camera CCTV Network',
      client: isAr ? 'مجمع تجاري رئيسي — طرابلس' : 'Major Commercial Center — Tripoli',
      date: '2025',
      location: isAr ? 'طرابلس' : 'Tripoli',
      description: isAr
        ? 'تصميم وتمديد كوابل الشبكة وتثبيت 120 كاميرا مراقبة 4K فائقة الدقة مع ربطها بغرفة التحكم والتحليل الذكي لحركة المرور والدخول.'
        : 'Deployment of 120 4K IP cameras with centralized control room, fiber backbones, and smart analytics.',
      tags: ['CCTV 4K', 'Fiber Optic', 'Hikvision', 'Control Room'],
      imageGradient: 'from-blue-600 to-indigo-800'
    },
    {
      id: 2,
      category: 'datacenter',
      title: isAr ? 'تجهيز مركز بيانات متكامل (Tier-III)' : 'Tier-III Data Center Infrastructure',
      client: isAr ? 'مصرف ومؤسسة مالية — بنغازي' : 'Financial Institution — Benghazi',
      date: '2025',
      location: isAr ? 'بنغازي' : 'Benghazi',
      description: isAr
        ? 'بناء غرفة سيرفرات متكاملة تشمل 8 كبائن Server Racks، أنظمة التغذية الاحتياطية UPS، التبريد الدقيق، وأنظمة إطفاء الحريق التلقائية.'
        : 'Full data center setup featuring 8 server racks, dual UPS systems, precision cooling, FM200 fire suppression.',
      tags: ['Data Center', 'UPS 60KVA', 'FM200', 'Cisco Nexus'],
      imageGradient: 'from-emerald-600 to-teal-800'
    },
    {
      id: 3,
      category: 'network',
      title: isAr ? 'ربط شبكي لأكثر من 15 فرعاً' : '15+ Branch SD-WAN Interconnection',
      client: isAr ? 'شركة خدمات نفطية ولوجستية' : 'Oil & Gas Logistics Enterprise',
      date: '2024',
      location: isAr ? 'مصراتة / طرابلس / الجنوب' : 'Misrata / Tripoli / South',
      description: isAr
        ? 'ربط الفروع الرئيسية والميدانية عبر شبكات افتراضية مشفرة VPN وروابط الميكروويف الفضائية لضمان استمرارية نقل البيانات بسرعة عالية.'
        : 'High-speed SD-WAN and satellite microwave connection linking 15 remote operations nodes.',
      tags: ['SD-WAN', 'MikroTik CCR', 'Site-to-Site VPN', 'Cisco'],
      imageGradient: 'from-purple-600 to-indigo-900'
    },
    {
      id: 4,
      category: 'software',
      title: isAr ? 'نظام إدارة الموارد والمخزون ERP' : 'Enterprise ERP & Inventory Platform',
      client: isAr ? 'مجموعة شركات توريد ومستودعات' : 'Supply Chain & Logistics Corp',
      date: '2024',
      location: isAr ? 'طرابلس' : 'Tripoli',
      description: isAr
        ? 'تطوير منصة رقمية مخصصة لإدارة مبيعات الشركة، المخازن، الفواتير الإلكترونية، والموارد البشرية مع لوحات تحليلات مباشرة.'
        : 'Custom enterprise web portal automating sales, multi-warehouse inventory, e-invoicing, and HR.',
      tags: ['ERP System', 'React / Node.js', 'PostgreSQL', 'Web App'],
      imageGradient: 'from-amber-600 to-orange-800'
    },
    {
      id: 5,
      category: 'cctv',
      title: isAr ? 'تجهيز مكاتب ومبنى ذكي بالكامل' : 'Smart Office Building Automation',
      client: isAr ? 'مقر شركة استثمارية' : 'Corporate Headquarters Building',
      date: '2025',
      location: isAr ? 'طرابلس' : 'Tripoli',
      description: isAr
        ? 'تركيب أنظمة بصمة الدخول، التحكم بالإضاءة والتكييف تلقائياً، والشبكة اللاسلكية ذات السرعات العالية Wi-Fi 6.'
        : 'Biometric access control, climate and smart lighting automation, and high-density Wi-Fi 6 coverage.',
      tags: ['Smart IoT', 'Biometrics', 'Wi-Fi 6', 'Access Control'],
      imageGradient: 'from-cyan-600 to-blue-800'
    },
    {
      id: 6,
      category: 'network',
      title: isAr ? 'تمديد شبكة ألياف بصرية (Fiber Optic)' : 'Campus Fiber Optic Cable Backbone',
      client: isAr ? 'مؤسسة تعليمية ومجمع أكاديمي' : 'Academic Campus Institution',
      date: '2024',
      location: isAr ? 'الزاوية' : 'Al-Zawiya',
      description: isAr
        ? 'تمديد كوابل ألياف بصرية بطول 5 كيلومترات لربط المباني الجامعية والمختبرات بالشبكة المركزية والسيرفرات.'
        : '5km optical fiber cabling backbone uniting academic halls, administrative blocks, and data labs.',
      tags: ['Fiber Optic', 'Fusion Splicing', 'Gigabit Switches'],
      imageGradient: 'from-slate-700 to-slate-900'
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-[#0a1b33] text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-emerald-400 font-bold text-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>{isAr ? 'سجل الإنجاز والمشاريع الميدانية' : 'Proven Track Record'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display">
            {isAr ? 'نماذج من مشاريعنا المنجزة' : 'Featured Projects Showcase'}
          </h2>
          <p className="text-slate-400 text-base">
            {isAr
              ? 'معرض لأحدث المشاريع التقنية والهندسية التي نفذها فريقنا بنجاح للقطاعين العام والخاص في مختلف المدن الليبية.'
              : 'Highlights of successful IT infrastructure, network, and security deployments across Libya.'}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: isAr ? 'جميع المشاريع' : 'All Projects' },
              { id: 'cctv', label: isAr ? 'كاميرات المراقبة والأمن' : 'CCTV & Security' },
              { id: 'network', label: isAr ? 'الشبكات والألياف' : 'Networking & Fiber' },
              { id: 'datacenter', label: isAr ? 'مراكز البيانات' : 'Data Centers' },
              { id: 'software', label: isAr ? 'البرمجيات والمباني الذكية' : 'Software & IoT' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'gradient-brand text-white shadow-lg'
                    : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 rounded-3xl overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Cover Gradient Graphic */}
                <div className={`h-48 bg-gradient-to-br ${project.imageGradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="flex justify-between items-center relative z-10">
                    <span className="bg-slate-950/80 backdrop-blur-sm text-emerald-400 font-mono text-xs px-2.5 py-1 rounded-lg border border-slate-700/60 font-bold">
                      {project.date}
                    </span>
                    <span className="bg-slate-950/80 backdrop-blur-sm text-slate-200 text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-semibold">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      {project.location}
                    </span>
                  </div>

                  <div className="relative z-10 text-white font-bold text-lg group-hover:text-emerald-300 transition-colors">
                    {project.client}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-slate-950 text-slate-300 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-bold group-hover:underline">
                  <span>{isAr ? 'عرض التفاصيل الهندسية' : 'View Case Details'}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">{selectedProject.client}</span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="grid grid-cols-2 gap-4 bg-slate-800/80 p-4 rounded-xl text-xs">
              <div>
                <span className="text-slate-400 block">{isAr ? 'موقع التنفيذ:' : 'Location:'}</span>
                <strong className="text-white">{selectedProject.location}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">{isAr ? 'تاريخ الإنجاز:' : 'Completion Year:'}</span>
                <strong className="text-white">{selectedProject.date}</strong>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenQuote();
                }}
                className="gradient-brand text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-md hover:opacity-90"
              >
                {isAr ? 'طلب مشروع مشابه' : 'Request Similar Project'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
