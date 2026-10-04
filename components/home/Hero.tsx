"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  FileCheck,
  Sparkles,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

const SLIDES = [
  {
    chip: "Class 8 Science",
    tag: "Class 8, Science",
    title: "Photosynthesis: how leaves make food",
    arabic: null,
    bullets: [
      "Chlorophyll captures sunlight",
      "Carbon dioxide + water become glucose + oxygen",
      "Stomata let gases move in and out",
    ],
    slideNumber: 4,
    diagramType: "leaf",
  },
  {
    chip: "Dakhil Hadith",
    tag: "Dakhil, Hadith",
    title: "Actions are judged by intentions",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ",
    bullets: [
      "Hadith of Umar ibn al-Khattab (RA)",
      "Sincerity (ikhlas) comes before action",
      "Reflection: set your niyyah today",
    ],
    slideNumber: 2,
    diagramType: "star",
  },
  {
    chip: "Class 5 Mathematics",
    tag: "Class 5, Mathematics",
    title: "Reading fractions on a pie",
    arabic: null,
    bullets: [
      "Denominator: equal parts in total",
      "Numerator: parts we take",
      "Here 3 of 4 parts are shaded",
    ],
    slideNumber: 7,
    diagramType: "pie",
  },
  {
    chip: "Pitch deck",
    tag: "Business, Startup pitch deck",
    title: "A market worth entering",
    arabic: null,
    bullets: [
      "Size of the market today",
      "Growth over the next four years",
      "The segment we enter first",
    ],
    slideNumber: 5,
    diagramType: "bars",
  },
];

