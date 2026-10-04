import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  title: "Terms and Conditions — Make Your Presentation",
  description: "Terms and conditions governing presentation design services and order fulfillment.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500">
            Effective Date: October 2026 • Make Your Presentation (MYP)
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">1. Scope of Presentation Services</h2>
          <p className="text-xs sm:text-sm">
            {siteConfig.name} provides presentation structuring, research synthesis, and visual slide design for educators, students, professionals, and businesses. We deliver editable PowerPoint (.pptx) and PDF files tailored to user specifications.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">2. Revisions & Approvals</h2>
          <p className="text-xs sm:text-sm">
            Orders include designated slide revision rounds. Clients must review draft previews promptly and submit consolidated feedback identifying specific slide numbers and text adjustments.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">3. Academic Responsibility</h2>
          <p className="text-xs sm:text-sm">
            For academic and university thesis presentations, users are solely responsible for ensuring citations, scientific findings, and institutional requirements comply with their school or university honor codes.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">4. Payment & Delivery</h2>
          <p className="text-xs sm:text-sm">
            Quotations are confirmed after requirement review. Full delivery of unwatermarked, editable presentations is made following payment verification.
          </p>
        </div>
      </div>
    </div>
  );
}
