"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "যেকোনো বিষয়ের প্রেজেন্টেশন কি অর্ডার করা যায়?",
      a: "হ্যাঁ, স্কুল, কলেজ, বিশ্ববিদ্যালয়, মাদ্রাসা কিংবা ব্যবসার যেকোনো বিষয়ে অর্ডার করতে পারেন।",
    },
    {
      q: "পাঠ্যবই বা লেকচার নোট কি দেওয়া যাবে?",
      a: "হ্যাঁ, অর্ডার ফর্মে বা হোয়াটসঅ্যাপে আপনার বইয়ের ছবি, নোট বা PDF পাঠাতে পারবেন।",
    },
    {
      q: "স্লাইড সংখ্যা কি নির্ধারণ করা যায়?",
      a: "হ্যাঁ, ৫ থেকে ৪০+ স্লাইড অথবা আপনার প্রয়োজনমতো যেকোনো কাস্টম সংখ্যা নির্বাচন করতে পারেন।",
    },
    {
      q: "কোন ফরম্যাটে ফাইল ডেলিভারি দেওয়া হয়?",
      a: "সম্পূর্ণ এডিটেবল Microsoft PowerPoint (.pptx) এবং উচ্চমানের PDF ফাইল দেওয়া হয়।",
    },
    {
      q: "প্রয়োজনে কি সংশোধন (Revision) চাওয়া যাবে?",
      a: "হ্যাঁ, প্রিভিউ দেখে আপনার সন্তুষ্টি নিশ্চিত করতে ফ্রি রিভিশন সুবিধা রয়েছে।",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F7F8FB] border-t border-[#E2E6EF]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1456C8]">
            জিজ্ঞাসা
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#0B2A63] font-heading">
            সচরাচর কিছু প্রশ্ন
          </h2>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-[#E2E6EF] bg-white transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-4 text-left font-bold text-sm sm:text-base text-[#0E1B33] hover:text-[#1456C8] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#586480] transition-transform shrink-0 ml-2 ${
                      isOpen ? "rotate-180 text-[#1456C8]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-[#586480] leading-relaxed border-t border-[#E2E6EF]/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1456C8] hover:text-[#0B2A63]"
          >
            <span>সব সাধারণ প্রশ্ন দেখুন</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
