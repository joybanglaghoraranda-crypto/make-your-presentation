"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  GraduationCap,
  Briefcase,
  Layers,
  HelpCircle,
  Shield,
  FileText,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { FacebookIcon } from "@/components/shared/Icons";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation! I would like to inquire about presentation services.",
  });

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 font-black text-xl text-white shadow-lg">
                M
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Make Your Presentation
                </span>
                <span className="block text-xs font-semibold text-blue-400">
                  MYP • Your Topic. Our Presentation.
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 text-sm">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-emerald-500 fill-emerald-500/20" />
                <span>WhatsApp: {siteConfig.phone}</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4 text-blue-400" />
                <span>Phone: {siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-400" />
                <span>Email: {siteConfig.email}</span>
              </a>

              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <FacebookIcon className="h-4 w-4 text-blue-500" />
                <span>Facebook: Make Your Presentation</span>
                <ExternalLink className="h-3 w-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Column 2: Education */}
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white">
              <GraduationCap className="h-4 w-4 text-blue-400" />
              <span>{t("navEducation")}</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/education/primary" className="hover:text-white transition-colors">
                  Primary School (Class 1–5)
                </Link>
              </li>
              <li>
                <Link href="/education/secondary" className="hover:text-white transition-colors">
                  Secondary / High School (6–10)
                </Link>
              </li>
              <li>
                <Link href="/education/college" className="hover:text-white transition-colors">
                  Higher Secondary / College
                </Link>
              </li>
              <li>
                <Link href="/education/university" className="hover:text-white transition-colors">
                  University & Thesis
                </Link>
              </li>
              <li>
                <Link href="/education/madrasa" className="hover:text-white transition-colors">
                  Alia & Qawmi Madrasa
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-white transition-colors">
                  Technical & Vocational
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Business */}
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white">
              <Briefcase className="h-4 w-4 text-indigo-400" />
              <span>{t("navBusiness")}</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/order?category=business&service=Investor+Pitch+Deck" className="hover:text-white transition-colors">
                  Investor Pitch Decks
                </Link>
              </li>
              <li>
                <Link href="/order?category=business&service=Business+Plan" className="hover:text-white transition-colors">
                  Business Plans & Strategy
                </Link>
              </li>
              <li>
                <Link href="/order?category=business&service=Digital+Marketing+Strategy" className="hover:text-white transition-colors">
                  Marketing & Growth Decks
                </Link>
              </li>
              <li>
                <Link href="/order?category=business&service=Company+Profile" className="hover:text-white transition-colors">
                  Company Profile & Portfolios
                </Link>
              </li>
              <li>
                <Link href="/order?category=business&service=Sales+Pitch" className="hover:text-white transition-colors">
                  Sales Pitches & Client Decks
                </Link>
              </li>
              <li>
                <Link href="/order?category=business&service=Financial+Forecast" className="hover:text-white transition-colors">
                  Financial Projections & Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional & Support */}
          <div>
            <h3 className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white">
              <HelpCircle className="h-4 w-4 text-purple-400" />
              <span>Support & Information</span>
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Quotations
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/custom-presentation" className="hover:text-white transition-colors text-amber-400">
                  Request Custom Presentation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Make Your Presentation (MYP). All rights reserved.</p>
          <div className="mt-4 flex items-center gap-6 sm:mt-0">
            <span>Primary Market: Bangladesh 🇧🇩</span>
            <span>Worldwide Service Ready 🌍</span>
            <Link href="/admin" className="text-slate-400 hover:text-white">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
