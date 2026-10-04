"use client";

import React, { useState } from "react";
import { repository } from "@/lib/db/repository";
import {
  GraduationCap,
  ChevronDown,
  ChevronRight,
  Plus,
  Edit,
  Trash2,
  CheckCircle2,
  Layers,
  BookOpen,
  School,
  FolderTree,
} from "lucide-react";

export default function AdminCurriculumPage() {
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({
    "bangladesh": true,
    "general": true,
    "secondary": true,
    "cls-9": true,
    "grp-sci-9": true,
    "madrasa": true,
    "qawmi": true,
    "cls-qawmi-takhassus": true,
  });

  const [activeTab, setActiveTab] = useState<"general" | "madrasa">("general");

  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [newSubName, setNewSubName] = useState("");
  const [newSubBn, setNewSubBn] = useState("");
  const [newSubCode, setNewSubCode] = useState("");
  const [selectedParentId, setSelectedParentId] = useState("cls-5");
  const [successMsg, setSuccessMsg] = useState("");

  const toggleNode = (nodeKey: string) => {
    setOpenNodes((prev) => ({ ...prev, [nodeKey]: !prev[nodeKey] }));
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;

    repository.addSubject({
      parent_id: selectedParentId,
      name: newSubName,
      name_bn: newSubBn || newSubName,
      code: newSubCode,
      category: "general",
    });

    setSuccessMsg(`Subject "${newSubName}" added to curriculum tree successfully!`);
    setIsAddingSubject(false);
    setNewSubName("");
    setNewSubBn("");
    setNewSubCode("");
    setTimeout(() => setSuccessMsg(""), 3500);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Curriculum Architecture
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Visual Curriculum Management Tree
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Database-first hierarchy management. Expand or collapse branches to edit subjects, chapters, and topics.
          </p>
        </div>

        <button
          onClick={() => setIsAddingSubject(true)}
          className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shrink-0 shadow-md"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Subject</span>
        </button>
      </div>

      {successMsg && (
        <div className="flex items-center gap-2 rounded-2xl bg-emerald-950 border border-emerald-800 p-4 text-xs font-bold text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Curriculum View Switcher */}
      <div className="flex gap-2 border-b border-slate-800 pb-3 text-xs font-bold">
        <button
          onClick={() => setActiveTab("general")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
            activeTab === "general"
              ? "bg-blue-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-900"
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          <span>General Education (NCTB K-12)</span>
        </button>

        <button
          onClick={() => setActiveTab("madrasa")}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
            activeTab === "madrasa"
              ? "bg-teal-600 text-white shadow-md"
              : "text-slate-400 hover:text-white hover:bg-slate-900"
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>Madrasa Education (Alia & Qawmi)</span>
        </button>
      </div>

      {/* Interactive Tree View Box (Requirements 157 & 158) */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 font-mono text-xs shadow-xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-400">
          <span className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
            <FolderTree className="h-4 w-4 text-emerald-400" />
            <span>Interactive Hierarchy Inspector</span>
          </span>
          <span className="text-[11px] text-slate-500">Academic Year: 2026 (Active)</span>
        </div>

        <div className="mt-6 space-y-3 font-sans text-xs">
          {/* Root: Bangladesh */}
          <div className="border-l-2 border-slate-800 pl-4 py-1">
            <button
              onClick={() => toggleNode("bangladesh")}
              className="flex items-center gap-2 font-bold text-slate-200 hover:text-blue-400"
            >
              {openNodes["bangladesh"] ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronRight className="h-4 w-4 text-slate-400" />}
              <span>🇧🇩 Bangladesh (National Curriculum)</span>
            </button>

            {openNodes["bangladesh"] && (
              <div className="mt-3 space-y-3 pl-4 border-l-2 border-slate-800/80">
                {activeTab === "general" ? (
                  /* GENERAL EDUCATION TREE */
                  <div>
                    <button
                      onClick={() => toggleNode("general")}
                      className="flex items-center gap-2 font-bold text-blue-400"
                    >
                      {openNodes["general"] ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      <span>General Education (NCTB) • 2026 Curriculum</span>
                    </button>

                    {openNodes["general"] && (
                      <div className="mt-3 space-y-3 pl-4 border-l-2 border-slate-800">
                        {/* Primary Branch */}
                        <div>
                          <span className="font-bold text-slate-300">Level: Primary School (১ম - ৫ম শ্রেণি)</span>
                          <div className="mt-2 pl-4 border-l-2 border-slate-800/60 space-y-1.5 text-slate-400">
                            <div>• Class 1 (১ম শ্রেণি) — 4 Active Subjects</div>
                            <div>• Class 2 (২য় শ্রেণি) — 4 Active Subjects</div>
                            <div>• Class 5 (৫ম শ্রেণি) — Elementary Science, Math, BGS, Islam</div>
                          </div>
                        </div>

                        {/* Secondary Branch */}
                        <div className="mt-4">
                          <button
                            onClick={() => toggleNode("secondary")}
                            className="flex items-center gap-2 font-bold text-indigo-400"
                          >
                            {openNodes["secondary"] ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                            <span>Level: Secondary (৬ষ্ঠ - ১০ম শ্রেণি)</span>
                          </button>

                          {openNodes["secondary"] && (
                            <div className="mt-2 pl-4 border-l-2 border-slate-800 space-y-3">
                              <div>
                                <span className="font-bold text-slate-300">• Class 8 (৮ম শ্রেণি)</span>
                                <div className="pl-4 text-slate-400 mt-1">
                                  <span>General Science, Mathematics, ICT</span>
                                </div>
                              </div>

                              <div>
                                <button
                                  onClick={() => toggleNode("cls-9")}
                                  className="flex items-center gap-2 font-bold text-slate-200"
                                >
                                  {openNodes["cls-9"] ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                                  <span>• Class 9 (৯ম শ্রেণি — Academic Streams)</span>
                                </button>

                                {openNodes["cls-9"] && (
                                  <div className="mt-2 pl-4 border-l-2 border-slate-800 space-y-2">
                                    {/* Science Stream */}
                                    <div>
                                      <button
                                        onClick={() => toggleNode("grp-sci-9")}
                                        className="flex items-center gap-2 font-semibold text-blue-300"
                                      >
                                        {openNodes["grp-sci-9"] ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                                        <span>├── Science Group (বিজ্ঞান)</span>
                                      </button>
                                      {openNodes["grp-sci-9"] && (
                                        <div className="pl-6 text-slate-400 space-y-1 mt-1 font-mono text-[11px]">
                                          <div className="flex items-center justify-between py-0.5">
                                            <span>│   ├── Physics (পদার্থবিজ্ঞান)</span>
                                            <span className="text-[10px] text-emerald-400">Active</span>
                                          </div>
                                          <div className="flex items-center justify-between py-0.5">
                                            <span>│   ├── Chemistry (রসায়ন)</span>
                                            <span className="text-[10px] text-emerald-400">Active</span>
                                          </div>
                                          <div className="flex items-center justify-between py-0.5">
                                            <span>│   └── Biology (জীববিজ্ঞান)</span>
                                            <span className="text-[10px] text-emerald-400">Active</span>
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    {/* Humanities */}
                                    <div className="text-slate-400 font-mono text-[11px]">
                                      ├── Humanities Group (মানবিক) — History, Civics, Economics
                                    </div>

                                    {/* Business Studies */}
                                    <div className="text-slate-400 font-mono text-[11px]">
                                      └── Business Studies (ব্যবসায় শিক্ষা) — Accounting, Finance
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* MADRASA EDUCATION TREE (Requirement 158) */
                  <div>
                    <button
                      onClick={() => toggleNode("madrasa")}
                      className="flex items-center gap-2 font-bold text-teal-400"
                    >
                      {openNodes["madrasa"] ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
                      <span>Madrasa Education System</span>
                    </button>

                    {openNodes["madrasa"] && (
                      <div className="mt-3 space-y-4 pl-4 border-l-2 border-slate-800">
                        {/* Alia Madrasa */}
                        <div>
                          <span className="font-bold text-slate-200">├── Alia Madrasa (বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড)</span>
                          <div className="pl-6 space-y-1 text-slate-400 font-mono text-[11px] mt-1">
                            <div>│   ├── Ibtedayi (১ম - ৫ম)</div>
                            <div>│   ├── Dakhil (১০ম শ্রেণি) — Hadith, Fiqh, Arabic</div>
                            <div>│   ├── Alim (১২শ শ্রেণি) — Tafsir, Balaghah</div>
                            <div>│   ├── Fazil (ডিগ্রি পাস ও অনার্স)</div>
                            <div>│   └── Kamil (মাস্টার্স)</div>
                          </div>
                        </div>

                        {/* Qawmi Madrasa */}
                        <div>
                          <button
                            onClick={() => toggleNode("qawmi")}
                            className="flex items-center gap-2 font-bold text-emerald-400"
                          >
                            {openNodes["qawmi"] ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                            <span>└── Qawmi Madrasa (দাওরায়ে হাদিস ও তাখাসসুস)</span>
                          </button>

                          {openNodes["qawmi"] && (
                            <div className="pl-6 space-y-1 text-slate-400 font-mono text-[11px] mt-1">
                              <div>├── Noorani / Qaida / Hifz</div>
                              <div>├── Ibtidaiyah & Mutawassitah</div>
                              <div>├── Sanawiyah & Sanawiyah Ulya</div>
                              <div>├── Fazilat (Mishkat al-Masabih)</div>
                              <div>├── Taqmil (Dawra-e-Hadith)</div>
                              <div className="text-emerald-300 font-bold">
                                └── Takhassus (তাখাসসুস ফিল ইফতা ও সমসাময়িক ফিকহ)
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Subject Modal / Card */}
      {isAddingSubject && (
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8 animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
            <h3 className="font-bold text-white text-base">
              Add New Educational Subject to Catalogue
            </h3>
            <button
              onClick={() => setIsAddingSubject(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleAddSubject} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">
                  Parent Class / Jamaat Node
                </label>
                <select
                  value={selectedParentId}
                  onChange={(e) => setSelectedParentId(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
                >
                  <option value="cls-5">Class 5 (Primary)</option>
                  <option value="cls-8">Class 8 (Secondary)</option>
                  <option value="cls-9">Class 9 (Secondary)</option>
                  <option value="cls-11">Class 11 (College)</option>
                  <option value="cls-alia-dakhil-10">Alia Dakhil Class 10</option>
                  <option value="cls-qawmi-takhassus">Qawmi Takhassus (Ifta)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">
                  Subject Code
                </label>
                <input
                  type="text"
                  value={newSubCode}
                  onChange={(e) => setNewSubCode(e.target.value)}
                  placeholder="e.g. PHY-101"
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">
                  Subject Name (English) *
                </label>
                <input
                  type="text"
                  required
                  value={newSubName}
                  onChange={(e) => setNewSubName(e.target.value)}
                  placeholder="e.g. Environmental Chemistry"
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">
                  Subject Name (Bengali / Native)
                </label>
                <input
                  type="text"
                  value={newSubBn}
                  onChange={(e) => setNewSubBn(e.target.value)}
                  placeholder="e.g. পরিবেশ রসায়ন"
                  className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-md"
            >
              Confirm and Insert Subject
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
