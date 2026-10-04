import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { School, BookOpen, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Primary School Presentations (Class 1–5) — Make Your Presentation",
  description: "NCTB syllabus aligned presentations for Primary School Classes 1 to 5. Science, Math, BGS, Bangla, English with interactive diagrams.",
};

export default function PrimaryEducationPage() {
  const primaryClasses = repository.getClasses("lvl-primary");
  const class5Subjects = repository.getSubjects("cls-5");
  const class5SciChapters = repository.getChapters("sub-cls5-sci");

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Education", href: "/education" },
            { label: "Primary School (Class 1–5)" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-blue-700">
            <School className="h-4 w-4" />
            <span>Primary Education Syllabus (NCTB)</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Primary School Presentations (Class 1 – 5)
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Child-friendly, visually intuitive classroom and teaching presentations designed specifically for young learners and primary school educators.
          </p>
        </div>

        {/* Classes selector row */}
        <div className="mt-8 flex flex-wrap gap-2">
          {primaryClasses.map((cls) => (
            <div
              key={cls.id}
              className={`rounded-2xl border px-4 py-2 text-xs font-bold transition-all ${
                cls.slug === "class-5"
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              <span>{cls.name}</span>
              <span className="ml-1 opacity-80">({cls.name_bn})</span>
            </div>
          ))}
        </div>

        {/* Spotlight: Class 5 Featured Subjects */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Class 5 Subjects & Chapter Catalogue
            </h2>
            <Link
              href="/order?level=Primary+School&class=Class+5"
              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
            >
              Order Any Class 5 Subject <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {class5Subjects.map((sub) => (
              <div
                key={sub.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                    {sub.code}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 text-base">
                    {sub.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {sub.name_bn}
                  </div>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">NCTB Text</span>
                  <Link
                    href={`/order?level=Primary+School&class=Class+5&subject=${encodeURIComponent(sub.name)}`}
                    className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white hover:bg-blue-700"
                  >
                    Order Subject
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Spotlight: Class 5 Elementary Science Chapters & Topics */}
        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="h-4 w-4" />
            <span>Curriculum Spotlight: Class 5 Science Chapters</span>
          </div>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">
            Elementary Science (প্রাথমিক বিজ্ঞান) Chapters & Ready Topics
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Click on any chapter or topic to jump straight into the order wizard with pre-filled context.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {class5SciChapters.map((chap) => {
              const topics = repository.getTopics(chap.id);
              return (
                <div
                  key={chap.id}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Chapter {chap.order}
                    </span>
                    <h4 className="mt-1 text-base font-bold text-slate-900">
                      {chap.name}
                    </h4>
                    <div className="text-xs text-slate-500 font-medium">
                      {chap.name_bn}
                    </div>
                    <p className="mt-2 text-xs text-slate-600">
                      {chap.description}
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Available Topics:
                      </div>
                      {topics.map((top) => (
                        <Link
                          key={top.id}
                          href={`/order?level=Primary+School&class=Class+5&subject=Elementary+Science&topic=${encodeURIComponent(top.name)}`}
                          className="flex items-center justify-between rounded-xl bg-white border border-slate-200 p-2 text-xs font-medium text-slate-800 hover:border-blue-400 hover:text-blue-600 transition-colors"
                        >
                          <span className="truncate">{top.name}</span>
                          <span className="font-mono text-[10px] text-slate-400 shrink-0">~{top.suggested_slides} slides</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60">
                    <Link
                      href={`/order?level=Primary+School&class=Class+5&subject=Elementary+Science&chapter=${encodeURIComponent(chap.name)}`}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-blue-50 py-2 text-xs font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <span>Order Whole Chapter Deck</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
