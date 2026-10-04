"use client";

import React, { useState } from "react";
import Link from "next/link";
import { repository } from "@/lib/db/repository";
import { orderStatuses, paymentStatuses } from "@/lib/config/site";
import {
  Search,
  Filter,
  ShoppingCart,
  ArrowRight,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(repository.getOrders());
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredOrders = orders.filter((o) => {
    const matchSearch =
      o.order_number.toLowerCase().includes(search.toLowerCase()) ||
      o.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      o.topic_name.toLowerCase().includes(search.toLowerCase()) ||
      o.customer_phone.includes(search);

    const matchStatus = selectedStatus === "all" || o.status === selectedStatus;
    const matchCat = selectedCategory === "all" || o.category === selectedCategory;

    return matchSearch && matchStatus && matchCat;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Operations Desk
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Order Fulfillment & Assignment
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage stage progression, assign designers, verify payments, and inspect requirements.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          Total in Database: <span className="text-white font-bold">{orders.length}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Order ID, customer, phone, or topic..."
            className="w-full rounded-xl bg-slate-900 border border-slate-800 pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Status filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-300 focus:outline-none"
          >
            <option value="all">All Statuses</option>
            {orderStatuses.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>

          {/* Category filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-slate-300 focus:outline-none"
          >
            <option value="all">All Categories</option>
            <option value="education">Education</option>
            <option value="business">Business</option>
            <option value="professional">Professional</option>
            <option value="custom">Custom</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="rounded-3xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="border-b border-slate-800 bg-slate-900/80 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <tr>
                <th className="py-3.5 px-4">Order ID</th>
                <th className="py-3.5 px-4">Customer</th>
                <th className="py-3.5 px-4">Topic / Category</th>
                <th className="py-3.5 px-4">Slides</th>
                <th className="py-3.5 px-4">Price</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Assigned To</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-medium">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-500">
                    No orders found matching the filter criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-900/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-400">
                      {ord.order_number}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{ord.customer_name}</div>
                      <div className="text-[11px] text-slate-500">{ord.customer_phone}</div>
                    </td>

                    <td className="py-3.5 px-4 max-w-xs">
                      <div className="font-bold text-slate-100 truncate">{ord.topic_name}</div>
                      <div className="text-[11px] text-slate-500 capitalize">
                        {ord.category} {ord.class_name && `• ${ord.class_name}`}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-bold text-white">{ord.slide_count}</span>
                      <span className="text-[11px] text-slate-500 block">{ord.language}</span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="font-bold text-white">৳{ord.final_price?.toLocaleString()}</span>
                      <span
                        className={`text-[10px] font-bold block capitalize ${
                          ord.payment_status === "paid" ? "text-emerald-400" : "text-amber-400"
                        }`}
                      >
                        {ord.payment_status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold capitalize inline-block ${
                          ord.status === "completed"
                            ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                            : ord.status === "in_production"
                            ? "bg-blue-950 text-blue-400 border border-blue-800"
                            : "bg-amber-950 text-amber-400 border border-amber-800"
                        }`}
                      >
                        {ord.status.replace(/_/g, " ")}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                      {ord.assigned_staff || "Unassigned"}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/admin/orders/${ord.id}`}
                        className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-500 transition-colors inline-block"
                      >
                        Manage
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
