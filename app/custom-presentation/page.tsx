import { Suspense } from "react";
import { OrderWizard } from "@/components/order/OrderWizard";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Request a Custom Presentation — Make Your Presentation",
  description: "Can't find your subject or topic? Tell us what you need and our team will craft a tailored presentation deck.",
};

export default function CustomPresentationPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Custom Presentation Request" },
          ]}
        />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-bold text-amber-800 border border-amber-200">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Path B: Tell Us What You Need</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Can't Find What You Need?
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Tell us what you need. Our team can craft an exceptional presentation around your exact topic, syllabus, or raw notes.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-20 text-slate-500 font-medium">Loading Custom Form...</div>}>
          <OrderWizard />
        </Suspense>
      </div>
    </div>
  );
}
