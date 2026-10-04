"use client";

import React from "react";
import {
  BookOpenCheck,
  Palette,
  Languages,
  RotateCcw,
  Clock,
  FileCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <BookOpenCheck className="h-5 w-5 text-[#1456C8]" />,
      title: "সিলেবাস ভিত্তিক নির্ভুলতা",
      desc: "পাঠ্যবই ও সঠিক তথ্যের সমন্বয়",
    },
    {
      icon: <Palette className="h-5 w-5 text-[#1456C8]" />,
      title: "প্রিমিয়াম ভিজ্যুয়াল ডিজাইন",
      desc: "পরিচ্ছন্ন ও আন্তর্জাতিক মানের স্লাইড",
    },
    {
      icon: <Languages className="h-5 w-5 text-[#17803F]" />,
      title: "বাংলা, ইংরেজি ও আরবি",
      desc: "সঠিক বানান ও হরকতযুক্ত টেক্সট",
    },
    {
      icon: <RotateCcw className="h-5 w-5 text-[#E86F00]" />,
      title: "ফ্রি রিভিশন সুবিধা",
      desc: "পছন্দ অনুযায়ী পরিবর্তন নিশ্চিত",
    },
    {
      icon: <Clock className="h-5 w-5 text-[#1456C8]" />,
      title: "দ্রুত ও সময়নিষ্ঠ ডেলিভারি",
      desc: "২৪-৪৮ ঘণ্টার এক্সপ্রেস সার্ভিস",
    },
    {
      icon: <FileCheck className="h-5 w-5 text-[#17803F]" />,
      title: "এডিটেবল PPTX ও PDF",
      desc: "পাওয়ারপয়েন্ট ও হ্যান্ডআউট ফাইল",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-[#E2E6EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1456C8]">
            সুবিধাসমূহ
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A63] font-heading">
            কেন Make Your Presentation?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-[#E2E6EF] bg-[#F7F8FB] p-3.5 transition-all hover:bg-white hover:border-[#1456C8] hover:shadow-2xs"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-[#E2E6EF] shadow-2xs">
                {r.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#0E1B33]">
                  {r.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#586480] mt-0.5">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
