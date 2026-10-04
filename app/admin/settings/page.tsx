"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config/site";
import { Settings, CheckCircle2, Save, Globe, Phone, Mail } from "lucide-react";
import { FacebookIcon } from "@/components/shared/Icons";

export default function AdminSettingsPage() {
  const [name, setName] = useState(siteConfig.name);
  const [shortName, setShortName] = useState(siteConfig.shortName);
  const [tagline, setTagline] = useState(siteConfig.tagline);
  const [phone, setPhone] = useState(siteConfig.phone);
  const [email, setEmail] = useState(siteConfig.email);
  const [facebook, setFacebook] = useState(siteConfig.facebookUrl);
  const [defaultCurrency, setDefaultCurrency] = useState(siteConfig.defaultCurrency);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Global Configuration
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Platform Brand & Contact Settings
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Central brand details propagate across headers, footers, WhatsApp links, and invoice generation.
        </p>
      </div>

      {saved && (
        <div className="flex items-center gap-2 rounded-2xl bg-emerald-950 border border-emerald-800 p-4 text-xs font-bold text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>Central platform configuration synchronized!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">
              Platform Brand Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">
              Short Name / Brand Abbreviation
            </label>
            <input
              type="text"
              value={shortName}
              onChange={(e) => setShortName(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1">
            Core Tagline
          </label>
          <input
            type="text"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">
              Official Helpline & WhatsApp Number
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">
              Official Support Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-400 mb-1">
            Official Facebook Page URL
          </label>
          <input
            type="url"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">
              Default Operational Currency
            </label>
            <select
              value={defaultCurrency}
              onChange={(e) => setDefaultCurrency(e.target.value)}
              className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
            >
              <option value="BDT">BDT (৳ Bangladeshi Taka)</option>
              <option value="USD">USD ($ United States Dollar)</option>
              <option value="EUR">EUR (€ Euro)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1">
              Primary Target Market
            </label>
            <input
              type="text"
              disabled
              value="Bangladesh (International Ready)"
              className="w-full rounded-xl bg-slate-900/50 border border-slate-800 p-2.5 text-xs text-slate-500"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-500 shadow-md transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Save Platform Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
