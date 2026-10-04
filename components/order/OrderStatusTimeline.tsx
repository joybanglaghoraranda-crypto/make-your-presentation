"use client";

import React from "react";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { orderStatuses } from "@/lib/config/site";

export function OrderStatusTimeline({ currentStatus }: { currentStatus: string }) {
  const currentIdx = orderStatuses.findIndex((s) => s.id === currentStatus);
  const isCancelled = currentStatus === "cancelled";

  // The primary flow steps excluding cancelled and minor branch
  const mainFlow = [
    { id: "request_received", label: "Request Received", labelBn: "অনুরোধ গৃহীত" },
    { id: "requirement_review", label: "Reviewing", labelBn: "পর্যালোচনা" },
    { id: "price_confirmed", label: "Price Confirmed", labelBn: "মূল্য নিশ্চিত" },
    { id: "payment_received", label: "Paid", labelBn: "পেমেন্ট সম্পন্ন" },
    { id: "in_production", label: "In Production", labelBn: "তৈরি হচ্ছে" },
    { id: "quality_check", label: "Quality Check", labelBn: "মান যাচাই" },
    { id: "preview_ready", label: "Preview Ready", labelBn: "প্রিভিউ প্রস্তুত" },
    { id: "final_delivery", label: "Final Delivery", labelBn: "চূড়ান্ত ডেলিভারি" },
    { id: "completed", label: "Completed", labelBn: "সম্পূর্ণ" },
  ];

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Order Production Lifecycle
        </h4>
        {isCancelled ? (
          <span className="rounded-full bg-red-100 px-3 py-0.5 text-xs font-bold text-red-700">
            Order Cancelled
          </span>
        ) : (
          <span className="rounded-full bg-blue-100 px-3 py-0.5 text-xs font-bold text-blue-700">
            Active Status: {orderStatuses.find((s) => s.id === currentStatus)?.label || currentStatus}
          </span>
        )}
      </div>

      {/* Progress track */}
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
        {mainFlow.map((step, idx) => {
          const stepIdx = orderStatuses.findIndex((s) => s.id === step.id);
          const isPassed = currentIdx >= stepIdx;
          const isCurrent = currentStatus === step.id;

          return (
            <div
              key={step.id}
              className="flex md:flex-col items-center gap-3 md:gap-2 flex-1 relative z-10"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all ${
                  isCurrent
                    ? "bg-blue-600 text-white ring-4 ring-blue-100"
                    : isPassed
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-400 border border-slate-200"
                }`}
              >
                {isPassed && !isCurrent ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <span>{idx + 1}</span>
                )}
              </div>

              <div className="text-left md:text-center">
                <div
                  className={`text-xs font-bold ${
                    isCurrent
                      ? "text-blue-700"
                      : isPassed
                      ? "text-slate-800"
                      : "text-slate-400"
                  }`}
                >
                  {step.label}
                </div>
                <div className="text-[10px] text-slate-400">{step.labelBn}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
