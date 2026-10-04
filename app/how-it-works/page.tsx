import Link from "next/link";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { ArrowRight, CheckCircle2, MessageCircle, FileCheck, Shield, Clock } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";

export const metadata = {
  title: "How It Works — Make Your Presentation (MYP)",
  description: "Learn how Make Your Presentation transforms your topic or textbook into professional lecture slides or pitch decks in 5 simple steps.",
};

export default function HowItWorksPage() {
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello! I would like to learn more about the presentation order process.",
  });

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "How It Works" }]} />

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-blue-700">
            <span>Production Workflow</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            How Make Your Presentation Works
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            We've streamlined presentation creation into a reliable, transparent 5-step workflow designed to save you hours of manual formatting.
          </p>
        </div>

        {/* 5 Detailed Steps Timeline */}
        <div className="mt-14 space-y-8">
          {[
            {
              step: "01",
              title: "Choose Your Syllabus or Service",
              desc: "Select your educational level (School, College, University, or Madrasa) or business category. If your topic is unique, choose 'Tell Us What You Need' for a completely freeform request.",
              points: [
                "Browse through hundreds of pre-mapped curriculum chapters",
                "Instant suggestion of optimal slide counts",
                "Works for Bangla, English, Arabic, and bilingual presentations",
              ],
            },
            {
              step: "02",
              title: "Specify Requirements & Upload Reference Files",
              desc: "Tell us the target audience, purpose, and key focal points. You can upload textbook scans, PDF lecture notes, Word documents, or image photos of your whiteboard notes.",
              points: [
                "Secure file upload supporting PDF, DOCX, PPTX, and high-res images",
                "Choose special features: Diagrams, Quizzes, Teacher notes, or Infographics",
                "Specify your delivery deadline (Standard or Rush)",
              ],
            },
            {
              step: "03",
              title: "Our Specialists Structure & Design the Deck",
              desc: "Our subject researchers synthesize the information and construct an outline. Then, presentation designers craft bespoke typography, vector illustrations, and visual hierarchies.",
              points: [
                "Subject-matter validation ensuring academic and factual accuracy",
                "Clean visual hierarchy with no cluttered walls of text",
                "Custom color palettes tailored to your institution or corporate brand",
              ],
            },
            {
              step: "04",
              title: "Inspect Preview & Request Revisions",
              desc: "You receive a preview to review before final delivery. If any adjustments to slide wording, diagram labels, or sequencing are needed, easily submit a revision request.",
              points: [
                "Dedicated revision request tracking in your customer dashboard",
                "Direct communication with our team via dashboard messages or WhatsApp",
                "Revisions handled quickly by our active design queue",
              ],
            },
            {
              step: "05",
              title: "Download Final High-Resolution Files",
              desc: "Download your completed presentation in editable Microsoft PowerPoint (.pptx), Google Slides compatible format, and high-resolution PDF for instant projection or printouts.",
              points: [
                "100% editable slides so you can make future tweaks anytime",
                "Permanent file backup in your customer dashboard",
                "Ready to present immediately with confidence",
              ],
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white font-mono font-black text-xl shrink-0 shadow-md">
                {item.step}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs font-medium text-slate-700">
                  {item.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-blue-200 bg-blue-50/70 p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to experience the simplest presentation workflow?
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-lg mx-auto">
            Get started in less than two minutes. No complicated software or subscriptions required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/order"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-md hover:bg-blue-700"
            >
              <span>Create Your Presentation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-5 py-3 font-bold text-emerald-800 hover:bg-emerald-50"
            >
              <MessageCircle className="h-5 w-5 text-emerald-600 fill-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
