import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Layers, Atom, BookOpen, Briefcase, ArrowRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Higher Secondary & College Presentations (HSC Class 11–12) — Make Your Presentation",
  description: "Presentations for Class 11 & 12 HSC curricula: Physics, Chemistry, Biology, Higher Math, Accounting, Economics, and ICT.",
};

export default function CollegeEducationPage() {
  const collegeClasses = repository.getClasses("lvl-college");

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Education", href: "/education" },
            { label: "Higher Secondary / College (HSC 11–12)" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/70 px-3.5 py-1 text-xs font-bold text-purple-700">
            <Layers className="h-4 w-4" />
            <span>HSC College Curriculum (NCTB)</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Higher Secondary Presentations (Class 11 & 12)
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Rigorous, diagrammatic presentations designed for college lecturers and HSC students across Science, Business Studies, and Humanities streams.
          </p>
        </div>

        {/* Classes selector row */}
        <div className="mt-8 flex flex-wrap gap-3">
          {collegeClasses.map((cls) => (
            <div
              key={cls.id}
              className="rounded-2xl border border-purple-600 bg-purple-600 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-sm"
            >
              <span>{cls.name}</span>
              <span className="ml-1 opacity-80">({cls.name_bn})</span>
            </div>
          ))}
        </div>

        {/* 3 Main Streams */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Science */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-3">
                <Atom className="h-5 w-5" />
                <span>Science (বিজ্ঞান)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Physics (1st & 2nd Paper)
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Chemistry (1st & 2nd Paper)
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Biology (Botany & Zoology)
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Higher Mathematics & ICT
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <Link
                href="/order?level=College&group=Science"
                className="w-full flex items-center justify-center gap-1 rounded-xl bg-blue-600 py-2 text-xs font-bold text-white hover:bg-blue-700"
              >
                <span>Order HSC Science Deck</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Business Studies */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-3">
                <Briefcase className="h-5 w-5" />
                <span>Business Studies (ব্যবসায় শিক্ষা)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Accounting (1st & 2nd Paper)
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Finance, Banking & Insurance
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Business Organization & Management
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Production Management & Marketing
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <Link
                href="/order?level=College&group=Business+Studies"
                className="w-full flex items-center justify-center gap-1 rounded-xl bg-indigo-600 py-2 text-xs font-bold text-white hover:bg-indigo-700"
              >
                <span>Order HSC Business Deck</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Humanities */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-600 font-bold text-sm mb-3">
                <BookOpen className="h-5 w-5" />
                <span>Humanities (মানবিক)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Economics & Sociology
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Civics & Good Governance
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Islamic History & World History
                </li>
                <li className="p-2 rounded-lg bg-slate-50 border border-slate-100 font-medium">
                  Logic & Geography
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100">
              <Link
                href="/order?level=College&group=Humanities"
                className="w-full flex items-center justify-center gap-1 rounded-xl bg-purple-600 py-2 text-xs font-bold text-white hover:bg-purple-700"
              >
                <span>Order HSC Humanities Deck</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
