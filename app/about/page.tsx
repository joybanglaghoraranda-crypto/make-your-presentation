import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";
import { ShieldCheck, Target, HeartHandshake, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us — Make Your Presentation (MYP)",
  description: "Make Your Presentation is an educational and professional presentation design platform helping educators, students, and businesses present better.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-blue-700">
              <span>Our Purpose & Standards</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl font-heading">
              About Make Your Presentation
            </h1>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex-none rounded-2xl border border-slate-200 bg-white p-4 shadow-md">
            <img
              src="/brand-full.webp"
              alt="Make Your Presentation Logo"
              width={220}
              height={170}
              className="h-auto w-48 object-contain"
            />
          </div>
        </div>

        {/* Narrative Box */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <h2 className="text-xl font-bold text-slate-900">
            Bridging Curriculum Understanding and Visual Communication
          </h2>
          <p>
            Educators spend countless unpaid hours struggling with software formatting instead of interacting with their students. Students lose marks in project defenses not because their research is weak, but because their slides are cluttered. Founders with high-potential business models fail to secure funding when their pitch decks lack narrative clarity.
          </p>
          <p>
            <strong>Make Your Presentation (MYP)</strong> was founded to solve this problem. We are not a generic design agency that pastes lorem ipsum text into decorative templates. We are a specialized presentation platform where curriculum researchers and designers collaborate to turn syllabus topics, research papers, and business models into clear, structured, and visually engaging slides.
          </p>

          <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700 mb-3">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Educational Rigor</h3>
              <p className="mt-1 text-xs text-slate-600">
                Aligning slides accurately with national curriculum textbooks, academic syllabi, and verified sources.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700 mb-3">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Client Respect</h3>
              <p className="mt-1 text-xs text-slate-600">
                Transparent slide-based pricing, punctual deadlines, and dedicated revision support.
              </p>
            </div>

            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Ethical Integrity</h3>
              <p className="mt-1 text-xs text-slate-600">
                We design structured presentations from your authentic notes and materials without fabricating claims.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
            Who We Serve
          </h2>
          <p>
            Our platform supports school teachers, students from Class 1 to university postgraduates, madrasa instructors, lecturers, academic researchers, trainers, startups, corporate leaders, and non-profit organizations.
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/order"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
          >
            <span>Create Your Presentation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
