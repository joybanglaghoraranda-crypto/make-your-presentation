"use client";

import React from "react";
import {
  BookOpenCheck,
  Palette,
  Languages,
  RotateCcw,
  CheckCircle,
  FileCheck,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <BookOpenCheck className="h-6 w-6 text-blue-600" />,
      title: "Subject-Specific Depth",
      desc: "Every slide is shaped with curriculum fidelity—from Primary NCTB textbooks to specialized university thesis methodologies.",
    },
    {
      icon: <Palette className="h-6 w-6 text-indigo-600" />,
      title: "Modern Professional Design",
      desc: "Balanced typography, high-resolution vector diagrams, custom color schemes, and clean layouts that avoid cognitive overload.",
    },
    {
      icon: <Languages className="h-6 w-6 text-emerald-600" />,
      title: "Multilingual Precision",
      desc: "Native typography and orthography in Bengali (বাংলা), English, Arabic (العربية with proper Tashkeel), and other languages.",
    },
    {
      icon: <RotateCcw className="h-6 w-6 text-amber-600" />,
      title: "Dedicated Revision Support",
      desc: "You can request targeted slide revisions until the final presentation fully aligns with your academic or business guidelines.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
      title: "Human Quality Control",
      desc: "No unverified automated text dumps. Each deck undergoes manual proofreading for spelling, logic, and visual consistency.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-purple-600" />,
      title: "Ready-to-Present PPTX & PDF",
      desc: "Delivered in fully editable Microsoft PowerPoint (.pptx) and Google Slides compatible formats, plus high-res PDF hand-outs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
            <span>Our Standards</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t("whyChooseUsTitle")}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            We focus on educational rigor, visual clarity, and dependable delivery to help you succeed in any presentation setting.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 transition-all hover:bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/60">
                {r.icon}
              </div>
              <h3 className="mt-4 font-bold text-slate-900 text-lg">
                {r.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
