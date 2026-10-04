"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type LanguageCode, type Translations } from "./translations";

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: keyof Translations) => string;
  dir: "ltr" | "rtl";
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is 'bn' (বাংলা) as specified
  const [language, setLanguageState] = useState<LanguageCode>("bn");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("myp_lang") as LanguageCode;
    if (saved && translations[saved]) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    } else {
      document.documentElement.lang = "bn";
      document.documentElement.dir = "ltr";
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem("myp_lang", lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  };

  const t = (key: keyof Translations): string => {
    const currentDict = translations[language];
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    // Fallback: English -> Bengali -> key
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    if (translations.bn && translations.bn[key]) {
      return translations.bn[key];
    }
    return String(key);
  };

  const isRtl = language === "ar";
  const dir = isRtl ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Provide a safe fallback during SSR
    return {
      language: "bn" as LanguageCode,
      setLanguage: () => {},
      t: (key: keyof Translations) => translations.bn[key] || translations.en[key] || String(key),
      dir: "ltr" as const,
      isRtl: false,
    };
  }
  return context;
}
