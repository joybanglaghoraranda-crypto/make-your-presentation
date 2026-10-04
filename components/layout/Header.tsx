"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { siteConfig, supportedLanguages, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation! I want to order a presentation.",
  });

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E6EF] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand identity - Minimal & Crisp */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/brand-mark.webp"
            alt="MYP"
            width={48}
            height={28}
            className="h-8 w-auto rounded object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#0B2A63]">
            Make Your <span className="text-[#E86F00] font-bold">Presentation</span>
          </span>
        </Link>

        {/* Desktop Navigation Links - Ultra Clean */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-[#0E1B33]">
          <Link
            href="/education"
            className="hover:text-[#1456C8] transition-colors"
          >
            {t("navEducation")}
          </Link>

          <Link
            href="/business"
            className="hover:text-[#1456C8] transition-colors"
          >
            {t("navBusiness")}
          </Link>

          <Link
            href="/how-it-works"
            className="hover:text-[#1456C8] transition-colors"
          >
            {t("navHowItWorks")}
          </Link>

          <Link
            href="/pricing"
            className="hover:text-[#1456C8] transition-colors"
          >
            {t("navPricing")}
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language selector dropdown */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 rounded-lg border border-[#E2E6EF] bg-white px-2.5 py-1.5 text-xs font-semibold text-[#0E1B33] hover:border-[#1456C8] transition-colors"
              aria-label="Language"
            >
              <Globe className="h-3.5 w-3.5 text-[#586480]" />
              <span>
                {supportedLanguages.find((l) => l.code === language)?.name || "বাংলা"}
              </span>
              <ChevronDown className="h-3 w-3 text-[#586480]" />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-1.5 w-32 rounded-xl border border-[#E2E6EF] bg-white p-1 shadow-lg z-50">
                {supportedLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium transition-colors ${
                      language === l.code
                        ? "bg-[#E8F0FD] text-[#1456C8] font-bold"
                        : "hover:bg-[#F7F8FB] text-[#0E1B33]"
                    }`}
                  >
                    <span>{l.name}</span>
                    {l.code === "ar" && <span className="text-[10px] text-[#E86F00]">RTL</span>}
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
            className="hidden sm:flex items-center gap-1.5 rounded-xl bg-[#17803F] px-3 py-1.5 text-xs font-bold text-white shadow-2xs hover:brightness-95 transition-all"
          >
            <MessageCircle className="h-3.5 w-3.5 fill-white" />
            <span>হোয়াটসঅ্যাপ</span>
          </a>

          {/* Primary Create Presentation CTA Button */}
          <Link
            href="/order"
            className="flex items-center gap-1.5 rounded-xl bg-[#1456C8] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-[#0B2A63] active:scale-95 transition-all"
          >
            <span>{t("ctaCreate")}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E2E6EF] text-[#0E1B33] hover:bg-[#F7F8FB] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - Ultra Minimal */}
      {mobileMenuOpen && (
        <div className="border-b border-[#E2E6EF] bg-white px-4 py-4 md:hidden animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-2 text-sm font-bold text-[#0E1B33]">
            <Link
              href="/education"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 hover:bg-[#F7F8FB]"
            >
              {t("navEducation")}
            </Link>

            <Link
              href="/business"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 hover:bg-[#F7F8FB]"
            >
              {t("navBusiness")}
            </Link>

            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 hover:bg-[#F7F8FB]"
            >
              {t("navHowItWorks")}
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 hover:bg-[#F7F8FB]"
            >
              {t("navPricing")}
            </Link>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#17803F] py-2.5 text-xs font-bold text-white"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>হোয়াটসঅ্যাপ: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
