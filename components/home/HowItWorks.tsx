"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t("howItWorksStep1"),
      desc: t("howItWorksStep1Desc"),
      icon: "🎯",
    },
    {
      num: "02",
      title: t("howItWorksStep2"),
      desc: t("howItWorksStep2Desc"),
      icon: "📝",
    },
    {
      num: "03",
      title: t("howItWorksStep3"),
      desc: t("howItWorksStep3Desc"),
      icon: "🎨",
    },
    {
      num: "04",
      title: t("howItWorksStep4"),
      desc: t("howItWorksStep4Desc"),
      icon: "🔍",
    },
    {
      num: "05",
      title: t("howItWorksStep5"),
      desc: t("howItWorksStep5Desc"),
      icon: "📥",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3 py-1 text-xs font-bold text-blue-700">
            <span>Simple Production Process</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t("howItWorksTitle")}
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            From initial idea or textbook chapter to final polished PPTX presentation in 5 straightforward steps.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-xl font-black text-blue-600/30 font-mono">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="h-6 w-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-xs">
                    →
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            <span>{t("ctaCreate")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
