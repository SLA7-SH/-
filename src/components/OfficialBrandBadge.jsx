import React from 'react';
import Logo from './Logo';
import { Video, Globe, Code, Wifi } from 'lucide-react';

export default function OfficialBrandBadge({ lang }) {
  const isAr = lang === 'ar';

  const badges = [
    { icon: Wifi, label: isAr ? 'حلول شبكية' : 'Networking Solutions' },
    { icon: Code, label: isAr ? 'تقنية المعلومات' : 'IT Services' },
    { icon: Globe, label: isAr ? 'خدمات الإنترنت' : 'Internet Services' },
    { icon: Video, label: isAr ? 'تركيب الكاميرات' : 'CCTV Cameras' },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto my-6 px-4">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Full Official Logo */}
        <Logo size="xlarge" showText={true} showSubtitle={true} />

        {/* 4 Icon Pillars matching original brand graphic */}
        <div className="w-full max-w-3xl border-t border-b border-slate-200 py-4 my-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-slate-200">
            {badges.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center justify-center space-y-2 py-2 px-3 group hover:scale-105 transition-transform">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0B5ED7] group-hover:bg-[#0B5ED7] group-hover:text-white flex items-center justify-center shadow-sm transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slogan Banner with Green Lines */}
        <div className="flex items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-700">
          <span className="w-12 h-0.5 bg-[#16A34A] rounded-full" />
          <span className="text-[#16A34A] font-extrabold tracking-wide">
            {isAr ? 'نربط الحاضر بمستقبل أفضل' : 'Linking the Present to a Better Future'}
          </span>
          <span className="w-12 h-0.5 bg-[#16A34A] rounded-full" />
        </div>
      </div>
    </div>
  );
}
