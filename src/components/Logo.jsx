import React from 'react';

/**
 * Official Rawaq Al-Hadatha Logo
 * Faithfully recreates the uploaded brand identity:
 *   – Digitally scattered blue pixel squares (top-left)
 *   – Green pixel squares
 *   – Deep-blue "R" upper arm sweep
 *   – Dark-slate inner leg accent
 *   – Growth-green building arch with 2×2 white windows
 *   – Arabic wordmark: رواق (green) الحداثة (blue)
 *   – Subtitle underneath
 */
export default function Logo({ className = '', showText = true, showSubtitle = true, size = 'normal', inverted = false }) {
  const iconW = { small: 36, normal: 52, large: 68, xlarge: 88 }[size] ?? 52;
  const nameSize = { small: 'text-[17px]', normal: 'text-[22px]', large: 'text-[28px]', xlarge: 'text-[36px]' }[size] ?? 'text-[22px]';
  const subSize  = { small: 'text-[8px]',  normal: 'text-[9.5px]', large: 'text-[11px]', xlarge: 'text-[13px]' }[size] ?? 'text-[9.5px]';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none leading-none ${className}`}>
      {/* ─── ICON ─────────────────────────────── */}
      <svg
        width={iconW}
        height={iconW}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow"
      >
        {/* Blue pixel cluster — top-right */}
        <rect x="72" y="4"  width="8" height="8" rx="1.5" fill="#0B5ED7"/>
        <rect x="83" y="4"  width="6" height="6" rx="1"   fill="#0B5ED7" opacity="0.7"/>
        <rect x="72" y="15" width="6" height="6" rx="1"   fill="#0B5ED7" opacity="0.85"/>
        <rect x="81" y="13" width="9" height="9" rx="1.5" fill="#0B5ED7"/>
        <rect x="93" y="8"  width="6" height="6" rx="1"   fill="#0B5ED7" opacity="0.6"/>

        {/* Green pixel cluster — top-right secondary */}
        <rect x="93" y="18" width="6" height="6" rx="1"   fill="#16A34A" opacity="0.8"/>
        <rect x="102" y="12" width="5" height="5" rx="1"  fill="#16A34A" opacity="0.6"/>

        {/* ── Deep-blue R upper arm ── */}
        <path
          d="M22 18 L80 18 C102 18 108 44 96 58 C87 69 68 70 58 84 L42 68 C56 55 78 54 78 38 C78 30 70 27 60 27 L22 27 Z"
          fill="#0B5ED7"
        />

        {/* Dark-slate inner leg accent */}
        <path
          d="M59 80 C72 62 95 55 104 72 C90 86 68 93 54 100 Z"
          fill="#334155"
        />

        {/* Green building arch (lower R base) */}
        <path
          d="M8 102 C8 60 36 22 80 22 C56 22 30 48 30 82 L30 102 Z"
          fill="#16A34A"
        />

        {/* 2×2 white windows */}
        <rect x="42" y="68" width="7" height="7" rx="1.5" fill="white"/>
        <rect x="53" y="68" width="7" height="7" rx="1.5" fill="white"/>
        <rect x="42" y="79" width="7" height="7" rx="1.5" fill="white"/>
        <rect x="53" y="79" width="7" height="7" rx="1.5" fill="white"/>
      </svg>

      {/* ─── TEXT ─────────────────────────────── */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`flex items-baseline gap-1 font-black tracking-tight ${nameSize}`}>
            <span style={{ color: '#16A34A' }}>رواق</span>
            <span style={{ color: '#0B5ED7' }}>الحداثة</span>
          </div>
          {showSubtitle && (
            <span className={`font-semibold text-slate-500 mt-1 ${subSize}`}>
              للتقنية والمعلومات وخدمات الإنترنت
            </span>
          )}
        </div>
      )}
    </div>
  );
}
