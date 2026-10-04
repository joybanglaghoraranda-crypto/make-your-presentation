"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

export function FinalCTA() {
  const { t } = useLanguage();
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation Team! I am ready to order a presentation deck.",
  });

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 py-20 text-white">
      {/* Background glow effects */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-xs font-bold text-blue-300 border border-blue-400/30">
          <Sparkles className="h-4 w-4" />
          <span>{siteConfig.name}</span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
          {t("finalCtaTitle")}
        </h2>
        <p className="mt-2 text-xl font-bold text-blue-300">
          {t("finalCtaDesc")}
        </p>

        <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          From basic school chapters to executive corporate roadmaps—send us your topic, syllabus, or raw notes today.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/order"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-base font-bold text-white shadow-xl shadow-blue-600/30 hover:bg-blue-500 active:scale-95 transition-all"
          >
            <span>{t("ctaCreate")}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-600/90 px-6 py-4 text-base font-bold text-white shadow-xl hover:bg-emerald-600 active:scale-95 transition-all"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            <span>{t("ctaWhatsApp")} ({siteConfig.phone})</span>
          </a>

          <Link
            href="/custom-presentation"
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 px-6 py-4 text-base font-bold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span>{t("ctaTellUs")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
