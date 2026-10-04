import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQSection } from "@/components/home/FAQSection";

export const metadata = {
  title: "Frequently Asked Questions (FAQ) — Make Your Presentation",
  description: "Find answers to questions about ordering presentations, curricula coverage, languages, revisions, turnaround times, and delivery formats.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />
        <FAQSection />
      </div>
    </div>
  );
}
