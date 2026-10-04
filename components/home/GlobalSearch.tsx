"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Sparkles,
  BookOpen,
  Briefcase,
  GraduationCap,
  Layers,
  X,
} from "lucide-react";
import { repository } from "@/lib/db/repository";
import { useLanguage } from "@/lib/i18n/context";

export function GlobalSearch() {
  const { t, isRtl } = useLanguage();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ReturnType<typeof repository.search>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length > 1) {
      const searchRes = repository.search(query);
      setResults(searchRes);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sampleTags = [
    { label: "বিজ্ঞান", query: "Science" },
    { label: "গণিত", query: "Math" },
    { label: "Hadith", query: "Hadith" },
    { label: "Pitch Deck", query: "Pitch Deck" },
  ];

  return (
    <section className="relative z-30 -mt-6 mx-auto max-w-5xl px-4 sm:px-6">
      <div
        ref={containerRef}
        className="relative rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl shadow-slate-200/60 backdrop-blur"
      >
        <div className="flex items-center gap-3 px-3 py-1">
          <Search className="h-6 w-6 text-[#1456C8] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              if (query.trim().length > 1) setIsOpen(true);
            }}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchAria")}
            className="w-full bg-transparent text-base sm:text-lg font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <Link
            href={`/order?search=${encodeURIComponent(query)}`}
            className="hidden sm:flex items-center gap-1.5 rounded-xl bg-[#1456C8] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#0B2A63] active:scale-95 transition-all shrink-0"
          >
            <span>{t("searchAria")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Popular search query chips */}
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5 border-t border-slate-100 px-3 pt-2 text-xs text-slate-500">
          <span className="font-semibold text-slate-600">{t("searchSuggestions")}:</span>
          {sampleTags.map((tag) => (
            <button
              key={tag.label}
              onClick={() => {
                setQuery(tag.query);
              }}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700 hover:bg-blue-50 hover:text-[#1456C8] transition-colors"
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Live Search Results Dropdown */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 max-h-[460px] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl z-50">
            {results.length > 0 ? (
              <div className="space-y-1.5">
                <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Matching Presentation Topics & Courses
                </div>
                {results.map((res, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-xl p-3 hover:bg-blue-50/70 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-blue-100/70 p-2 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        {res.type === "business" ? (
                          <Briefcase className="h-4 w-4" />
                        ) : res.type === "professional" ? (
                          <Layers className="h-4 w-4" />
                        ) : (
                          <GraduationCap className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-bold text-slate-800 text-sm group-hover:text-blue-600">
                          {res.title}
                          {res.titleBn && <span className="ml-2 font-normal text-slate-500">({res.titleBn})</span>}
                        </div>
                        <div className="text-xs text-slate-500">{res.hierarchy}</div>
                        {res.description && (
                          <div className="mt-1 text-xs text-slate-400 line-clamp-1">
                            {res.description}
                          </div>
                        )}
                      </div>
                    </div>

                    <Link
                      href={res.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-1 rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-colors shrink-0"
                    >
                      <span>Create</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              /* Can't Find Experience Fallback (Section 66) */
              <div className="rounded-xl bg-amber-50/80 p-5 text-center border border-amber-200/70">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="mt-2 text-base font-bold text-amber-950">
                  {t("cantFind")}
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-amber-800 max-w-md mx-auto">
                  {t("cantFindDesc")}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/custom-presentation?initialTopic=${encodeURIComponent(query)}`}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-amber-700 transition-colors"
                  >
                    <span>{t("requestCustom")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
