import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "BDT"): string {
  if (currency === "BDT") {
    return `৳${amount.toLocaleString("en-US")}`;
  }
  return `$${amount.toLocaleString("en-US")}`;
}

export function formatDate(dateString: string, locale = "en-US"): string {
  try {
    return new Date(dateString).toLocaleDateString(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
