"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  User,
  ShieldCheck,
  BookOpen,
  Building2,
  FileText,
  School,
  ArrowRight,
} from "lucide-react";
import { siteConfig, supportedLanguages, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";
import { repository } from "@/lib/db/repository";

export function Header() {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [eduMenuOpen, setEduMenuOpen] = useState(false);
  const [bizMenuOpen, setBizMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [countryMenuOpen, setCountryMenuOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

  const eduRef = useRef<HTMLDivElement>(null);
  const bizRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (eduRef.current && !eduRef.current.contains(event.target as Node)) {
        setEduMenuOpen(false);
      }
      if (bizRef.current && !bizRef.current.contains(event.target as Node)) {
        setBizMenuOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const countries = repository.getCountries();
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation! I want to create a presentation.",
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
      {/* Top micro bar for phone, email, and quick links */}
      <div className="hidden border-b border-slate-100 bg-slate-50/70 px-4 py-1 text-xs text-slate-600 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-medium text-slate-800">
              {siteConfig.tagline}
            </span>
            <span className="text-slate-300">|</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-blue-600 transition-colors"
            >
              📞 {siteConfig.phone}
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-blue-600 transition-colors"
            >
              ✉️ {siteConfig.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Country selector */}
            <div className="relative">
              <button
                onClick={() => setCountryMenuOpen(!countryMenuOpen)}
                className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600"
              >
                <span>🇧🇩 {selectedCountry}</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              {countryMenuOpen && (
                <div className="absolute right-0 mt-1 w-44 rounded-lg border border-slate-200 bg-white p-1.5 shadow-xl z-50">
                  <div className="text-[10px] font-semibold uppercase text-slate-400 px-2 py-1">
                    Select Country
                  </div>
                  {countries.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCountry(c.name);
                        setCountryMenuOpen(false);
                      }}
                      className="flex w-full items-center justify-between rounded px-2 py-1 text-left text-xs hover:bg-slate-100"
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                      </span>
                      {c.is_populated ? (
                        <span className="text-[9px] text-emerald-600 font-medium">Active</span>
                      ) : (
                        <span className="text-[9px] text-slate-400">Custom</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-slate-300">|</span>

            <Link
              href="/dashboard"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <User className="h-3.5 w-3.5" />
              <span>{t("navDashboard")}</span>
            </Link>

            <a
              href="/fast"
              className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/80 px-2 py-0.5 text-[10px] font-bold text-amber-700 hover:bg-amber-100 transition-colors"
              title="Instant Single-Page Mode (< 100ms load)"
            >
              <span>⚡ Fast HTML Mode</span>
            </a>

            <span className="text-slate-300">|</span>

            <Link
              href="/admin"
              className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              <span>{t("navAdmin")}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand identity */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/brand-mark.webp"
            alt="Make Your Presentation"
            width={64}
            height={36}
            className="h-9 w-auto rounded object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-[1.12rem] tracking-tight text-[#0B2A63]">
              Make Your <span className="text-[#E86F00] font-bold">Presentation</span>
            </span>
            <span className="text-[10px] font-semibold text-[#586480] tracking-wide">
              MYP • Your Topic. Our Presentation.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Education Mega Menu */}
          <div className="relative" ref={eduRef}>
            <button
              onClick={() => {
                setEduMenuOpen(!eduMenuOpen);
                setBizMenuOpen(false);
              }}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              <GraduationCap className="h-4 w-4 text-blue-600" />
              <span>{t("navEducation")}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {eduMenuOpen && (
              <div className={`absolute top-full ${isRtl ? "right-0" : "left-0"} mt-2 w-[540px] rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150`}>
                <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Educational Curricula & Levels
                  </span>
                  <Link
                    href="/education"
                    onClick={() => setEduMenuOpen(false)}
                    className="flex items-center gap-1 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View All Education <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Link
                    href="/education/primary"
                    onClick={() => setEduMenuOpen(false)}
                    className="flex items-start gap-2.5 rounded-xl p-2.5 hover:bg-blue-50/70 transition-colors group"
                  >
                    <School className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-blue-600">
                        {t("levelPrimary")}
                      </div>
                      <div className="text-xs text-slate-500">Classes 1–5: Science, Math, BGS</div>
                    </div>
                  </Link>

                  <Link
                    href="/education/secondary"
                    onClick={() => setEduMenuOpen(false)}
                    className="flex items-start gap-2.5 rounded-xl p-2.5 hover:bg-blue-50/70 transition-colors group"
                  >
                    <BookOpen className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-indigo-600">
                        {t("levelSecondary")}
                      </div>
                      <div className="text-xs text-slate-500">Classes 6–10: Science, Humanities, Business</div>
                    </div>
                  </Link>

                  <Link
                    href="/education/college"
                    onClick={() => setEduMenuOpen(false)}
                    className="flex items-start gap-2.5 rounded-xl p-2.5 hover:bg-blue-50/70 transition-colors group"
                  >
                    <Layers className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-purple-600">
                        {t("levelCollege")}
                      </div>
                      <div className="text-xs text-slate-500">HSC 11–12: Physics, Chemistry, Accounting</div>
                    </div>
                  </Link>

                  <Link
                    href="/education/university"
                    onClick={() => setEduMenuOpen(false)}
                    className="flex items-start gap-2.5 rounded-xl p-2.5 hover:bg-blue-50/70 transition-colors group"
                  >
                    <GraduationCap className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-emerald-600">
                        {t("levelUniversity")}
                      </div>
                      <div className="text-xs text-slate-500">Engineering, CSE, BBA, Medical, Law</div>
                    </div>
                  </Link>

                  <Link
                    href="/education/madrasa"
                    onClick={() => setEduMenuOpen(false)}
                    className="flex items-start gap-2.5 rounded-xl p-2.5 hover:bg-emerald-50/70 transition-colors group col-span-2 border border-emerald-100/60 bg-emerald-50/30"
                  >
                    <div className="rounded-lg bg-emerald-600 p-1.5 text-white">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 group-hover:text-emerald-700">
                        {t("levelMadrasa")} (Alia & Qawmi)
                      </div>
                      <div className="text-xs text-slate-600">
                        Dakhil, Alim, Fazil, Kamil • Qawmi: Noorani, Mishkat, Dawra, Takhassus (Ifta)
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Business Mega Menu */}
          <div className="relative" ref={bizRef}>
            <button
              onClick={() => {
                setBizMenuOpen(!bizMenuOpen);
                setEduMenuOpen(false);
              }}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              <Briefcase className="h-4 w-4 text-indigo-600" />
              <span>{t("navBusiness")}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {bizMenuOpen && (
              <div className={`absolute top-full ${isRtl ? "right-0" : "left-0"} mt-2 w-[480px] rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150`}>
                <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Business & Executive Presentations
                  </span>
                  <Link
                    href="/business"
                    onClick={() => setBizMenuOpen(false)}
                    className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:underline"
                  >
                    View All Services <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Link
                    href="/order?category=business&service=Investor+Pitch+Deck"
                    onClick={() => setBizMenuOpen(false)}
                    className="rounded-xl p-2.5 hover:bg-indigo-50/70 transition-colors"
                  >
                    <div className="font-semibold text-slate-800 hover:text-indigo-600">
                      🚀 Pitch Decks & Fundraising
                    </div>
                    <div className="text-xs text-slate-500">Seed, Series A & Investor ready</div>
                  </Link>

                  <Link
                    href="/order?category=business&service=Business+Plan"
                    onClick={() => setBizMenuOpen(false)}
                    className="rounded-xl p-2.5 hover:bg-indigo-50/70 transition-colors"
                  >
                    <div className="font-semibold text-slate-800 hover:text-indigo-600">
                      📊 Business Plans & Proposals
                    </div>
                    <div className="text-xs text-slate-500">Feasibility & expansion decks</div>
                  </Link>

                  <Link
                    href="/order?category=business&service=Digital+Marketing+Strategy"
                    onClick={() => setBizMenuOpen(false)}
                    className="rounded-xl p-2.5 hover:bg-indigo-50/70 transition-colors"
                  >
                    <div className="font-semibold text-slate-800 hover:text-indigo-600">
                      📈 Marketing & Growth Decks
                    </div>
                    <div className="text-xs text-slate-500">Digital campaigns & launch funnels</div>
                  </Link>

                  <Link
                    href="/order?category=business&service=Company+Profile"
                    onClick={() => setBizMenuOpen(false)}
                    className="rounded-xl p-2.5 hover:bg-indigo-50/70 transition-colors"
                  >
                    <div className="font-semibold text-slate-800 hover:text-indigo-600">
                      🏢 Company Profile & Reports
                    </div>
                    <div className="text-xs text-slate-500">Board meetings & annual reviews</div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/professional"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
          >
            {t("navProfessional")}
          </Link>

          <Link
            href="/how-it-works"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
          >
            {t("navHowItWorks")}
          </Link>

          <Link
            href="/pricing"
            className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors"
          >
            {t("navPricing")}
          </Link>

          <Link
            href="/custom-presentation"
            className="flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-900 border border-amber-200/80 hover:bg-amber-100 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>{t("navCustom")}</span>
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language selector dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5 text-slate-500" />
              <span>
                {supportedLanguages.find((l) => l.code === language)?.name || "বাংলা"}
              </span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-36 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl z-50">
                {supportedLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors ${
                      language === l.code ? "bg-blue-50 text-blue-700 font-bold" : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span>{l.name}</span>
                    {l.code === "ar" && <span className="text-[10px] text-amber-600">RTL</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick WhatsApp button */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp</span>
          </a>

          {/* Primary Create Presentation CTA Button */}
          <Link
            href="/order"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 active:scale-95 transition-all"
          >
            <span>{t("ctaCreate")}</span>
          </Link>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-5 shadow-2xl lg:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <Link
              href="/education"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-xl bg-slate-50 p-3 font-bold text-slate-800"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                {t("navEducation")}
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              href="/business"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-xl bg-slate-50 p-3 font-bold text-slate-800"
            >
              <span className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-indigo-600" />
                {t("navBusiness")}
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              href="/professional"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-xl bg-slate-50 p-3 font-bold text-slate-800"
            >
              <span className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-600" />
                {t("navProfessional")}
              </span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link
              href="/custom-presentation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between rounded-xl bg-amber-50 p-3 font-bold text-amber-900 border border-amber-200"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-600" />
                {t("navCustom")}
              </span>
              <ArrowRight className="h-4 w-4 text-amber-500" />
            </Link>

            <div className="my-2 border-t border-slate-100 pt-3 flex flex-col gap-2 text-sm font-medium">
              <Link
                href="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-600 hover:text-blue-600"
              >
                {t("navHowItWorks")}
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-600 hover:text-blue-600"
              >
                {t("navPricing")}
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-600 hover:text-blue-600"
              >
                {t("navContact")}
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-slate-600 hover:text-blue-600 font-bold"
              >
                {t("navDashboard")}
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-blue-600 hover:text-blue-700 font-bold"
              >
                {t("navAdmin")}
              </Link>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-bold text-white shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="h-5 w-5 fill-white" />
              <span>{t("ctaWhatsApp")} ({siteConfig.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
