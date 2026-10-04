"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, GraduationCap, Briefcase, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function TargetAudiences() {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: <BookOpen className="h-5 w-5 text-[#1456C8]" />,
      badge: "শিক্ষক ও প্রভাষক",
      title: "শ্রেণিকক্ষের প্রাণবন্ত পাঠদান",
      bullets: [
        "সিলেবাস ও অধ্যায়ভিত্তিক স্লাইড",
        "সহজ ব্যাখ্যামূলক ডায়াগ্রাম ও চার্ট",
        "ইন-ক্লাস কুইজ ও শিক্ষকের নোট",
      ],
      link: "/order?purpose=Classroom+teaching",
      btnText: "ক্লাস প্রেজেন্টেশন",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-[#1456C8]" />,
      badge: "শিক্ষার্থী ও গবেষক",
      title: "কনফিডেন্ট প্রেজেন্টেশন ও ডিফেন্স",
      bullets: [
        "অ্যাসাইনমেন্ট ও সেমিনার স্লাইড",
        "থিসিস ডিফেন্স ও মেথডোলজি",
        "নির্ভুল সাইটেশন ও রেফারেন্স",
      ],
      link: "/order?purpose=Academic+project",
      btnText: "একাডেমিক প্রেজেন্টেশন",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-[#1456C8]" />,
      badge: "ব্যবসা ও টিম",
      title: "বিজনেস পিচ ও স্ট্র্যাটেজি",
      bullets: [
        "ইনভেস্টর পিচ ডেক ও প্ল্যান",
        "মার্কেটিং ও সেলস রোডম্যাপ",
        "কোম্পানি প্রোফাইল ও রিপোর্ট",
      ],
      link: "/order?category=business",
      btnText: "বিজনেস প্রেজেন্টেশন",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-[#E2E6EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1456C8]">
            কার জন্য আমাদের সেবা?
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A63] font-heading">
            শ্রেণিকক্ষ থেকে বোর্ডরুম — সবার জন্য মানসম্মত স্লাইড
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E6EF] bg-[#F7F8FB] p-5 transition-all hover:bg-white hover:border-[#1456C8] hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-9 w-9 rounded-lg bg-white border border-[#E2E6EF] flex items-center justify-center shadow-2xs">
                    {aud.icon}
                  </div>
                  <span className="text-xs font-bold text-[#1456C8] bg-[#E8F0FD] px-2.5 py-0.5 rounded-full">
                    {aud.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0E1B33] font-heading">
                  {aud.title}
                </h3>

                <ul className="mt-3.5 space-y-2 text-xs sm:text-sm text-[#586480]">
                  {aud.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-[#17803F] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E2E6EF]">
                <Link
                  href={aud.link}
                  className="flex items-center justify-between text-xs font-bold text-[#1456C8] hover:text-[#0B2A63]"
                >
                  <span>{aud.btnText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
