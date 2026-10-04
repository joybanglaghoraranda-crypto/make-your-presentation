import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  title: "Refund Policy — Make Your Presentation",
  description: "Satisfaction guarantee and refund terms of Make Your Presentation.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Refund Policy" }]} />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6 text-sm text-slate-700 leading-relaxed">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-slate-500">
            Effective Date: October 2026 • Make Your Presentation (MYP)
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">1. Cancellation Prior to Production</h2>
          <p className="text-xs sm:text-sm">
            If an order is cancelled while in the "Request Received" or "Requirement Review" stage before slide design work has commenced, a 100% full refund is issued immediately.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">2. Revision First Policy</h2>
          <p className="text-xs sm:text-sm">
            Because custom presentations involve bespoke research and labor, if a client is dissatisfied with a preview, our primary commitment is to address all requested adjustments through complimentary revision rounds.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">3. Non-Delivery or Major Discrepancy</h2>
          <p className="text-xs sm:text-sm">
            In the rare event that our team fails to deliver an agreed presentation by the specified deadline or deviates fundamentally from the written requirements, a full refund or credit will be granted.
          </p>

          <h2 className="text-lg font-bold text-slate-900 pt-2">4. Contact for Assistance</h2>
          <p className="text-xs sm:text-sm">
            To submit a dispute or cancellation, contact our support desk via WhatsApp at {siteConfig.phone} or email <a href={`mailto:${siteConfig.email}`} className="text-blue-600">{siteConfig.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
