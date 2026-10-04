export const siteConfig = {
  name: "Make Your Presentation",
  shortName: "MYP",
  tagline: "Your Topic. Our Presentation.",
  secondaryTagline: "Create Better Presentations. Teach Better. Present Better.",
  description:
    "From classroom lessons to university research, business strategy to professional training—we turn your ideas into clear, engaging and professionally designed presentations.",
  phone: "01410967505",
  whatsappNumber: "01410967505",
  whatsappInternational: "+8801410967505",
  email: "makeyourpresentation.bd@gmail.com",
  facebookUrl: "https://www.facebook.com/share/19D66dis4H/",
  defaultLanguage: "bn",
  defaultCurrency: "BDT",
  currencySymbol: "৳",
  primaryMarket: "Bangladesh",
  address: "Dhaka, Bangladesh",
};

export const supportedLanguages = [
  { code: "bn", name: "বাংলা", nativeName: "বাংলা", dir: "ltr" },
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "ar", name: "العربية", nativeName: "العربية", dir: "rtl" },
  { code: "ru", name: "Русский", nativeName: "Русский", dir: "ltr" },
  { code: "ja", name: "日本語", nativeName: "日本語", dir: "ltr" },
  { code: "zh", name: "中文", nativeName: "中文", dir: "ltr" },
] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number]["code"];

export const orderStatuses = [
  { id: "request_received", label: "Request Received", labelBn: "অনুরোধ গৃহীত হয়েছে", color: "blue", step: 1 },
  { id: "requirement_review", label: "Requirement Review", labelBn: "প্রয়োজনীয়তা পর্যালোচনা", color: "indigo", step: 2 },
  { id: "price_confirmed", label: "Price Confirmed", labelBn: "মূল্য নিশ্চিত", color: "purple", step: 3 },
  { id: "awaiting_payment", label: "Awaiting Payment", labelBn: "পেমেন্টের অপেক্ষায়", color: "amber", step: 4 },
  { id: "payment_received", label: "Payment Received", labelBn: "পেমেন্ট সম্পন্ন", color: "emerald", step: 5 },
  { id: "in_production", label: "In Production", labelBn: "তৈরি হচ্ছে", color: "blue", step: 6 },
  { id: "quality_check", label: "Quality Check", labelBn: "মান যাচাই", color: "teal", step: 7 },
  { id: "preview_ready", label: "Preview Ready", labelBn: "প্রিভিউ প্রস্তুত", color: "cyan", step: 8 },
  { id: "revision_requested", label: "Revision Requested", labelBn: "সংশোধন অনুরোধ", color: "amber", step: 9 },
  { id: "revision_in_progress", label: "Revision in Progress", labelBn: "সংশোধন চলছে", color: "orange", step: 10 },
  { id: "final_delivery", label: "Final Delivery", labelBn: "চূড়ান্ত ডেলিভারি", color: "emerald", step: 11 },
  { id: "completed", label: "Completed", labelBn: "সম্পূর্ণ", color: "emerald", step: 12 },
  { id: "cancelled", label: "Cancelled", labelBn: "বাতিল", color: "red", step: 0 },
] as const;

export const paymentStatuses = [
  { id: "pending", label: "Pending", labelBn: "অপেক্ষমান", color: "amber" },
  { id: "awaiting_verification", label: "Awaiting Verification", labelBn: "যাচাই অপেক্ষমান", color: "blue" },
  { id: "paid", label: "Paid", labelBn: "পরিশোধিত", color: "emerald" },
  { id: "partially_paid", label: "Partially Paid", labelBn: "আংশিক পরিশোধিত", color: "orange" },
  { id: "refunded", label: "Refunded", labelBn: "ফেরতকৃত", color: "gray" },
  { id: "cancelled", label: "Cancelled", labelBn: "বাতিল", color: "red" },
] as const;

export function buildWhatsAppLink(details: {
  orderId?: string;
  category?: string;
  className?: string;
  subject?: string;
  topic?: string;
  slides?: number | string;
  language?: string;
  design?: string;
  customMessage?: string;
}): string {
  const number = siteConfig.whatsappInternational.replace(/[^0-9]/g, "");

  if (details.customMessage) {
    const text = encodeURIComponent(details.customMessage);
    return `https://wa.me/${number}?text=${text}`;
  }

  const lines = [
    "Hello Make Your Presentation Team,",
    "I would like to inquire/order a presentation.",
    details.orderId ? `Order ID: ${details.orderId}` : null,
    details.category ? `Category: ${details.category}` : null,
    details.className ? `Class/Level: ${details.className}` : null,
    details.subject ? `Subject: ${details.subject}` : null,
    details.topic ? `Topic: ${details.topic}` : null,
    details.slides ? `Slides: ${details.slides}` : null,
    details.language ? `Language: ${details.language}` : null,
    details.design ? `Design: ${details.design}` : null,
    "\nPlease let me know the details and quotation. Thank you!",
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${number}?text=${text}`;
}
