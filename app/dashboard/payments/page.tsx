"use client";

import React, { useState } from "react";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { siteConfig } from "@/lib/config/site";
import { DollarSign, CheckCircle2, Clock, Upload, ArrowRight, ShieldCheck } from "lucide-react";

export default function DashboardPaymentsPage() {
  const payments = repository.getPayments();
  const orders = repository.getOrders();

  const [selectedOrderId, setSelectedOrderId] = useState(orders[0]?.id || "");
  const [method, setMethod] = useState<"bKash" | "Nagad" | "Bank Transfer" | "Card">("bKash");
  const [trxId, setTrxId] = useState("");
  const [amount, setAmount] = useState(orders[0]?.estimated_price || 1200);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitSlip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trxId.trim() || !selectedOrderId) return;

    repository.addPayment({
      order_id: selectedOrderId,
      amount: Number(amount),
      method,
      transaction_id: trxId,
    });

    setSubmitted(true);
    setTrxId("");
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Payments & Verification" },
          ]}
        />

        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Payments & Invoice Verification
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
            Verify manual bKash, Nagad, or Bank transfers by submitting your transaction ID. Our finance desk verifies all deposits before releasing final presentation files.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Submit Transaction Slip */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-1">
                Submit Payment Verification Slip
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Send deposit to our official business merchant number: <strong>{siteConfig.phone}</strong>
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center animate-in fade-in duration-150">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-emerald-950">Verification Slip Submitted!</div>
                  <p className="mt-1 text-xs text-emerald-800">
                    Our billing desk will verify your Transaction ID and update your order status to "Payment Received".
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-bold text-emerald-700 underline"
                  >
                    Submit another payment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitSlip} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Select Order to Pay For *
                    </label>
                    <select
                      value={selectedOrderId}
                      onChange={(e) => {
                        setSelectedOrderId(e.target.value);
                        const ord = orders.find((o) => o.id === e.target.value);
                        if (ord?.final_price) setAmount(ord.final_price);
                      }}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm font-medium focus:border-blue-500 focus:outline-none"
                    >
                      {orders.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.order_number} — {o.topic_name} (৳{o.final_price})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Payment Gateway / Method *
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                      {(["bKash", "Nagad", "Bank Transfer", "Card"] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMethod(m)}
                          className={`rounded-xl border p-2.5 transition-all text-center ${
                            method === m
                              ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                              : "border-slate-200 text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Amount Paid (৳) *
                      </label>
                      <input
                        type="number"
                        required
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Transaction ID (TrxID) *
                      </label>
                      <input
                        type="text"
                        required
                        value={trxId}
                        onChange={(e) => setTrxId(e.target.value)}
                        placeholder="e.g. 9J28K91L23"
                        className="w-full rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm font-mono focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-blue-600 py-3 text-xs sm:text-sm font-bold text-white hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Submit Transaction for Verification
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Transaction History */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Transaction History
              </h2>

              <div className="space-y-3">
                {payments.map((p) => {
                  const ord = orders.find((o) => o.id === p.order_id);
                  return (
                    <div
                      key={p.id}
                      className="rounded-2xl border border-slate-100 bg-slate-50 p-4 flex items-center justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">
                            ৳{p.amount.toLocaleString()}
                          </span>
                          <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                            {p.method}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          TrxID: <span className="font-mono text-slate-700">{p.transaction_id || "N/A"}</span>
                        </div>
                        {ord && (
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Order: {ord.order_number} ({ord.topic_name})
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-bold capitalize ${
                            p.status === "paid"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {p.status.replace(/_/g, " ")}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-1">
                          {new Date(p.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
