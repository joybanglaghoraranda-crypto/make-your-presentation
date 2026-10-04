import Link from "next/link";
import { repository } from "@/lib/db/repository";
import {
  ShoppingCart,
  Clock,
  CheckCircle2,
  DollarSign,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export const metadata = {
  title: "Admin Dashboard & Analytics — MYP Console",
  description: "Executive metrics, active production queues, revenue, and order tracking.",
};

export default function AdminDashboardPage() {
  const orders = repository.getOrders();
  const activeOrders = orders.filter((o) => !["completed", "cancelled"].includes(o.status));
  const completedOrders = orders.filter((o) => o.status === "completed");
  const pendingPayments = orders.filter((o) => o.payment_status === "awaiting_verification" || o.payment_status === "pending");
  const revisionOrders = orders.filter((o) => o.revision_count > 0);

  const totalRevenue = orders
    .filter((o) => o.payment_status === "paid")
    .reduce((sum, o) => sum + (o.final_price || 0), 0);

  const educationOrders = orders.filter((o) => o.category === "education");
  const businessOrders = orders.filter((o) => o.category === "business");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Overview & Operations
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Production & Business Metrics
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/orders"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-500 transition-colors"
          >
            <span>View All Orders Queue</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Total Orders</span>
            <ShoppingCart className="h-4 w-4 text-blue-400" />
          </div>
          <div className="mt-2 text-3xl font-black text-white">
            {orders.length}
          </div>
          <span className="text-[11px] text-blue-400 font-medium">Platform Total</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Active Production</span>
            <Clock className="h-4 w-4 text-amber-400" />
          </div>
          <div className="mt-2 text-3xl font-black text-white">
            {activeOrders.length}
          </div>
          <span className="text-[11px] text-amber-400 font-medium">In Research & Design</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Verified Revenue</span>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="mt-2 text-3xl font-black text-white">
            ৳{totalRevenue.toLocaleString()}
          </div>
          <span className="text-[11px] text-emerald-400 font-medium">Paid Orders</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-sm">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Active Revisions</span>
            <RotateCcw className="h-4 w-4 text-purple-400" />
          </div>
          <div className="mt-2 text-3xl font-black text-white">
            {revisionOrders.length}
          </div>
          <span className="text-[11px] text-purple-400 font-medium">Client Adjustments</span>
        </div>
      </div>

      {/* Category Breakdown & Action Queues */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Recent Orders Queue */}
        <div className="lg:col-span-8 rounded-3xl border border-slate-800 bg-slate-950 p-6">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
            <h2 className="text-base font-bold text-white">
              Recent Presentation Orders
            </h2>
            <Link
              href="/admin/orders"
              className="text-xs text-blue-400 font-bold hover:underline"
            >
              See All →
            </Link>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 5).map((o) => (
              <div
                key={o.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 gap-3 hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                      {o.order_number}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-300 font-bold capitalize">
                      {o.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-white mt-1">
                    {o.topic_name}
                  </h4>
                  <div className="text-xs text-slate-400">
                    Client: {o.customer_name} ({o.customer_phone}) • {o.slide_count} slides
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold capitalize ${
                      o.status === "completed"
                        ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : o.status === "in_production"
                        ? "bg-blue-950 text-blue-400 border border-blue-800"
                        : "bg-amber-950 text-amber-400 border border-amber-800"
                    }`}
                  >
                    {o.status.replace(/_/g, " ")}
                  </span>
                  <Link
                    href={`/admin/orders/${o.id}`}
                    className="rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-200 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Category Distribution */}
        <div className="lg:col-span-4 rounded-3xl border border-slate-800 bg-slate-950 p-6 space-y-4">
          <h2 className="text-base font-bold text-white pb-3 border-b border-slate-800">
            Category Share
          </h2>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-blue-400" />
                  Education (K-12 & University)
                </span>
                <span>{educationOrders.length} decks</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${(educationOrders.length / (orders.length || 1)) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="h-4 w-4 text-indigo-400" />
                  Business & Startups
                </span>
                <span>{businessOrders.length} decks</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-indigo-500"
                  style={{ width: `${(businessOrders.length / (orders.length || 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Staff Slide Workload
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span>Senior Science Lead</span>
                <span className="text-emerald-400 font-bold">2 active</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span>CS Academic Lead</span>
                <span className="text-blue-400 font-bold">1 active</span>
              </div>
              <div className="flex justify-between p-2 rounded-lg bg-slate-900 border border-slate-800">
                <span>Islamic Studies Editor</span>
                <span className="text-teal-400 font-bold">1 active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
