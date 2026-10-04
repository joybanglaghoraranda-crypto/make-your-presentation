"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { OrderStatusTimeline } from "@/components/order/OrderStatusTimeline";
import { siteConfig, buildWhatsAppLink } from "@/lib/config/site";
import {
  FileText,
  Download,
  MessageCircle,
  RotateCcw,
  CheckCircle2,
  Clock,
  Send,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export default function OrderDetailPage() {
  const params = useParams();
  const orderId = params?.id as string;
  const order = repository.getOrderById(orderId) || repository.getOrders()[0];

  const [revisionSlide, setRevisionSlide] = useState("");
  const [revisionIssue, setRevisionIssue] = useState("");
  const [revisionChange, setRevisionChange] = useState("");
  const [revisionSent, setRevisionSent] = useState(false);

  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState(order ? repository.getMessages(order.id) : []);

  if (!order) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold">Order not found.</h2>
        <Link href="/dashboard" className="text-blue-600 underline mt-2 block">
          Return to Dashboard
        </Link>
      </div>
    );
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

  const handleSendRevision = (e: React.FormEvent) => {
    e.preventDefault();
    if (!revisionIssue.trim() || !revisionChange.trim()) return;

    repository.createRevision(order.id, {
      slide_number: revisionSlide,
      issue_description: revisionIssue,
      requested_change: revisionChange,
    });

    setRevisionSent(true);
    setRevisionSlide("");
    setRevisionIssue("");
    setRevisionChange("");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const msg = repository.addMessage(order.id, order.customer_name, "customer", newMessage);
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: `Order ${order.order_number}` },
          ]}
        />

        {/* Top Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                {order.order_number}
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-slate-600">
                {order.category}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              {order.topic_name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Assigned Specialist: {order.assigned_staff || "Senior Presentation Lead"} • Created on {new Date(order.created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 shadow-sm"
            >
              <MessageCircle className="h-4 w-4 fill-white" />
              <span>Discuss on WhatsApp</span>
            </a>

            {order.status === "final_delivery" || order.status === "completed" ? (
              <a
                href="#download"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700 shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Download Presentation</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* Lifecycle Status Timeline (Requirement 38) */}
        <div className="mt-8">
          <OrderStatusTimeline currentStatus={order.status} />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Specifications & Final Delivery Files */}
          <div className="lg:col-span-7 space-y-6">
            {/* Download Final Delivery Files Card (Requirement 44 & 78) */}
            <div id="download" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Download className="h-5 w-5 text-blue-600" />
                  <span>Final Delivery Files</span>
                </h3>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="h-4 w-4" /> Secure Storage
                </span>
              </div>

              {order.status === "final_delivery" || order.status === "completed" || order.status === "preview_ready" ? (
                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center justify-between rounded-xl bg-blue-50/70 border border-blue-200 p-3.5">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-blue-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {order.topic_name.replace(/\s+/g, "_")}_Final.pptx
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Microsoft PowerPoint • Fully Editable • 18.4 MB
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading editable PPTX presentation for ${order.order_number}`)}
                      className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                    >
                      Download PPTX
                    </button>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 p-3.5">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-red-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {order.topic_name.replace(/\s+/g, "_")}_Handout.pdf
                        </div>
                        <div className="text-[11px] text-slate-500">
                          High-Resolution Document • 9.2 MB
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => alert(`Downloading high-resolution PDF handout for ${order.order_number}`)}
                      className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-bold text-white hover:bg-slate-700 transition-colors"
                    >
                      Download PDF
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 rounded-2xl bg-slate-50 p-6 text-center text-xs text-slate-500 border border-slate-100">
                  <Clock className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                  Your final PPTX and PDF files will appear here as soon as quality check is approved.
                </div>
              )}
            </div>

            {/* Presentation Specifications Details */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-4 pb-2 border-b border-slate-100">
                Presentation Configuration
              </h3>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Slide Count</span>
                  <span className="font-bold text-slate-900 text-sm">{order.slide_count} Slides</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Language</span>
                  <span className="font-bold text-slate-900 text-sm">{order.language}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Design Style</span>
                  <span className="font-bold text-slate-900 text-sm">{order.design_style}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Purpose</span>
                  <span className="font-bold text-slate-900 text-sm">{order.purpose}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Deadline</span>
                  <span className="font-bold text-slate-900 text-sm">{order.deadline}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Payment Status</span>
                  <span className="font-bold text-emerald-600 text-sm capitalize">{order.payment_status}</span>
                </div>
              </div>

              {order.content_requirements && (
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Customer Requirements
                  </span>
                  <p className="text-xs text-slate-700 bg-slate-50 rounded-xl p-3 leading-relaxed border border-slate-100">
                    {order.content_requirements}
                  </p>
                </div>
              )}
            </div>

            {/* Revision Request Center (Requirement 45) */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <RotateCcw className="h-5 w-5 text-amber-600" />
                  <span>Request a Revision</span>
                </h3>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  {order.revision_count} Revisions Tracked
                </span>
              </div>

              {revisionSent ? (
                <div className="mt-4 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 mx-auto mb-1" />
                  <div className="text-xs font-bold text-emerald-950">Revision Request Sent!</div>
                  <div className="text-[11px] text-emerald-800">Our design team has been notified.</div>
                  <button
                    onClick={() => setRevisionSent(false)}
                    className="mt-3 text-xs font-bold text-emerald-700 underline"
                  >
                    Submit another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendRevision} className="mt-4 space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Specific Slide Number(s)
                    </label>
                    <input
                      type="text"
                      value={revisionSlide}
                      onChange={(e) => setRevisionSlide(e.target.value)}
                      placeholder="e.g. Slide 4, Slide 7 diagram label..."
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Issue Description *
                    </label>
                    <input
                      type="text"
                      required
                      value={revisionIssue}
                      onChange={(e) => setRevisionIssue(e.target.value)}
                      placeholder="e.g. Font size too small / Diagram missing title..."
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">
                      Requested Changes / Replacement Text *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={revisionChange}
                      onChange={(e) => setRevisionChange(e.target.value)}
                      placeholder="State the exact change or replacement phrasing..."
                      className="w-full rounded-xl border border-slate-300 p-2 text-xs focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700 transition-colors shadow-sm"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Submit Revision to Designers</span>
                  </button>
                </form>
              )}

              {revisions.length > 0 && (
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Revision History
                  </div>
                  {revisions.map((rev) => (
                    <div
                      key={rev.id}
                      className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs space-y-1"
                    >
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Round #{rev.revision_number} {rev.slide_number && `(${rev.slide_number})`}</span>
                        <span className="capitalize text-amber-600 font-semibold">{rev.status}</span>
                      </div>
                      <div className="text-slate-600">{rev.requested_change}</div>
                      {rev.admin_response && (
                        <div className="text-[11px] text-blue-700 bg-white p-2 rounded border border-slate-200 mt-1">
                          💬 Team response: {rev.admin_response}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Customer <-> Team Messaging (Requirement 48) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col h-full min-h-[500px]">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  <span>Team Conversation</span>
                </h3>
                <span className="text-[11px] font-semibold text-slate-400">Order ID: {order.order_number}</span>
              </div>

              {/* Chat Message List */}
              <div className="flex-1 overflow-y-auto space-y-3 py-4 max-h-[380px]">
                {messages.length === 0 ? (
                  <div className="text-center py-10 text-xs text-slate-400">
                    No messages yet. Send a message to ask the production team a question.
                  </div>
                ) : (
                  messages.map((m) => {
                    const isMe = m.sender_role === "customer";
                    return (
                      <div
                        key={m.id}
                        className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                      >
                        <div className="text-[10px] font-bold text-slate-400 mb-0.5">
                          {m.sender_name}
                        </div>
                        <div
                          className={`rounded-2xl p-3 text-xs max-w-xs leading-relaxed ${
                            isMe
                              ? "bg-blue-600 text-white rounded-br-none"
                              : "bg-slate-100 text-slate-800 rounded-bl-none"
                          }`}
                        >
                          {m.message}
                        </div>
                        <div className="text-[9px] text-slate-400 mt-0.5 font-mono">
                          {new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="mt-3 pt-3 border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message to your slide designer..."
                  className="flex-1 rounded-xl border border-slate-300 p-2 text-xs focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 transition-colors shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
