"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  School,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { repository } from "@/lib/db/repository";
import { useLanguage } from "@/lib/i18n/context";

export function CategoryCards() {
  const { t } = useLanguage();
  const levels = repository.getEducationLevels();
  const allSubjects = repository.getAllSubjects();

  const getSubjectCountForLevel = (levelId: string): number => {
    const classes = repository.getClasses(levelId);
    let count = 0;
    for (const cls of classes) {
      count += repository.getSubjects(cls.id).length;
      const grps = repository.getGroups(cls.id);
      for (const grp of grps) {
        count += repository.getSubjects(grp.id).length;
      }
    }
    // Return real count with base
    return count > 0 ? count : 8;
  };

  const getLevelIcon = (cat: string) => {
    switch (cat) {
      case "primary":
        return <School className="h-6 w-6 text-blue-600" />;
      case "secondary":
        return <BookOpen className="h-6 w-6 text-indigo-600" />;
      case "college":
        return <Layers className="h-6 w-6 text-purple-600" />;
      case "university":
        return <GraduationCap className="h-6 w-6 text-emerald-600" />;
      case "madrasa_alia":
      case "madrasa_qawmi":
        return <BookOpen className="h-6 w-6 text-teal-600" />;
      case "technical":
        return <Cpu className="h-6 w-6 text-cyan-600" />;
      default:
        return <GraduationCap className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
            <span>{t("navEducation")}</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t("catEducationTitle")}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t("catEducationDesc")}
          </p>
        </div>

        {/* Education Level Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {levels.map((lvl) => {
            const count = getSubjectCountForLevel(lvl.id);
            return (
              <div
                key={lvl.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/70 group-hover:scale-105 transition-transform">
                      {getLevelIcon(lvl.category)}
                    </div>
                    <span className="rounded-full bg-blue-100/70 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                      {count}+ Subjects
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {lvl.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">
                    {lvl.name_bn}
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
                    {lvl.category === "primary" && "Class 1–5: Elementary Science, Math, BGS, English & Moral Education."}
                    {lvl.category === "secondary" && "Class 6–10: Science, Humanities, Business Studies with chapters & diagrams."}
                    {lvl.category === "college" && "HSC Class 11–12: Physics, Chemistry, Biology, Higher Math & Business Accounting."}
                    {lvl.category === "university" && "Engineering, CSE, BBA, Law, Medical & Academic Research defense decks."}
                    {lvl.category === "madrasa_alia" && "Ibtedayi, Dakhil, Alim, Fazil, Kamil: Quran, Hadith, Fiqh & Modern subjects."}
                    {lvl.category === "madrasa_qawmi" && "Dars-e-Nizami: Noorani, Mishkat, Dawra-e-Hadith, Takhassus (Ifta) research."}
                    {lvl.category === "general" && "Early childhood, nursery, KG rhymes, phonics, basic vocabulary & math."}
                    {lvl.category === "technical" && "Polytechnic diplomas, computer technology, mechanical, electrical & trades."}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    href={`/education/${lvl.slug}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700"
                  >
                    <span>Explore Subjects</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/order?level=${encodeURIComponent(lvl.name)}`}
                    className="rounded-lg bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business & Professional Major Banners */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Business Presentation Card */}
          <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-8 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-indigo-500/20 p-2.5 border border-indigo-500/30 text-indigo-300">
                <Briefcase className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                Business & Executive
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">
              {t("catBusinessTitle")}
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-lg">
              {t("catBusinessDesc")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Investor Pitch Decks
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Business Plans
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Digital Marketing Strategy
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Company Profile
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/business"
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 transition-colors shadow-md"
              >
                <span>{t("businessCta")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Professional & Research Presentation Card */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950 p-8 text-white shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-purple-500/20 p-2.5 border border-purple-500/30 text-purple-300">
                <Layers className="h-6 w-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Professional & Academic
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-white">
              {t("catProfessionalTitle")}
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-lg">
              {t("catProfessionalDesc")}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Thesis & Dissertation Defense
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Academic Conferences
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                Corporate Training
              </span>
              <span className="rounded-full bg-slate-800/90 px-3 py-1 border border-slate-700 text-slate-300">
                NGO & Grants
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/professional"
                className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-purple-700 transition-colors shadow-md"
              >
                <span>{t("studentsCta")}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
