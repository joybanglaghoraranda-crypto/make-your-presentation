"use client";

import React, { useState } from "react";
import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { MessageSquare, ArrowRight, Send, CheckCircle2 } from "lucide-react";

export default function DashboardMessagesPage() {
  const orders = repository.getOrders();
  const [selectedOrder, setSelectedOrder] = useState(orders[0]);
  const [messages, setMessages] = useState(selectedOrder ? repository.getMessages(selectedOrder.id) : []);
  const [text, setText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !selectedOrder) return;
    const newMsg = repository.addMessage(selectedOrder.id, selectedOrder.customer_name, "customer", text);
    setMessages([...messages, newMsg]);
    setText("");
  };

  return (
    <div className="min-h-screen bg-slate-50/70 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Team Messages" },
          ]}
        />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Team Messages & Communications
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Direct conversation threads with our researchers, content writers, and presentation designers.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[550px]">
          {/* Left: Orders Conversation Selector */}
          <div className="md:col-span-4 border-r border-slate-200 bg-slate-50/50 p-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
              Select Order Thread
            </div>
            {orders.map((o) => {
              const active = selectedOrder?.id === o.id;
              return (
                <button
                  key={o.id}
                  onClick={() => {
                    setSelectedOrder(o);
                    setMessages(repository.getMessages(o.id));
                  }}
                  className={`w-full rounded-2xl p-3 text-left transition-all ${
                    active
                      ? "bg-white border border-blue-300 shadow-sm"
                      : "hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono font-bold text-blue-700">{o.order_number}</span>
                    <span className="text-[10px] text-slate-400">{o.category}</span>
                  </div>
                  <div className="font-bold text-xs text-slate-900 mt-1 truncate">
                    {o.topic_name}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                    {o.assigned_staff || "Presentation Lead"}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Chat Window */}
          <div className="md:col-span-8 flex flex-col justify-between p-6">
            {selectedOrder ? (
              <>
                <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {selectedOrder.topic_name}
                    </h3>
                    <div className="text-xs text-slate-400">
                      Thread: {selectedOrder.order_number} • Lead: {selectedOrder.assigned_staff || "Assigned Designer"}
                    </div>
                  </div>
                  <Link
                    href={`/dashboard/orders/${selectedOrder.id}`}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    View Order Details
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 py-6 max-h-[380px]">
                  {messages.length === 0 ? (
                    <div className="text-center py-12 text-xs text-slate-400">
                      No messages yet for this order. Send a note below to talk with your presentation specialist.
                    </div>
                  ) : (
                    messages.map((m) => {
                      const isMe = m.sender_role === "customer";
                      return (
                        <div
                          key={m.id}
                          className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                        >
                          <span className="text-[10px] font-bold text-slate-400 mb-0.5">{m.sender_name}</span>
                          <div
                            className={`rounded-2xl p-3 text-xs max-w-sm leading-relaxed ${
                              isMe ? "bg-blue-600 text-white rounded-br-none" : "bg-slate-100 text-slate-800 rounded-bl-none"
                            }`}
                          >
                            {m.message}
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                <form onSubmit={handleSend} className="pt-3 border-t border-slate-100 flex gap-2">
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type your message to the slide designer..."
                    className="flex-1 rounded-xl border border-slate-300 p-2.5 text-xs sm:text-sm focus:border-blue-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    Send
                  </button>
                </form>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-xs text-slate-400">
                Select an order from the list to view the conversation.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
