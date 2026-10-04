import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { BookOpen, Layers, ArrowRight, CheckCircle2, Atom, Sparkles } from "lucide-react";

export const metadata = {
  title: "Secondary Education Presentations (Class 6–10) — Science, Humanities, Business Studies",
  description: "Presentations for Class 6 to 10 NCTB syllabus: Science, Physics, Chemistry, Biology, Higher Math, Accounting, and Humanities.",
};

export default function SecondaryEducationPage() {
  const secondaryClasses = repository.getClasses("lvl-secondary");
  const class8Subjects = repository.getSubjects("cls-8");
  const class9Groups = repository.getGroups("cls-9");

  const science9Subs = repository.getSubjects("grp-sci-9");
  const business9Subs = repository.getSubjects("grp-bus-9");

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Education", href: "/education" },
            { label: "Secondary School (Class 6–10)" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-3.5 py-1 text-xs font-bold text-indigo-700">
            <BookOpen className="h-4 w-4" />
            <span>Secondary & High School Curriculum</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Secondary School Presentations (Class 6 – 10)
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Detailed, diagrammatic, and formula-rich presentations for junior secondary (Class 6–8) and specialized Class 9–10 academic streams (Science, Humanities, and Business Studies).
          </p>
        </div>

        {/* Classes selector row */}
        <div className="mt-8 flex flex-wrap gap-2">
          {secondaryClasses.map((cls) => (
            <div
              key={cls.id}
              className={`rounded-2xl border px-4 py-2 text-xs font-bold transition-all ${
                cls.slug === "class-9" || cls.slug === "class-8"
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              <span>{cls.name}</span>
              <span className="ml-1 opacity-80">({cls.name_bn})</span>
            </div>
          ))}
        </div>

        {/* Class 8 Spotlight */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Class 8 Subjects (JSC / Junior Secondary)
            </h2>
            <Link
              href="/order?level=Secondary&class=Class+8"
              className="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1"
            >
              Order Class 8 Deck <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {class8Subjects.map((sub) => (
              <div
                key={sub.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="rounded-md bg-indigo-50 px-2 py-0.5 font-mono text-[10px] font-bold text-indigo-700">
                    {sub.code}
                  </span>
                  <h3 className="mt-2 font-bold text-slate-900 text-base">
                    {sub.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">
                    {sub.name_bn}
                  </div>
                  <p className="mt-2 text-xs text-slate-600">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Class 8 Syllabus</span>
                  <Link
                    href={`/order?level=Secondary&class=Class+8&subject=${encodeURIComponent(sub.name)}`}
                    className="rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white hover:bg-indigo-700"
                  >
                    Select Subject
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class 9-10 Group Streams Spotlight */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            Class 9 & 10 Academic Streams (গ্রুপভিত্তিক বিষয়সমূহ)
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Admin configurable streams with compulsory and elective subjects.
          </p>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Science Group */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-4">
                <Atom className="h-5 w-5" />
                <span>Science Stream (বিজ্ঞান বিভাগ)</span>
              </div>

              <div className="space-y-3">
                {science9Subs.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3 hover:bg-blue-50/50 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-800 text-sm">{sub.name} ({sub.name_bn})</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{sub.description}</div>
                    </div>
                    <Link
                      href={`/order?level=Secondary&class=Class+9&group=Science&subject=${encodeURIComponent(sub.name)}`}
                      className="rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white hover:bg-blue-700 shrink-0"
                    >
                      Order
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Studies Group */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-4">
                <Layers className="h-5 w-5" />
                <span>Business Studies (ব্যবসায় শিক্ষা)</span>
              </div>

              <div className="space-y-3">
                {business9Subs.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3 hover:bg-indigo-50/50 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-800 text-sm">{sub.name} ({sub.name_bn})</div>
                      <div className="text-xs text-slate-500 line-clamp-1">{sub.description}</div>
                    </div>
                    <Link
                      href={`/order?level=Secondary&class=Class+9&group=Business+Studies&subject=${encodeURIComponent(sub.name)}`}
                      className="rounded-lg bg-indigo-600 px-3 py-1 text-xs font-bold text-white hover:bg-indigo-700 shrink-0"
                    >
                      Order
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
