"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Upload,
  FileText,
  AlertCircle,
  MessageCircle,
  Clock,
  Check,
  Calendar,
  DollarSign,
  Info,
} from "lucide-react";
import { repository } from "@/lib/db/repository";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import { useLanguage } from "@/lib/i18n/context";
import { Order } from "@/lib/types/database";

export function OrderWizard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, isRtl } = useLanguage();

  // Mode: "browse" (Path A) or "freeform" (Path B: Tell Us What You Need)
  const initialMode = searchParams.get("mode") === "freeform" ? "freeform" : "browse";
  const [orderMode, setOrderMode] = useState<"browse" | "freeform">(initialMode);

  // Active step index (0 to 5 for clean group flow)
  // Step 0: Category & Topic
  // Step 1: Slide Count, Language & Design
  // Step 2: Content Requirements & Purpose
  // Step 3: Reference Files & Extra Features
  // Step 4: Contact & Urgency
  // Step 5: Review & Confirmation
  const [currentStep, setCurrentStep] = useState(0);

  // Order state
  const [category, setCategory] = useState<"education" | "business" | "professional" | "custom">(
    (searchParams.get("category") as any) || "education"
  );
  const [educationLevel, setEducationLevel] = useState(searchParams.get("level") || "Primary School");
  const [selectedClass, setSelectedClass] = useState(searchParams.get("class") || "Class 5");
  const [subjectName, setSubjectName] = useState(searchParams.get("subject") || "Elementary Science");
  const [topicName, setTopicName] = useState(searchParams.get("topic") || "");
  const [purpose, setPurpose] = useState(searchParams.get("purpose") || "Classroom teaching");
  
  const [slideCount, setSlideCount] = useState<number | string>(15);
  const [isCustomSlides, setIsCustomSlides] = useState(false);
  const [customSlideCount, setCustomSlideCount] = useState("15");

  const [language, setOrderLanguage] = useState("Bangla");
  const [designStyle, setDesignStyle] = useState("Modern Educational");
  const [requirements, setRequirements] = useState(
    searchParams.get("initialTopic")
      ? `Topic: ${searchParams.get("initialTopic")}\n\nPlease structure this into clear, logical slides with diagrams and simple explanations.`
      : ""
  );

  const [urgency, setUrgency] = useState<"standard" | "urgent" | "custom">("standard");
  const [deadline, setDeadline] = useState("Within 3-4 days");

  const [features, setFeatures] = useState<string[]>([
    "Diagrams",
    "Summary",
    "Teacher notes",
  ]);

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);

  // Customer Contact Details
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerWhatsApp, setCustomerWhatsApp] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  // Submission result
  const [submittedOrder, setSubmittedOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState("");

  // Sync from searchParams if updated
  useEffect(() => {
    if (searchParams.get("topic")) setTopicName(searchParams.get("topic")!);
    if (searchParams.get("subject")) setSubjectName(searchParams.get("subject")!);
    if (searchParams.get("level")) setEducationLevel(searchParams.get("level")!);
    if (searchParams.get("class")) setSelectedClass(searchParams.get("class")!);
  }, [searchParams]);

  // Live price estimate calculation
  const numericSlides = isCustomSlides ? parseInt(customSlideCount) || 15 : Number(slideCount);
  const priceCalculation = repository.calculatePrice({
    category,
    slides: numericSlides,
    urgency,
    features,
  });

  const toggleFeature = (feat: string) => {
    if (features.includes(feat)) {
      setFeatures(features.filter((f) => f !== feat));
    } else {
      setFeatures([...features, feat]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const validateCurrentStep = (): boolean => {
    setValidationError("");
    if (currentStep === 0) {
      if (orderMode === "freeform") {
        if (!requirements.trim() && !topicName.trim()) {
          setValidationError("Please enter your topic or describe your presentation requirements.");
          return false;
        }
      } else {
        if (!topicName.trim() && !subjectName.trim()) {
          setValidationError("Please select or specify a topic/subject.");
          return false;
        }
      }
    } else if (currentStep === 4) {
      if (!customerName.trim()) {
        setValidationError("Please provide your full name.");
        return false;
      }
      if (!customerPhone.trim()) {
        setValidationError("Please provide your phone or WhatsApp number.");
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handleBack = () => {
    setValidationError("");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    if (!validateCurrentStep()) return;
    setIsSubmitting(true);

    const finalSlideVal = isCustomSlides ? parseInt(customSlideCount) || 15 : Number(slideCount);

    const order = repository.createOrder({
      customer_name: customerName,
      customer_email: customerEmail,
      customer_phone: customerPhone,
      customer_whatsapp: customerWhatsApp || customerPhone,
      category,
      level_name: category === "education" ? educationLevel : undefined,
      class_name: category === "education" ? selectedClass : undefined,
      subject_name: subjectName,
      topic_name: topicName || (orderMode === "freeform" ? "Custom Request" : "Class Presentation"),
      purpose,
      slide_count: finalSlideVal,
      language,
      design_style: designStyle,
      content_requirements: requirements,
      additional_features: features,
      urgency,
      deadline,
      estimated_price: priceCalculation.estimatedPrice,
      final_price: priceCalculation.estimatedPrice,
      reference_files: uploadedFiles.map((f) => ({ name: f.name, url: "#", size: f.size })),
    });

    setTimeout(() => {
      setSubmittedOrder(order);
      setIsSubmitting(false);
    }, 400);
  };

  // If order is completed, show confirmation view matching requirements 34 & 35
  if (submittedOrder) {
    const waUrl = buildWhatsAppLink({
      orderId: submittedOrder.order_number,
      category: submittedOrder.category,
      className: submittedOrder.class_name,
      subject: submittedOrder.subject_name,
      topic: submittedOrder.topic_name,
      slides: submittedOrder.slide_count,
      language: submittedOrder.language,
      design: submittedOrder.design_style,
    });

    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-md">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-slate-900">
          {t("orderReceivedTitle")}
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          {t("orderReceivedDesc")}
        </p>

        {/* Order ID Banner */}
        <div className="my-6 inline-flex items-center gap-3 rounded-2xl bg-blue-50 border border-blue-200 px-6 py-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
            {t("yourOrderId")}:
          </span>
          <span className="font-mono text-lg font-black text-blue-950">
            {submittedOrder.order_number}
          </span>
        </div>

        {/* Summary Details Box */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-left text-xs sm:text-sm text-slate-700 space-y-2.5 max-w-lg mx-auto">
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="font-semibold text-slate-500">Topic:</span>
            <span className="font-bold text-slate-900">{submittedOrder.topic_name}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="font-semibold text-slate-500">Slide Count:</span>
            <span className="font-bold text-slate-900">{submittedOrder.slide_count} Slides</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="font-semibold text-slate-500">Language:</span>
            <span className="font-bold text-slate-900">{submittedOrder.language}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-2">
            <span className="font-semibold text-slate-500">Estimated Quote:</span>
            <span className="font-bold text-blue-700">৳{submittedOrder.estimated_price}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-slate-500">Status:</span>
            <span className="font-bold text-amber-600">Request Received (In Review)</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg hover:bg-emerald-700 active:scale-95 transition-all"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            <span>Confirm Order on WhatsApp</span>
          </a>

          <Link
            href={`/dashboard/orders/${submittedOrder.id}`}
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-bold text-slate-800 hover:bg-slate-50 transition-all"
          >
            <span>{t("viewOrder")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-200 px-4 py-3.5 font-semibold text-slate-600 hover:bg-slate-50 transition-all text-xs"
          >
            Go to Customer Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* Path Selector Tabs (Path A vs Path B) */}
      <div className="mb-8 flex rounded-2xl border border-slate-200 bg-slate-100 p-1.5 shadow-inner">
        <button
          onClick={() => {
            setOrderMode("browse");
            setCurrentStep(0);
          }}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all ${
            orderMode === "browse"
              ? "bg-white text-blue-700 shadow-md"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          <span>PATH A — Browse Curriculum & Services</span>
        </button>

        <button
          onClick={() => {
            setOrderMode("freeform");
            setCurrentStep(0);
          }}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs sm:text-sm font-bold transition-all ${
            orderMode === "freeform"
              ? "bg-amber-500 text-white shadow-md"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Sparkles className="h-4 w-4" />
          <span>PATH B — Tell Us What You Need</span>
        </button>
      </div>

      {/* Main Wizard Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl">
        {/* Progress Bar / Step Indicators */}
        <div className="mb-8 border-b border-slate-100 pb-5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
            <span>Step {currentStep + 1} of 6</span>
            <span className="text-blue-600 font-semibold">
              {currentStep === 0 && (orderMode === "freeform" ? "Topic & Idea" : "Curriculum & Topic")}
              {currentStep === 1 && "Slides, Language & Style"}
              {currentStep === 2 && "Purpose & Content Guidelines"}
              {currentStep === 3 && "Reference Files & Features"}
              {currentStep === 4 && "Contact Details & Urgency"}
              {currentStep === 5 && "Review & Submit"}
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / 6) * 100}%` }}
            />
          </div>
        </div>

        {validationError && (
          <div className="mb-6 flex items-center gap-2 rounded-xl bg-red-50 p-3.5 text-xs font-medium text-red-700 border border-red-200">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* STEP 0: Category & Topic */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {orderMode === "freeform" ? (
              <div className="space-y-4">
                <div className="rounded-2xl bg-amber-50/70 p-4 border border-amber-200/60">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-amber-600" />
                    Describe your presentation in your own words
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    No need to navigate deep categories. Just write what you need (e.g. "Class 7 Science Climate Change 20 slides in Bangla with diagrams").
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Presentation Title / Core Subject
                  </label>
                  <input
                    type="text"
                    value={topicName}
                    onChange={(e) => setTopicName(e.target.value)}
                    placeholder="e.g. Photosynthesis, Market Entry Strategy, Thesis Defense..."
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    What should be included in the presentation?
                  </label>
                  <textarea
                    rows={4}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Describe target audience, key points, chapters to cover, or specific institutional instructions..."
                    className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    1. Select Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: "education", label: "Education", icon: GraduationCap },
                      { id: "business", label: "Business", icon: Briefcase },
                      { id: "professional", label: "Professional", icon: Layers },
                      { id: "custom", label: "Custom", icon: Sparkles },
                    ].map((c) => {
                      const Icon = c.icon;
                      const active = category === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCategory(c.id as any)}
                          className={`flex items-center gap-2 rounded-xl border p-3 text-xs sm:text-sm font-bold transition-all ${
                            active
                              ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <Icon className={`h-4 w-4 ${active ? "text-blue-600" : "text-slate-400"}`} />
                          <span>{c.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-Context for Education */}
                {category === "education" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">
                        Education Level
                      </label>
                      <select
                        value={educationLevel}
                        onChange={(e) => setEducationLevel(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs sm:text-sm font-medium focus:border-blue-500 focus:outline-none"
                      >
                        <option>Primary School (Class 1–5)</option>
                        <option>Secondary / High School (Class 6–10)</option>
                        <option>Higher Secondary / College (11–12)</option>
                        <option>University & Higher Academic</option>
                        <option>Alia Madrasa (Ibtedayi to Kamil)</option>
                        <option>Qawmi Madrasa (Noorani to Takhassus)</option>
                        <option>Technical & Vocational</option>
                        <option>Pre-Primary / Nursery</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1">
                        Class / Grade / Jamaat
                      </label>
                      <input
                        type="text"
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                        placeholder="e.g. Class 5, Class 8, Dawra-e-Hadith, Year 3..."
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Subject & Topic */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Subject / Course / Service Name
                    </label>
                    <input
                      type="text"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      placeholder="e.g. Science, Physics, Pitch Deck, Hadith..."
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Chapter / Topic / Deck Title
                    </label>
                    <input
                      type="text"
                      value={topicName}
                      onChange={(e) => setTopicName(e.target.value)}
                      placeholder="e.g. Human Body, Photosynthesis, Normalization..."
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Smart Recommendations Banner (Requirement 33) */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    <span>Recommended Slide Packages for this Topic:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSlideCount(15);
                        setIsCustomSlides(false);
                      }}
                      className="rounded-lg bg-white border border-slate-200 p-2 text-left hover:border-blue-400 transition-colors"
                    >
                      <div className="font-bold text-xs text-slate-800">Classroom Deck</div>
                      <div className="text-[11px] text-slate-500">15 slides • Standard lecture</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSlideCount(20);
                        setIsCustomSlides(false);
                      }}
                      className="rounded-lg bg-white border border-slate-200 p-2 text-left hover:border-blue-400 transition-colors"
                    >
                      <div className="font-bold text-xs text-slate-800">Detailed Academic</div>
                      <div className="text-[11px] text-slate-500">20 slides • In-depth charts</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSlideCount(25);
                        setIsCustomSlides(false);
                      }}
                      className="rounded-lg bg-white border border-slate-200 p-2 text-left hover:border-blue-400 transition-colors"
                    >
                      <div className="font-bold text-xs text-slate-800">Master Workshop</div>
                      <div className="text-[11px] text-slate-500">25 slides • Quiz & activities</div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 1: Slide Count, Language & Design Style */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Slide Count */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Slide Count
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[5, 10, 15, 20, 25, 30, 40].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setSlideCount(num);
                      setIsCustomSlides(false);
                    }}
                    className={`rounded-xl border py-2.5 text-xs font-bold transition-all ${
                      !isCustomSlides && slideCount === num
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setIsCustomSlides(true)}
                  className={`rounded-xl border py-2.5 text-xs font-bold transition-all ${
                    isCustomSlides
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  Custom
                </button>
              </div>

              {isCustomSlides && (
                <div className="mt-3 flex items-center gap-2 max-w-xs">
                  <input
                    type="number"
                    min="5"
                    max="100"
                    value={customSlideCount}
                    onChange={(e) => setCustomSlideCount(e.target.value)}
                    placeholder="Enter slide count"
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <span className="text-xs text-slate-500 whitespace-nowrap">slides</span>
                </div>
              )}
            </div>

            {/* Language */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Language of Presentation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs sm:text-sm">
                {[
                  { name: "Bangla", bn: "বাংলা" },
                  { name: "English", bn: "ইংরেজি" },
                  { name: "Arabic", bn: "العربية" },
                  { name: "Bangla & English", bn: "বাংলা ও ইংরেজি উভয়ে" },
                  { name: "Russian", bn: "Русский" },
                  { name: "Japanese", bn: "日本語" },
                  { name: "Chinese", bn: "中文" },
                  { name: "Urdu", bn: "اردو" },
                ].map((l) => (
                  <button
                    key={l.name}
                    type="button"
                    onClick={() => setOrderLanguage(l.name)}
                    className={`rounded-xl border p-2.5 font-semibold text-left transition-all ${
                      language === l.name
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{l.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Design Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Design & Visual Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  "Modern Educational",
                  "Academic & Research",
                  "Minimal Corporate",
                  "Islamic Academic",
                  "Technology & Engineering",
                  "Infographic Storytelling",
                  "Children & Pre-Primary",
                  "Medical & Health",
                  "Custom Style",
                ].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setDesignStyle(style)}
                    className={`rounded-xl border p-3 font-semibold text-left transition-all ${
                      designStyle === style
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{style}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Purpose & Detailed Requirements */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Presentation Purpose / Scenario
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {[
                  "Classroom teaching",
                  "Student assignment",
                  "Seminar / Workshop",
                  "Thesis defense",
                  "Project defense",
                  "Investor pitch",
                  "Business proposal",
                  "Corporate meeting",
                  "Conference paper",
                  "Training deck",
                  "Public event",
                  "Other",
                ].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPurpose(p)}
                    className={`rounded-xl border p-2.5 font-semibold text-left transition-all ${
                      purpose === p
                        ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{p}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Tell us exactly what you want in the presentation
              </label>
              <p className="text-xs text-slate-500 mb-2">
                Specify textbook chapters, key formulas, diagrams needed, or presentation time limits.
              </p>
              <textarea
                rows={5}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="e.g. Please emphasize the digestive organs with labeled diagrams. Include 3 questions at the end for students to answer..."
                className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* STEP 3: Reference Files & Additional Features */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Reference Files Upload (Requirement 46) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                Upload Reference Materials (PDF, DOCX, PPTX, Images)
              </label>
              <p className="text-xs text-slate-500 mb-3">
                Upload your syllabus, textbook scans, draft notes, or guidelines. (Max 50MB per file)
              </p>

              <div className="rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50/60 p-6 text-center hover:bg-slate-50 transition-colors">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.webp"
                  onChange={handleFileUpload}
                  id="file-upload"
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center justify-center gap-2"
                >
                  <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">
                    Click to browse files or drag and drop here
                  </div>
                  <div className="text-[11px] text-slate-500">
                    PDF, DOC, DOCX, PPT, PPTX, PNG, JPG, WEBP
                  </div>
                </label>
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {uploadedFiles.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-xl bg-slate-100 px-3 py-2 text-xs text-slate-700"
                    >
                      <span className="flex items-center gap-2 truncate">
                        <FileText className="h-4 w-4 text-blue-600 shrink-0" />
                        <span className="truncate">{file.name}</span>
                      </span>
                      <span className="font-mono text-slate-500 shrink-0">{file.size}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Features Checkboxes (Requirement 128) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Special Features & Components to Include
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {[
                  "Diagrams",
                  "Charts",
                  "Tables",
                  "Infographics",
                  "References",
                  "Citations",
                  "Speaker notes",
                  "Teacher notes",
                  "Animations",
                  "Quiz",
                  "Interactive Questions",
                  "Summary",
                ].map((feat) => {
                  const checked = features.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`flex items-center gap-2 rounded-xl border p-2.5 font-medium transition-all ${
                        checked
                          ? "border-blue-600 bg-blue-50 text-blue-800 font-bold"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <div
                        className={`flex h-4 w-4 items-center justify-center rounded border ${
                          checked ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white"
                        }`}
                      >
                        {checked && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                      <span>{feat}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Contact & Urgency */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Urgency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Delivery Urgency & Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setUrgency("standard");
                    setDeadline("Within 3-4 days");
                  }}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    urgency === "standard"
                      ? "border-blue-600 bg-blue-50 text-blue-900 shadow-sm"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">Standard Delivery</div>
                  <div className="text-xs text-slate-500 mt-1">3–4 business days</div>
                  <div className="text-xs font-bold text-blue-700 mt-2">Standard Rates</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setUrgency("urgent");
                    setDeadline("Within 24-48 hours");
                  }}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    urgency === "urgent"
                      ? "border-amber-600 bg-amber-50 text-amber-950 shadow-sm"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">Urgent Rush Delivery</div>
                  <div className="text-xs text-slate-500 mt-1">24–48 hours priority</div>
                  <div className="text-xs font-bold text-amber-700 mt-2">+40% Rush Fee</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setUrgency("custom");
                    setDeadline("Custom Scheduled Date");
                  }}
                  className={`rounded-2xl border p-4 text-left transition-all ${
                    urgency === "custom"
                      ? "border-blue-600 bg-blue-50 text-blue-900 shadow-sm"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">Custom Schedule</div>
                  <div className="text-xs text-slate-500 mt-1">Select required date</div>
                  <div className="text-xs font-bold text-slate-700 mt-2">As agreed</div>
                </button>
              </div>
            </div>

            {/* Customer Details */}
            <div className="border-t border-slate-200 pt-5 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Customer & Notification Details
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Md. Rafiqul Islam / Sarah Ahmed"
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 01711223344"
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp Number (for instant updates)
                  </label>
                  <input
                    type="tel"
                    value={customerWhatsApp}
                    onChange={(e) => setCustomerWhatsApp(e.target.value)}
                    placeholder="e.g. 01711223344"
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    placeholder="e.g. yourname@gmail.com"
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: Complete Order Review */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Presentation Topic:</span>
                <span className="font-bold text-slate-900">{topicName || "Custom Topic"}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Category / Level:</span>
                <span className="font-medium text-slate-800">
                  {category.toUpperCase()} • {educationLevel} {selectedClass && `(${selectedClass})`}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Slide Count & Language:</span>
                <span className="font-bold text-slate-900">{numericSlides} Slides • {language}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Design Style:</span>
                <span className="font-medium text-slate-800">{designStyle}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Urgency & Timeline:</span>
                <span className="font-medium text-slate-800">{urgency.toUpperCase()} ({deadline})</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Customer:</span>
                <span className="font-medium text-slate-800">{customerName} ({customerPhone})</span>
              </div>
              {features.length > 0 && (
                <div className="border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-500 block mb-1">Features Included:</span>
                  <div className="flex flex-wrap gap-1">
                    {features.map((f) => (
                      <span key={f} className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Estimated Quote Card (Requirement 87) */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50/80 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Estimated Transparent Quotation
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  ৳{priceCalculation.estimatedPrice.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Base: ৳{priceCalculation.breakdown.base} • Add-ons: ৳{priceCalculation.breakdown.featuresFee + priceCalculation.breakdown.urgencyFee}
                </div>
              </div>

              <div className="text-xs text-blue-900 bg-white/80 border border-blue-200 rounded-xl p-3 max-w-xs">
                💡 Price is verified by our team during requirement review before any final payment.
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls Footer */}
        <div className="mt-8 border-t border-slate-100 pt-5 flex items-center justify-between">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>{t("btnBack")}</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
            >
              <span>{t("btnNext")}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 active:scale-95 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Submitting Request...</span>
              ) : (
                <>
                  <Check className="h-4 w-4" />
                  <span>{t("btnSubmitOrder")}</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
