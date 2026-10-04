"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

export function FinalCTA() {
  const { t } = useLanguage();
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation! I want to order a presentation.",
  });

  return (
    <section className="relative overflow-hidden bg-[#0B2A63] py-12 sm:py-16 text-white text-center">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-heading text-white">
          আপনার প্রেজেন্টেশন শুরু করতে প্রস্তুত?
        </h2>

        <p className="mt-2 text-sm sm:text-base text-blue-200">
          টপিক বা অধ্যায় জানান, বাকি কাজ আমাদের বিশেষজ্ঞ টিমের।
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1456C8] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-colors"
          >
            <span>{t("ctaCreate")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#17803F] px-5 py-3 text-sm font-bold text-white shadow-md hover:brightness-95 transition-colors"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>হোয়াটসঅ্যাপ: {siteConfig.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
