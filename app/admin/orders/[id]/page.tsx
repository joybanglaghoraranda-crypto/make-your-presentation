"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { repository } from "@/lib/db/repository";
import { orderStatuses, paymentStatuses, buildWhatsAppLink } from "@/lib/config/site";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  User,
  Clock,
  RotateCcw,
  FileText,
  DollarSign,
  Upload,
  ShieldCheck,
} from "lucide-react";

export default function AdminOrderDetailPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const initialOrder = repository.getOrderById(orderId) || repository.getOrders()[0];

  const [order, setOrder] = useState(initialOrder);
  const [status, setStatus] = useState(order?.status || "request_received");
  const [assignedStaff, setAssignedStaff] = useState(order?.assigned_staff || "");
  const [finalPrice, setFinalPrice] = useState(order?.final_price || 1200);
  const [internalNote, setInternalNote] = useState("");
  const [savedMsg, setSavedMsg] = useState("");

  if (!order) {
    return <div className="p-10 text-white">Order not found.</div>;
  }

  const revisions = repository.getRevisions(order.id);
  const waUrl = buildWhatsAppLink({
    orderId: order.order_number,
    category: order.category,
    className: order.class_name,
    subject: order.subject_name,
    topic: order.topic_name,
    slides: order.slide_count,
    language: order.language,
  });

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    // Update status
    repository.updateOrderStatus(order.id, status as any, internalNote);
    // Update price
    repository.updateOrderPrice(order.id, Number(finalPrice));
    // Assign staff
    if (assignedStaff) {
      repository.assignStaff(order.id, assignedStaff);
    }

    const updated = repository.getOrderById(order.id);
    if (updated) setOrder({ ...updated });

    setSavedMsg("Order parameters and assignment updated successfully!");
    setInternalNote("");
    setTimeout(() => setSavedMsg(""), 3000);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Top back button */}
      <Link
        href="/admin/orders"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Orders Queue</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
              {order.order_number}
            </span>
            <span className="text-xs text-slate-400 uppercase font-semibold">
              {order.category}
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-white mt-1">
            {order.topic_name}
          </h1>
          <div className="text-xs text-slate-400 mt-0.5">
            Customer: <strong className="text-white">{order.customer_name}</strong> • Phone: {order.customer_phone} • Email: {order.customer_email || "N/A"}
          </div>
        </div>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-sm shrink-0"
        >
          <MessageCircle className="h-4 w-4 fill-white" />
          <span>Message Customer on WhatsApp</span>
        </a>
      </div>

      {savedMsg && (
        <div className="flex items-center gap-2 rounded-2xl bg-emerald-950 border border-emerald-800 p-4 text-xs font-bold text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{savedMsg}</span>
        </div>
      )}

      {/* Main Admin Controls Form */}
      <form onSubmit={handleUpdate} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Stage Status & Financial Management */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-5">
            <h3 className="font-bold text-white text-base pb-2 border-b border-slate-800">
              Status & Staff Assignment
            </h3>

            {/* Lifecycle Status Select */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Current Lifecycle Stage (12-Step Pipeline)
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs sm:text-sm text-white focus:border-blue-500 focus:outline-none"
              >
                {orderStatuses.map((s) => (
                  <option key={s.id} value={s.id}>
                    Step {s.step}: {s.label} ({s.labelBn})
                  </option>
                ))}
              </select>
            </div>

            {/* Staff Assignment */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Assign Slide Specialist / Content Lead
              </label>
              <select
                value={assignedStaff}
                onChange={(e) => setAssignedStaff(e.target.value)}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs sm:text-sm text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="">Unassigned</option>
                <option value="Senior Science Slide Specialist">Senior Science Slide Specialist</option>
                <option value="CS Academic Lead">CS Academic Lead</option>
                <option value="Islamic Studies Editor">Islamic Studies Editor</option>
                <option value="Senior Business Analyst">Senior Business Analyst</option>
                <option value="General Presentation Queue">General Presentation Queue</option>
              </select>
            </div>

            {/* Quotation / Final Price */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Confirmed Quotation Amount (৳ BDT)
              </label>
              <input
                type="number"
                value={finalPrice}
                onChange={(e) => setFinalPrice(Number(e.target.value))}
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs sm:text-sm text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Internal Notes (Invisible to Customer) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                Add Internal Production Note (Team Only)
              </label>
              <textarea
                rows={3}
                value={internalNote}
                onChange={(e) => setInternalNote(e.target.value)}
                placeholder="Log internal research instructions, diagram requests, or proofreader comments..."
                className="w-full rounded-xl bg-slate-900 border border-slate-700 p-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-xs sm:text-sm font-bold text-white hover:bg-blue-500 transition-colors shadow-md"
            >
              Save Changes & Notify Pipeline
            </button>
          </div>

          {/* Internal Notes History */}
          {order.internal_notes && (
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Internal Audit & Team Notes
              </h4>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900 p-3 rounded-xl whitespace-pre-wrap leading-relaxed border border-slate-800">
                {order.internal_notes}
              </pre>
            </div>
          )}
        </div>

        {/* Right Column: Customer Requirements & Revisions Management */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-4">
            <h3 className="font-bold text-white text-base pb-2 border-b border-slate-800">
              Customer Order Brief
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Slides:</span>
                <span className="text-white font-bold">{order.slide_count} slides</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Language:</span>
                <span className="text-white font-bold">{order.language}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Design Style:</span>
                <span className="text-white font-bold">{order.design_style}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Urgency:</span>
                <span className="text-amber-400 font-bold uppercase">{order.urgency}</span>
              </div>
            </div>

            {order.content_requirements && (
              <div className="pt-3 border-t border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Customer Requirements:
                </span>
                <p className="text-xs text-slate-300 bg-slate-900 p-3 rounded-xl border border-slate-800 leading-relaxed">
                  {order.content_requirements}
                </p>
              </div>
            )}
          </div>

          {/* Revisions Queue */}
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <h3 className="font-bold text-white text-base flex items-center gap-1.5">
                <RotateCcw className="h-4 w-4 text-amber-400" />
                <span>Client Revision Queue</span>
              </h3>
              <span className="text-xs text-amber-400 font-bold">{revisions.length} Requests</span>
            </div>

            {revisions.length === 0 ? (
              <div className="text-xs text-slate-500 py-4 text-center">
                No active revisions requested for this order.
              </div>
            ) : (
              <div className="space-y-3">
                {revisions.map((rev) => (
                  <div key={rev.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-xs space-y-2">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">Round #{rev.revision_number} {rev.slide_number && `• ${rev.slide_number}`}</span>
                      <span className="text-amber-400 uppercase text-[10px]">{rev.status}</span>
                    </div>
                    <div className="text-slate-300">{rev.requested_change}</div>
                    <div className="pt-2 border-t border-slate-800 flex gap-2">
                      <button
                        type="button"
                        onClick={() => alert(`Revision #${rev.revision_number} accepted and queued.`)}
                        className="rounded-lg bg-emerald-700 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-emerald-600"
                      >
                        Approve Revision
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
