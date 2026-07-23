import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Contact({ lang }) {
  const isAr = lang === 'ar';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#dde3ef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Info & Location Map Box */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs mb-3">
                <Phone className="w-3.5 h-3.5" />
                <span>{isAr ? 'تواصل معنا مباشرة' : 'Direct Support Line'}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                {isAr ? 'نحن هنا لخدمتك 24/7' : 'Get in Touch with Our Engineers'}
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                {isAr
                  ? 'يسعدنا استقبال استفساراتكم وزيارتكم في مكاتبنا الرسمية أو التواصل الهاتفي المباشر.'
                  : 'Contact us for consultations, site audits, or technical support.'}
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-[#f0f3f9] border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{isAr ? 'العنوان والمقر الرئيسي' : 'Headquarters'}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{isAr ? 'طرابلس / بنغازي — دولة ليبيا' : 'Tripoli / Benghazi — Libya'}</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f3f9] border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{isAr ? 'الهاتف والواتساب الرسميان' : 'Phone & WhatsApp Hotline'}</h4>
                  <p className="text-xs font-mono font-bold text-blue-600 mt-0.5" dir="ltr">+218 91 000 0000 / +218 92 000 0000</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f3f9] border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{isAr ? 'البريد الإلكتروني الرسمى' : 'Official Email'}</h4>
                  <p className="text-xs font-mono text-slate-600 mt-0.5">info@rawaq.ly / support@rawaq.ly</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#f0f3f9] border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{isAr ? 'ساعات العمل الرسمية' : 'Working Hours'}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{isAr ? 'الأحد - الخميس: 8:00 ص - 5:00 م (طوارئ 24/7)' : 'Sun - Thu: 8:00 AM - 5:00 PM (24/7 Emergency)'}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <a
              href="https://wa.me/218910000000"
              target="_blank"
              rel="noreferrer"
              className="block p-5 rounded-2xl bg-emerald-600 text-white font-bold text-center shadow-lg hover:bg-emerald-700 transition-colors"
            >
              <div className="flex items-center justify-center gap-2 text-base">
                <MessageSquare className="w-5 h-5" />
                <span>{isAr ? 'محادثة مباشرة عبر الواتساب' : 'Chat Instantly on WhatsApp'}</span>
              </div>
            </a>
          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7 bg-[#f0f3f9] p-8 rounded-3xl border border-slate-300/60 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              {isAr ? 'أرسل لنا استفسارك المباشر' : 'Send Us a Quick Message'}
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg">{isAr ? 'تم إرسال الرسالة بنجاح!' : 'Message Sent Successfully!'}</h4>
                <p className="text-xs">{isAr ? 'سيتواصل معك مهندس العلاقات خلال الساعات القادمة.' : 'Our support engineering desk will respond shortly.'}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{isAr ? 'اسمك الكريم' : 'Your Name'}</label>
                    <input
                      type="text"
                      required
                      placeholder={isAr ? 'الاسم الثلاثي' : 'John Doe'}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-[#f8fafc] focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">{isAr ? 'رقم الهاتف' : 'Phone Number'}</label>
                    <input
                      type="tel"
                      required
                      placeholder="+218 91 000 0000"
                      dir="ltr"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-[#f8fafc] focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{isAr ? 'عنوان البريد الإلكتروني' : 'Email Address'}</label>
                  <input
                    type="email"
                    required
                    placeholder="info@example.ly"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-[#f8fafc] focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{isAr ? 'موضوع الرسالة' : 'Subject'}</label>
                  <input
                    type="text"
                    required
                    placeholder={isAr ? 'استفسار عن تركيب شبكة / كاميرات...' : 'Inquiry about networking / CCTV...'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-[#f8fafc] focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">{isAr ? 'تفاصيل الرسالة' : 'Message Body'}</label>
                  <textarea
                    rows={4}
                    required
                    placeholder={isAr ? 'اكتب استفسارك بالتفصيل...' : 'Type your detailed inquiry here...'}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-[#f8fafc] focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-brand text-white font-bold text-base py-3.5 rounded-2xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAr ? 'إرسال الرسالة الآن' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
