"use client";

import React, { useState } from "react";
import { repository } from "@/lib/db/repository";
import { CreditCard, CheckCircle2, XCircle, Search } from "lucide-react";

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState(repository.getPayments());
  const [statusMsg, setStatusMsg] = useState("");

  const handleVerify = (id: string, status: "paid" | "cancelled") => {
    repository.verifyPayment(id, status);
    setPayments([...repository.getPayments()]);
    setStatusMsg(`Payment transaction ${status === "paid" ? "VERIFIED & PAID" : "CANCELLED"} successfully.`);
    setTimeout(() => setStatusMsg(""), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
          Financial Desk
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
          Payment Verification Desk
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Audit customer bKash, Nagad, and bank transaction IDs and verify invoices.
        </p>
      </div>

      {statusMsg && (
        <div className="flex items-center gap-2 rounded-2xl bg-teal-950 border border-teal-800 p-4 text-xs font-bold text-teal-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{statusMsg}</span>
        </div>
      )}

      <div className="rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 bg-slate-900 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="py-3.5 px-4">Transaction ID</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Gateway</th>
                <th className="py-3.5 px-4">Order ID</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4 text-right">Verification Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 font-medium">
              {payments.map((p) => {
                const ord = repository.getOrderById(p.order_id);
                return (
                  <tr key={p.id} className="hover:bg-slate-900/60">
                    <td className="py-3.5 px-4 font-mono font-bold text-teal-400">
                      {p.transaction_id || "Direct Deposit"}
                    </td>

                    <td className="py-3.5 px-4 font-bold text-white">
                      ৳{p.amount.toLocaleString()}
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                        {p.method}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-slate-400">
                      {ord?.order_number || p.order_id}
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold capitalize ${
                          p.status === "paid"
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                            : "bg-amber-950 text-amber-400 border border-amber-800"
                        }`}
                      >
                        {p.status.replace(/_/g, " ")}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                      {new Date(p.created_at).toLocaleDateString()}
                    </td>

                    <td className="py-3.5 px-4 text-right space-x-2">
                      {p.status !== "paid" ? (
                        <>
                          <button
                            onClick={() => handleVerify(p.id, "paid")}
                            className="rounded-lg bg-emerald-600 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-emerald-500"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleVerify(p.id, "cancelled")}
                            className="rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-red-400 hover:bg-red-950"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-[11px] text-emerald-400 font-bold">Verified ✓</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