function RenderSlideDiagram({ type }: { type: string }) {
  if (type === "leaf") {
    return (
      <svg viewBox="0 0 200 150" role="img" aria-label="Photosynthesis leaf diagram" className="w-full h-auto drop-shadow-sm">
        <circle cx="34" cy="32" r="15" fill="#E86F00" />
        <g stroke="#E86F00" strokeWidth="2" fill="none">
          <path d="M34 8v-6M34 62v-6M10 32H4M64 32h-6M17 15l-4-4M51 49l4 4M51 15l4-4M17 49l-4 4" />
        </g>
        <path d="M62 128C58 70 108 38 172 44C176 100 134 138 62 128Z" fill="#E8F0FD" stroke="#1456C8" strokeWidth="1.8" />
        <path d="M62 128C98 98 130 74 166 48" stroke="#1456C8" strokeWidth="1.8" fill="none" />
        <path d="M52 78l22 6" stroke="#E86F00" strokeWidth="2" fill="none" />
        <text x="6" y="96" fill="#0B2A63" className="font-bold text-[10px]">CO₂</text>
        <text x="146" y="28" fill="#0B2A63" className="font-bold text-[10px]">O₂</text>
        <text x="76" y="146" fill="#0B2A63" className="font-bold text-[10px]">Glucose</text>
      </svg>
    );
  }

  if (type === "star") {
    return (
      <svg viewBox="0 0 200 150" role="img" aria-label="Islamic 8-pointed star" className="w-full h-auto drop-shadow-sm">
        <g stroke="#1456C8" strokeWidth="1.8" fill="none">
          <rect x="56" y="26" width="88" height="88" />
          <rect x="56" y="26" width="88" height="88" transform="rotate(45 100 70)" />
          <circle cx="100" cy="70" r="30" />
          <circle cx="100" cy="70" r="52" opacity="0.35" />
        </g>
        <circle cx="100" cy="70" r="7" fill="#E86F00" />
      </svg>
    );
  }

  if (type === "pie") {
    return (
      <svg viewBox="0 0 200 150" role="img" aria-label="Fraction 3/4 pie diagram" className="w-full h-auto drop-shadow-sm">
        <circle cx="100" cy="72" r="54" fill="#E8F0FD" stroke="#1456C8" strokeWidth="1.8" />
        <path d="M100 72L100 18A54 54 0 1 1 46 72Z" fill="#1456C8" />
        <g stroke="#ffffff" strokeWidth="2.5">
          <path d="M100 18V126M46 72H154" />
        </g>
        <text x="68" y="146" fill="#0B2A63" className="font-bold text-[11px]">3/4 shaded</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 150" role="img" aria-label="Market growth chart" className="w-full h-auto drop-shadow-sm">
      <g fill="#1456C8">
        <rect x="28" y="96" width="26" height="40" opacity="0.35" rx="3" />
        <rect x="66" y="78" width="26" height="58" opacity="0.55" rx="3" />
        <rect x="104" y="54" width="26" height="82" opacity="0.8" rx="3" />
        <rect x="142" y="24" width="26" height="112" rx="3" />
      </g>
      <path d="M30 86L78 64L118 44L156 14" stroke="#E86F00" strokeWidth="2.5" fill="none" />
      <circle cx="156" cy="14" r="5" fill="#E86F00" />
      <path d="M16 138H184" stroke="#C9D1E0" strokeWidth="1.5" />
    </svg>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Auto-rotate every 5.6s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5600);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = SLIDES[activeSlideIndex];
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation! I would like to create a presentation.",
  });

  return (
    <section className="relative overflow-hidden bg-[#F7F8FB] py-10 sm:py-16 border-b border-[#E2E6EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6">
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#0B2A63] tracking-tight leading-[1.14]">
              {t("secondaryTagline")}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-[#586480] leading-relaxed max-w-xl">
              {t("heroDescription")}
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] rounded-xl bg-[#1456C8] px-6 py-2.5 text-base font-semibold text-white shadow-md hover:bg-[#0B2A63] active:scale-95 transition-all"
              >
                <span>{t("ctaCreate")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] rounded-xl border border-[#E2E6EF] bg-white px-5 py-2.5 text-base font-semibold text-[#0E1B33] hover:border-[#1456C8] hover:text-[#1456C8] active:scale-95 transition-all"
              >
                <span>{t("ctaTalkToUs")}</span>
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] rounded-xl bg-[#17803F] px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:brightness-95 active:scale-95 transition-all"
              >
                <MessageCircle className="h-4 w-4 fill-white" />
                <span>{t("ctaWhatsApp")}</span>
              </a>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-[#586480] font-medium">
              PPTX, PDF and image files. Bengali, English, Arabic and more.
            </p>

            {/* Trust factors */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#586480]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#17803F]" />
                <span>Textbook Syllabus Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#17803F]" />
                <span>Accurate Arabic Calligraphy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#17803F]" />
                <span>Free Revision Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Presentation Stage Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#E2E6EF] bg-white p-4 sm:p-5 shadow-[0_1px_2px_rgba(11,42,99,0.05),0_10px_28px_rgba(11,42,99,0.07)]">
              {/* Chips row */}
              <div className="flex flex-wrap gap-2 mb-3.5" role="group" aria-label="Sample slide options">
                {SLIDES.map((slide, idx) => {
                  const isSelected = activeSlideIndex === idx;
                  return (
                    <button
                      key={slide.chip}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`min-h-[36px] rounded-full px-3.5 py-1 text-xs sm:text-sm font-semibold transition-all border ${
                        isSelected
                          ? "bg-[#1456C8] border-[#1456C8] text-white shadow-sm"
                          : "bg-[#F7F8FB] border-[#E2E6EF] text-[#0E1B33] hover:border-[#1456C8]"
                      }`}
                    >
                      {slide.chip}
                    </button>
                  );
                })}
              </div>

              {/* 16:9 Presentation Slide Canvas */}
              <div className="aspect-[16/9] w-full rounded-xl bg-white border border-[#DDE3EE] p-4 sm:p-6 flex flex-col justify-between shadow-inner transition-all duration-300">
                {/* Slide Tag */}
                <div className="text-[11px] sm:text-xs font-bold text-[#1456C8] uppercase tracking-wider">
                  {currentSlide.tag}
                </div>

                {/* Slide Body */}
                <div className="my-auto grid grid-cols-12 items-center gap-4">
                  <div className="col-span-7">
                    <h3 className="font-heading text-base sm:text-xl font-bold text-[#0B2A63] leading-snug">
                      {currentSlide.title}
                    </h3>

                    {currentSlide.arabic && (
                      <p className="mt-1 text-base sm:text-xl font-bold text-[#E86F00] font-serif" dir="rtl">
                        {currentSlide.arabic}
                      </p>
                    )}

                    <ul className="mt-2.5 space-y-1 text-xs sm:text-sm text-[#0E1B33] list-disc list-inside">
                      {currentSlide.bullets.map((b, i) => (
                        <li key={i} className="leading-snug">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-5 flex items-center justify-center">
                    <RenderSlideDiagram type={currentSlide.diagramType} />
                  </div>
                </div>

                {/* Slide Footer */}
                <div className="flex items-center justify-between border-t border-[#E5E9F1] pt-2 text-[10px] sm:text-xs text-[#7A869E] font-medium">
                  <span>Make Your Presentation</span>
                  <span>Slide {currentSlide.slideNumber} of 15</span>
                </div>
              </div>

              {/* Stage Note */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#586480]">
                <span>Sample slide designs by our team</span>
                <span className="font-semibold text-[#1456C8]">Delivered as PPTX and PDF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
