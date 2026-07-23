import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Calculator, ShieldCheck, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const SERVICES_AR = [
  'حلول تقنية المعلومات الشاملة',
  'الأمن السيبراني وحماية البيانات',
  'حلول الشبكات والاتصالات',
  'منظومات المراقبة والأمن CCTV',
  'المباني والمكاتب الذكية (IoT)',
  'تطوير البرمجيات والتطبيقات',
  'حلول الذكاء الاصطناعي',
  'تجهيز مراكز البيانات',
  'خدمات الإنترنت والاتصالات',
  'عقود الصيانة والدعم الفني 24/7',
];

const SERVICES_EN = [
  'Integrated IT Infrastructure Solutions',
  'Cybersecurity & Data Protection',
  'Enterprise Networking & Telecom',
  'CCTV Surveillance Systems',
  'Smart Office & IoT Automation',
  'Custom Software & App Development',
  'AI & Data Analytics Solutions',
  'Data Center Infrastructure',
  'Dedicated Internet Access',
  'Maintenance & SLA Support Contracts',
];

const INIT = (svc) => ({
  name: '', company: '', email: '', phone: '',
  service: svc || SERVICES_AR[0],
  budget: '10k-50k', details: '',
});

export default function QuoteModal({ isOpen, onClose, initialService, lang }) {
  const isAr = lang === 'ar';

  const [form, setForm] = useState(INIT(initialService));
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  /* Sync service from props */
  useEffect(() => {
    if (initialService) setForm(prev => ({ ...prev, service: initialService }));
  }, [initialService]);

  /* Reset on close */
  useEffect(() => {
    if (!isOpen) { setSubmitted(false); setSubmitting(false); setForm(INIT(initialService)); }
  }, [isOpen]);

  if (!isOpen) return null;

  const set = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    /* Simulate network delay */
    setTimeout(() => {
      const ref = 'RFQ-LY-' + Math.floor(100000 + Math.random() * 900000);
      setRefCode(ref);
      setSubmitting(false);
      setSubmitted(true);
    }, 1400);
  };

  const handleClose = () => { onClose(); };

  const inputCls = `w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-[#f8fafc]
    focus:border-[#0B5ED7] focus:ring-2 focus:ring-blue-100 text-sm outline-none
    transition-all placeholder:text-slate-400`;

  const labelCls = 'block text-xs font-bold text-slate-700 mb-1.5';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-[#f0f3f9] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-300/60 relative max-h-[95vh] flex flex-col">

        {/* ── HEADER ── */}
        <div className="gradient-brand text-white px-7 py-6 relative shrink-0">
          {/* Close button — top end corner */}
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-4 end-4 bg-white/15 hover:bg-white/30 p-2 rounded-full transition-colors"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-200 uppercase tracking-widest mb-1">
            <Calculator className="w-3.5 h-3.5" />
            {isAr ? 'نموذج طلب عرض سعر رسمي' : 'Official Quote Request'}
          </div>
          <h3 className="text-[22px] font-black leading-tight">
            {isAr ? 'احصل على عرض سعر مخصص' : 'Request a Custom Quotation'}
          </h3>
          <p className="text-[12px] text-blue-100 mt-1 leading-relaxed">
            {isAr
              ? 'عبّئ التفاصيل أدناه وسيتواصل معك مهندس متخصص خلال 24 ساعة.'
              : 'Fill out your requirements and our engineering team will respond within 24 hours.'}
          </p>
        </div>

        {/* ── BODY ── */}
        <div className="overflow-y-auto flex-1 px-7 py-6">

          {/* ─── SUCCESS STATE ─── */}
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle className="w-11 h-11 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">
                  {isAr ? 'تم استلام طلبك!' : 'Request Received!'}
                </h4>
                <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                  {isAr
                    ? 'شكراً لتواصلك مع رواق الحداثة. رقم مرجعيتك الرسمية:'
                    : 'Thank you for choosing Rawaq Al-Hadatha. Your reference number:'}
                </p>
              </div>
              <div className="bg-white font-mono font-bold text-[#0B5ED7] text-xl px-8 py-3 rounded-2xl border border-blue-200 shadow-sm tracking-widest">
                {refCode}
              </div>
              <p className="text-xs text-slate-400">
                {isAr
                  ? 'تم إبلاغ فريق المبيعات والاستشارات الهندسية بطلبك.'
                  : 'Our sales & engineering team has been notified of your request.'}
              </p>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2 w-full justify-center">
                <button
                  onClick={handleClose}
                  className="gradient-brand text-white font-bold text-sm px-8 py-3 rounded-2xl shadow-md hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  {isAr ? 'إغلاق والعودة' : 'Close & Return'}
                </button>
                <a
                  href={`https://wa.me/218910000000?text=${encodeURIComponent(isAr ? `طلب عرض سعر - رقم المرجعية: ${refCode}` : `Quote Request - Ref: ${refCode}`)}`}
                  target="_blank" rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-2xl transition-colors flex items-center gap-2"
                >
                  {isAr ? 'متابعة عبر واتساب' : 'Follow up on WhatsApp'}
                </a>
              </div>
            </div>
          ) : (
            /* ─── FORM ─── */
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1: Name + Company */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{isAr ? 'الاسم الكامل *' : 'Full Name *'}</label>
                  <input type="text" required value={form.name} onChange={set('name')}
                    placeholder={isAr ? 'أدخل اسمك الكامل' : 'John Doe'}
                    className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{isAr ? 'الشركة / المؤسسة' : 'Company / Organisation'}</label>
                  <input type="text" value={form.company} onChange={set('company')}
                    placeholder={isAr ? 'اسم الجهة أو الشركة' : 'Company name (optional)'}
                    className={inputCls} />
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{isAr ? 'البريد الإلكتروني *' : 'Email Address *'}</label>
                  <input type="email" required value={form.email} onChange={set('email')}
                    placeholder="name@company.ly"
                    className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>{isAr ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}</label>
                  <input type="tel" required value={form.phone} onChange={set('phone')}
                    placeholder="+218 91 000 0000" dir="ltr"
                    className={inputCls} />
                </div>
              </div>

              {/* Row 3: Service + Budget */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>{isAr ? 'الخدمة المطلوبة *' : 'Service Required *'}</label>
                  <select value={form.service} onChange={set('service')} className={inputCls}>
                    {(isAr ? SERVICES_AR : SERVICES_EN).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{isAr ? 'الميزانية التقديرية' : 'Estimated Budget'}</label>
                  <select value={form.budget} onChange={set('budget')} className={inputCls}>
                    <option value="under-10k">{isAr ? 'أقل من $10,000'         : 'Under $10,000'}</option>
                    <option value="10k-50k">  {isAr ? '$10,000 – $50,000'      : '$10,000 – $50,000'}</option>
                    <option value="50k-200k"> {isAr ? '$50,000 – $200,000'     : '$50,000 – $200,000'}</option>
                    <option value="enterprise">{isAr ? 'مستوى المؤسسات الكبرى' : 'Enterprise Level'}</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Details */}
              <div>
                <label className={labelCls}>{isAr ? 'تفاصيل المشروع / الاحتياجات *' : 'Project Scope & Requirements *'}</label>
                <textarea
                  required rows={4}
                  value={form.details} onChange={set('details')}
                  placeholder={isAr
                    ? 'اشرح المتطلبات بالتفصيل — عدد الكاميرات، نقاط الشبكة، الموقع، المدة الزمنية...'
                    : 'Describe your requirements — number of cameras, network points, location, timeline...'}
                  className={inputCls + ' resize-none'}
                />
              </div>

              {/* ── ACTION BUTTONS ── */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200/80">
                {/* Security note */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{isAr ? 'بياناتك محمية ومشفرة 100%' : '100% Confidential & Secure'}</span>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 shrink-0">
                  {/* Cancel */}
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-5 py-2.5 rounded-2xl text-sm font-semibold text-slate-600 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all"
                  >
                    {isAr ? 'إلغاء' : 'Cancel'}
                  </button>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="gradient-brand text-white font-bold text-sm px-7 py-2.5 rounded-2xl shadow-lg hover:opacity-90 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>
                      {submitting
                        ? (isAr ? 'جارٍ الإرسال...' : 'Sending...')
                        : (isAr ? 'إرسال الطلب' : 'Submit Request')}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
