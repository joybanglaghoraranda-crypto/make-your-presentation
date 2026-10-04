"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";

export function WhatsAppFloating() {
  const { t, isRtl } = useLanguage();
  const waUrl = buildWhatsAppLink({
    customMessage: "Hello Make Your Presentation Team! I would like to inquire about creating a presentation.",
  });

  return (
    <aside aria-label="WhatsApp Support" className={`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} z-50 flex items-center gap-3`}>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 rounded-full bg-emerald-600 px-4 py-3 text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-white" />
        <span className="hidden sm:inline font-medium text-sm">
          {t("ctaWhatsApp")} ({siteConfig.phone})
        </span>
      </a>
    </aside>
  );
}
