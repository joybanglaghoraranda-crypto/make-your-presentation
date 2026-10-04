import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import {
  Briefcase,
  TrendingUp,
  FileSpreadsheet,
  Rocket,
  Building2,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Business & Startup Presentations — Pitch Decks, Plans & Corporate Decks",
  description: "Executive presentation decks for startups, enterprises, and SMEs: Investor Pitch Decks, Business Plans, Marketing Strategies, and Financial Forecasts.",
};

export default function BusinessPresentationsPage() {
  const categories = repository.getBusinessCategories();
  const services = repository.getBusinessServices();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket className="h-6 w-6 text-indigo-600" />;
      case "FileSpreadsheet":
        return <FileSpreadsheet className="h-6 w-6 text-blue-600" />;
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="h-6 w-6 text-purple-600" />;
      case "BarChart3":
        return <BarChart3 className="h-6 w-6 text-amber-600" />;
      case "Building2":
        return <Building2 className="h-6 w-6 text-cyan-600" />;
      default:
        return <Briefcase className="h-6 w-6 text-indigo-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Business & Executive Presentations" },
          ]}
        />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100/70 px-3.5 py-1 text-xs font-bold text-indigo-800">
            <Briefcase className="h-4 w-4" />
            <span>Enterprise & Startup Services</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Business Presentations & Investor Decks
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Turn your business strategy, traction metrics, and vision into compelling, high-converting presentations engineered for investors, enterprise boards, and high-value clients.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category_id === cat.id);
            return (
              <div
                key={cat.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100/60">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                      Executive Deck
                    </span>
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
                        href={`/order?category=business&service=${encodeURIComponent(srv.name)}`}
                        className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-100 p-2.5 text-xs font-semibold text-slate-800 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                      >
                        <span className="truncate">{srv.name}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100">
                  <Link
                    href={`/order?category=business&subCategory=${encodeURIComponent(cat.name)}`}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 transition-colors"
                  >
                    <span>Order {cat.name} Presentation</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Business Deck CTA */}
        <div className="mt-14 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-bold text-indigo-300 border border-indigo-500/30">
              Confidential & NDA Protected
            </span>
            <h3 className="text-2xl font-bold mt-2 text-white">
              Need a Bespoke Corporate or Enterprise Presentation?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
              We work under non-disclosure agreements with corporate leadership, founders, and consultants on strategic acquisitions, bids, and board decks.
            </p>
          </div>
          <Link
            href="/order?category=business&purpose=Corporate+meeting"
            className="rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-indigo-500 transition-colors shadow-lg shrink-0"
          >
            Request Executive Deck
          </Link>
        </div>
      </div>
    </div>
  );
}
