import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";

export const metadata = {
  title: "Privacy Policy — Make Your Presentation",
  description: "Privacy and confidential data protection policies of Make Your Presentation.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm prose prose-slate max-w-none">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: October 2026 • Make Your Presentation (MYP)
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">1. Overview & Commitment</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At {siteConfig.name} (MYP), we are committed to protecting your personal data, reference materials, textbooks, and business proposals. This policy describes how we collect, store, and safeguard your information.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">2. Information We Collect</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We collect information provided directly by you when submitting an inquiry or ordering a presentation: name, email address, phone number, WhatsApp contact number, presentation topic, and reference files (PDFs, PPTXs, DOCX, images).
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">3. Reference Files & Confidentiality</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            All user-uploaded reference materials, proprietary business plans, financial models, and research notes are strictly confidential. We do NOT publish, sell, or distribute customer-uploaded materials to third parties or publicly index them.
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">4. Communication</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We use your contact details solely to confirm requirements, share quotation details, provide draft previews, and deliver final presentation files via dashboard, email, or WhatsApp ({siteConfig.phone}).
          </p>

          <h2 className="text-lg font-bold text-slate-900 mt-6 mb-2">5. Contact Information</h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            For privacy inquiries or data requests, contact us at: <a href={`mailto:${siteConfig.email}`} className="text-blue-600">{siteConfig.email}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
