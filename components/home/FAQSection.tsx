"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  qBn: string;
  a: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "Can I order a presentation for any educational subject?",
      qBn: "আমি কি যেকোনো শিক্ষাক্রমের বিষয়ের প্রেজেন্টেশন অর্ডার করতে পারব?",
      a: "Yes. Our platform covers General Pre-Primary, Primary (Class 1–5), Secondary (Class 6–10), Higher Secondary (Class 11–12), University courses, Technical diplomas, and Madrasa education (Alia & Qawmi). If your specific course is not listed, you can submit a Custom Request.",
    },
    {
      q: "Can I upload my textbook, syllabus, or lecture notes?",
      qBn: "আমি কি আমার পাঠ্যবই, সিলেবাস বা লেকচার নোট আপলোড করতে পারব?",
      a: "Absolutely. During the order process, you can upload PDFs, Word documents, PowerPoint drafts, images, or textbook photos. Our team will read and structure your presentation directly from your materials.",
    },
    {
      q: "Can I request a specific number of slides?",
      qBn: "আমি কি নির্দিষ্ট সংখ্যক স্লাইডের জন্য অনুরোধ করতে পারব?",
      a: "Yes. You can select standard packages such as 5, 10, 15, 20, 25, 30, 40+ slides, or specify an exact custom slide count in the order wizard.",
    },
    {
      q: "Can you create presentations in Bengali (বাংলা)?",
      qBn: "আপনারা কি বাংলায় মানসম্মত প্রেজেন্টেশন তৈরি করেন?",
      a: "Yes, Bangla is our native primary language. We use correct Bengali orthography, appropriate fonts (such as Noto Sans Bengali/Kalpurush), and curriculum-accurate terminology.",
    },
    {
      q: "Can you create Arabic presentations with correct Tashkeel?",
      qBn: "আপনারা কি আরবি হরকতযুক্ত সহিহ প্রেজেন্টেশন তৈরি করেন?",
      a: "Yes. For Madrasa Alia, Qawmi, and Islamic Studies presentations, our Islamic specialists ensure correct Arabic Quranic verses, Hadith citations, and Fiqh texts with proper diacritical marks (Tashkeel).",
    },
    {
      q: "Can you design university research and thesis defense presentations?",
      qBn: "বিশ্ববিদ্যালয়ের থিসিস ডিফেন্স ও গবেষণার স্লাইড কি তৈরি করা হয়?",
      a: "Yes. We design high-level academic presentations for Undergraduate, Masters, MPhil, and PhD thesis defenses, including methodology diagrams, statistical charts, and citation formatting.",
    },
    {
      q: "Can I request business and investor pitch decks?",
      qBn: "ব্যবসার জন্য ইনভেস্টর পিচ ডেক ও বিজনেস প্ল্যান কি পাওয়া যায়?",
      a: "Yes. We create investor pitch decks, business proposals, marketing roadmaps, sales presentations, and corporate company profiles tailored for venture capitalists, banks, and clients.",
    },
    {
      q: "Can I request revisions if I need changes?",
      qBn: "কোনো পরিবর্তন প্রয়োজন হলে কি রিভিশন চাওয়া যাবে?",
      a: "Yes. Every order includes revision support. You can review the draft and submit specific slide numbers and instructions for our design team to update.",
    },
    {
      q: "How long does standard delivery take?",
      qBn: "ডেলিভারি পেতে সাধারণত কত সময় লাগে?",
      a: "Standard delivery is typically 2 to 4 business days depending on slide count and research requirements. For urgent deadlines, we offer an expedited delivery option.",
    },
    {
      q: "Can institutions or schools place bulk orders?",
      qBn: "স্কুল, কলেজ বা প্রতিষ্ঠান কি একসাথে একাধিক অর্ডারের জন্য যোগাযোগ করতে পারে?",
      a: "Yes. Educational institutions, training centers, and corporations can contact us for bulk curriculum conversion and institutional volume packages via WhatsApp or email.",
    },
    {
      q: "What final file formats are delivered?",
      qBn: "কোন কোন ফরম্যাটে ফাইনাল ফাইল ডেলিভারি দেওয়া হয়?",
      a: "You will receive an editable Microsoft PowerPoint (.pptx) file, a Google Slides compatible file, and a high-resolution PDF for instant projection or printouts.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3 py-1 text-xs font-bold text-blue-700">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about ordering, curriculum coverage, languages, and delivery.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span className="text-sm sm:text-base pr-4">
                    {faq.q}
                    <span className="block text-xs font-normal text-slate-500 mt-0.5">
                      {faq.qBn}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5 text-xs sm:text-sm leading-relaxed text-slate-600 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
