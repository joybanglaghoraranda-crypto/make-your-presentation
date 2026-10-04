import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  Layers,
  GraduationCap,
  Presentation,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Professional & Academic Presentations — Research, Thesis, Training & NGOs",
  description: "Specialized presentation decks for researchers, thesis defenders, workshop facilitators, and non-profit organizations.",
};

export default function ProfessionalPresentationsPage() {
  const categories = repository.getProfessionalCategories();
  const services = repository.getProfessionalServices();

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Professional & Research Presentations" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-100/70 px-3.5 py-1 text-xs font-bold text-purple-800">
            <Layers className="h-4 w-4" />
            <span>Academic Defense & Corporate Workshops</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Professional & Research Presentations
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            High-precision presentations for academic conferences, postgraduate thesis defenses, professional employee training, and non-profit grant proposals.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category_id === cat.id);
            return (
              <div
                key={cat.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
                    <Layers className="h-6 w-6" />
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900 text-lg">
                    {cat.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {cat.name_bn}
                  </div>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {catServices.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/order?category=professional&service=${encodeURIComponent(srv.name)}`}
                        className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-xs font-semibold text-slate-800 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                      >
                        <span className="truncate">{srv.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <Link
                    href={`/order?category=professional&subCategory=${encodeURIComponent(cat.name)}`}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-purple-600 py-2.5 text-xs font-bold text-white hover:bg-purple-700 transition-colors"
                  >
                    <span>Order {cat.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Integrity Box (Requirement 129) */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>Academic Integrity & Citation Notice</span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-900">
            Ethical Research Presentation Standards
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our presentation specialists structure your original findings, notes, and research papers into clear, defensible visual narratives. We do not generate plagiarized academic work. Please review and verify all academic data, formulas, and institutional citation requirements prior to your final defense.
          </p>
        </div>
      </div>
    </div>
  );
}
