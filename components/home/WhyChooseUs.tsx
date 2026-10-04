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
      title: "নির্ভুল কন্টেন্ট",
      desc: "সিলেবাস ও তথ্যভিত্তিক",
    },
    {
      icon: <Palette className="h-5 w-5 text-[#1456C8]" />,
      title: "মডার্ন ডিজাইন",
      desc: "পরিচ্ছন্ন ও দৃষ্টিনন্দন",
    },
    {
      icon: <Clock className="h-5 w-5 text-[#17803F]" />,
      title: "দ্রুত ডেলিভারি",
      desc: "২৪-৪৮ ঘণ্টায় প্রাপ্তি",
    },
    {
      icon: <RotateCcw className="h-5 w-5 text-[#E86F00]" />,
      title: "ফ্রি রিভিশন",
      desc: "প্রয়োজনমতো পরিবর্তন",
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
            কেন MYP প্রেজেন্টেশন?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
