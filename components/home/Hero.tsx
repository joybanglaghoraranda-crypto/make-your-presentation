"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  FileText,
  Play,
  CheckCircle2,
  PieChart,
  BarChart,
  BookOpen,
  GraduationCap,
  Layers,
  ChevronRight,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

export function Hero() {
  const { t, isRtl } = useLanguage();
  const [activeSlideTab, setActiveSlideTab] = useState<"education" | "business" | "madrasa">("education");

  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation Team! I would like to order a presentation.",
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 py-16 sm:py-24">
      {/* Background subtle geometric grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Core Value Proposition */}
          <div className="text-center lg:col-span-7 lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-bold text-blue-700 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{siteConfig.secondaryTagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              <span className="block text-slate-900">{t("tagline")}</span>
              <span className="mt-2 block bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Make Your Presentation
              </span>
            </h1>

            {/* Sub-headline / Description */}
            <p className="mt-5 text-base text-slate-600 sm:text-lg lg:max-w-2xl leading-relaxed">
              {t("heroDescription")}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <Link
                href="/order"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-95 transition-all"
              >
                <span>{t("ctaCreate")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/custom-presentation"
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-base font-bold text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-400 active:scale-95 transition-all"
              >
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>{t("ctaTellUs")}</span>
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 text-base font-bold text-emerald-800 shadow-sm hover:bg-emerald-100 transition-all"
              >
                <MessageCircle className="h-5 w-5 text-emerald-600 fill-emerald-600" />
                <span>{t("ctaWhatsApp")}</span>
              </a>
            </div>

            {/* Trust factors */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 lg:justify-start">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>NCTB & Academic Syllabus Aligned</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Bangla, English & Arabic Precision</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Free Revision Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Presentation Interface Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Presentation Stage Frame */}
              <div className="rounded-2xl border border-slate-200/90 bg-slate-900 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur">
                {/* Mockup Toolbar */}
                <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-slate-300">
                      MYP_Studio_Preview.pptx
                    </span>
                  </div>

                  {/* Switch between visual themes */}
                  <div className="flex items-center gap-1 rounded bg-slate-800 p-0.5 text-[10px]">
                    <button
                      onClick={() => setActiveSlideTab("education")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeSlideTab === "education" ? "bg-blue-600 text-white font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Education
                    </button>
                    <button
                      onClick={() => setActiveSlideTab("business")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeSlideTab === "business" ? "bg-indigo-600 text-white font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Business
                    </button>
                    <button
                      onClick={() => setActiveSlideTab("madrasa")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        activeSlideTab === "madrasa" ? "bg-emerald-600 text-white font-bold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Madrasa
                    </button>
                  </div>
                </div>

                {/* Central Slide Display Canvas */}
                <div className="aspect-[16/10] w-full rounded-xl bg-slate-950 p-5 text-white flex flex-col justify-between relative overflow-hidden border border-slate-800/80">
                  {/* Subtle slide watermark */}
                  <div className="absolute right-4 bottom-3 text-[10px] font-mono tracking-widest text-slate-600 uppercase">
                    Make Your Presentation • Production Slide
                  </div>

                  {activeSlideTab === "education" && (
                    <div className="animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-blue-500/20 px-2 py-0.5 text-[11px] font-bold text-blue-400 border border-blue-500/30">
                          Class 5 Science • Chapter 1
                        </span>
                        <span className="text-[11px] text-slate-400">Slide 4 of 15</span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                        Human Digestive System (পরিপাকতন্ত্র)
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        How food nutrients are broken down and absorbed for bodily energy.
                      </p>

                      {/* Educational Diagram Mock */}
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5 text-center">
                          <div className="text-xs font-bold text-blue-400">১. মুখগহ্বর ও খাদ্যনালী</div>
                          <div className="text-[10px] text-slate-400 mt-1">দাঁত ও লালা দ্বারা চর্বণ</div>
                        </div>
                        <div className="rounded-lg bg-blue-950/60 border border-blue-700/50 p-2.5 text-center">
                          <div className="text-xs font-bold text-blue-300">২. পাকস্থলী (Stomach)</div>
                          <div className="text-[10px] text-slate-300 mt-1">গ্যাস্ট্রিক রস ও এসিড ভাঙন</div>
                        </div>
                        <div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5 text-center">
                          <div className="text-xs font-bold text-blue-400">৩. ক্ষুদ্রান্ত্র ও বৃহদান্ত্র</div>
                          <div className="text-[10px] text-slate-400 mt-1">পুষ্টি উপাদান রক্তে শোষণ</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSlideTab === "business" && (
                    <div className="animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[11px] font-bold text-indigo-300 border border-indigo-500/30">
                          Seed Pitch Deck • Market Size
                        </span>
                        <span className="text-[11px] text-slate-400">Slide 6 of 18</span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                        $4.2B Total Addressable Market (TAM)
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Rapidly expanding B2B digital transformation across South Asia.
                      </p>

                      {/* Business Graph Mock */}
                      <div className="mt-4 flex items-end gap-2 h-20 pt-2 border-b border-slate-800 pb-1">
                        <div className="flex-1 bg-indigo-900/60 rounded-t h-40% flex items-center justify-center text-[9px] text-indigo-300">
                          2024
                        </div>
                        <div className="flex-1 bg-indigo-700/60 rounded-t h-65% flex items-center justify-center text-[9px] text-indigo-200">
                          2025
                        </div>
                        <div className="flex-1 bg-indigo-500 rounded-t h-95% flex items-center justify-center text-[9px] text-white font-bold">
                          2026 (Est)
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSlideTab === "madrasa" && (
                    <div className="animate-in fade-in duration-200">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                          تخصص في الإفتاء • Contemporary Fiqh
                        </span>
                        <span className="text-[11px] text-slate-400">Slide 8 of 25</span>
                      </div>

                      <h3 className="mt-3 text-lg font-bold text-white sm:text-xl" dir="rtl">
                        ضوابط المعاملات المالية المعاصرة
                      </h3>
                      <p className="mt-1 text-xs text-slate-300">
                        Islamic Jurisprudence Framework for Digital Finance and Modern Contracts.
                      </p>

                      {/* Madrasa Shariah Principles Mock */}
                      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                        <div className="rounded bg-slate-900 border border-slate-800 p-2">
                          <span className="text-emerald-400 font-bold">১. মূল নীতি:</span>
                          <span className="text-slate-300 text-[11px] block mt-0.5">الأصل في المعاملات الإباحة</span>
                        </div>
                        <div className="rounded bg-slate-900 border border-slate-800 p-2">
                          <span className="text-emerald-400 font-bold">২. সতর্কতা:</span>
                          <span className="text-slate-300 text-[11px] block mt-0.5">اجتناب الربا والغرر والميسر</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Slide controls footer */}
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-2 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Layers className="h-3 w-3 text-blue-400" />
                      HD Vector Illustrations • Custom Color Palette
                    </span>
                    <Link
                      href="/order"
                      className="font-bold text-blue-400 hover:text-blue-300 flex items-center gap-0.5"
                    >
                      Order Deck <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>

                {/* Filmstrip thumbnails */}
                <div className="mt-2 grid grid-cols-4 gap-1.5 px-1 py-1">
                  <div className="h-10 rounded bg-slate-800/90 border border-slate-700/60 p-1 flex items-center justify-center text-[9px] text-slate-400 font-mono">
                    01 Cover
                  </div>
                  <div className="h-10 rounded bg-blue-900/50 border border-blue-500/70 p-1 flex items-center justify-center text-[9px] text-blue-200 font-bold font-mono">
                    02 Agenda
                  </div>
                  <div className="h-10 rounded bg-slate-800/90 border border-slate-700/60 p-1 flex items-center justify-center text-[9px] text-slate-400 font-mono">
                    03 Body
                  </div>
                  <div className="h-10 rounded bg-slate-800/90 border border-slate-700/60 p-1 flex items-center justify-center text-[9px] text-slate-400 font-mono">
                    04 Quiz
                  </div>
                </div>
              </div>

              {/* Floating Pill Accent: Human Quality Assured */}
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-200 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Expert Presentation Studio</div>
                  <div className="text-[11px] text-slate-500">Every slide manually reviewed for accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
