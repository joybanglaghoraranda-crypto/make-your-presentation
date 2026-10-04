import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, ScrollText, Layers } from "lucide-react";

export const metadata = {
  title: "Madrasa Education Presentations — Alia & Qawmi Curricula",
  description: "Specialized Islamic presentations for Alia Madrasa (Ibtedayi to Kamil) and Qawmi Madrasa (Noorani to Dawra & Takhassus in Ifta). Quran, Hadith, and Fiqh decks.",
};

export default function MadrasaEducationPage() {
  const aliaClasses = repository.getClasses("lvl-madrasa-alia");
  const qawmiClasses = repository.getClasses("lvl-madrasa-qawmi");

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Education", href: "/education" },
            { label: "Madrasa Education (মাদ্রাসা শিক্ষা)" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-100/70 px-3.5 py-1 text-xs font-bold text-teal-800">
            <BookOpen className="h-4 w-4" />
            <span>First-Class Islamic & Traditional Curricula</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Madrasa Education: Alia & Qawmi Presentations
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Separate, specialized academic frameworks for Alia Madrasa Board and Qawmi Dars-e-Nizami curricula. Created with Arabic calligraphy diacritics (Harakat), classical references, and contemporary Shariah research.
          </p>
        </div>

        {/* Section Notice */}
        <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-200/80 p-4 text-xs text-teal-900 flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0" />
          <span>
            Qawmi curriculum may vary by institution or board (Befaq, Ittehad, etc.). You can submit any custom Kitab or topic if yours is not explicitly listed below.
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SECTION A: ALIA MADRASA */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-teal-700 font-bold text-lg">
                  <ScrollText className="h-6 w-6" />
                  <span>A. Alia Madrasa (বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড)</span>
                </div>
                <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-bold text-teal-700">
                  Government Aligned
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600">
                Combined Islamic studies and modern sciences from primary to postgraduate:
              </p>

              <div className="mt-4 space-y-2.5">
                {aliaClasses.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-3 hover:bg-teal-50/50 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">
                        {cls.name} ({cls.name_bn})
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {cls.slug.includes("ibtedayi") && "Quran, Arabic, Fiqh, Science, Math, BGS"}
                        {cls.slug.includes("dakhil") && "Hadith, Fiqh, Arabic, Science/Arts electives"}
                        {cls.slug.includes("alim") && "Tafsir, Hadith, Fiqh, Balaghah, Mantiq"}
                        {cls.slug.includes("fazil") && "Degree level: Usul al-Fiqh, Islamic Philosophy"}
                        {cls.slug.includes("kamil") && "Masters: Specialization in Hadith, Tafsir, Fiqh"}
                      </div>
                    </div>

                    <Link
                      href={`/order?level=Alia+Madrasa&class=${encodeURIComponent(cls.name)}`}
                      className="rounded-lg bg-teal-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-700 shrink-0"
                    >
                      Order Deck
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href="/order?level=Alia+Madrasa"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-teal-50 py-2.5 text-xs font-bold text-teal-800 hover:bg-teal-600 hover:text-white transition-colors"
              >
                <span>Request Custom Alia Madrasa Presentation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* SECTION B: QAWMI MADRASA */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg">
                  <BookOpen className="h-6 w-6" />
                  <span>B. Qawmi Madrasa (দাওরায়ে হাদিস ও তাখাসসুস)</span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                  Dars-e-Nizami
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600">
                Traditional Islamic jurisprudence and Hadith disciplines from Noorani to Takhassus:
              </p>

              <div className="mt-4 space-y-2.5">
                {qawmiClasses.map((cls) => (
                  <div
                    key={cls.id}
                    className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-3 hover:bg-emerald-50/50 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-900 text-xs sm:text-sm">
                        {cls.name} ({cls.name_bn})
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {cls.slug.includes("noorani") && "Tajweed, Qaida, Hifzul Quran recitation"}
                        {cls.slug.includes("ibtidaiyah") && "Farsi, Basic Arabic grammar, Aqaid"}
                        {cls.slug.includes("mutawassitah") && "Nahw, Sarf, Quduri, Arabic Composition"}
                        {cls.slug.includes("sanawiyah") && "Hidayah, Usul al-Shashi, Balaghah"}
                        {cls.slug.includes("fazilat") && "Mishkat al-Masabih, Sharh al-Aqaid"}
                        {cls.slug.includes("dawra") && "Sihah Sittah: Bukhari, Muslim, Tirmidhi, Abu Dawood"}
                        {cls.slug.includes("takhassus") && "Ifta (Fatwa research), Ulum al-Hadith, Fiqh al-Mu'amalat"}
                      </div>
                    </div>

                    <Link
                      href={`/order?level=Qawmi+Madrasa&class=${encodeURIComponent(cls.name)}`}
                      className="rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800 shrink-0"
                    >
                      Order Deck
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link
                href="/order?level=Qawmi+Madrasa&class=Takhassus&subject=Takhassus+Fil+Ifta"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-emerald-50 py-2.5 text-xs font-bold text-emerald-900 hover:bg-emerald-700 hover:text-white transition-colors"
              >
                <span>Order Specialized Ifta / Hadith Research Deck</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
