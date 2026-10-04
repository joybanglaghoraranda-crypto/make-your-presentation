"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import {
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  Send,
  CheckCircle2,
  Clock,
  MapPin,
} from "lucide-react";
import { FacebookIcon } from "@/components/shared/Icons";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation Team! I am contacting you via your website contact page.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-100/70 px-3.5 py-1 text-xs font-bold text-blue-700">
            <span>Direct Support & Inquiries</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Contact Make Your Presentation
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Have questions about an upcoming presentation, bulk institution pricing, or syllabus requirements? Reach out directly via WhatsApp, phone, email, or our contact form.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 transition-all hover:bg-emerald-100 hover:shadow-md group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shrink-0 shadow-md">
                <MessageCircle className="h-6 w-6 fill-white" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Fastest Communication
                </div>
                <div className="text-lg font-bold text-emerald-950 group-hover:text-emerald-700">
                  WhatsApp Support
                </div>
                <div className="text-xs text-emerald-800 font-mono mt-0.5">
                  {siteConfig.phone}
                </div>
                <p className="mt-2 text-xs text-emerald-900/80">
                  Send your topic, audio note, or textbook photos for instant response.
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Direct Call
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-xs text-slate-500">
                  Direct helpline for urgent inquiries and order confirmation.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Official Email
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-1 text-xs text-slate-500">
                  Send institutional documents, research papers, and RFPs.
                </p>
              </div>
            </div>

            {/* Official Facebook Card */}
            <a
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300 transition-all group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shrink-0">
                <FacebookIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Official Page</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </div>
                <div className="text-base font-bold text-slate-900 group-hover:text-blue-600">
                  Facebook: Make Your Presentation
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Follow us for presentation design tips and platform updates.
                </p>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">
                Send Us a Message
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Fill out the details below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-in fade-in duration-200">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">
                    Message Sent Successfully
                  </h3>
                  <p className="mt-1 text-xs text-emerald-800 max-w-sm mx-auto">
                    Thank you, {name}! Our team has received your message and will respond via phone or email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 01711223344"
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. yourname@example.com"
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Class 8 Science / Bulk order question"
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your question, slide requirement, or timeline..."
                      className="w-full rounded-xl border border-slate-300 p-3 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white text-xs sm:text-sm hover:bg-blue-700 transition-colors shadow-md w-full sm:w-auto"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
