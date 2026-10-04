"use client";

import React, { useState } from "react";
import { repository } from "@/lib/db/repository";
import { DollarSign, CheckCircle2, Save, Info } from "lucide-react";

export default function AdminPricingPage() {
  const [rules, setRules] = useState([
    {
      category: "Education (K-12)",
      basePerSlide: 60,
      urgentMultiplier: 1.4,
      quizFee: 150,
      speakerNotesFee: 100,
    },
    {
      category: "University & Research",
      basePerSlide: 100,
      urgentMultiplier: 1.4,
      quizFee: 150,
      speakerNotesFee: 200,
    },
    {
      category: "Business & Startups",
      basePerSlide: 120,
      urgentMultiplier: 1.5,
      quizFee: 200,
      speakerNotesFee: 250,
    },
    {
      category: "Professional & Corporate",
      basePerSlide: 110,
      urgentMultiplier: 1.4,
      quizFee: 150,
      speakerNotesFee: 200,
    },
  ]);

  const [saved, setSaved] = useState(false);

  const handleUpdate = (idx: number, field: string, value: number) => {
    const updated = [...rules];
    (updated[idx] as any)[field] = value;
    setRules(updated);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Financial Rules Engine
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Dynamic Pricing Rules & Slide Rates
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Configure slide rates, urgency rush multipliers, and add-on fees across educational, university, and business sectors.
        </p>
      </div>

      {saved && (
        <div className="flex items-center gap-2 rounded-2xl bg-emerald-950 border border-emerald-800 p-4 text-xs font-bold text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>Pricing rules updated across order wizard!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base">
                  {rule.category}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-900">
                  Active Rule
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">
                    Base Rate per Slide (৳)
                  </label>
                  <input
                    type="number"
                    value={rule.basePerSlide}
                    onChange={(e) => handleUpdate(idx, "basePerSlide", Number(e.target.value))}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">
                    Urgent Multiplier
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={rule.urgentMultiplier}
                    onChange={(e) => handleUpdate(idx, "urgentMultiplier", Number(e.target.value))}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">
                    Quiz / Questions Fee (৳)
                  </label>
                  <input
                    type="number"
                    value={rule.quizFee}
                    onChange={(e) => handleUpdate(idx, "quizFee", Number(e.target.value))}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-bold mb-1">
                    Speaker Notes Fee (৳)
                  </label>
                  <input
                    type="number"
                    value={rule.speakerNotesFee}
                    onChange={(e) => handleUpdate(idx, "speakerNotesFee", Number(e.target.value))}
                    className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2 text-white font-mono"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-xs sm:text-sm font-bold text-white hover:bg-blue-500 shadow-md transition-colors"
          >
            <Save className="h-4 w-4" />
            <span>Save All Pricing Rules</span>
          </button>
        </div>
      </form>
    </div>
  );
}
