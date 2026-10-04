"use client";

import React, { useState } from "react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { useLanguage } from "@/lib/i18n/context";
import { supportedLanguages } from "@/lib/config/site";
import { User, Globe, Bell, CheckCircle2, Shield } from "lucide-react";

export default function ProfilePage() {
  const { language, setLanguage } = useLanguage();
  const [name, setName] = useState("Md. Rafiqul Islam");
  const [email, setEmail] = useState("rafiqul.teacher@gmail.com");
  const [phone, setPhone] = useState("01711223344");
  const [institution, setInstitution] = useState("Dhaka Government High School");
  const [role, setRole] = useState("Senior Science Teacher");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Profile & Preferences" },
          ]}
        />

        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Account Profile & Preferences
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Manage your personal contact info, institution affiliation, and default platform language.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
          {saved && (
            <div className="mb-6 flex items-center gap-2 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-xs font-bold text-emerald-800">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Your profile preferences have been updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Primary Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Institution / School / Organization
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Language Preferences */}
            <div className="border-t border-slate-100 pt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Preferred Interface Language
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {supportedLanguages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => setLanguage(l.code as any)}
                    className={`flex items-center justify-between rounded-xl border p-3 text-xs font-bold transition-all ${
                      language === l.code
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{l.name}</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">{l.code}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Data secured with SSL and Row Level Security.
              </span>
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-md"
              >
                Save Preferences
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
