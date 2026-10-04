"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Layers,
  School,
  BookOpen,
  ArrowRight,
  Cpu,
} from "lucide-react";
import { repository } from "@/lib/db/repository";
import { useLanguage } from "@/lib/i18n/context";

export function CategoryCards() {
  const { t } = useLanguage();
  const levels = repository.getEducationLevels();

  const getLevelIcon = (cat: string) => {
    switch (cat) {
      case "primary":
        return <School className="h-5 w-5 text-[#1456C8]" />;
      case "secondary":
        return <BookOpen className="h-5 w-5 text-[#1456C8]" />;
      case "college":
        return <Layers className="h-5 w-5 text-[#1456C8]" />;
      case "university":
        return <GraduationCap className="h-5 w-5 text-[#1456C8]" />;
      case "madrasa_alia":
      case "madrasa_qawmi":
        return <BookOpen className="h-5 w-5 text-[#17803F]" />;
      case "technical":
        return <Cpu className="h-5 w-5 text-[#E86F00]" />;
      default:
        return <GraduationCap className="h-5 w-5 text-[#1456C8]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header - Clean & Minimal */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1456C8]">
              {t("navEducation")}
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A63] font-heading">
              {t("catEducationTitle")}
            </h2>
          </div>
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1456C8] hover:text-[#0B2A63] transition-colors"
          >
            <span>সবগুলো দেখুন</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Scannable Grid: Minimal text, high visual clarity */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {levels.map((lvl) => (
            <Link
              key={lvl.id}
              href={`/education/${lvl.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-[#E2E6EF] bg-[#F7F8FB] p-4 transition-all hover:bg-white hover:border-[#1456C8] hover:shadow-md"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-[#E2E6EF] shadow-2xs group-hover:scale-105 transition-transform">
                  {getLevelIcon(lvl.category)}
                </div>

                <h3 className="mt-3 text-sm sm:text-base font-bold text-[#0E1B33] group-hover:text-[#1456C8] transition-colors leading-snug">
                  {lvl.name}
                </h3>
                <div className="text-xs text-[#586480] mt-0.5 font-medium">
                  {lvl.name_bn}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E6EF] flex items-center justify-between text-xs font-semibold text-[#1456C8]">
                <span>ব্রাউজ করুন</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Business & Professional Compact Tiles */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Business Tile */}
          <div className="rounded-2xl border border-[#E2E6EF] bg-[#F7F8FB] p-5 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#E8F0FD] text-[#1456C8] flex items-center justify-center">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B2A63] font-heading">
                  {t("catBusinessTitle")}
                </h3>
                <span className="text-xs text-[#586480]">পিচ ডেক, বিজনেস প্ল্যান ও স্ট্র্যাটেজি</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">পিচ ডেক</span>
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">বিজনেস প্ল্যান</span>
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">মার্কেটিং</span>
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">কোম্পানি প্রোফাইল</span>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E2E6EF]">
              <Link
                href="/business"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1456C8] hover:text-[#0B2A63]"
              >
                <span>সব বিজনেস সার্ভিস দেখুন</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Professional Tile */}
          <div className="rounded-2xl border border-[#E2E6EF] bg-[#F7F8FB] p-5 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#FFF0DD] text-[#E86F00] flex items-center justify-center">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B2A63] font-heading">
                  {t("catProfessionalTitle")}
                </h3>
                <span className="text-xs text-[#586480]">থিসিস ডিফেন্স, সেমিনার ও ট্রেনিং</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">থিসিস ডিফেন্স</span>
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">অ্যাকাডেমিক পেপার</span>
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">ট্রেনিং ডেক</span>
              <span className="rounded-md bg-white border border-[#E2E6EF] px-2 py-0.5 text-[#0E1B33]">কনফারেন্স</span>
            </div>

            <div className="mt-4 pt-3 border-t border-[#E2E6EF]">
              <Link
                href="/professional"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E86F00] hover:text-amber-800"
              >
                <span>সব প্রফেশনাল সার্ভিস দেখুন</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
