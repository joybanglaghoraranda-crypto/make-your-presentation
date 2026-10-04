import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  GraduationCap,
  School,
  BookOpen,
  Layers,
  ArrowRight,
  Sparkles,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Educational Curricula — School, College, University & Madrasa Presentations",
  description: "Browse education levels from Pre-Primary to University and Madrasa. Order syllabus-aligned lecture and study presentations.",
};

export default function EducationDirectoryPage() {
  const levels = repository.getEducationLevels();
  const systems = repository.getEducationSystems();

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Educational Curricula" }]} />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3 py-1 text-xs font-bold text-blue-700">
            <GraduationCap className="h-4 w-4" />
            <span>Curriculum Directory</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Educational Presentations by Level & Syllabus
          </h1>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Select your curriculum or educational level below to browse classes, subjects, chapters, and topics. Every slide is structured according to national curriculum guidelines and textbook standards.
          </p>
        </div>

        {/* Education Systems overview */}
        <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="text-slate-500 py-1">Active Systems:</span>
          {systems.map((s) => (
            <span
              key={s.id}
              className="rounded-full bg-white border border-slate-200 px-3 py-1 text-slate-700 shadow-sm"
            >
              {s.name}
            </span>
          ))}
        </div>

        {/* Main Levels Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {levels.map((lvl) => {
            const classes = repository.getClasses(lvl.id);
            return (
              <div
                key={lvl.id}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-400 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
                      <GraduationCap className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                      {classes.length > 0 ? `${classes.length} Classes/Stages` : "Multiple Disciplines"}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {lvl.name}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">
                    {lvl.name_bn}
                  </div>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                    {classes.slice(0, 4).map((c) => (
                      <div key={c.id} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{c.name} ({c.name_bn})</span>
                      </div>
                    ))}
                    {classes.length > 4 && (
                      <div className="text-slate-400 italic">+{classes.length - 4} more stages...</div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/education/${lvl.slug}`}
                    className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
                  >
                    <span>Browse Subjects</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href={`/order?level=${encodeURIComponent(lvl.name)}`}
                    className="rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    Order Deck
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Can't find banner */}
        <div className="mt-14 rounded-3xl border border-amber-200 bg-amber-50/70 p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-amber-950 flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="h-5 w-5 text-amber-600" />
              Can't find your specific educational board or subject?
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-amber-800">
              We create custom presentations for any syllabus, textbook, or academic department.
            </p>
          </div>
          <Link
            href="/custom-presentation"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-amber-700 shadow-md shrink-0"
          >
            <span>Request Custom Presentation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
