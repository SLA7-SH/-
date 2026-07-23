import React from 'react';

/* ─────────────────────────────────────────────────────────────
   Clean, Vector Emblem Brand Icons (100% Reliable SVG + HTML)
   ───────────────────────────────────────────────────────────── */

// 1. Cisco
const CiscoIcon = () => (
  <svg viewBox="0 0 24 24" fill="#049fd9" className="w-7 h-7">
    <path d="M1.5 15.5v3h1v-3h-1zm3-3.5v6.5h1V12h-1zm3-3v9.5h1V9h-1zm3-3v12.5h1V6h-1zm3-3v15.5h1V3h-1zm3 3v12.5h1V6h-1zm3 3v9.5h1V9h-1zm3 3v6.5h1V12h-1zm3 3.5v3h1v-3h-1z" />
  </svg>
);

// 2. MikroTik
const MikroTikIcon = () => (
  <svg viewBox="0 0 24 24" fill="#dc2626" className="w-7 h-7">
    <path d="M2 20V4h4.5l5.5 9L17.5 4H22v16h-4V9.5L13.5 17h-3L6 9.5V20H2z" />
  </svg>
);

// 3. Fortinet
const FortinetIcon = () => (
  <svg viewBox="0 0 24 24" fill="#c0392b" className="w-7 h-7">
    <path d="M3 3h18v18H3V3zm3 3v4h4V6H6zm8 0v4h4V6h-4zm-8 8v4h4v-4H6zm8 0v4h4v-4h-4z" />
  </svg>
);

// 4. Hikvision
const HikvisionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="4" width="20" height="16" rx="4" fill="#e52820" />
    <path d="M6 8h3v3h4V8h3v8h-3v-3h-4v3H6V8z" fill="#ffffff" />
  </svg>
);

// 5. Dahua Technology
const DahuaIcon = () => (
  <svg viewBox="0 0 24 24" fill="#0369a1" className="w-7 h-7">
    <path d="M4 4h8c4.4 0 8 3.6 8 8s-3.6 8-8 8H4V4zm4 4v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4H8z" />
  </svg>
);

// 6. Dell Technologies
const DellIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="#0076ce" strokeWidth="2.5" />
    <text x="12" y="15.5" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#0076ce" fontFamily="Inter, sans-serif">
      DELL
    </text>
  </svg>
);

// 7. APC Schneider Electric
const APCIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="5" width="20" height="14" rx="3" fill="#16a34a" />
    <text x="12" y="14.5" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#ffffff" fontFamily="Inter, sans-serif">
      APC
    </text>
  </svg>
);

// 8. Microsoft
const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="2" width="9.5" height="9.5" fill="#f25022" rx="1" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7fba00" rx="1" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00a4ef" rx="1" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#ffb900" rx="1" />
  </svg>
);

// 9. Ubiquiti Networks
const UbiquitiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0559c9" strokeWidth="2.8" strokeLinecap="round" className="w-7 h-7">
    <path d="M6 5v8a6 6 0 0012 0V5" />
  </svg>
);

// 10. HPE (Hewlett Packard Enterprise)
const HPEIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="6" width="20" height="12" fill="none" stroke="#01a982" strokeWidth="2.5" rx="2" />
    <text x="12" y="14.5" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#01a982" fontFamily="Inter, sans-serif">
      HPE
    </text>
  </svg>
);

/* ─────────────────────────────────────────────────────────────
   Vendor Catalog
   ───────────────────────────────────────────────────────────── */
const VENDORS = [
  { Icon: CiscoIcon,     name: 'Cisco Systems',    sub: 'Gold Partner',        color: '#049fd9', bgLight: 'bg-sky-50 text-sky-700' },
  { Icon: MikroTikIcon,  name: 'MikroTik',         sub: 'Routing & Wireless', color: '#dc2626', bgLight: 'bg-red-50 text-red-700' },
  { Icon: FortinetIcon,  name: 'Fortinet',         sub: 'Next-Gen Firewall',  color: '#c0392b', bgLight: 'bg-amber-50 text-amber-700' },
  { Icon: HikvisionIcon, name: 'Hikvision',        sub: '4K CCTV Security',   color: '#e52820', bgLight: 'bg-rose-50 text-rose-700' },
  { Icon: DahuaIcon,     name: 'Dahua Technology', sub: 'Surveillance Systems',color: '#0369a1', bgLight: 'bg-blue-50 text-blue-700' },
  { Icon: DellIcon,      name: 'Dell Technologies',sub: 'Servers & Storage',  color: '#0076ce', bgLight: 'bg-blue-50 text-blue-700' },
  { Icon: APCIcon,       name: 'APC Schneider',    sub: 'Data Center Power',  color: '#16a34a', bgLight: 'bg-emerald-50 text-emerald-700' },
  { Icon: MicrosoftIcon, name: 'Microsoft',        sub: 'Cloud & Enterprise', color: '#00a4ef', bgLight: 'bg-indigo-50 text-indigo-700' },
  { Icon: UbiquitiIcon,  name: 'Ubiquiti Networks',sub: 'UniFi Wi-Fi 6',      color: '#0559c9', bgLight: 'bg-purple-50 text-purple-700' },
  { Icon: HPEIcon,       name: 'HPE Enterprise',   sub: 'Enterprise Systems', color: '#01a982', bgLight: 'bg-teal-50 text-teal-700' },
];

export default function PartnerMarquee({ lang }) {
  const isAr = lang === 'ar';
  // Quadruplicate the vendors list for endless, smooth, zero-gap looping
  const quad = [...VENDORS, ...VENDORS, ...VENDORS, ...VENDORS];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 my-6 select-none">
      {/* Header Bar */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-px bg-slate-300/60" />
        <span className="text-[11px] font-extrabold text-slate-500 uppercase tracking-wider whitespace-nowrap bg-slate-200/70 px-4 py-1 rounded-full border border-slate-300/50">
          {isAr ? 'شركاء التقنية والأنظمة العالمية' : 'GLOBAL TECHNOLOGY PARTNERS'}
        </span>
        <div className="flex-1 h-px bg-slate-300/60" />
      </div>

      {/* Marquee Scroller — Forced dir="ltr" for consistent smooth LTR keyframe motion */}
      <div className="overflow-hidden marquee-mask relative py-2" dir="ltr">
        <div className="animate-marquee flex gap-4" style={{ width: 'max-content' }}>
          {quad.map((v, i) => {
            const IconComponent = v.Icon;
            return (
              <div
                key={i}
                className="group relative h-[105px] w-[180px] shrink-0 rounded-2xl bg-white border border-slate-200/90 shadow-sm
                           hover:shadow-lg hover:border-blue-400/80 hover:-translate-y-1 transition-all duration-300
                           flex flex-col items-center justify-between py-3.5 px-3 overflow-hidden"
              >
                {/* Top Accent Color Bar on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ backgroundColor: v.color }}
                />

                {/* Vector Icon Container */}
                <div className="flex items-center justify-center p-2 rounded-xl bg-slate-50 group-hover:bg-slate-100 transition-colors">
                  <IconComponent />
                </div>

                {/* Brand Name & Subtitle in Clean HTML */}
                <div className="flex flex-col items-center text-center w-full">
                  <span className="text-[12px] font-extrabold text-slate-800 group-hover:text-slate-900 leading-tight truncate w-full"
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                    {v.name}
                  </span>
                  <span className="text-[9.5px] font-semibold text-slate-400 group-hover:text-slate-600 truncate w-full mt-0.5">
                    {v.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
