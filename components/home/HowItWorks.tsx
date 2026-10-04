"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: "বিষয় নির্বাচন",
      desc: "লেভেল, শ্রেণি বা বিষয় বেছে নিন",
      icon: "🎯",
    },
    {
      num: "02",
      title: "চাহিদা জানান",
      desc: "স্লাইড সংখ্যা ও রেফারেন্স দিন",
      icon: "📝",
    },
    {
      num: "03",
      title: "স্লাইড তৈরি",
      desc: "অভিজ্ঞ ডিজাইনারদের হাতে নির্মাণ",
      icon: "🎨",
    },
    {
      num: "04",
      title: "প্রিভিউ ও রিভিশন",
      desc: "প্রিভিউ দেখে সংশোধন জানান",
      icon: "🔍",
    },
    {
      num: "05",
      title: "ফাইল গ্রহণ",
      desc: "PPTX ও PDF ফাইল বুঝে নিন",
      icon: "📥",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F8FB] border-t border-[#E2E6EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1456C8]">
            প্রক্রিয়া
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A63] font-heading">
            {t("howItWorksTitle")}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#E2E6EF] bg-white p-4 shadow-2xs transition-all hover:border-[#1456C8]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xl">{step.icon}</span>
                  <span className="text-sm font-black text-[#1456C8]/40 font-mono">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-3 text-sm font-bold text-[#0E1B33]">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-[#586480] leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1456C8] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0B2A63] transition-colors"
          >
            <span>{t("ctaCreate")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
