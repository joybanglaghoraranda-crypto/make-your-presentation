"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Presentation,
  Award,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function TargetAudiences() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
        {/* 1. TEACHER SECTION */}
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                <BookOpen className="h-3.5 w-3.5" />
                For Teachers & Lecturers
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {t("teachersTitle")}
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                {t("teachersSubtitle")}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Syllabus & Chapter Presentations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Interactive Diagrams & Visual Charts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Classroom Quizzes & Activities</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>Speaker Notes & Lesson Summaries</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/order?purpose=Classroom+teaching"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
                >
                  <span>{t("teachersCta")}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-lg">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Teacher Slide Package Preview
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-blue-700">
                    <span>1. Learning Outcomes</span>
                    <span>Slide 2</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">Clear behavioral objectives for the class period.</div>
                </div>
                <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-blue-900">
                    <span>2. Core Concept & Visual Breakdown</span>
                    <span>Slides 3–10</span>
                  </div>
                  <div className="text-xs text-slate-700 mt-1">Step-by-step diagrammatic explanation with minimal cognitive load.</div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-blue-700">
                    <span>3. In-Class Quiz & Summary</span>
                    <span>Slides 11–15</span>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">Active student participation prompts and review points.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. STUDENT & RESEARCH SECTION */}
        <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50/70 via-white to-slate-50 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 bg-white rounded-2xl border border-slate-200/80 p-5 shadow-lg">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Academic Defense Checklist
              </div>
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>Literature review synthesized into logical comparative frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>Experimental methodology flowchart & sample statistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>High-resolution vector charts & statistical analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5 shrink-0" />
                  <span>Academic citation standards (IEEE, APA, Harvard)</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">
                <GraduationCap className="h-3.5 w-3.5" />
                For Students & Researchers
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {t("studentsTitle")}
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                {t("studentsSubtitle")}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1.5">
                  Thesis / Dissertation Defense
                </span>
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1.5">
                  Academic Conference Presentations
                </span>
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1.5">
                  Project Defense & Viva Voce
                </span>
                <span className="rounded-lg bg-white border border-slate-200 px-3 py-1.5">
                  Internship Report Decks
                </span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/order?purpose=Research"
                  className="flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-bold text-white shadow-md hover:bg-purple-700 transition-colors"
                >
                  <span>{t("studentsCta")}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BUSINESS & STARTUP SECTION */}
        <div className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-white to-slate-50 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                <Briefcase className="h-3.5 w-3.5" />
                For Businesses & Founders
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                {t("businessTitle")}
              </h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                {t("businessSubtitle")}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm font-semibold text-slate-800">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600" />
                  <span>Investor Pitch Decks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600" />
                  <span>Business Model Proposals</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600" />
                  <span>Sales & Client Pitches</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-600" />
                  <span>Company Profiles & Annual Reviews</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/order?category=business"
                  className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-md hover:bg-indigo-700 transition-colors"
                >
                  <span>{t("businessCta")}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">
                Executive Structure
              </div>
              <h4 className="text-lg font-bold text-white">Investor-Grade Narrative Flow</h4>
              <p className="text-xs text-slate-400 mt-1">
                Engineered to convince investors, stakeholders, and high-value B2B enterprise clients.
              </p>

              <div className="mt-4 space-y-2 text-xs">
                <div className="rounded bg-slate-800 p-2 text-slate-300">
                  🎯 <strong className="text-white">The Problem & The Hook:</strong> Crisp market pain point
                </div>
                <div className="rounded bg-slate-800 p-2 text-slate-300">
                  💡 <strong className="text-white">Unique Solution & Tech:</strong> Proprietary moat
                </div>
                <div className="rounded bg-slate-800 p-2 text-slate-300">
                  📊 <strong className="text-white">Traction & Market Size:</strong> TAM, SAM, SOM
                </div>
                <div className="rounded bg-slate-800 p-2 text-slate-300">
                  💰 <strong className="text-white">Financials & The Ask:</strong> 3-year projections & runway
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
