import { Suspense } from "react";
import { OrderWizard } from "@/components/order/OrderWizard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata = {
  title: "Order Presentation — Multi-Step Presentation Builder",
  description: "Configure your academic, business, or professional presentation requirements and receive a fast quote.",
};

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Presentation Order Builder" },
          ]}
        />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-blue-700">
            <span>Direct Ordering Engine</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Create Your Presentation
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Select your syllabus topic or describe your exact requirements. Our expert design team will handle research, structure, and visual storytelling.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-20 text-slate-500 font-medium">Loading Presentation Wizard...</div>}>
          <OrderWizard />
        </Suspense>
      </div>
    </div>
  );
}
