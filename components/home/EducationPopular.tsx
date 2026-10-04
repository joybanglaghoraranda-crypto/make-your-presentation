"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FileText, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

interface PopularItem {
  title: string;
  titleBn: string;
  category: string;
  slides: number;
  tags: string[];
  link: string;
}

export function EducationPopular() {
  const { t } = useLanguage();

  const popularList: PopularItem[] = [
    {
      title: "Class 5 Elementary Science: Human Body",
      titleBn: "৫ম শ্রেণি প্রাথমিক বিজ্ঞান: মানবদেহ ও পরিপাকতন্ত্র",
      category: "Primary Education",
      slides: 15,
      tags: ["NCTB Syllabus", "Bangla", "Labeled Diagrams"],
      link: "/order?level=Primary+School&class=Class+5&subject=Elementary+Science&topic=Human+Body+Organs+%26+Digestion",
    },
    {
      title: "Class 8 General Science: Photosynthesis",
      titleBn: "৮ম শ্রেণি বিজ্ঞান: সালোকসংশ্লেষণ প্রক্রিয়া",
      category: "Secondary Education",
      slides: 15,
      tags: ["Light & Dark Phases", "ATP Synthesis", "Quiz Slides"],
      link: "/order?level=Secondary&class=Class+8&subject=General+Science&topic=Photosynthesis+Process+and+Mechanism",
    },
    {
      title: "Class 9 Physics: Equations of Motion",
      titleBn: "৯ম শ্রেণি পদার্থবিজ্ঞান: গতির সমীকরণ ও গ্রাফ",
      category: "Secondary Science",
      slides: 20,
      tags: ["Velocity-Time Graph", "Derivations", "Formulas"],
      link: "/order?level=Secondary&class=Class+9&subject=Physics&topic=Equations+of+Linear+Motion+with+Graphs",
    },
    {
      title: "CSE: Database Normalization (1NF to BCNF)",
      titleBn: "সিএসই: ডেটাবেজ নরমালাইজেশন ও স্কিমা ম্যাপিং",
      category: "University Engineering",
      slides: 20,
      tags: ["Decomposition", "Functional Dependencies", "ER Models"],
      link: "/order?category=education&subject=Database+Management+Systems&topic=Normalization+%26+Functional+Dependencies",
    },
    {
      title: "Qawmi Takhassus: Contemporary Digital Finance Fiqh",
      titleBn: "কওমি তাখাসসুস (ইফতা): ডিজিটাল ফাইন্যান্স ও সমসাময়িক ফিকহ",
      category: "Qawmi Madrasa",
      slides: 25,
      tags: ["Shariah Review", "Arabic Quotations", "Murabaha"],
      link: "/order?level=Qawmi+Madrasa&class=Takhassus&subject=Takhassus+Fil+Ifta&topic=Contemporary+Fiqh+Issues+in+Digital+Finance",
    },
    {
      title: "Startup Seed Stage Investor Pitch Deck",
      titleBn: "স্টার্টআপ ইনভেস্টর পিচ ডেক (সিড ফান্ডিং)",
      category: "Business & Startup",
      slides: 15,
      tags: ["TAM/SAM/SOM", "Unit Economics", "Traction"],
      link: "/order?category=business&service=Investor+Pitch+Deck",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1456C8]">
              জনপ্রিয় প্রেজেন্টেশন
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A63] font-heading">
              বেশি অর্ডার হওয়া টপিক
            </h2>
          </div>

          <Link
            href="/education"
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#1456C8] hover:text-[#0B2A63]"
          >
            <span>সব বিষয় দেখুন</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {popularList.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-600">{item.category}</span>
                  <span className="flex items-center gap-1 font-mono text-slate-400">
                    <Clock className="h-3 w-3" /> ~{item.slides} slides
                  </span>
                </div>

                <h3 className="mt-3 font-bold text-slate-900 text-base leading-snug">
                  {item.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">{item.titleBn}</div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">৳{item.slides * 60} থেকে</span>
                <Link
                  href={item.link}
                  className="flex items-center gap-1 rounded-lg bg-[#1456C8] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#0B2A63] transition-colors"
                >
                  <span>অর্ডার করুন</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
