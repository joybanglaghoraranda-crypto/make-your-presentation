import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ArrowRight, CheckCircle2, DollarSign, Calculator, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";

export const metadata = {
  title: "Pricing & Quotation System — Make Your Presentation",
  description: "Transparent, flexible pricing for educational, business, and research presentations. Slide-based rates with free revision support.",
};

export default function PricingPage() {
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello! I would like to get a quote for a presentation.",
  });

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Pricing & Quotations" }]} />

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-blue-700">
            <span>Fair & Transparent Pricing</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Flexible, Value-Based Presentation Pricing
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We don't charge exorbitant enterprise retainers or lock you into rigid monthly subscriptions. You pay only for the exact slides and specialized research you need.
          </p>
        </div>

        {/* 3 Value Packages Breakdown */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Package 1: Educational / School */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-blue-400 transition-all">
            <div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                School & College
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Classroom Teaching Deck
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-xs font-semibold text-slate-500">Starting from</span>
                <span className="text-3xl font-black text-slate-900">৳60</span>
                <span className="text-xs text-slate-500">/ slide</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Ideal for primary and secondary school teachers and college lecturers.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>NCTB textbook and chapter aligned</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Labeled biological/physical diagrams</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Interactive 3-question student quiz</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Bangla or English typography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Editable PPTX & ready PDF</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <Link
                href="/order?category=education&purpose=Classroom+teaching"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white hover:bg-blue-700 shadow-md transition-colors"
              >
                <span>Order Classroom Deck</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Package 2: University / Research */}
          <div className="rounded-3xl border-2 border-purple-600 bg-white p-7 shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-purple-600 px-3.5 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">
                University & Research
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Thesis & Academic Defense
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-xs font-semibold text-slate-500">Starting from</span>
                <span className="text-3xl font-black text-slate-900">৳100</span>
                <span className="text-xs text-slate-500">/ slide</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Engineered for thesis defense, conference papers, and project presentations.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Literature review & methodology flowcharts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Statistical data graphs & tables</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>IEEE, APA, Harvard citation formatting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Speaker defense notes & key points</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Targeted revision support included</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <Link
                href="/order?category=professional&purpose=Thesis+defense"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-purple-600 py-3 text-xs font-bold text-white hover:bg-purple-700 shadow-md transition-colors"
              >
                <span>Order Thesis Deck</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Package 3: Business / Corporate */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all">
            <div>
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                Business & Corporate
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Investor Pitch & Strategy
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-xs font-semibold text-slate-500">Starting from</span>
                <span className="text-3xl font-black text-slate-900">৳120</span>
                <span className="text-xs text-slate-500">/ slide</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Crafted for founders raising capital, enterprise sales, and executive boards.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Investor pitch narrative structure (Problem to Ask)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Financial models, TAM/SAM/SOM market graphs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Modern corporate minimal aesthetics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Confidential NDA assurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>High-res vector icons and editable charts</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <Link
                href="/order?category=business&purpose=Investor+pitch"
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white hover:bg-indigo-700 shadow-md transition-colors"
              >
                <span>Order Pitch Deck</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing Factors Explanatory Box (Requirement 113) */}
        <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">
            How Exact Quotations Are Determined
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Our pricing is calculated objectively based on clear workload factors:
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-700">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="font-bold text-slate-900 block text-sm mb-1">1. Slide Count</span>
              Base slide rate scales with total length. Volume discounts apply on decks over 30 slides.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="font-bold text-slate-900 block text-sm mb-1">2. Research Depth</span>
              Whether we work from your finished raw notes or read entire academic chapters from scratch.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="font-bold text-slate-900 block text-sm mb-1">3. Custom Graphics</span>
              Custom biological/chemical diagrams, complex financial projections, or tailored vector art.
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="font-bold text-slate-900 block text-sm mb-1">4. Delivery Urgency</span>
              Standard 3–4 business days delivery vs expedited 24–48 hours priority rush.
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
            <span className="text-xs text-slate-500">
              Need multiple presentations for an entire school, department, or company?
            </span>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Request Institutional Bulk Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
