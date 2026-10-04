import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  GraduationCap,
  Cpu,
  Briefcase,
  Atom,
  Scale,
  Stethoscope,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "University & Higher Academic Presentations — Engineering, CSE, BBA, Medical & Law",
  description: "Academic presentations for University faculties: Engineering (CSE, EEE), Business (BBA, MBA), Science, Law, Medical, and Thesis Defense.",
};

export default function UniversityEducationPage() {
  const faculties = repository.getUniversityFaculties();
  const departments = repository.getUniversityDepartments();
  const courses = repository.getUniversityCourses();

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Education", href: "/education" },
            { label: "University & Higher Academic" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-bold text-emerald-800">
            <GraduationCap className="h-4 w-4" />
            <span>Undergraduate, Postgraduate & Research Modules</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            University Presentations by Faculty & Department
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Architected specifically for university disciplines. Choose your faculty, department, or course module, or order custom thesis defense decks.
          </p>
        </div>

        {/* Hierarchy note */}
        <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-4 text-xs text-slate-600 flex items-center gap-3">
          <span className="font-bold text-slate-900">Academic Hierarchy:</span>
          <span>Faculty → Department → Program (BSc/BBA/BA) → Semester Course → Topic / Thesis</span>
        </div>

        {/* Faculties Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((fac) => {
            const facDepts = departments.filter((d) => d.faculty_id === fac.id);
            return (
              <div
                key={fac.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600">
                      {facDepts.length} Departments
                    </span>
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900 text-lg">
                    {fac.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {fac.name_bn}
                  </div>

                  <div className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {facDepts.map((d) => (
                      <div key={d.id} className="flex items-center gap-1.5 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span>{d.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/order?category=education&faculty=${encodeURIComponent(fac.name)}`}
                    className="flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <span>Order Faculty Deck</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured CSE & Engineering Courses Spotlight */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Department Spotlight: Computer Science & Engineering (CSE)
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                Featured Undergraduate Engineering Courses
              </h3>
            </div>
            <Link
              href="/order?category=education&department=CSE"
              className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              Order CSE Deck <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {courses.map((crs) => (
              <div
                key={crs.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 flex flex-col justify-between hover:bg-white hover:border-emerald-300 transition-all"
              >
                <div>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 font-mono">
                    {crs.code}
                  </span>
                  <h4 className="mt-2 font-bold text-slate-900 text-sm">
                    {crs.name}
                  </h4>
                  <div className="text-[11px] text-slate-500 capitalize mt-1">
                    Level: {crs.level}
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200/60">
                  <Link
                    href={`/order?category=education&subject=${encodeURIComponent(crs.name)}`}
                    className="flex items-center justify-between text-xs font-bold text-emerald-700 hover:underline"
                  >
                    <span>Create Presentation</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thesis Defense Presentation Special Card */}
        <div className="mt-10 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-950 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
              Graduation & Defense
            </span>
            <h3 className="text-2xl font-bold mt-2 text-white">
              Undergraduate & Master's Thesis Defense Presentations
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              Methodology diagrams, literature synthesis, experimental results, statistical charts, and APA/IEEE reference slides.
            </p>
          </div>
          <Link
            href="/order?purpose=Thesis+defense&slideCount=25"
            className="rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shrink-0"
          >
            Order Thesis Deck
          </Link>
        </div>
      </div>
    </div>
  );
}
